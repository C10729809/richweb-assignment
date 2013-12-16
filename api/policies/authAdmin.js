module.exports = function(req, res, next) {
  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  
  // if user is not authenticted redirect to login screen
  if (!(req.session.authenticated)) {
	res.redirect('session/new');
	return;
  }
  next();
};