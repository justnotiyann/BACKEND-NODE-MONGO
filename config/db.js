const mongoose = require("mongoose");
require("dotenv").config();
//Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1/my_database";
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", console.error.bind(console, "Berhasil terhubung ke server:"));

module.exports = db;
