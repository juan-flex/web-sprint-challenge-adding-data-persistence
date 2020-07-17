const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

const projectsRouter = require('./projects/projectsRouter.js');
server.use('/api/projects', projectsRouter)

const resourcesRouter = require('./resources/resourcesRouter.js');
server.use('/api/resources', resourcesRouter)

server.use('/', (req, res) => {
    res.status(200).json({ message: 'server is running :)'});
})


module.exports = server; 