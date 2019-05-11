var TequilaActionsServer = require('../actions/TequilaActionsServer');
var request = require('superagent');

module.exports = {
  get: function(usuario) {
    request.get("http://localhost:3006/" + usuario)
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);
        TequilaActionsServer.receiveUsuario(response.body);
      });
  }
};
