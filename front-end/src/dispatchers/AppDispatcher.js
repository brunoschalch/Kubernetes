var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function(action) {
  console.log("handle view action called on dispatcher");
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

AppDispatcher.handleServerAction = function(action) {
  console.log("handle server action called on dispatcher");
  this.dispatch({
    source: 'SERVER_ACTION',
    action: action
  });
}

module.exports = AppDispatcher;
