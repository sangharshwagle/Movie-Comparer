const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const port = (3000);
const DatabaseModel = require('./models/database');

const app = express();
mongoose.connect("mongodb+srv://sang:FNVAUDjNDPl7Ffqq@cluster0-fu1ho.mongodb.net/username-password?retryWrites=true").
  then(()=>{
      console.log(`connection with mongoDB working`);
  }).
  catch(()=>{
      console.log(`connection with MongoDb not working`);
  });


app.use(bodyParser.json());

app.use((request, response, next)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers',
                       'Origin, X-requested-With, Content-Type, Accept');
    response.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.post("/api/title", (req, res, next)=> {
    const database = new DatabaseModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        repassword: req.body.rePassword
    }); 
    console.log(database);
    database.save();
    res.status(201).json({
        message: `it got added`,
        remaining: database
    });
   
})

module.exports = app;