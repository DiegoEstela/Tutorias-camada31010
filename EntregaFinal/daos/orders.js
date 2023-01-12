const ContenedorMongoDB = require('../contenedor/contenedor');
const {orders} = require('../utils/schemas/schemas')

class ordersMongo extends ContenedorMongoDB {
    constructor() {
        super(orders)
    }
}
module.exports = ordersMongo