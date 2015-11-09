const EARTH_RADIUS = 6371; // in km

function deg2rad(deg) {
  return deg * Math.PI / 180;
}

function rad2deg(rad) {
  return rad * 180 / Math.PI;
}

module.exports.deg2rad = deg2rad;

module.exports.rad2deg = rad2deg;

module.exports.distance = function(a, b) {
  var delta_lambda = Math.abs(deg2rad(a.lon) - deg2rad(b.lon)),
    delta_sigma = Math.acos(
      Math.sin(deg2rad(a.lat)) * Math.sin(deg2rad(b.lat)) +
      Math.cos(deg2rad(a.lat)) * Math.cos(deg2rad(b.lat)) * Math.cos(delta_lambda)
    );
  console.log('debug');
  console.log(delta_lambda);
  console.log(delta_sigma);
  console.log(Math.sin(deg2rad(a.lat)) * Math.sin(deg2rad(b.lat)))
  console.log(Math.cos(deg2rad(a.lat)) * Math.cos(deg2rad(b.lat)))
  return EARTH_RADIUS * delta_sigma;
}
