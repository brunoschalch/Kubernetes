var TequilaActionsServer = require('../actions/TequilaActionsServer');
var request = require('superagent');

module.exports = {
  get: function(tequila) {
    request.get("http://localhost:3004/results/" + tequila)
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);
        TequilaActionsServer.receiveTequila(response.body);
      });
  }
};
