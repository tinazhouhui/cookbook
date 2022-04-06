"use strict";

require('dotenv').config()
const express = require('express');
const cors = require('cors');
const router = require('./router');
const connectDB = require("./models/index.model");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json()); // json body parser
app.use(router); // apply router

(async function () {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`I am up and running at http://localhost:${PORT}`));
  } catch (err) {
    console.error('not running');
    console.log(err.stack);
  }
})()