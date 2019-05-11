var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/TequilaConstants');
var ObjectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var _store = {
  list: [],
  editing: false
};

var TequilaStore = ObjectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList: function() {
    return _store;
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  switch(action.actionType) {
    case AppConstants.GET_TEQUILA:
      _store.editing = true;
      TequilaStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.GET_TEQUILA_RESPONSE:
      var response = payload.action.response;
      _store.list.push(response);
      TequilaStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

module.exports = TequilaStore;
