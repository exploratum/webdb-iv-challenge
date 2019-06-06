
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {dish_id: 1, name: 'cheese'},
        {dish_id: 1, name: 'Hawaian'},
        {dish_id: 2, name: 'fruit de mer'},
        {dish_id: 3, name: 'fait a la main'},
        {dish_id: 4, name: 'maximilliano'},
        {dish_id: 4, name: 'primavera'},
      ]);
    });
};
