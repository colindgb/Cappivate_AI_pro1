const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cappivate_ai',
    password: 'securepassword',
    port: 5432
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};