const express = require('express');

const router = express.Router();

const Projects = require('./projectsModel');


router.get('/', (req, res) => {
    Projects.find()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})
router.get('/tasks', (req, res) => {
    Projects.allTasks()
        .then(tasks => {
            res.status(200).json({ tasks, error: false });
        })
        .catch(err => {
            res.status(500).json(err);
        })
})
router.get('/:id', (req, res) => {
    const { id } = req.params;

    Projects.findById(id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})
router.post('/', (req, res) => {
    const newProject = req.body;

    Projects.addProject(newProject)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})
router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Projects.findTasks(id)
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})
router.post('/:id', (req, res) => {
    const { id } = req.params;
    const newTask = req.body;

    Projects.addTask(id, newTask)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

module.exports = router;