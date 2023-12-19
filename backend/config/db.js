import pg from "pg";
const { Pool } = pg;

// Database connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Yoga-DB',
  password: '123',
  port: 5432,
});
 export default pool;