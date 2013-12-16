module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  
  // check if user is admin
  if (req.session.User.admin === "undefined") {
    return res.forbidden("This page is admin only");
  } else if (req.session.User.admin){
    return next();
  } else{
	return res.forbidden("This page is admin only");
  }
  next();
};
