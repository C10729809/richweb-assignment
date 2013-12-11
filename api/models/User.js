/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema : true,

  attributes: {
	username : {
		type: 'string',
		required : true,
		unique : true
	},
  	email : {
		type : 'string',
		email : 'password', 
		required : true,
		unique : true
	},
	password : {
		type: 'string',
		required : true
	}	
  }

};
