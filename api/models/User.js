// user model
module.exports = {

  // match user model against schema
  schema : true,

  attributes: {
	// username is a string, must be unique
	// and is always required
	username : {
		type: 'string',
		required : true,
		unique : true
	},
	// email is a string, type email, required and unique
  	email : {
		type : 'string',
		email : true, 
		required : true,
		unique : true
	},
	// password is a string and unique
	password : {
		type: 'string',
		required : true
	},
	// admin is set to false by default
	// admin status is added directly at mongolab
	admin : {
		type: 'boolean',
		defaultTo : false
	}
  }

};
