/**
 * UserController
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

// controller for users

module.exports = {
	// view user/new
	'new' : function(req, res){
		res.view()
	},
	
	// create user	
	create : function(req, res, next){
		User.create(req.params.all(), function userCreated(err, user){
			if(err){
				console.log(err);
				return res.redirect("/user/new");
			}
			res.redirect("/user/show/"+user.id);
		});	
	},
	
	// show all users
	show: function (req, res, next){
		console.log(new Date());
		console.log(req.session.authenticated);
		User.findOne(req.param('id'), function found(err, user){
			if(err) {
				console.log(err);
			}
			if(!user){
				return res.redirect("/static/");
			}
			res.view({
				user: user
			});		
		});
	},
	
	// call the view for a user
	edit: function (req, res, next){
		User.findOne(req.param('id'), function found(err, user){
			if(err) {
				console.log(err);
			}
			if(!user){
				return res.redirect("/");
			}
			res.view({
				user: user
			});		
		});
	},

	// update users details
	update: function(req, res, next){
		User.update(req.param('id'), req.params.all(), function userUpdate(err){
			if(err){
				return res.redirect("/user/edit/" + req.param('id'));
			}
			res.redirect("user/show/" + req.param('id'));
		});
	}
};
