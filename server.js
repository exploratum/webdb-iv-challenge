const express = require('express');
const server = express();

const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

server.use(express.json());

server.get('/', (req,res) => {
    res.status(200).json({Cooking: "rocks!!!"})
})



module.exports = server;