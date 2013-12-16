// sails generates routes automatically when associated with a controller.
// those not associated with a controller appear here.

module.exports.routes = {
  '/': {
    view: 'static/index'
  },
  'dynamic/about': {
    view: 'dynamic/about'
  },
  'dynamic/contact': {
    view: 'dynamic/contact'
  }
};