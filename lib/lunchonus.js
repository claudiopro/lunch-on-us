const combine = require('stream-combiner'),
           fs = require('fs'),
        split = require('split'),
       filter = require('through2-filter'),
     distance = require('geo-distance-safe');

const DUBLIN = {
  lat: 53.3381985,
  lon: -6.2592576
};

const HUNDRED_KM = distance('100 km');

module.exports = function lunchonus(filename) {
  return combine(
    fs.createReadStream(filename),
    // Read newline-separated json,
    split(),
    // Filter by distance
    filter(function(buf) {
      if (!buf || buf === '') {
        return false;
      }
      // Parse JSON line
      var customer = JSON.parse(buf);
      // Return true if distance from Dublin < 100km
      return (distance.between({
        lat: +customer.latitude,
        lon: +customer.longitude
      }, DUBLIN) < HUNDRED_KM);
    })
  );
};
