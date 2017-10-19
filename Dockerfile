# https://www.cb-net.co.uk/linux/using-lets-encrypt-with-an-nginx-docker-container-plus-bye-bye-startssl/
FROM ruby:2.4.2
ENV APP_HOME /usr/src/app/

RUN mkdir $APP_HOME

RUN apt-get update -y && apt-get install -y \
    libpq-dev \
    postgresql-client

ADD ./Gemfile* $APP_HOME

RUN gem update --system

WORKDIR $APP_HOME

RUN bundle --jobs 4 --deployment --without development test

ADD . $APP_HOME

EXPOSE 3000
VOLUME $APP_HOME
CMD ["bundle", "exec"]
