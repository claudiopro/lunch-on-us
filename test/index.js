const test = require('tape'),
  lunchonus = require('../lib/lunchonus');

test('lunchonus is a function', function(test) {
  test.ok(typeof lunchonus === 'function', 'lunchonus is a function');
  test.end();
});

test('lunchonus returns customers within 100km', function(test) {
  var customers = [];

  lunchonus(__dirname + '/list1.txt')
    .on('data', function(data){
      customers.push(JSON.parse(data));
    })
    .on('end', function() {
      var valid = [4, 6, 12], invalid = [1, 2, 3];

      test.equal(customers.length, 3, 'Customers closer than 100km are 3');

      test.ok(customers.filter(function(customer) {
        return valid.indexOf(customer.user_id) === -1;
      }), 'Customers closer than 100km are returned');

      test.ok(customers.filter(function(customer) {
        return invalid.indexOf(customer.user_id) !== -1;
      }), 'Customers farther than 100km are not returned');

      test.end();
    })

});
