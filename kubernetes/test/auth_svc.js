var DEVMODE = require('./debugging');
var expect = require('chai').expect;
var request = require('request');

describe('#auth service', function() {

  context('DEVMODE is on', function() {
    it('should be true', function() {
      expect(DEVMODE).to.equal(true)
    })
  })

  context('Server is responding', function() {
  it('Auth a user, should fail', function(done) {
    request('http://localhost:8086/api/' , function(error, response, body) {
          expect(response.statusCode).to.equal(401);
          done();
      });
});


  })

})
