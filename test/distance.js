const test = require('tape'),
  gcd = require('../lib/great-circle-distance');

const DUBLIN = {lat: "53.3381985", lon: "-6.2592576"},
         PT1 = {lat: "52.986375", lon: "-6.043701"},
         PT2 = {lat: "51.92893", lon: "-10.27699"};

test('deg2rad is a function', function(test) {
  test.ok(typeof gcd.deg2rad === 'function', 'deg2rad is a function');
  test.end();
});

test('rad2deg is a function', function(test) {
  test.ok(typeof gcd.rad2deg === 'function', 'rad2deg is a function');
  test.end();
});

test('distance returns 0 for the same point', function(test) {
  test.equal(gcd.between(DUBLIN, DUBLIN), 0, 'The distance between a point and itself is 0');
  test.equal(gcd.between(PT1, PT1), 0, 'The distance between a point and itself is 0');
  // test.equal(gcd.between(PT2, PT2), 0, 'The distance between a point and itself is 0');
  // Rounding error!
  test.ok(Math.abs(gcd.between(PT2, PT2)) < .0001, 'The distance between a point and itself is 0');
  test.end();
});

test('point 1 is within 100 km from Dublin', function(test) {
  test.ok(gcd.between(PT1, DUBLIN) < 100, 'point 1 is within 100 km from Dublin');
  test.end();
});

test('point 2 is beyond 100 km from Dublin', function(test) {
  test.ok(gcd.between(PT2, DUBLIN) > 100, 'point 2 is beyond 100 km from Dublin');
  test.end();
});
