const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors());
app.use(express.json());
require('dotenv').config();

// ROUTES
let userRoute = require('./Routes/userRoute');
app.use('/user',userRoute);

app.get('/',(req,res) => {
    console.log
    res.send('hey world')
})



mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true},() => {
    console.log(`mongodb is connected`)
})

app.listen(PORT,() => {
    console.log(`listening on PORT ${PORT}`)
})