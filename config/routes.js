// sails generates routes automatically when associated with a controller.
// those not associated with a controller appear here.

module.exports.routes = {
  '/': {
    view: 'static/index'
  },
  '/chat/chatroom': {
    controller: 'ChatController',
    action: 'chatroom'
  },
  '/static/about': {
    view: 'static/about'
  }
};
