const TABLE_NAME = 'cookbooks_collaborators'

exports.seed = function (knex, Promise) {
  return Promise.join(
    knex(TABLE_NAME).del(),

    knex(TABLE_NAME).insert({ cookbook_id: 1, collaborator_id: 2 }),
    knex(TABLE_NAME).insert({ cookbook_id: 2, collaborator_id: 3 }),
    knex(TABLE_NAME).insert({ cookbook_id: 1, collaborator_id: 1 })
  )
}
