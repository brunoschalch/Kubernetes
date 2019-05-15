var DEVMODE = require('./debugging');
var expect = require('chai').expect;
var request = require('request');

describe('#graphql main service', function() {

  context('DEVMODE is on', function() {
    it('should be true', function() {
      expect(DEVMODE).to.equal(true)
    })
  })

  context('Server is responding', function() {
  it('Get graphql client', function(done) {
    request('http://localhost:8080/graphql' , function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
      });
});

  })

})
