const { Product, Mark, Category } = require("../../db");

// Funcion para traer todos los juegos, incluye el modelo categoria
const getAllProducts = async (req, res, next) => {

  try {
      const allproducts = await Product.findAll({
          include: [
            {
              model: Category,
            },
            {
              model: Mark,
            }
        ]})
        
        res.status(200).send(allproducts)
  } catch (error) {
    res.status(404).send("aun no hay nada")
  }
}

// async(req, res) => {

//   let allproducts = await getDbproducts();
//   console.log("prueba")
//     allproducts.length ?
//     res.status(200).send(allproducts) : res.status(404).send("aun no hay nada")
// };

// Funcion para crear productos
const createProducts = async(req, res) => {
	const { title, price, detail, img, stock, category, mark } = req.body;
    try {
      if (!title || !price || !detail || !img || !stock || !category || !mark) {
        res.status(404).send("faltan parametros") 
    }} catch (error) {
      res.status(404).send("aun no hay nada")
    }

    let productCreated = await Product.create({
      title, 
      price,
      detail, 
      img: img? img : "https://gesisarg.com/sistema-gestion/res/archivos/imagen_articulo_por_defecto.jpg", 
      stock
  });

  if (category.length) {
    category.map(async cat => {
        let c = await Category.findOrCreate({
            where: { title: cat }
        })
        productCreated.addCategory(c[0])
    })
}
// if (mark.length){
//   mark.map(async mak => {
//       let m = await Mark.findOrCreate({
//           where: { title: mak }
//       })
//       productCreated.addMark(m[0])
//   })}

  res.status(200).send("Product created succesfully")
};


// getCategories te devuelve todas las categorias desde la api
const getCategories = async () => {
	const dbCategories = await Category.findAll();

	if (!dbCategories.length) throw new Error(`Categories not found!`);

	return dbCategories;
};

module.exports = {
  getAllProducts,
  createProducts,
  getCategories
}