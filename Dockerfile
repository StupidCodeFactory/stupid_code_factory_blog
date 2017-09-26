FROM ruby:2.4.2
ENV APP_HOME /usr/src/app/

RUN mkdir $APP_HOME

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -

RUN echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update -y && apt-get install -y \
    libpq-dev \
    postgresql-client \
    nodejs

ADD ./Gemfile* $APP_HOME
ADD ./package.json $APP_HOME
ADD ./yarn.lock $APP_HOME

RUN gem update --system
RUN gem install bundler

WORKDIR $APP_HOME

RUN bundle
RUN npm install -g yarn
RUN yarn install
ADD . $APP_HOME


CMD ["bundle", "exec"]
