const PgConnect = require('./connect')
const GetTableNames = require('./tables')

var client = PgConnect()

module.exports = (function () {
  var tables = GetTableNames()

  var query = `TRUNCATE ${tables} RESTART IDENTITY CASCADE`
  client.query(query, (err, result) => {
    if (err) return console.log(err)

    console.log('Truncated!')
    client.end()
  })
})()
