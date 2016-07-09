exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('recipes_directions', function (table) {
      table.increments('id').primary()
      table.integer('recipe_id').unsigned().references('id').inTable('recipes')
      table.integer('direction_id').unsigned().references('id').inTable('directions')
      table.integer('order').unsigned().notNullable()
      table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
      table.timestamp('updated_at').defaultTo(knex.raw('now()')).notNullable()
      table.timestamp('deleted_at').nullable()
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('recipes_directions')
  ])
}
