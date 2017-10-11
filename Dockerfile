# https://www.cb-net.co.uk/linux/using-lets-encrypt-with-an-nginx-docker-container-plus-bye-bye-startssl/
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

RUN bundle --jobs 4 --deployment --without development test
RUN npm install -g yarn
RUN node --version
RUN yarn install
ADD . $APP_HOME
RUN RAILS_ENV=production SECRET_KEY_BASE=baz GITHUB_APP_ID=foo GITHUB_APP_SECRET=bar DATABASE_URL=baz bin/rails assets:precompile

EXPOSE 3000
VOLUME $APP_HOME
CMD ["bundle", "exec"]
