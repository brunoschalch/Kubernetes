var DEVMODE = require('./debugging');
var expect = require('chai').expect;
var request = require('request');

describe('#user service', function() {

  context('DEVMODE is on', function() {
    it('should be true', function() {
      expect(DEVMODE).to.equal(true)
    })
  })

  context('Server is responding', function() {
    it('Get a user by id', function(done) {
      request('http://localhost:8085/api/user/joe' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('Log in', function(done) {
      request('http://localhost:8085/api/user/login/:usernameandpassword' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

  })

})
