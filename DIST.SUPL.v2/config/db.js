const { Pool } = require('pg');
const conect = require('./connectionString')

const pool = new Pool ({
    connectionString: conect,
    ssl: {rejectUnauthorized: false}
})

module.exports = pool;