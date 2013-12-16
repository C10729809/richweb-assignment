/**
 * Routes
 *
 *
 * For more information on routes, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.routes = {

  // By default, your root route (aka home page) points to a view
  // located at `views/home/index.ejs`
  // 
  // (This would also work if you had a file at: `/views/home.ejs`)
  '/': {
    view: 'static/index'
  },
  '/dynamic/reviews': {
    view: 'dynamic/reviews'
  },
  '/chat/chatroom': {
    controller: 'ChatController',
    action: 'chatroom'
  },
  '/dynamic/about': {
    view: 'dynamic/about'
  },
  '/dynamic/contact': {
    view: 'dynamic/contact'
  }
};
