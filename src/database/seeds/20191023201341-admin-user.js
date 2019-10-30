const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Administrator',
          email: 'admin@gympoint.com',
          password_hash: bcrypt.hashSync('123456', 8),
          idade: 38,
          peso: 76,
          altura: 1.75,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
