/*projects.js*/

"use strict"

module.exports = function (sequelize, DataTypes) {
	var Project = sequelize.define('projects', {
		id: 			{ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
		, created_at: 	{ type: DataTypes.DATE, defaultValue: DataTypes.NOW }
		, project: 		{ type: DataTypes.STRING }
		, start_date: 	{ type: DataTypes.DATE }
		, end_date: 	{ type: DataTypes.DATE }
		, status_id: 	{ type: DataTypes.INTEGER }
		, key: 			{ type: DataTypes.STRING }
		, is_template: 	{ type: DataTypes.BOOLEAN }
		, conclusion_requirements: { type: DataTypes.STRING }
		, invoiced_by: 		 { type: DataTypes.INTEGER }
		, default_ticket: 	 { type: DataTypes.STRING }
		, has_been_inactive: { type: DataTypes.BOOLEAN }
		, description: 		 { type: DataTypes.STRING }
	}, {
		instanceMethods: {
			retrieveAll: function(onSuccess, onError) {
				Project.findAll({}, {raw: true}).success(onSuccess).error(onError);
			},
			retrieveById: function(project_id, onSuccess, onError) {
				Project.find({where: {id: project_id}}, {raw: true}).success(onSuccess).error(onError);
			},
			add: function(onSuccess, onError) {
				var	project = this.project
				, start_date = this.start_date
				, end_date = this.end_date
				, status_id = this.status_id
				, key = this.key
				, is_template = this.is_template
				, conclusion_requirements = this.conclusion_requirements
				, invoiced_by = this.invoiced_by
				, default_ticket = this.default_ticket
				, has_been_inactive = this.has_been_inactive
				, description = this.description;
				

				Project.build({ project: project, start_date: start_date, end_date: end_date, status_id: status_id, key: key, is_template: is_template, conclusion_requirements: conclusion_requirements, invoiced_by: invoiced_by, default_ticket: default_ticket, has_been_inactive: has_been_inactive, description: description })
				.save().success(onSuccess).error(onError);
			},
			updateById: function(project_id, onSuccess, onError) {
				var project = this.project
				, start_date = this.start_date
				, end_date = this.end_date
				, status_id = this.status_id
				, key = this.key
				, is_template = this.is_template
				, conclusion_requirements = this.conclusion_requirements
				, invoiced_by = this.invoiced_by
				, default_ticket = this.default_ticket
				, has_been_inactive = this.has_been_inactive
				, description = this.description;

				Project.update({ project: project, start_date: start_date, end_date: end_date, status_id: status_id, key: key, is_template: is_template, conclusion_requirements: conclusion_requirements, invoiced_by: invoiced_by, default_ticket: default_ticket, has_been_inactive: has_been_inactive, description: description },{where: {id: project_id} }).success(onSuccess).error(onError);
			},
			removeById: function(project_id, onSuccess, onError) {
				Project.destroy({where: {id: project_id}}).success(onSuccess).error(onError);
			}
		}
	});

	return Project;
}