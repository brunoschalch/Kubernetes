var DEVMODE = require('./debugging');
var expect = require('chai').expect;
var request = require('request');

describe('#producer service', function() {

  context('DEVMODE is on', function() {
    it('should be true', function() {
      expect(DEVMODE).to.equal(true)
    })
  })

  context('Server is responding', function() {
    it('Get a producer by id', function(done) {
      request('http://localhost:8083/api/producer/Cazadores' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('Get a tequilas', function(done) {
      request('http://localhost:8083/api/producers' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

  })

})
