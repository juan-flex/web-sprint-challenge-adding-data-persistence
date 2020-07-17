exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl =>{
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.string('description', 256);
        tbl.boolean('completed').defaultTo(false);
    })
    .createTable('resources', tbl =>{
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.string('description', 256);
    })
    .createTable('tasks', tbl =>{
        tbl.increments();
        tbl.string('description', 256).notNullable();
        tbl.string('notes', 256);
        tbl.boolean('completed').defaultTo(false);
        tbl.integer('project_id').notNullable().references('projects.id')
    })
    .createTable('projects_resources', tbl =>{
        tbl.increments();
        tbl.integer('resource_id').notNullable().references('resources.id')
        tbl.integer('project_id').notNullable().references('projects.id')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
