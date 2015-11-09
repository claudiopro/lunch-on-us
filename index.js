const lunchonus = require('./lib/lunchonus');

lunchonus(process.argv[2]).pipe(process.stdout)
