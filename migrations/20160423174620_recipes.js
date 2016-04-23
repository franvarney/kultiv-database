exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('recipes', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('title', 255).index().unique().notNullable();
      table.integer('prep_time').unsigned().notNullable();
      table.integer('cook_time').unsigned().notNullable();
      table.integer('yield_amount').unsigned().notNullable();
      table.integer('yield_unit_id').unsigned().references('id').inTable('units');
      table.string('description').nullable();
      table.enu('source_type', ['manual', 'fork', 'url', 'import']).default('manual');
      table.string('source_value').nullable();
      table.boolean('is_private').defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable();
      table.timestamp('updated_at').defaultTo(knex.raw('now()')).notNullable();
      table.timestamp('deleted_at').nullable();
    });
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('recipes');
  ]);
};
