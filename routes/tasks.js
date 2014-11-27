/*tasks.js*/
var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.route('/tasks')
	.post(function(req, res) {
		var project_id 	= req.body.project_id
		, status_id 	= req.body.status_id
		, responsible_id = req.body.responsible_id
		, petitioner_id = req.body.petitioner_id
		, priority_id 	= req.body.priority_id
		, creator_id 	= req.body.creator_id
		, group_id 		= req.body.group_id
		, petition_id 	= req.body.petition_id
		, task_source_id = req.body.task_source_id
		, concept 		= req.body.concept
		, description 	= req.body.description
		, creation 		= req.body.creation
		, start_date 	= req.body.start_date
		, delivery_date = req.body.delivery_date
		, estimated_time = req.body.estimated_time
		, chargeable 	= req.body.chargeable
		, visible 		= req.body.visible
		, inside_description = req.body.inside_description
		, payable 		= req.body.payable
		, locked 		= req.body.locked
		, gantt_start_date = req.body.gantt_start_date
		, gantt_completion_date = req.body.gantt_completion_date;

		var task = models.task.build({ project_id: project_id, status_id: status_id, responsible_id: responsible_id, petitioner_id: petitioner_id, priority_id: priority_id, creator_id: creator_id, group_id: group_id, petition_id: petition_id, task_source_id: task_source_id, concept: concept, description: description, creation: creation, start_date: start_date, delivery_date: delivery_date, estimated_time: estimated_time, chargeable: chargeable, visible: visible, inside_description: inside_description, payable: payable, locked: locked, gantt_start_date: gantt_start_date, gantt_completion_date: gantt_completion_date });

		task.create(
			function(success){
				res.json({message: 'La tarea se ha guardado correctamente.'});
			},
			function(err) {
				res.send(err);
			}
		);
	})

	.get(function(req, res) {
		var task = models.task.build();

		task.find(req.query, function(tasks) {
				if(tasks) {
					res.json(tasks);
				} else {
					res.send(401, "El listado de tareas no ha cargado correctamente.");
				}
			},
			function(error) {
				res.send(error);
			}
		);
	});

router.route('/tasks/:task_id')
	.put(function(req, res) {
		var task = models.task.build();

		task.project_id 	= req.body.project_id;
		task.status_id 	= req.body.status_id;
		task.responsible_id = req.body.responsible_id;
		task.petitioner_id = req.body.petitioner_id;
		task.priority_id 	= req.body.priority_id;
		task.creator_id 	= req.body.creator_id;
		task.group_id 	= req.body.group_id;
		task.petition_id 	= req.body.petition_id;
		task.task_source_id = req.body.task_source_id;
		task.concept= req.body.concept;
		task.description 	= req.body.description;
		task.creation 	= req.body.creation;
		task.start_date 	= req.body.start_date;
		task.delivery_date = req.body.delivery_date;
		task.estimated_time = req.body.estimated_time;
		task.chargeable 	= req.body.chargeable;
		task.visible = req.body.visible;
		task.inside_description = req.body.inside_description;
		task.payable = req.body.payable;
		task.locked = req.body.locked;
		task.gantt_start_date = req.body.gantt_start_date;
		task.gantt_completion_date = req.body.gantt_completion_date;

		task.updateById(req.params.task_id, function(success) {
			if(success) {
				res.json({ message: 'La tarea se ha actualizado correctamente.' });
			} else {
				res.send(401, "La tarea que desea actualizar no existe.");
			}
		}, function(error) {
			res.send(error);
		});
	})

	.get(function(req, res) {
		var task = models.task.build();

		task.findById(req.params.task_id, req.query, function(task) {
			if(task) {
				res.json(task);
			} else {
				res.send(401, "El tarea no existe.");
			}
		}, function(error) {
			res.send(error);
		});
	})

	.delete(function(req, res) {
		var task = models.task.build();

		task.removeById(req.params.task_id, function(task) {
			if(task) {
				res.json({ message: 'El tarea se ha eliminado correctamente.' });
			} else {
				res.send(401, "El tarea que desea borrar no existe.");
			}
		}, function(error) {
			res.send(error);
		});
	});

module.exports = router;