const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Routes
const productsRoutes = require("./routes/Products");

app.use("/products", productsRoutes);

// 404 Handle
app.use((req, res) => {
  res.status(404).json({ msg: "mau kemana mazeh" });
});

app.listen(3000, () => console.log("Server up and running"));
