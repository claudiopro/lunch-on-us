[![Build Status](https://travis-ci.org/claudiopro/lunch-on-us.svg?branch=master)](https://travis-ci.org/claudiopro/lunch-on-us)

# lunch-on-us

Coding exercise to read and filter a list of customers with coords to matching proximity criteria. Uses [Great-circle distance](https://en.wikipedia.org/wiki/Great-circle_distance) to measure distances.

The program receives a text file whose lines are JSON objects with the following schema as input:

```json
{"latitude": "52.986375", "user_id": 12, "name": "Christina McArdle", "longitude": "-6.043701"}
```

# Instructions

```bash
git clone git@github.com:claudiopro/lunch-on-us.git
cd lunch-on-us
npm install
node index.js customers.txt
```

Run tests:

```bash
npm test
```

# License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) Claudio Procida 2015
