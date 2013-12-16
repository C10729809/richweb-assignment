// controller for movie showings

module.exports = {

	// form for creating a showing (restricted to admin in policies)
	"new" : function(req, res) {
		res.view();
	},
	
	// create the showing
	create : function(req, res, next){
		Showing.create(req.params.all(), function showingCreated(err, showing){
			if(err){
				console.log(err);
				return res.redirect("/showing/new");
			}
			// if no errors 
			res.redirect("/showing/");
		});	
	},
	
	// display all showings
	index : function (req, res, next) {
		Showing.find(function allShows(err, showings){
			if (err) {
				console.log(err);
				return res.redirect("/");
			}
			// if no errors 
			res.view({
				showings : showings
			});
		});
	},
	
	// watch a particular showing
	watch : function(req,res,next){	
		// get the id of the selected showing
		Showing.findOne(req.param("id"),function found(err, showing){
			if (err) {
				console.log(err);
				return res.redirect("/");
			}

			if(!showing){
				return res.redirect("/showing/");			
			}
			// if no errors 
			res.view({
				showing : showing
			});
		});
	}
}
