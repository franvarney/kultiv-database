exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user_auth_keys', function (table) {
      table.increments('id').primary()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.uuid('hawk_id').notNullable()
      table.uuid('hawk_key').notNullable()
      table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_auth_keys')
  ])
}
