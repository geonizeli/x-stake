FROM ruby:2.7.4

RUN apt update && apt install -y graphviz nodejs npm
RUN npm i -g yarn

WORKDIR /usr/src/app
USER 1000:1000
COPY Gemfile Gemfile.lock /usr/src/app/
RUN bundle install

COPY . /usr/src/app
CMD bundle exec rails s -b 0.0.0.0