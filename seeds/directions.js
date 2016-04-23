const TABLE_NAME = 'directions';

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex(TABLE_NAME).del(),

    knex(TABLE_NAME).insert({
      direction: 'Some directions go here.'
    }),
    knex(TABLE_NAME).insert({
      direction: 'More directions...blah blah blah.'
    }),
    knex(TABLE_NAME).insert({
      direction: 'There really needs to be more directions here than just one line.'
    }),
    knex(TABLE_NAME).insert({
      direction: 'Some directions go here.'
    }),
    knex(TABLE_NAME).insert({
      direction: 'More directions...blah blah blah.'
    }),
    knex(TABLE_NAME).insert({
      direction: 'There really needs to be more directions here than just one line.'
    })
  );
};
