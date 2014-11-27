/*index.js*/

"use strict";

var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
var config    = require(__dirname + '/../config/config.json')[env];

// initialize database connection
var sequelize = new Sequelize(
	config.database,
	config.user,
	config.password,
	{
		dialect: config.driver,
		logging: console.log,
		define: {
			timestamps: true,
			underscored: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
			freezeTableName: true,
		}
	}
);

// Export model
var models = [
	'project',
	'task',
	'user'
];

models.forEach(function(model){
	module.exports[model] = sequelize.import(__dirname + '/' + model);
});

module.exports.project.hasOne(module.exports.task);
module.exports.user.hasOne(module.exports.task, { foreignKey: 'responsible_id'});
module.exports.user.hasOne(module.exports.task, { foreignKey: 'petitioner_id'});
module.exports.user.hasOne(module.exports.task, { foreignKey: 'creator_id'});
//module.exports.status.hasOne(module.exports.task);
//module.exports.priority.hasOne(module.exports.task);
//module.exports.group.hasOne(module.exports.task);

module.exports.sequelize = sequelize;
