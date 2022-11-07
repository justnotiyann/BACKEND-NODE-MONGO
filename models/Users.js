const { mongoose, Schema } = require("mongoose");
const db = require("../config/db");

const usersSchema = new Schema({
  nama: String,
  email: String,
  password: String,
});

const Users = db.model("users_backend", usersSchema);
module.exports = Users;
