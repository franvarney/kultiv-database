const TABLE_NAME = 'recipes_directions';

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex(TABLE_NAME).del(),

    knex(TABLE_NAME).insert({ recipe_id: 1, ingredient_id: 1 }),
    knex(TABLE_NAME).insert({ recipe_id: 1, ingredient_id: 2 }),
    knex(TABLE_NAME).insert({ recipe_id: 1, ingredient_id: 3 }),
    knex(TABLE_NAME).insert({ recipe_id: 2, ingredient_id: 2 }),
    knex(TABLE_NAME).insert({ recipe_id: 3, ingredient_id: 3 })
  );
};
