const { Client } = require('pg');
require('dotenv').config({ path: '.env.local' });

async function initDb() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log('Connected to the database.');

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await client.query(createTableQuery);
    console.log('Successfully created tasks table or verified it exists.');

  } catch (err) {
    console.error('Error initializing database:', err);
  } finally {
    await client.end();
    console.log('Database connection closed.');
  }
}

initDb();
