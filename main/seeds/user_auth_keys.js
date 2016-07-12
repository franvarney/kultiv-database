const Uuid = require('uuid4')

const TABLE_NAME = 'user_auth_keys'

exports.seed = function (knex, Promise) {
  return Promise.join(
    knex(TABLE_NAME).del(),

    knex(TABLE_NAME).insert({
      user_id: 1,
      hawk_id: Uuid(),
      hawk_key: Uuid()
    }),
    knex(TABLE_NAME).insert({
      user_id: 2,
      hawk_id: Uuid(),
      hawk_key: Uuid()
    }),
    knex(TABLE_NAME).insert({
      user_id: 2,
      hawk_id: Uuid(),
      hawk_key: Uuid()
    }),
    knex(TABLE_NAME).insert({
      user_id: 3,
      hawk_id: Uuid(),
      hawk_key: Uuid()
    })
  )
}
