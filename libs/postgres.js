const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'mateo',
    password: 'admin123',
    database: 'mystore'
  });
  await client.connect();
  return client;
}


module.exports = getConnection;
