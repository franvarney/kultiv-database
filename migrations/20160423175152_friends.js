exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('friends', function (table) {
      table.increments('id').primary();
      table.integer('initiator_id').unsigned().references('id').inTable('users');
      table.integer('recipient_id').unsigned().references('id').inTable('users');
      table.enu('status',['pending','accepted','rejected']);
      table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable();
      table.timestamp('updated_at').defaultTo(knex.raw('now()')).notNullable();
      table.timestamp('deleted_at').nullable();
    });
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('friends');
  ]);
};
