const TABLE_NAME = 'users';

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex(TABLE_NAME).del(),

    knex(TABLE_NAME).insert({
        username: 'johndoe',
        email: 'johndoe@gmail.com',
        password: 'secret',
        first_name: 'John',
        last_name: 'Doe',
        location: '11368',
        is_admin: true,
        auth_token: Uuid(),
        deleted_at: new Date().toLocaleString()
    }),
    knex(TABLE_NAME).insert({
        username: 'samdoe',
        email: 'samdoe@gmail.com',
        password: 'secret',
        first_name: 'Sam',
        last_name: 'Doe',
        location: '11368',
        is_admin: true,
        auth_token: Uuid()
    }),
    knex(TABLE_NAME).insert({
        username: 'skyline',
        email: 'skyline@gmail.com',
        password: 'secret',
        first_name: 'Sky',
        last_name: 'Line',
        location: '45224',
        is_admin: false,
        auth_token: Uuid()
    })
  );
};
