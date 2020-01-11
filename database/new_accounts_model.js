const knex = require('knex');

const config = require('../knexfile');

const db = knex(config.development);


function find() {
  return db('new_accounts');
}

function findByAccount(accountNumber) {
   return db('new_accounts').where({ accountNumber });
}

function add(account) {
  return db('new_accounts').insert(account);
}

function update(accountNumber, changes) {
  return db('new_accounts').where({ accountNumber }).update(changes);
}

module.exports = {
  find,
  findByAccount,
  add,
  update,
};
