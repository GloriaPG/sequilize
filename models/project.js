/*projects.js*/

"use strict"

module.exports = function (sequelize, DataTypes) {
	var Project = sequelize.define('project', {
		id: 			{ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
		, created_at: 	{ type: DataTypes.DATE, defaultValue: DataTypes.NOW }
		, project: 		{ type: DataTypes.STRING, allowNull: false }
		, start_date: 	{ type: DataTypes.DATE }
		, end_date: 	{ type: DataTypes.DATE }
		, status_id: 	{ type: DataTypes.INTEGER, allowNull: false }
		, key: 			{ type: DataTypes.STRING, allowNull: false }
		, is_template: 	{ type: DataTypes.BOOLEAN }
		, conclusion_requirements: { type: DataTypes.STRING }
		, invoiced_by: 		 { type: DataTypes.INTEGER, allowNull: false }
		, default_ticket: 	 { type: DataTypes.STRING }
		, has_been_inactive: { type: DataTypes.BOOLEAN }
		, description: 		 { type: DataTypes.STRING }
	}, {
		instanceMethods: {
			find: function(onSuccess, onError) {
				Project.findAll(
					{
						order: 'project ASC'
					}, {raw: true}).success(onSuccess).error(onError);
			},
			findById: function(projectId, onSuccess, onError) {
				Project.find({where: {id: projectId}}, {raw: true}).success(onSuccess).error(onError);
			},
			create: function(onSuccess, onError) {
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
				
				var colletion = { 
					project: project
					, start_date: start_date
					, end_date: end_date 
					, status_id: status_id
					, key: key
					, is_template: is_template
					, conclusion_requirements: conclusion_requirements
					, invoiced_by: invoiced_by 
					, default_ticket: default_ticket
					, has_been_inactive: has_been_inactive
					, description: description
				};

				Project.build(colletion).save().success(onSuccess).error(onError);
			},
			updateById: function(projectId, onSuccess, onError) {
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

				var colletion = {
					project: project
					, start_date: start_date
					, end_date: end_date
					, status_id: status_id
					, key: key
					, is_template: is_template
					, conclusion_requirements: conclusion_requirements
					, invoiced_by: invoiced_by 
					, default_ticket: default_ticket
					, has_been_inactive: has_been_inactive
					, description: description
				};

				Project.update(colletion,{where: {id: projectId} }).success(onSuccess).error(onError);
			},
			removeById: function(projectId, onSuccess, onError) {
				Project.destroy({where: {id: projectId}}).success(onSuccess).error(onError);
			}
		}
	});

	return Project;
}