const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

function getRecipes() {
    return db('recipe');
};

function addRecipe(dish) {
    return db('recipe').insert(dish);
};

function getReceipeIngredients(id) {
    db.select('ingredient.name', 'recipe_ingredients.quantity')
        .from('recipe_ingredients')
        .leftJoin('ingredient', 'recipe_ingredients.ingredient_id', 'ingredient.id')
        .where('recipe_ingredients.recipe_id', id)
}

module.exports = {
    getRecipes,
    addRecipe,
    getReceipeIngredients
};