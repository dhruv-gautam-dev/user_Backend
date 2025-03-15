import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import UserRoute from "./Routes/UserRoutes.js";
import MONGODB_URI from "./config/serverConfig.js"
const app = express();
app.use(express.json()); // dealing with the response and request together in json


// Configure CORS options
const corsOptions = {
  origin: 'http://localhost:5173',  // Allow requests from this origin
  credentials: true,                // Enable cookies and other credentials
  optionsSuccessStatus: 200         // Some legacy browsers choke on 204
};

// Apply CORS middleware
app.use(cors(corsOptions));

//------------------Database code for connectivity-----------------------//

mongoose.connect(MONGODB_URI)
const db = mongoose.connection;
db.on("error",(error)=>console.log(error));
db.once("open",()=>console.log("Database Connected ..."));

// -----------------Database Connectivity Code Ended --------------------//

// used to check what req and data is coming from api
app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.url}`);
  console.log('Request Body:', req.body);
  next();
});

app.use(UserRoute); 

app.listen(5000, ()=>console.log("server got started ")); // callback function to start the function
