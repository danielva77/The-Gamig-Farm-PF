const { Product, Mark, Category } = require("../../db")
const validation = require("../../hooks/validateRequiredFields")

// Funcion para traer todos los juegos, incluye el modelo categoria
const getAllProducts = async () => {
  try {
    const allproducts = await Product.findAll({
      include: [
        {
          model: Category,
        },
        {
          model: Mark,
        },
      ],
    })
    return allproducts
    // res.status(200).send(allproducts)
  } catch (error) {
    // res.status(404).send("aun no hay nada")
  }
}

// async(req, res) => {

//   let allproducts = await getDbproducts();
//   console.log("prueba")
//     allproducts.length ?
//     res.status(200).send(allproducts) : res.status(404).send("aun no hay nada")
// };

// Funcion para crear productos
async function createProducts(req, res) {
  try {
    // Validate required fields
    const validationError = validation.validateRequiredFields(req.body)
    if (validationError) {
      return res.status(400).send(validationError)
    }

    let product
    if (Array.isArray(req.body)) {
      // Set default image URL if img field is not present for each object in the array
      req.body.forEach(item => {
        if (!item.img) {
          item.img =
            "https://gesisarg.com/sistema-gestion/res/archivos/imagen_articulo_por_defecto.jpg"
        }
      })

      // Create multiple products
      product = await Product.bulkCreate(req.body)
    } else {
      // Set default image URL if img field is not present
      if (!req.body.img) {
        req.body.img =
          "https://gesisarg.com/sistema-gestion/res/archivos/imagen_articulo_por_defecto.jpg"
      }

      // Create a single product
      product = await Product.create(req.body)
    }
    return res.status(201).send(product)
  } catch (error) {
    return res.status(400).send(error)
  }
}

// getCategories te devuelve todas las categorias desde la api
const getCategories = async () => {
  const dbCategories = await Category.findAll()

  if (!dbCategories.length) throw new Error(`Categories not found!`)

  return dbCategories
}

module.exports = {
  getAllProducts,
  createProducts,
  getCategories,
}
