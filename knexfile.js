module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://twjsccpnlzixrg:Qk3K4DnuUaizIx0txu3JJ8FDRU@ec2-54-243-125-46.compute-1.amazonaws.com:5432/d5290pcgnuh66f?ssl=true',
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
