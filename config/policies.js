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
  
  // anyonw can create a user account  
  user : {
	'new' : true,
	create : true,
	show : "authAdmin", 
	'*' : "authenticated"
  }
};