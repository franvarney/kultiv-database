exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('cookbooks', function (table) {
      table.increments('id').primary()
      table.integer('owner_id').unsigned().references('id').inTable('users')
      table.string('name').notNullable().index()
      table.string('description').nullable()
      table.boolean('is_private').defaultTo(false)
      table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
      table.timestamp('updated_at').defaultTo(knex.raw('now()')).notNullable()
      table.timestamp('deleted_at').nullable()
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('cookbooks')
  ])
}
