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
      hawk_id: 'b39e1e3d-8187-4087-a89f-e3886b67297a',
      hawk_key: '43a12a1e-309f-4dd2-922f-102ba19b76e7'
    })
  )
}
