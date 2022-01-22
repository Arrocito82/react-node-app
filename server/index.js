//jshint esversion:6

// this is a express server, notice that there's a script on the package.json file
// (which contains all the packages info) that'll start the server when we run 
//  npm start  


// remember to put the .env file at the same level as package.json file 
require('dotenv').config();
// console.log(process.env);


const express = require("express");
const PORT = process.env.PORT||3001;

const app = express();

// route for testing the server-frontend connection
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});