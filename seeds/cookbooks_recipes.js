const TABLE_NAME = 'cookbooks_recipes';

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex(TABLE_NAME).del(),

    knex(TABLE_NAME).insert({ cookbook_id: 1, recipe_id: 1 }),
    knex(TABLE_NAME).insert({ cookbook_id: 2, recipe_id: 2 }),
    knex(TABLE_NAME).insert({ cookbook_id: 3, recipe_id: 1 }),
    knex(TABLE_NAME).insert({ cookbook_id: 3, recipe_id: 3 })
  );
};
