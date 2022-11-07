const router = require("express").Router();
const controllers = require("../controllers/Users");

router.get("/", (req, res) => {
  res.send("oke");
});

router.get("/get", controllers.getAllUsers);
router.post("/add", controllers.createUser);
router.get("/detail/:id", controllers.getUsersById);
router.get("/delete/:id", controllers.deleteUser);

module.exports = router;
