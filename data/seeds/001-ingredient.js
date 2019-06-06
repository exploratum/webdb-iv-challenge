
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {name: 'salt'},
        {name: 'flour'},
        {name: 'cheese'},
        {name: 'pinapple'},
        {name: 'clams'},
        {name: 'pasta'},
        {name: 'apple'},
        {name: 'spinach'},
        {name: 'tomato'}
      ]);
    });
};
