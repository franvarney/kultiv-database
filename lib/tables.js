const Fs = require('fs')
const Path = require('path')

const DATABASE = process.env.NODE_ENV || 'main'

module.exports = function (willDrop=false) {
  var path = Path.resolve(__dirname, '..', DATABASE, './migrations')
  var files = Fs.readdirSync(path)

  files = files.map((file) => {
    return file.slice(file.indexOf('_') + 1, file.indexOf('.'))
  })

  if (willDrop) files = files.concat(`${DATABASE}_knex_migrations`, `${DATABASE}_knex_migrations_lock`)
  return files.join(',')
}
