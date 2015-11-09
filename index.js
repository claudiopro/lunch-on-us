const fs = require('fs');

const list = JSON.parse(fs.readFileSync(process.argv[2]));

console.log(list);
