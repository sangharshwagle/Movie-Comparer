const express = require('express');
const bodyParser = require('body-parser');
const port = (3000);

const app = express();

app.use((req, res, nxt)=>{
    res.send("hello from express")
});

module.exports = app;