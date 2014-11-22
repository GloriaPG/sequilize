/*tasks.js*/

"user strict"

module.exports = function (sequelize, DataTypes) { 
	var Task = sequelize.define('tasks', {
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
		, concept: 			{ type: DataTypes.INTEGER }
		, description: 		{ type: DataTypes.INTEGER }
		, creation: 		{ type: DataTypes.INTEGER }
		, start_date: 		{ type: DataTypes.INTEGER }
		, delivery_date: 	{ type: DataTypes.INTEGER }
		, estimated_time: 	{ type: DataTypes.INTEGER }
		, chargeable: 		{ type: DataTypes.INTEGER }
		, visible: 			{ type: DataTypes.INTEGER }
		, inside_description: 	{ type: DataTypes.INTEGER }
		, payable: 			{ type: DataTypes.INTEGER }
		, locked: 			{ type: DataTypes.INTEGER }
		, gantt_start_date: { type: DataTypes.INTEGER }
		, gantt_completion_date: 	{ type: DataTypes.INTEGER }
	}, {
		instanceMethods: {
			retrieveAll: function(onSuccess, onError) {
				Task.findAll({}, {raw: true}).success(onSuccess).error(onError);
			},
			retrieveById: function(task_id, onSuccess, onError) {
				Task.find({where: {id: task_id}}, {raw: true}).success(onSuccess).error(onError);
			},
			add: function(onSuccess, onError) {
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

				Task.build({ project_id: project_id, status_id: status_id, responsible_id: responsible_id, petitioner_id: petitioner_id, priority_id: priority_id, creator_id: creator_id, group_id: group_id, petition_id: petition_id, task_source_id: task_source_id, concept: concept, description: description, creation: creation, start_date: start_date, delivery_date: delivery_date, estimated_time: estimated_time, chargeable: chargeable, visible: visible, inside_description: inside_description, payable: payable, locked: locked, gantt_start_date: gantt_start_date, gantt_completion_date: gantt_completion_date })
				.save().success(onSuccess).error(onError);
			},
			updateById: function(task_id, onSuccess, onError) {

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

				Task.update({ project_id: project_id, status_id: status_id, responsible_id: responsible_id, petitioner_id: petitioner_id, priority_id: priority_id, creator_id: creator_id, group_id: group_id, petition_id: petition_id, task_source_id: task_source_id, concept: concept, description: description, creation: creation, start_date: start_date, delivery_date: delivery_date, estimated_time: estimated_time, chargeable: chargeable, visible: visible, inside_description: inside_description, payable: payable, locked: locked, gantt_start_date: gantt_start_date, gantt_completion_date: gantt_completion_date },{where: {id: task_id} }).success(onSuccess).error(onError);
			},
			removeById: function(task_id, onSuccess, onError) {
				Task.destroy({where: {id: task_id}}).success(onSuccess).error(onError);
			}
		}
	});

	return Task;
}
