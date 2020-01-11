function range(start, end) {
  return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}

let seedAccounts = [];
for (i of range(0, 139)) {
  seedAccounts[i] = {
    "accountName": "ISA AYO OBI ",
    "accountNumber": `465432${i}`,
    "phoneNumber": `2306123456${i}`,
    "branchCode": `99917010${i}`,
    "accountStatus": 1,
    "accountType": 1,
    "bvn": `67665232${i}`
  }
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('new_accounts')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('new_accounts').insert(seedAccounts);
    });
};
