const express = require('express');
const server = express();

const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const dishModel = require('./data/models/dishModel');
const recipeModel = require('./data/models/recipeModel');

server.use(express.json());

server.get('/', (req,res) => {
    res.status(200).json({Cooking: "rocks!!!"})
})



module.exports = server;