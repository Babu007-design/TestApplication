// db.js

// Import required modules
import sql from 'mssql';
import { user,database,password,server } from './Config.mjs';

// SQL Server configuration
const config = {
    user: user,
    password: password,
    server: server,  // You can use 'localhost\\instance' to connect to named instance
    database: database,
    options: {
        //enableArithAbort: true, // Required setting for SQL Server
        encrypt: false,
    },
};

// Function to connect to SQL Server
export async function connect() {
    try {
        const pool = await sql.connect(config);
        console.log('Connected to SQL Server');
        return pool;
    } catch (err) {
        console.error('Error connecting to SQL Server:', err);
        throw err;
    }
}

// Export function to execute SQL queries
export async function query(sqlQuery) {
    try {
        const pool = await connect();
        const result = await pool.request().query(sqlQuery);
        return result.recordset;
    } catch (err) {
        console.error('Error querying SQL Server:', err);
        throw err;
    }
}
