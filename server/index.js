//jshint esversion:6

// this is a express server, notice that there's a script on the package.json file
// (which contains all the packages info for the server side alone) that'll start the server when we run 
//  npm start  


// remember to put the .env file at the same level as package.json file 
require('dotenv').config();
// console.log(process.env);

const path = require('path');
const express = require("express");
const PORT = process.env.PORT||3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
// route for testing the server-frontend connection
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});