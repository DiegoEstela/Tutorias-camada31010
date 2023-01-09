const express = require("express");
const { Router } = express;

const productRoute = Router();

const {
  getProds,
  saveProd,
  updateProd,
  delProd,
  getProdByCategory,
} = require("../controllers/prods");
const isAuth = require("../middleware/auth");
productRoute.use(express.json());
productRoute.use(express.urlencoded({ extended: false }));

productRoute.get("/", getProds);
productRoute.get("/:filter", getProdByCategory);
productRoute.post("/", isAuth, saveProd);
productRoute.put("/:id", isAuth, updateProd);
productRoute.delete("/:id", isAuth, delProd);

module.exports = productRoute;
