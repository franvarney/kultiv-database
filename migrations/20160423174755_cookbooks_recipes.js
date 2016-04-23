exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('cookbooks_recipes', function (table) {
      table.increments('id').primary();
      table.integer('cookbook_id').unsigned().references('id').inTable('cookbooks');
      table.integer('recipe_id').unsigned().references('id').inTable('recipes');
      table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable();
      table.timestamp('updated_at').defaultTo(knex.raw('now()')).notNullable();
      table.timestamp('deleted_at').nullable();
    });
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('cookbooks_recipes');
  ]);
};
