const TABLE_NAME = 'units'

exports.seed = function (knex, Promise) {
  return Promise.join(
    knex(TABLE_NAME).del(),

    knex(TABLE_NAME).insert({ name: 'servings' }),
    knex(TABLE_NAME).insert({ name: 'cups' }),
    knex(TABLE_NAME).insert({ name: 'teaspoons' })
  )
}
