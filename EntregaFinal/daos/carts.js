const ContenedorMongoDB = require("../contenedor/contenedor");

const { Carts } = require("../utils/schemas/schemas");

class CartMongo extends ContenedorMongoDB {
  constructor() {
    super(Carts);
  }
}
module.exports = CartMongo;
