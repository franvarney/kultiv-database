const Assert = require('assert')

const POSTGRES_URI = process.env.POSTGRES_URI

Assert.equal(typeof POSTGRES_URI, typeof 'string', `POSTGRES_URI required,
  formatted like: postgres://user:pass@port:5432/databaseName?ssl=true`)

let common = {
  client: 'postgresql',
  pool: {
    min: 2,
    max: 10
  }
}

let main = Object.assign({}, common, {
  migrations: {
    directory: './main/migrations',
    tableName: 'main_knex_migrations'
  },
  seeds: {
    directory: './main/seeds'
  }
})

// can add more database configurations here...

function assignConnection(database, connection) {
  return Object.assign({}, database, { connection })
}

module.exports = {
  'main': assignConnection(main, POSTGRES_URI)
}
