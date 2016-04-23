exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('units', function (table) {
      table.increments().primary();
      table.string('name', 50).notNullable().index().unique();
    });
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('units');
  ]);
};
