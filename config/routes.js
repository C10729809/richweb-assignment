// sails generates routes automatically when associated with a controller.
// those not associated with a controller appear here.

module.exports.routes = {
  '/': {
    view: 'static/index'
  },
<<<<<<< HEAD
  'dynamic/about': {
=======
  '/dynamic/reviews': {
    view: 'dynamic/reviews'
  },
  '/chat/chatroom': {
    controller: 'ChatController',
    action: 'chatroom'
  },
  '/dynamic/about': {
>>>>>>> ea5ce193baaea1672bb4dd6fe1c5f3f0ad13ed49
    view: 'dynamic/about'
  },
  'dynamic/contact': {
    view: 'dynamic/contact'
  }
};
