var DEVMODE = require('./debugging');
var expect = require('chai').expect;
var request = require('request');

describe('#tequila service', function() {

  context('DEVMODE is on', function() {
    it('should be true', function() {
      expect(DEVMODE).to.equal(true)
    })
  })

  context('Server is responding', function() {

it('Get a tequila by id', function(done) {
  request('http://localhost:8082/api/tequila/104' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Get a tequilas', function(done) {
  request('http://localhost:8082/api/tequilas' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

  })

})
