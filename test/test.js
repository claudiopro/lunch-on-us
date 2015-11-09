var lunchonus = require('../lib/lunchonus');

describe('the lunchonus util', function() {
  it('is a function', function() {
    expect(lunchonus).toEqual(jasmine.any(Function));
  })

  it('returns customers within 100km of Dublin', function(done) {
    var customers = [];
    lunchonus('./list1.txt')
      .on('data', function(data){
        customers.push(JSON.parse(data));
      })
      .on('end', function() {
        expect(customers).toContain({"latitude": "52.986375", "user_id": 12, "name": "Christina McArdle", "longitude": "-6.043701"});
        expect(customers).toContain({"latitude": "53.2451022", "user_id": 4, "name": "Ian Kehoe", "longitude": "-6.238335"});
        expect(customers).toContain({"latitude": "53.1229599", "user_id": 6, "name": "Theresa Enright", "longitude": "-6.2705202"});

        expect(customers).not.toContain({"latitude": "51.92893", "user_id": 1, "name": "Alice Cahill", "longitude": "-10.27699"});
        expect(customers).not.toContain({"latitude": "51.8856167", "user_id": 2, "name": "Ian McArdle", "longitude": "-10.4240951"});
        expect(customers).not.toContain({"latitude": "52.3191841", "user_id": 3, "name": "Jack Enright", "longitude": "-8.5072391"});

        done();
      })
  })
});
