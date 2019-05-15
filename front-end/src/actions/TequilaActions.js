var AppDispatcher = require('../dispatchers/AppDispatcher');
var TequilaConstants = require('../constants/TequilaConstants');
var TequilaAPI = require('../utils/TequilaAPI');
var FabricanteAPI = require('../utils/FabricanteAPI');
var UsuarioAPI = require('../utils/UsuarioAPI');
var TequilaGQLAPI = require('../utils/TequilaGQLAPI')

module.exports = {

  getTequila: function(tequila) {
    console.log(tequila + " received");
    AppDispatcher.handleViewAction({
      actionType: TequilaConstants.GET_TEQUILA,
      tequila: tequila,
    });
    TequilaAPI.getGql(tequila);
  },

  getFabricante: function(fabricante) {
    console.log(fabricante + " received");
    AppDispatcher.handleViewAction({
      actionType: TequilaConstants.GET_FABRICANTE,
      fabricante: fabricante,
    });
    FabricanteAPI.getGql(fabricante);
  },

  getUsuario: function(usuario) {
    console.log(usuario + " received");
    AppDispatcher.handleViewAction({
      actionType: TequilaConstants.GET_USUARIO,
      fabricante: usuario,
    });
    UsuarioAPI.getGql(usuario);
  },
};
