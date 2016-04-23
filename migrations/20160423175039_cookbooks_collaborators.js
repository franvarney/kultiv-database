exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('cookbooks_collaborators', function (table) {
      table.increments('id').primary();
      table.integer('cookbook_id').unsigned().references('id').inTable('cookbooks');
      table.integer('collaborator_id').unsigned().references('id').inTable('users');
      table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable();
      table.timestamp('updated_at').defaultTo(knex.raw('now()')).notNullable();
      table.timestamp('deleted_at').nullable();
    });
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('cookbooks_collaborators');
  ]);
};
