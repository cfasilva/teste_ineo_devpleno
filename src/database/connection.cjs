const path = require('path')

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
    flags: ['OPEN_URI', 'OPEN_SHAREDCACHE'],
  },
  useNullAsDefault: true,
});

module.exports = knex;