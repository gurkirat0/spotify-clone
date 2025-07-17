import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB(); //connect to the database
connectCloudinary(); //connect to cloudinary for image uploads

//middleware
app.use(express.json());
app.use(cors()); //to connenct both the frontend and backend if they are on different ports

//initializing the routes
app.use('/api/song',songRouter);
app.use('/api/album',albumRouter);
app.get('/',(req,res)=> res.send("working")) //basic route or api to check if the server is running 

app.listen(port,()=> console.log(`Server is running on port ${port}`));
