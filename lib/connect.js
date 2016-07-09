const Pg = require('pg')

const KnexFile = require('../knexfile')

const DATABASE = process.env.NODE_ENV || 'main'

module.exports = function () {
  var client = new Pg.Client(KnexFile[DATABASE].connection)

  client.connect((err) => {
    if (err) return console.log(err)
  })

  return client
}
