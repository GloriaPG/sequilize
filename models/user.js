/*users.js*/
"use strict"

module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define('user', {
		  id: 			{ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
		, name: 		{ type: DataTypes.STRING, allowNull: false }
		, mail: 		{ type: DataTypes.STRING, allowNull: false }
		, is_active: 	{ type: DataTypes.BOOLEAN, defaultValue: 1 }
	}, {
		instanceMethods: {
			find: function(onSuccess, onError) {
				User.findAll(
					{
						order: 'name ASC'
					}, {raw: true}).success(onSuccess).error(onError);
			},
			findById: function(userId, onSuccess, onError) {
				User.find({where: {id: userId}}, {raw: true}).success(onSuccess).error(onError);
			},
			create: function(onSuccess, onError) {
			  var name 		= this.name
				, mail 		= this.mail
				, is_active = this.is_active;

				User.build({ name: name, mail: mail, is_active: is_active })
				.save().success(onSuccess).error(onError);
			},
			updateById: function(userId, onSuccess, onError) {
			  var name 		= this.name
				, mail 		= this.mail
				, is_active = this.is_active;

				User.update({ name: name, mail: mail, is_active: is_active },{where: {id: userId} }).success(onSuccess).error(onError);
			},
			removeById: function(userId, onSuccess, onError) {
				User.destroy({where: {id: userId}}).success(onSuccess).error(onError);
			}
		}
	});

	return User;
};