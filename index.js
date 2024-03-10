const express = require("express");
const coursesRouter=require("./routes/courses")
const bodyParser=require('body-parser')
require("dotenv").config()
const mongoose=require('mongoose')
const app = express();

app.use(bodyParser.json())
app.use("/api/v1/courses",coursesRouter)



const mongoURI = "mongodb://localhost:27017/mydb"; 

mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));



app.listen(process.env.PORT, () => {
    console.log("server is running...");
});