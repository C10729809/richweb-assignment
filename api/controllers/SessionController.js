/**
 * SessionController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
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

module.exports = {
    
	'new' : function(req, res){
		//var oldDate = new Date();
		//var newDate = new Date(oldDate.getTime() + 6000000);
		//req.session.cookie.expires = newDate;
		//req.session.authenticated = true;
		//console.log(new Date());
		//console.log(req.session);
		res.view("session/new");
	},
	
	create : function(req, res){
	
		if(!req.param('username') || !req.param('password')){
			console.log(req.param('username'));
			console.log("no user name or password");		
			res.redirect("session/new");
			return;
		}
		
		User.findOneByUsername(req.param('username'), function found(err, user){
			if(err) {
				console.log(err);
			}
			if(!user){
				res.redirect("session/new");
				return;
			}
			if(req.param('password') == user.password){
				req.session.authenticated = true;
				req.session.User = user;
				
				res.redirect('/user/show/' + user.id);
				return;
			}
		});
	},
	
	destroy : function (req, res){
		req.session.destroy();
		res.redirect('/');
	}
	
};
