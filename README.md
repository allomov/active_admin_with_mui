# README

This is a demo application to show how to reproduce the situation described in [this issue](https://github.com/activeadmin/activeadmin/issues/7906).

## Setup
You need to have Ruby and Node installed. Then run the following commands:
```
bundle install
yarn install
rake db:create
rake db:migrate
rake db:seed
./bin/dev
```
