import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const user= process.env.DB_USER;
export const password= process.env.DB_PASS;
export const server= process.env.DB_HOST;  // You can use 'localhost\\instance' to connect to named instance
export const database= process.env.DB_NAME;
