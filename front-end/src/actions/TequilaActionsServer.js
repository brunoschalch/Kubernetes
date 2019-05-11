var AppDispatcher = require('../dispatchers/AppDispatcher');
var TequilaConstants = require('../constants/TequilaConstants');

module.exports = {

  receiveTequila: function(response) {
    AppDispatcher.handleServerAction({
      actionType: TequilaConstants.GET_TEQUILA_RESPONSE,
      response: response
    });
  },

  receiveFabricante: function(response) {
    AppDispatcher.handleServerAction({
      actionType: TequilaConstants.GET_FABRICANTE_RESPONSE,
      response: response
    });
  },

  receiveUsuario: function(response) {
    AppDispatcher.handleServerAction({
      actionType: TequilaConstants.GET_USUARIO_RESPONSE,
      response: response
    });
  },
};
