const {pool} = require('pg')

const pool = new Pool({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    password:process.env.DB_PASS,
    port:process.env.DB_PORT,
});

const createTableText = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  );
`;

pool.query(createTableText)
.then(res => console.log('Table is successfully created'))
.catch(err => console.error('Error executing query', err.stack));

module.exports = pool;
