
exports.up = function(knex, Promise) {
  return knex.schema.table('recipe', tbl => {
      tbl.string('instruction', 1024).defaultTo('TBD');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('recipe', tbl => {
      tbl.dropColumn('instruction');
  })
};
