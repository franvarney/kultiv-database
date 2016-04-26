const TABLE_NAME = 'foods'

exports.seed = function (knex, Promise) {
  return Promise.join(
    knex(TABLE_NAME).del(),

    knex(TABLE_NAME).insert({ name: 'apples' }),
    knex(TABLE_NAME).insert({ name: 'mandarins' }),
    knex(TABLE_NAME).insert({ name: 'chicken breasts' }),
    knex(TABLE_NAME).insert({ name: 'spaghetti' }),
    knex(TABLE_NAME).insert({ name: 'ground beef' }),
    knex(TABLE_NAME).insert({ name: 'sugar' }),
    knex(TABLE_NAME).insert({ name: 'flour' }),
    knex(TABLE_NAME).insert({ name: 'sharp cheddar cheese' })
  )
}
