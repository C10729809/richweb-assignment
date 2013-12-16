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
		res.view()
	},
    
  	create : function(req, res, next){
		Chat.create(req.params.all(), function messageCreated(err, chat){
			if(err){
				console.log(err);
				return res.redirect("/chat/chatroom");
			}
			//console.log("message:" chat.message);
			//res.json({message: chat.message});
			//documnet.getElementById('messageList').prepend(chat.message);
			res.redirect("/chat/show/"+chat.message);
		});	
	},
	show: function (req, res, next){
		Chat.find(req.param('message'), function found(err, chats){
			if(err) {
				console.log(err);
			}
			if(!chats){
				return res.redirect("/static/");
			}
			res.view({
				chats: chats
			});		
		});
	}
};
