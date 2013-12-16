/**
 * SessionController
 *
 * @module      :: Controller
 * @description        :: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

// contoller for sessioning
module.exports = {
    
	// display login page
	'new' : function(req, res){
		res.view("session/new");
	},
	
	// create a session
	create : function(req, res){
		// check username and password are submitted
		if(!req.param('username') || !req.param('password')){
			console.log(req.param('username'));
			console.log("no user name or password");		
			res.redirect("session/new");
			return;
		}
		
		// find user by username
		User.findOneByUsername(req.param('username'), function found(err, user){
			if(err) {
				console.log(err);
			}
			if(!user){
				res.redirect("session/new");
				return;
			}
			// check password
			if(req.param('password') == user.password){
				// if password is the same authenticate user
				req.session.authenticated = true;
				// set up the session
				req.session.User = user;
				
				// if the user is an administrator bring them to the showing edit page
				if(req.session.User.admin){
					res.redirect('/showing/new');
					return;
				}
				// otherwise bring them to there account page
				res.redirect('/user/show/' + user.id);
			}
		});
	},
	
	// log out and destroy session
	destroy : function (req, res){
		req.session.destroy();
		res.redirect('/');
	}
	
};
