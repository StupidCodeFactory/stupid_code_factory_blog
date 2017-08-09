FROM ruby:2.4.1
ENV APP_HOME /usr/src/app/

RUN mkdir $APP_HOME

RUN apt-get update -y && apt-get install -y libpq-dev postgresql-client nodejs

ADD ./Gemfile* $APP_HOME

WORKDIR $APP_HOME
RUN bundle


CMD ["bundle", "exec"]
