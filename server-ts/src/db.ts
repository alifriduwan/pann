import knex from 'knex'
const knexStringcase = require('knex-stringcase');

const db = knex(knexStringcase({
  client: 'mysql2',
  useNullAsDefault: true,
}));

export default db;
