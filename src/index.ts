import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from "dotenv";

import routes from './routes';

dotenv.config()

mongoose.connect(
        `${process.env.MONGO_URI}`, 
         { useNewUrlParser: true,  useUnifiedTopology: true } ,
         () => console.log("Connected to mongoDB...")
);


const app = express();

app.use(express.json());
app.use('/api/url',routes);
app.use(cors);


app.listen(3333, () => console.log("Server up and running..."));