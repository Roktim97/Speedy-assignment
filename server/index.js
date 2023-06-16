const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const topicRoutes = require('./Routes/topicRoutes')

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

mongoose.connect(process.env.Mongo_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connected to DB")
}).catch((err)=>{
    console.log(err.message)
});

app.use('/', topicRoutes);

app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is listening to PORT:${process.env.PORT || 8000}` )
});