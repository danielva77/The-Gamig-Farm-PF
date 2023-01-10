const { Product, Mark, Category } = require("../../db")

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

const createProducts = async (req, res) => {
  const { title, price, detail, img, stock, category, mark } = req.body
  try {
    if (!title || !price || !detail || !img || !stock || !category || !mark) {
      res.status(404).send("faltan parametros")
    }
  } catch (error) {
    res.status(404).send("aun no hay nada")
  }

  let productCreated = await Product.create({
    title,
    price,
    detail,
    img: img
      ? img
      : "https://gesisarg.com/sistema-gestion/res/archivos/imagen_articulo_por_defecto.jpg",
    stock,
  })

  if (category.length) {
    category.map(async cat => {
      let c = await Category.findOrCreate({
        where: { title: cat },
      })

      productCreated.addCategory(c[0])
    })
  }
  // console.log("ESTO total", productCreated)
  if (mark.length) {
    // console.log("QUE LLEGA", mark)
    mark.map(async mak => {
      let m = await Mark.findOrCreate({
        where: { title: mak },
      })

      productCreated.addMark(m[0])
      // console.log("ESTO GUARDA", m[0])
    })
  }

  res.status(200).send("Product created succesfully")
}

// getCategories te devuelve todas las categorias desde la api
const getCategories = async (req, res) => {
  try {
    const cat = await getAllProducts()
    let c = cat.map(el => {
      return el.Categories[0].title
    })
    res.status(200).send(c)
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports = {
  getAllProducts,
  createProducts,
  getCategories,
}

// const { Product, Mark, Category } = require("../../db")
// const validation = require("../../hooks/validateRequiredFields")

// // Funcion para traer todos los juegos, incluye el modelo categoria
// const getAllProducts = async () => {
//   try {
//     const allproducts = await Product.findAll({
//       // include: [
//       //   {
//       //     model: Category,
//       //   },
//       //   {
//       //     model: Mark,
//       //   },
//       // ],
//     })
//     return allproducts
//     // res.status(200).send(allproducts)
//   } catch (error) {
//     // res.status(404).send("aun no hay nada")
//   }
// }

// // async(req, res) => {

// //   let allproducts = await getDbproducts();
// //   console.log("prueba")
// //     allproducts.length ?
// //     res.status(200).send(allproducts) : res.status(404).send("aun no hay nada")
// // };

// // Funcion para crear productos
// async function createProducts(req, res) {
//   try {
//     // Validate required fields
//     const validationError = validation.validateRequiredFields(req.body)
//     if (validationError) {
//       return res.status(400).send(validationError)
//     }

//     let product

//     if (Array.isArray(req.body)) {
//       // Set default image URL if img field is not present for each object in the array
//       let productos = req.body

//       productos.forEach(item => {
//         if (!item.img) {
//           item.img =
//             "https://gesisarg.com/sistema-gestion/res/archivos/imagen_articulo_por_defecto.jpg"
//         }

//         item.categoryName = item.category
//       })

//       // Create multiple products
//       product = await Product.bulkCreate(productos)
//     } else {
//       // Set default image URL if img field is not present
//       let producto = req.body

//       if (!req.body.img) {
//         producto.img =
//           "https://gesisarg.com/sistema-gestion/res/archivos/imagen_articulo_por_defecto.jpg"
//       }

//       // producto.categoryNames = req.body.categories
//       // Create a single product
//       product = await Product.create(producto)
//     }
//     return res.status(201).send(product)
//   } catch (error) {
//     return res.status(400).send(error)
//   }
// }

// // getCategories te devuelve todas las categorias desde la api
// const getCategories = async (req, res) => {
//   const categories = ["Consolas", "Periféricos"]
//   return res.status(200).send(categories)
// }

// module.exports = {
//   getAllProducts,
//   createProducts,
//   getCategories,
// }
