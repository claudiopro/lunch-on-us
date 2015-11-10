'use strict';

const combine = require('stream-combiner'),
           fs = require('fs'),
        split = require('split'),
       filter = require('through2-filter'),
//   distance = require('geo-distance-safe'),
    distance2 = require('./great-circle-distance');

const DUBLIN = {
  lat: 53.3381985,
  lon: -6.2592576
};

const HUNDRED_KM = 100; //distance('100 km');

/**
 * Returns a combined stream that emits only JSON lines that fall within 100km
 * within Dublin town
 *
 * @param {String} filename The name of the file containing the JSON lines
 * @returns {Stream} a combined stream that contains only JSON lines within 100km
 */
module.exports = function lunchonus(filename) {

  return combine(
    fs.createReadStream(filename),
    // Read newline-separated json,
    split(),
    // Filter by distance
    filter(function(buf) {
      if (!buf || buf.toString() === '') {
        return false;
      }
      // Parse JSON line
      var customer = JSON.parse(buf);
      // Return true if distance from Dublin < 100km
      return (distance2.between({//distance.between({
        lat: +customer.latitude,
        lon: +customer.longitude
      }, DUBLIN) < HUNDRED_KM);
    })
  );
};
