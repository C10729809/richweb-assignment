module.exports.policies = {

  // Default policy for all controllers and actions
  // (`true` allows public access) 
  '*': true,
  
  
  // policies for showing
  // new and creating are for admin only
  showing : {
	'new' : "authenticated",
	create : "authenticated",
    "*" :  "authAdmin"
  },
  
  // policies for char
  // user must be logged in to chat
  chat : {
	'*' : "authAdmin"
  }
  
  // anyonw can create a user account  
  user : {
	'new' : true,
	create : true,
	show : "authAdmin", 
	'*' : "authenticated"
  }
};