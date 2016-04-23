exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('username', 50).index().unique().notNullable();
      table.string('email').index().unique().notNullable();
      table.string('password').notNullable();
      table.string('first_name', 50);
      table.string('last_name', 50);
      table.string('location', 50);
      table.boolean('is_admin').notNullable().defaultTo(false);
      table.uuid('auth_token').index().unique().notNullable();
      table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable();
      table.timestamp('updated_at').defaultTo(knex.raw('now()')).notNullable();
      table.timestamp('deleted_at');
    });
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users');
  ]);
};
