# kultiv-database

## Install
`npm Install`

## Migrations

### Create a migration
`knex migrate:make migration_name`

### Update database
`knex migrate:latest --env production`

or

`NODE_ENV=production knex migrate:latest`

### Rollback
`knex migrate:rollback`

## Seeds

### Create a seed
`knex seed:make seed_name`

### Run seeds
`knex seed:run`
