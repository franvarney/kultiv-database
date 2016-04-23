const TABLE_NAME = 'ingredients';

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex(TABLE_NAME).del(),

    knex(TABLE_NAME).insert({
      amount: 1,
      unit_id: 3,
      food_id: 6,
      optional: true
    }),
    knex(TABLE_NAME).insert({
      amount: 4.6,
      unit_id: 2,
      food_id: 3,
      optional: false
    }),
    knex(TABLE_NAME).insert({
      amount: 2,
      unit_id: 1,
      food_id: 3,
      optional: false
    }),
    knex(TABLE_NAME).insert({
      amount: 6.2,
      unit_id: 2,
      food_id: 6,
      optional: true
    }),
    knex(TABLE_NAME).insert({
      amount: 1.5,
      unit_id: 1,
      food_id: 1,
      optional: false
    })
  );
};
