#!/bin/bash

set -eox pipefail

DESIRED_COUNT=1
# $(aws ecr get-login --no-include-email --region eu-west-2)
# docker build -t "stupid-code-factory-blog:${CIRCLE_BUILD_NUM}" .
# docker build -t "stupid-code-factory-nginx:${CIRCLE_BUILD_NUM}" -f Dockerfile.nginx .
# docker tag  "stupid-code-factory-blog:${CIRCLE_BUILD_NUM}" "${ECR_ENDPOINT}/stupid-code-factory-blog:${CIRCLE_BUILD_NUM}"
# docker tag  "stupid-code-factory-nginx:${CIRCLE_BUILD_NUM}" "${ECR_ENDPOINT}/stupid-code-factory-nginx:${CIRCLE_BUILD_NUM}"
# docker push "${ECR_ENDPOINT}/stupid-code-factory-blog:${CIRCLE_BUILD_NUM}"
# docker push "${ECR_ENDPOINT}/stupid-code-factory-nginx:${CIRCLE_BUILD_NUM}"

# docker pull "${ECR_ENDPOINT}/stupid-code-factory-blog:${CIRCLE_BUILD_NUM}"
# docker pull "${ECR_ENDPOINT}/stupid-code-factory-nginx:${CIRCLE_BUILD_NUM}"

get_task_definition() {
  service=$1
  aws ecs describe-services --cluster $CLUSTER --services $SERVICE_NAME
}

get_task_definition_arn() {
  get_task_definition $1 | jq -r '.services[0].taskDefinition'
}

task_definition_arn=$(get_task_definition_arn "web")

task_definition_name=${task_definition_arn##*/}
task_definition=$(aws ecs describe-task-definition --task-definition $task_definition_name)
rails_container_definition=$(echo $task_definition | jq --arg name rails '.taskDefinition.containerDefinitions | map(select(.name == $name))[0]')
nginx_container_definition=$(echo $task_definition | jq --arg name nginx '.taskDefinition.containerDefinitions | map(select(.name == $name))[0]')

rails_container_definition=$(echo $rails_container_definition | jq --arg image "${ECR_ENDPOINT}/${CLUSTER}:${CIRCLE_BUILD_NUM}" '.image = $image')
rails_container_definition=$(echo $rails_container_definition | jq --arg image "${ECR_ENDPOINT}/${CLUSTER}:${CIRCLE_BUILD_NUM}" '.memory = 256')
nginx_container_definition=$(echo $nginx_container_definition | jq --arg image "${ECR_ENDPOINT}/stupid-code-factory-nginx:${CIRCLE_BUILD_NUM}" '.image = $image')


current_revision=$(echo $task_definition | jq -r '.taskDefinition.revision')
task_family=$(echo $task_definition | jq -r '.taskDefinition.family')

aws ecs update-service \
    --cluster ${CLUSTER} \
    --service ${SERVICE_NAME} \
    --task-definition ${task_family}:${current_revision} \
    --desired-count 0

cat config/web-task-definition.json | jq --argjson rails "${rails_container_definition}" --argjson nginx "${nginx_container_definition}"  ".containerDefinitions[0]= \$rails | .containerDefinitions[1]= \$nginx" > tmp/deploy.json
task_revision=$(aws ecs register-task-definition  --cli-input-json file://tmp/deploy.json | jq '.taskDefinition.revision')

aws ecs update-service \
    --cluster ${CLUSTER} \
    --service ${SERVICE_NAME} \
    --task-definition ${task_family}:${task_revision} \
    --desired-count 1
