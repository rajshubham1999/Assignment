// const mongoose = require('mongoose');

// mongoose.connect(process.env.mongodb_url,{});

// const connection = mongoose.connection;

// connection.on('connected',()=>{
//     console.log("Connection Successful");
// })

const mongoose = require('mongoose');

mongoose.connect(process.env.mongodb_url, {});

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log("MongoDB connection successful");
});

connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});
