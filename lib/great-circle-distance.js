'use strict';

/**
 * Earth's radius in km
 *
 * @type {Number}
 * @const
 */
const EARTH_RADIUS = 6371; // in km

/**
 * Transforms degrees to radians
 *
 * @param {Number} deg The value in degrees
 * @returns {Number} the equivalent in radians
 */
function deg2rad(deg) {
  return +deg * Math.PI / 180;
}

/**
 * Transforms radians to degrees
 *
 * @param {Number} rad The value in degrees
 * @returns {Number} the equivalent in degrees
 */
function rad2deg(rad) {
  return +rad * 180 / Math.PI;
}

module.exports.deg2rad = deg2rad;

module.exports.rad2deg = rad2deg;

/**
 * Calculates the great circle distance between two points.
 * The two points must have a `lat` and `lon` property
 *
 * @param {Object} a The first point
 * @param {Object} b The second point
 * @returns {Number} a distance in km between the two points
 */
module.exports.between = function(a, b) {
  var delta_lambda = Math.abs(deg2rad(a.lon) - deg2rad(b.lon)),
    delta_sigma = Math.acos(
      Math.sin(deg2rad(a.lat)) * Math.sin(deg2rad(b.lat)) +
      Math.cos(deg2rad(a.lat)) * Math.cos(deg2rad(b.lat)) * Math.cos(delta_lambda)
    );
  return EARTH_RADIUS * delta_sigma;
};
