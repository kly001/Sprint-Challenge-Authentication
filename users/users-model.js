const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  getUsers,
};

function find() {
  return db('users').select('id', 'username', 'department');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function getUsers() {
return db('users')
}