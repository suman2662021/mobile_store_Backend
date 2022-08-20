import express from 'express';
const app = express()
import dotenv from 'dotenv';
dotenv.config()
import cors from 'cors';

import connect_DB from './services/connectDB';
import authRoutes from './routes/authRoutes';
import categoryRoutes from './routes/categoryRoutes';
import productRoutes from './routes/productRoutes';


const port = process.env.PORT || 3000

connect_DB();  //function to coonect database

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Server running at ${port}`)
})

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.listen(port, (req, res) => {
    console.log(`Server listening at PORT ${port}`)
})

