const mongoose = require("mongoose");

const DB_URI = process.env.DB_URI;
const DB_NAME = process.env.DB_NAME;

async function connectDB () {
  try {
    await mongoose.connect(`${DB_URI}/${DB_NAME}`);
    console.log(`connected to DB ${DB_NAME}!`);
  } catch (error) {
    console.error('cannot connect to DB');
    console.log(error.stack);
  }
}

module.exports = connectDB;