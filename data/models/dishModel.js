const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

function getDishes() {
    return db('dish');
};

function addDish(dish) {
    return db('dish').insert(dish);
};

function getDish(id) {
    return db('dish')
    .where({id})
    .first();
};

function getIngredients(dishId, recipeId) {
    // return db(receipe)
}

module.exports = {
    getDish,
    getDishes,
    addDish
};

