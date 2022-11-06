const mongoose = require("mongoose");
const { Schema } = mongoose;
const db = require("../config/db");

const productSchema = new Schema({
  nama_product: String,
  harga: String,
  asal_negara: String,
});

const Products = db.model("product_backend", productSchema);
module.exports = Products;
