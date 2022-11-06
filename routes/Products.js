const router = require("express").Router();
const controllers = require("../controllers/Products");

router.get("/", controllers.getProducts);
router.get("/delete/:id", controllers.deleteProduct);
router.get("/getbyid/:id", controllers.getProductbyId);
router.post("/add", controllers.createProduct);
router.post("/update/:id", controllers.updateProductbyId);

module.exports = router;
