const { Pool } = require('pg');
const conect = require('../conection/connectionString')

const pool = new Pool ({
    connectionString: conect,
    ssl: {rejectUnauthorized: false}
})

module.exports = pool;