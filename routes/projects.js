/*projects.js*/
var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.route('/projects')
	.post(function(req, res) {
		var	name = req.body.project
		, start_date = req.body.start_date
		, end_date = req.body.end_date
		, status_id = req.body.status_id
		, key = req.body.key
		, is_template = req.body.is_template
		, conclusion_requirements = req.body.conclusion_requirements
		, invoiced_by = req.body.invoiced_by
		, default_ticket = req.body.default_ticket
		, has_been_inactive = req.body.has_been_inactive
		, description = req.body.description;

		var project = models.projects.build({ project: name, start_date: start_date, end_date: end_date, status_id: status_id, key: key, is_template: is_template, conclusion_requirements: conclusion_requirements, invoiced_by: invoiced_by, default_ticket: default_ticket, has_been_inactive: has_been_inactive, description: description });

		project.add(
			function(success) {
				res.json({message: 'El proyecto se ha guardado correctamente.'});
			},
			function(err) {
				res.send(err);
			}
		);
	})

	.get(function(req, res) {
		var project = models.projects.build();
		project.retrieveAll(
			function(projects) {
				if(projects) {
					res.json(projects);
				} else {
					res.send(400, "El listado de proyectos no ha cargado correctamente.");
				}
			},
			function(error) {
				res.send(500, "El listado de proyectos no ha cargado correctamente.");
			}
		);
	});

router.route('/projects/:project_id')
	.put(function(req, res) {
		var project = models.projects.build();

		project.project = req.body.project;
		project.start_date = req.body.start_date;
		project.end_date = req.body.end_date;
		project.status_id = req.body.status_id;
		project.key = req.body.key;
		project.is_template = req.body.is_template;
		project.conclusion_requirements = req.body.conclusion_requirements;
		project.invoiced_by = req.body.invoiced_by;
		project.default_ticket = req.body.default_ticket;
		project.has_been_inactive = req.body.has_been_inactive;
		project.description = req.body.description;

		project.updateById(req.params.project_id, function(success) {
			if (success) {
				res.json({ message: 'El proyecto se ha actualizado correctamente.' });
			} else {
				res.send(401, "El proyecto que desea actualizar no existe.");
			}
		}, function(error) {
			res.send(error);
		});

	})

	.get(function(req, res) {
		var project = models.projects.build();

		project.retrieveById(req.params.project_id, function(project) {
			if (project) {
				res.json(project);
			} else {
				res.send(401, "El proyecto no existe.");
			}
		}, function(error) {
			res.send(error);
		});
	})

	.delete(function(req, res) {
		var project = models.projects.build();

		project.removeById(req.params.project_id, function(users) {
			if (users) {
				res.json({ message: 'El proyecto se ha eliminado correctamente.' });
			} else {
				res.send(401, "El proyecto que desea borrar no existe.");
			}
		}, function(error) {
			res.send(error);
		});
	});

module.exports = router;