'use strict';

const lunchonus = require('./lib/lunchonus'),
       filename = process.argv[2];

var customers = [];

if (!filename) {
  usage();
  process.exit();
}

function usage() {
  console.log('Usage: node index.js customers.txt');
}

lunchonus(filename)
  .on('data', function (data) {
    // Append to the list of customers
    customers.push(JSON.parse(data));
  })
  .on('end', function () {
    // Sort by user_id ascending
    customers.sort(function(a, b) {
      return a.user_id < b.user_id ? -1 : 1;
    });
    // Write to console
    customers.map(function(customer) {
      console.log('Name:', customer.name, ', user id:', customer.user_id);
    });
  });
