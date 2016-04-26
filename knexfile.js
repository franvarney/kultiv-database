module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://ydfgtecgtlffbr:LAxMWV9GpTH4yQPxndggmSxyoY@ec2-54-225-197-143.compute-1.amazonaws.com:5432/d8bt95ojetv6hu?ssl=true',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  staging: {
    client: 'postgresql',
    connection: 'postgres://user:pass@port:5432/databaseName?ssl=true',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  production: {
    client: 'postgresql',
    connection: 'postgres://user:pass@port:5432/databaseName?ssl=true',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
}
