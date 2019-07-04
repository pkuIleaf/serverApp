const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const errorHandler = require('./helpers/error_handler');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


//ZO0rx4uw6vgttdJg

mongoose.connect("mongodb+srv://pku:ZO0rx4uw6vgttdJg@testcluster-9n6vf.mongodb.net/sampleapp?retryWrites=true&w=majority",{useCreateIndex: true, useNewUrlParser: true }).then(res => {
    console.log("connected to db")
}).catch(error =>{
    console.log("error",error);
});

app.use((req,res,next)=>{
   res.setHeader("Access-Control-Allow-Origin","*");
   res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
   res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS");
   next();
});

app.use('/users', require('./users/userController'));
app.use('/products',require('./products/productController'));
app.use(errorHandler);

module.exports = app;