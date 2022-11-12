const Pool = require('pg').Pool;

const Pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'students',
    password: '1453',
    port: 5432
})

module.exports = pool;