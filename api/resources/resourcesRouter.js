const express = require('express');

const router = express.Router();

const Resources = require('./resourcesModel');

router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.post('/', (req, res) => {
    const newResource = req.body;

    Resources.addResource(newResource)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})


module.exports = router;