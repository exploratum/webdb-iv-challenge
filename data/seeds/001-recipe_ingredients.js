
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, 'ingredient_id':1, quantity: 4.5},
        {recipe_id: 1, 'ingredient_id':3,quantity: 5},
        {recipe_id: 1, 'ingredient_id':1,quantity: 3.5},
        {recipe_id: 2, 'ingredient_id':5,quantity: 7.5},
        {recipe_id: 2, 'ingredient_id':2,quantity: 5},
        {recipe_id: 3, 'ingredient_id':7,quantity: 9.5},
        {recipe_id: 3, 'ingredient_id':8,quantity: 7.5},
        {recipe_id: 3, 'ingredient_id':9, quantity: 4.5},
        {recipe_id: 4, 'ingredient_id':4,quantity: 5},
        {recipe_id: 4, 'ingredient_id':6,quantity: 7.5},
        {recipe_id: 5, 'ingredient_id':8,quantity: 2.5},
        {recipe_id: 5, 'ingredient_id':3,quantity: 5},
        {recipe_id: 6, 'ingredient_id':5,quantity: 7.5},
        {recipe_id: 6, 'ingredient_id':2,quantity: 3.5}
      ]);
    });
};
