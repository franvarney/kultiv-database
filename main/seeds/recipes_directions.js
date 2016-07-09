const TABLE_NAME = 'recipes_directions'

exports.seed = function (knex, Promise) {
  return Promise.join(
    knex(TABLE_NAME).del(),

    knex(TABLE_NAME).insert({ recipe_id: 1, direction_id: 1, order: 1 }),
    knex(TABLE_NAME).insert({ recipe_id: 1, direction_id: 2, order: 2 }),
    knex(TABLE_NAME).insert({ recipe_id: 2, direction_id: 2, order: 1 }),
    knex(TABLE_NAME).insert({ recipe_id: 3, direction_id: 3, order: 1 })
  )
}
