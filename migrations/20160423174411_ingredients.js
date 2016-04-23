exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('ingredients', function (table) {
      table.increments('id').primary();
      table.decimal('amount');
      table.integer('unit_id').unsigned().references('id').inTable('units');
      table.integer('food_id').unsigned().references('id').inTable('foods');
      table.boolean('optional').defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable();
      table.timestamp('updated_at').defaultTo(knex.raw('now()')).notNullable();
      table.timestamp('deleted_at').nullable();
    });
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('ingredients');
  ]);
};
