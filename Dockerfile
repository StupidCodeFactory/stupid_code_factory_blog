# https://www.cb-net.co.uk/linux/using-lets-encrypt-with-an-nginx-docker-container-plus-bye-bye-startssl/
FROM ruby:2.4.2
ENV APP_HOME /usr/src/app/

RUN mkdir $APP_HOME

RUN apt-get update -y && apt-get install -y \
    libpq-dev \
    postgresql-client

ADD ./Gemfile* $APP_HOME

WORKDIR $APP_HOME

RUN bundle --jobs 4 --deployment --without development test

ADD . $APP_HOME

RUN rm -rf public

EXPOSE 3000

CMD ["bundle", "exec"]
