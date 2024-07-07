import express from "express";

import {query} from './db.mjs';

import { PORT } from './Config.mjs';

import cors from 'cors';

const app = express();
app.use(cors());
//const port = process.env.PORT||3000;


app.get('/Products',async (req,res)=>{

    try {
        const products = await query('SELECT * FROM Products');
        res.json(products);
    } catch (err) {
        console.error('Error querying SQL Server:', err);
        res.status(500).send('Error querying SQL Server');
    }
})


app.listen(PORT,()=>{
    console.log(`listening on ${PORT} port`);
});