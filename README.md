# kultiv-database

## Install
`npm install`

## Migrations

### Create a migration
`knex migrate:make migration_name`

### Update database
`knex migrate:latest --env production`

or

`NODE_ENV=production knex migrate:latest`

or

`NODE_ENV=production npm run migrate`

### Rollback
`knex migrate:rollback`

## Seeds
Note: Files prefixed with a number are executed before ones without.

### Create a seed
`knex seed:make seed_name`

### Run seeds
`knex seed:run`

or

`npm run seed`

## Truncate Data
`NODE_ENV=production npm run truncate`

## Drop Data
`NODE_ENV=production npm run drop`


