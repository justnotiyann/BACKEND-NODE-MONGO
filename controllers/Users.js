const Users = require("../models/Users");
const argon2 = require("argon2");

const getAllUsers = async (req, res) => {
  try {
    const result = await Users.find();
    if (result <= 0) res.status(200).json({ msg: "data beluma ada" });
    if (!result) res.status(400).json({ msg: "terjadi kesalahan" });
    res.status(200).json({ msg: "berikut data users", result });
  } catch (e) {
    console.log(e);
  }
};

const createUser = async (req, res) => {
  try {
    const { nama, email } = req.body;
    const getPassword = req.body.password;
    const hashPassword = await argon2.hash(getPassword);
    const createUser = new Users({ nama, email, password: hashPassword });
    const result = await createUser.save();
    if (!result) res.status(400).json({ msg: "gagal tambah user" });
    res.status(200).json({ msg: "data berhasil ditambahkan", result });
  } catch (e) {
    console.log(e);
  }
};

const getUsersById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Users.findById(id);
    res.json({ msg: "data ditemukan", result });
  } catch (e) {
    res.json({ msg: "data tidak ditemukan" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const getUsers = await Users.findByIdAndDelete(id);
    if (!getUsers) res.json({ msg: "data gagal dihapus" });
    res.json({ msg: "data berhasil dihapus" });
  } catch (e) {
    res.json({ msg: "terjadi kesalahan" });
  }
};

module.exports = { getAllUsers, createUser, getUsersById, deleteUser };
