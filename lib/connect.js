const Pg = require('pg')

const KnexFile = require('../knexfile')

module.exports = function () {
  var client = new Pg.Client(KnexFile[process.env.NODE_ENV].connection)
  client.connect((err) => {
    if (err) return console.log(err)
  })

  return client
}
