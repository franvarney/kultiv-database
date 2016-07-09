exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('directions', function (table) {
      table.increments('id').primary()
      table.text('direction')
      table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
      table.timestamp('updated_at').defaultTo(knex.raw('now()')).notNullable()
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('directions')
  ])
}
