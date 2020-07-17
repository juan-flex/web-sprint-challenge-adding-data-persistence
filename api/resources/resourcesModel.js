const db = require('../../data/dbConfig');

function addResource(resource){
    return db('resources').insert(resource)
        .then(resource => {
            return resource
        })
}

function getResources(){
    return db('resources')
}

module.exports = {
    addResource,
    getResources,
}