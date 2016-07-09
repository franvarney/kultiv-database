# kultiv-database
A `knex` CLI tool for the kultiv-api.

## Install
`npm install`

## Migrations
Use `NODE_ENV` to set the database (instead of environment).

### Create a migration
`knex migrate:make migration_name`

### Update database
`knex migrate:latest --env main`

or

`NODE_ENV=main knex migrate:latest`

or

`NODE_ENV=main npm run migrate`

### Rollback
`knex migrate:rollback`

## Seeds
Note: Files prefixed with a number or capital/single letter are executed before
ones without.

### Create a seed
`knex seed:make seed_name`

### Run seeds
`knex seed:run`

or

`npm run seed`

## Truncate Data
`NODE_ENV=main npm run truncate`

## Drop Data
`NODE_ENV=main npm run drop`
