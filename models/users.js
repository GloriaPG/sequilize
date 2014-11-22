/*users.js*/
"use strict"

module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define('users', {
		  id: 			{ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
		, name: 		{ type: DataTypes.STRING, allowNull: false }
		, mail: 		{ type: DataTypes.STRING, allowNull: false }
		, is_active: 	{ type: DataTypes.BOOLEAN, defaultValue: 1 }
		, created_at: 	{ type: DataTypes.DATE, defaultValue: DataTypes.NOW }
	}, {
		instanceMethods: {
			retrieveAll: function(onSuccess, onError) {
				User.findAll({}, {raw: true}).success(onSuccess).error(onError);
			},
			retrieveById: function(user_id, onSuccess, onError) {
				User.find({where: {id: user_id}}, {raw: true}).success(onSuccess).error(onError);
			},
			add: function(onSuccess, onError) {
			  var name 	= this.name
				, mail  = this.mail
				, is_active = this.is_active
				, created_at= this.created_at;

				User.build({ name: name, mail: mail, is_active: is_active, created_at: created_at })
				.save().success(onSuccess).error(onError);
			},
			updateById: function(user_id, onSuccess, onError) {
			  var name = this.name
				, mail = this.mail
				, is_active = this.is_active
				, created_at = this.created_at;

				User.update({ name: name, mail: mail, is_active: is_active, created_at: created_at },{where: {id: user_id} }).success(onSuccess).error(onError);
			},
			removeById: function(user_id, onSuccess, onError) {
				User.destroy({where: {id: user_id}}).success(onSuccess).error(onError);
			}
		}
	});

	return User;
};