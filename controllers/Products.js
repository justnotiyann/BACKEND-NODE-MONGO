const Products = require("../models/Products");

// READ
const getIndex = async (req, res) => {
  res.status(200).json({ msg: "Connect ke routes products" });
};

// CREATE
const createProduct = async (req, res) => {
  try {
    const { nama_product, harga, asal_negara } = req.body;
    const newProduct = new Products({ nama_product, harga, asal_negara });
    const result = await newProduct.save();
    if (!result) res.json({ msg: "Data gagal ditambahkan" });
    res.json({ msg: "berhasil tambah data", result });
  } catch (e) {
    res.json({ msg: "terjadi eror pada server", error });
  }
};

// GET
const getProducts = async (req, res) => {
  try {
    const result = await Products.find();
    if (!result) res.status(400).json({ msg: "Gagal mengambil data" });
    if (result <= 0) res.json({ msg: "data belum ada !" });
    res.status(200).json({ msg: "berikut data products", result });
  } catch (e) {
    res.status(500).json({ msg: "terjadi kesalahan server", e });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const findProduct = await Products.findById({ _id: id });
    if (!findProduct) res.json({ msg: "data tidak ditemukan" });

    const result = await Products.deleteOne({ _id: id });
    if (!result) res.json({ msg: "data gagal dihapus" });
    res.json({ msg: `Data ${findProduct.nama_product} berhasil dihapus` });
  } catch (e) {
    console.log(e);
    res.json({ msg: "terjadi kesalahan", e });
  }
};

// FIND BY ID
const getProductbyId = async (req, res) => {
  const id = req.params.id;
  const result = await Products.findById({ _id: id });
  if (!result) res.json({ msg: "data tidak ditemukan" });
  res.json({ msg: `berikut data ${result.nama_product} terkait`, result });
};

// UPDATE
const updateProductbyId = async (req, res) => {
  try {
    const id = req.params.id;
    const getBody = req.body;
    const options = { new: true };
    const checkProduct = await Products.find({ _id: id });
    if (!checkProduct) {
      res.json({ msg: "Data tidak ditemukan" });
    } else {
      const result = await Products.findByIdAndUpdate(id, getBody, options);
      if (!result) res.json({ msg: "data gagal di update" });
      res.json({ msg: `data ${checkProduct.nama_product} berhasil diupdate`, result });
    }
  } catch (error) {
    res.json({ msg: "terjadi erorr" });
  }
};

module.exports = { getIndex, createProduct, getProducts, deleteProduct, getProductbyId, updateProductbyId };
