const TABLE_NAME = 'recipes'

exports.seed = function (knex, Promise) {
  return Promise.join(
    knex(TABLE_NAME).del(),

    knex(TABLE_NAME).insert({
      user_id: 2,
      title: 'Edgar\'s awesome cookies',
      prep_time: 2200,
      cook_time: 1200,
      yield_amount: 2,
      yield_unit_id: 1,
      description: 'Too darn good',
      source_type: 'manual',
      is_private: true,
      deleted_at: new Date().toLocaleString()
    }),
    knex(TABLE_NAME).insert({
      user_id: 2,
      title: 'Edgar\'s awesome chilli',
      prep_time: 1234,
      cook_time: 2345,
      yield_amount: 3,
      yield_unit_id: 1,
      description: 'just aight',
      source_type: 'fork',
      source_value: 1,
      is_private: false
    }),
    knex(TABLE_NAME).insert({
      user_id: 3,
      title: 'Fran\'s crappy cookies',
      prep_time: 1232,
      cook_time: 4323,
      yield_amount: 1,
      yield_unit_id: 1,
      description: 'pure shit',
      source_type: 'url',
      source_value: 'http://www.google.com/',
      is_private: false
    })
  )
}
