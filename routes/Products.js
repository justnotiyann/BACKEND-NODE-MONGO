const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "Connect ke routes products" });
});

module.exports = router;
