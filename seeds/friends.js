const TABLE_NAME = 'friends';

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex(TABLE_NAME).del(),

    knex(TABLE_NAME).insert({
      initiator_id: 1,
      recipient_id: 2,
      status: 'pending'
    }),
    knex(TABLE_NAME).insert({
      initiator_id: 2,
      recipient_id: 3,
      status: 'accepted'
    }),
    knex(TABLE_NAME).insert({
      initiator_id: 3,
      recipient_id: 1,
      status: 'rejected'
    })
  );
};
