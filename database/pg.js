const { Pool }  = require('pg');
const Config = require('../config');

const db = new Pool(Config.dbPg);
module.exports = db;
