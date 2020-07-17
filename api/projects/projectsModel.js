const db = require('../../data/dbConfig');

// **** PROJECTS ****
function find() {
    return db('projects');
}

function findById(id) {
    return db('projects')
    .select('*')
    .where('projects.id', id)
    .first();
}

function addProject(project) {
    return db('projects').insert(project)
        .then(projectID => {
            return findById(projectID);
        });
}

// **** TASKS ****
function allTasks(){
    const tasks = db('projects')
    .join('tasks', 'tasks.project_id','projects.id' )
    .select('tasks.*', 'projects.name as project_name', 'projects.description as project_description')

    return tasks
}

function findTasks(project) {
    return db('tasks as T')
    .join('projects as P','P.id', 'T.project_id')
    .select('T.id', 'T.description', 'T.notes', 'T.completed', 'T.project_id', 'P.name', 'P.description as project_description')
    .where('T.project_id', project);
}

function addTask(project_id, task) {
    const newTask = { ...task, project_id };

    return db('tasks').insert(newTask)
}

module.exports = {
    find,
    findById,
    addProject,
    findTasks,
    allTasks,
    addTask,
}