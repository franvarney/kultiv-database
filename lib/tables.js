const Fs = require('fs')
const Path = require('path')

module.exports = function (willDrop=false) {
  var path = Path.join(__dirname, '../migrations')
  var files = Fs.readdirSync(path)

  files = files.map((file) => {
    return file.slice(file.indexOf('_') + 1, file.indexOf('.'))
  })

  if (willDrop) files = files.concat('knex_migrations', 'knex_migrations_lock')
  return files.join(',')
}
