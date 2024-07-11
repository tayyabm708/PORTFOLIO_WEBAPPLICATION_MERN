
const mongoose = require('mongoose');
console.log(process.env.mongo_url);

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;
connection.on('error', ()=>{
    console.log('Error connecting to database');

});

connection.on('connected', ()=>{
    console.log('Mongo DB Connection Successfull');
});

module.exports = mongoose;
