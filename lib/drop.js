const PgConnect = require('./connect')
const GetTableNames = require('./tables')

var client = PgConnect()

function dropTables(tables) {
  var query = `DROP TABLE ${tables} CASCADE`
    client.query(query, (err, result) => {
      if (err) return console.log(err)

      console.log('Dropped!')
      client.end()
    })
}

module.exports = (function () {
  var tables = GetTableNames(true)

  if (process.env.NODE_ENV === 'production') {
    console.warn(`Waiting three seconds in case you didn't mean to drop the
      production database... Hit CTRL + C to abort!`)

    setTimeout(() => dropTables(tables), 3000)
  }

  dropTables(tables)
})()
