

const { Productos } = require("../utils/schemas/schemas");

const prods = new ProductosMongo();

const getProducts = async (req, res) => {
  const getAll = await prods.getAll();

  if (getAll.length == 0) {
    res.json({ message: "No hay productos" });
  } else {
    res.json(getAll);
  }
};

const getProdByCategory = async (req, res) => {
  const params = req.params.filter.toLowerCase();
  if (params.length >= 10) {
    const filtrado = await prods.getById(params);
    filtrado
      ? res.json(filtrado)
      : res.send({ message: "Error, no se encuentra producto" });
  } else {
    const filtrado = await prods.getByCategory(params);
    filtrado.length !== 0
      ? res.json(filtrado)
      : res.json({
          message:
            "Error, no se encuentra productos con la categoria ingresada.",
        });
  }
};

const saveProducts = async (req, res) => {
  const { nombre, descripcion, codigo, foto, precio, stock, categoria } =
    req.body;
  const newItem = new Productos({
    nombre: nombre,
    descripcion: descripcion,
    codigo: codigo,
    foto: foto,
    precio: precio,
    stock: stock,
    categoria: categoria,
  });
  const result = await prods.insertar(newItem);
  result
    ? res.json(result)
    : res.json({ message: "Error, vuelva a intentarlo" });
};

const updateProducts = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const { nombre, descripcion, cod, img, price, stock, cat } =
    req.body;

  const updBody = {
    nombre,
    descripcion,
    cod,
    img,
    price,
    stock,
    cat
  };
  const result = await prods.actualizar(filter, updBody);
  result
    ? res.json({ message: "Producto actualizado exitosamente" })
    : res.json({ message: "Error, on se encuentra producto a actualizar" });
};

const deleteProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const eliminado = await prods.eliminar(id);
    eliminado
      ? res.json({ message: "Producto eliminado exitosamente" })
      : res.json({ message: "Error, no se encuentra producto a eliminar" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProducts,
  saveProducts,
  updateProducts,
  deleteProducts,
  getProdByCategory,
};
