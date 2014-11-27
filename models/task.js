/*tasks model*/

"user strict"

module.exports = function (sequelize, DataTypes) { 
	var _ = require('underscore');

	var Task = sequelize.define('task', {
		id: 				{ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
		, project_id: 		{ type: DataTypes.INTEGER }
		, status_id: 		{ type: DataTypes.INTEGER }
		, responsible_id: 	{ type: DataTypes.INTEGER }
		, petitioner_id: 	{ type: DataTypes.INTEGER }
		, priority_id: 		{ type: DataTypes.INTEGER }
		, creator_id: 		{ type: DataTypes.INTEGER }
		, group_id: 		{ type: DataTypes.INTEGER }
		, petition_id: 		{ type: DataTypes.INTEGER }
		, task_source_id: 	{ type: DataTypes.INTEGER }
		, concept: 			{ type: DataTypes.STRING, allowNull: false }
		, description: 		{ type: DataTypes.STRING }
		, creation: 		{ type: DataTypes.DATE }
		, start_date: 		{ type: DataTypes.DATE }
		, delivery_date: 	{ type: DataTypes.DATE }
		, estimated_time: 	{ type: DataTypes.INTEGER, defaultValue: 0}
		, chargeable: 		{ type: DataTypes.BOOLEAN }
		, visible: 			{ type: DataTypes.BOOLEAN }
		, inside_description: 	{ type: DataTypes.STRING }
		, payable: 			{ type: DataTypes.BOOLEAN }
		, locked: 			{ type: DataTypes.BOOLEAN }
		, gantt_start_date: { type: DataTypes.DATE }
		, gantt_completion_date: 	{ type: DataTypes.DATE }
	}, {
		instanceMethods: {
			find: function(queryString, onSuccess, onError) {
				var groupBy, fields, limit, offset, orderBy;

				if(!_.isEmpty(queryString.fields)){
					fields = queryString.fields.split(",");
				};

				if(!_.isEmpty(queryString.limit)){
					limit = queryString.limit;
				};

				if(!_.isEmpty(queryString.offset)){
					offset = queryString.offset;
				};

				if(!_.isEmpty(queryString.groupBy)){
					groupBy = queryString.groupBy;
				};

				if(!_.isEmpty(queryString.orderBy)){
					orderBy = queryString.orderBy;
				} else {
					orderBy = 'id';
				}

				Task.findAll(
					{
						order: orderBy + ' ASC',
						attributes: fields,
						offset: offset,
						limit: limit,
						group: groupBy
					}, { raw: true }).success(onSuccess).error(onError);
			},
			findById: function(taskId, queryString, onSuccess, onError) {

				if(!_.isEmpty(queryString.fields)) {
					var fields = queryString.fields.split(",");
				};

				Task.find(
					{
						attributes: fields,
						where: { id: taskId }
					}, {raw: true}).success(onSuccess).error(onError);
			},
			create: function(onSuccess, onError) {
				var project_id 	= this.project_id
				, status_id 	= this.status_id
				, responsible_id = this.responsible_id
				, petitioner_id = this.petitioner_id
				, priority_id 	= this.priority_id
				, creator_id 	= this.creator_id
				, group_id 	= this.group_id
				, petition_id 	= this.petition_id
				, task_source_id = this.task_source_id
				, concept 		= this.concept
				, description 	= this.description
				, creation 	= this.creation
				, start_date 	= this.start_date
				, delivery_date = this.delivery_date
				, estimated_time = this.estimated_time
				, chargeable 	= this.chargeable
				, visible 		= this.visible
				, inside_description = this.inside_description
				, payable 		= this.payable
				, locked 		= this.locked
				, gantt_start_date = this.gantt_start_date
				, gantt_completion_date = this.gantt_completion_date;

				var collection = { 
					project_id: project_id
					, status_id: status_id
					, responsible_id: responsible_id 
					, petitioner_id: petitioner_id
					, priority_id: priority_id
					, creator_id: creator_id
					, group_id: group_id 
					, petition_id: petition_id
					, task_source_id: task_source_id
					, concept: concept
					, description: description 
					, creation: creation
					, start_date: start_date
					, delivery_date: delivery_date
					, estimated_time: estimated_time 
					, chargeable: chargeable
					, visible: visible
					, inside_description: inside_description
					, payable: payable
					, locked: locked
					, gantt_start_date: gantt_start_date
					, gantt_completion_date: gantt_completion_date
				};

				Task.build(collection).save().success(onSuccess).error(onError);
			},
			updateById: function(taskId, onSuccess, onError) {

				var project_id 	= this.project_id
				, status_id 	= this.status_id
				, responsible_id = this.responsible_id
				, petitioner_id = this.petitioner_id
				, priority_id 	= this.priority_id
				, creator_id 	= this.creator_id
				, group_id 	= this.group_id
				, petition_id 	= this.petition_id
				, task_source_id = this.task_source_id
				, concept 		= this.concept
				, description 	= this.description
				, creation 	= this.creation
				, start_date 	= this.start_date
				, delivery_date = this.delivery_date
				, estimated_time = this.estimated_time
				, chargeable 	= this.chargeable
				, visible 		= this.visible
				, inside_description = this.inside_description
				, payable 		= this.payable
				, locked 		= this.locked
				, gantt_start_date = this.gantt_start_date
				, gantt_completion_date = this.gantt_completion_date;

				var collection = { 
					project_id: project_id
					, status_id: status_id
					, responsible_id: responsible_id 
					, petitioner_id: petitioner_id
					, priority_id: priority_id
					, creator_id: creator_id
					, group_id: group_id 
					, petition_id: petition_id
					, task_source_id: task_source_id
					, concept: concept
					, description: description 
					, creation: creation
					, start_date: start_date
					, delivery_date: delivery_date
					, estimated_time: estimated_time 
					, chargeable: chargeable
					, visible: visible
					, inside_description: inside_description
					, payable: payable
					, locked: locked
					, gantt_start_date: gantt_start_date
					, gantt_completion_date: gantt_completion_date
				};
				Task.update(collection,{where: {id: taskId} }).success(onSuccess).error(onError);
			},
			removeById: function(taskId, onSuccess, onError) {
				Task.destroy({where: {id: taskId}}).success(onSuccess).error(onError);
			}
		}
	});

	return Task;
}
