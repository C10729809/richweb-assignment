/**
 * ChatController
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
	'chatroom' : function(req, res){
		//subscribe this socket (user) to revcieve updates to the chat model
        	Chat.subscribe(req.socket);
		res.view();
	},
    
  	create : function(req, res, next){
		//send the new message to mongo
		Chat.create(req.params.all(), function messageCreated(err, chat){
			if(err){
				console.log(err);
			}
			//send the new message to all clients
			Chat.publishCreate({id: chat.id, username: req.session.User.username, message: chat.message});
			return true;
		});	
	}
};
