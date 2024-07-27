const express = require("express")
const mongoose = require('mongoose')
const cors= require('cors')
const EmployeeModel= require('./Model/Employee')
const bodyParser=require("body-parser");


const app =express()
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));

mongoose.connect("mongodb://127.0.0.1:27017/StudentDB") //database name=studentdb

app.post("/Std_details", (req, res) => {  //collection name=std_datails
    const { username, email, password } = req.body;
    
    const newEmployee = new EmployeeModel({
        username,
        email,
        password
    });

    newEmployee.save()
        .then(() => {
            console.log("Student data saved to database");
            res.status(200).send("Student data saved successfully");
        })
        .catch(err => {
            console.error("Error saving Student data:", err);
            res.status(500).send("Failed to save Student data"); 
        });
});



app.listen(3006, ()=>{
    console.log("server is running")
})