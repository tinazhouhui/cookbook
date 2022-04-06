"use strict";

require('dotenv').config()
const express = require('express');
const router = require('./router')

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // json body parser
app.use(router); // apply router

app.listen(PORT, () => {  // initialize server
  console.log(`I am up and running at http://localhost:${PORT}`);
});