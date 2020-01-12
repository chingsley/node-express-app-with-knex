function range(start, end) {
  return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}

let seedAccounts = [];
for (i of range(0, 999)) {
  seedAccounts[i] = {
    "accountName": "ENEJA KINGSLEY",
    "accountNumber": `100000${i}`,
    "phoneNumber": `12345678${i}`,
    "branchCode": `2000000${i}`,
    "accountStatus": 1,
    "accountType": 1,
    "bvn": `30000000${i}`
  }
}

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('new_accounts')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('new_accounts').insert(seedAccounts);
    });
};
