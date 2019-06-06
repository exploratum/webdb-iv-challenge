
exports.up = function(knex, Promise) {
    // the tables most be created in the right order,
    // tables with FK are created after the referenced table is created
  return knex.schema
    .createTable('dish', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable().unique();
    })
    .createTable('recipe', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable().unique();
        tbl.integer('dish_id')
            .unsigned()
            .notNullable()
            .references('id'npx )
            .inTable('dish')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })
    .createTable('ingredient', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable().unique();
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.increments();
        tbl.integer('recipe_id').unsigned().references('id').inTable('recipe').onDelete('RESTRICT').onUpdate('CASCADE');
        tbl.integer('ingredient_id').unsigned().references('id').inTable('ingredient').onDelete('RESTRICT').onUpdate('CASCADE');
        tbl.float('quantity').unsigned().notNullable();

    })

};

exports.down = function(knex, Promise) {
  // tables with FK must be removed before the referenced table is removed
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredient')
    .dropTableIfExists('recipe')
    .dropTableIfExists('dish');
};
