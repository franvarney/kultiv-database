const TABLE_NAME = 'cookbooks'

exports.seed = function (knex, Promise) {
  return Promise.join(
    knex(TABLE_NAME).del(),

    knex(TABLE_NAME).insert({
      owner_id: 1,
      name: 'Cookbook 11',
      description: 'This is cookbook #1',
      is_private: true
    }),
    knex(TABLE_NAME).insert({
      owner_id: 1,
      name: 'Cookbook 12',
      description: null
    }),
    knex(TABLE_NAME).insert({
      owner_id: 2,
      name: 'Cookbook 21',
      description: 'This is cookbook #21'
    }),
    knex(TABLE_NAME).insert({
      owner_id: 2,
      name: 'Cookbook 22',
      description: 'This is cookbook #22'
    }),
    knex(TABLE_NAME).insert({
      owner_id: 3,
      name: 'Cookbook 31',
      description: 'This is cookbook #31'
    }),
    knex(TABLE_NAME).insert({
      owner_id: 3,
      name: 'Cookbook 32',
      description: 'This is cookbook #32',
      is_private: true
    })
  )
}
