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
