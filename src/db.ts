const { Pool } = require('pg');

exports.pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123'
})