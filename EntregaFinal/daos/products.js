const ContenedorMongoDB = require('../contenedor/contenedor')

const {Products} = require('../utils/schemas/schemas')

class ProductsMongo extends ContenedorMongoDB {
    constructor() {
        super(Products)
    }
}
module.exports= ProductsMongo