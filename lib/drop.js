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

  console.warn(`Waiting 5 seconds in case you didn't mean to drop the
    database... Hit CTRL + C to abort!`)

  var count = 0
  var intervalId = setInterval(() => console.log(`${++count}...`), 1000)

  setTimeout(() => {
    clearInterval(intervalId)
    dropTables(tables)
  }, 6000)
})()
