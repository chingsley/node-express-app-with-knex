const knex = require('knex');

const config = require('./knexfile');

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

async function execute() {
  // const result = await add({
  //   "accountName": "ISA AYO OBI ",
  //   "accountNumber": "0984654321",
  //   "phoneNumber": "23061234567",
  //   "branchCode": "999170100",
  //   "accountStatus": 1,
  //   "accountType": 1,
  //   "bvn": "09876652321"
  // });
  // console.log(result);

  // const result2 = await update("0984654321", {
  //   "accountName": "Eneja Kingsley",
  // });
  // console.log(result2);

  // const accounts = await find("0984654321");
  // console.log(accounts);

  const account = await findByAccount("0984654321");
  console.log(account);
}

execute();


function range(start, end) {
  return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}

// let seed = [];
// for (i of range(0, 999)) {
//   seed[i] = {
//     "accountName": "ISA AYO OBI ",
//     "accountNumber": `465432${i}`,
//     "phoneNumber": `2306123456${i}`,
//     "branchCode": `99917010${i}`,
//     "accountStatus": 1,
//     "accountType": 1,
//     "bvn": `67665232${i}`
//   }
// }


  // console.log(seed[999]);