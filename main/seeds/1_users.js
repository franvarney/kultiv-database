const Bcrypt = require('bcryptjs')

const SALT_WORK_FACTOR = 10
const TABLE_NAME = 'users'

var salt = Bcrypt.genSaltSync(SALT_WORK_FACTOR)

exports.seed = function (knex, Promise) {
  return Promise.join(
    knex(TABLE_NAME).del(),

    knex(TABLE_NAME).insert({
      username: 'johndoe',
      email: 'johndoe@gmail.com',
      password: Bcrypt.hashSync('secret', salt),
      first_name: 'John',
      last_name: 'Doe',
      location: '11368',
      is_admin: true,
      deleted_at: new Date().toLocaleString()
    }),
    knex(TABLE_NAME).insert({
      username: 'samdoe',
      email: 'samdoe@gmail.com',
      password: Bcrypt.hashSync('secret', salt),
      first_name: 'Sam',
      last_name: 'Doe',
      location: '11368',
      is_admin: true,
    }),
    knex(TABLE_NAME).insert({
      username: 'skyline',
      email: 'skyline@gmail.com',
      password: Bcrypt.hashSync('secret', salt),
      first_name: 'Sky',
      last_name: 'Line',
      location: '45224',
      is_admin: false,
    })
  )
}
