exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('recipes_ingredients', function (table) {
      table.increments('id').primary()
      table.integer('recipe_id').unsigned().references('id').inTable('recipes')
      table.integer('ingredient_id').unsigned().references('id').inTable('ingredients')
      table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
      table.timestamp('updated_at').defaultTo(knex.raw('now()')).notNullable()
      table.timestamp('deleted_at').nullable()
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('recipes_ingredients')
  ])
}
