var TequilaActionsServer = require('../actions/TequilaActionsServer');
var request = require('superagent');

module.exports = {
  get: function(fabricante) {
    request.get("http://localhost:3005/results/" + fabricante)
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);
        TequilaActionsServer.receiveFabricante(response.body);
      });
  }
};
