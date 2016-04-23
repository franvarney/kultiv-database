# kultiv-database

## Install
`npm Install`

## Create a migration
`knex migrate:make migration_name`

## Update database
`knex migrate:latest --env production`

or

`NODE_ENV=production knex migrate:latest`

## Rollback
`knex migrate:rollback`
