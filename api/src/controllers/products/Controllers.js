const { Product, Mark, Category, Review } = require("../../db")

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
        {
          model: Review,
          attributes: ["id","comment", "rating", "createdAt"],
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
  // try {
  //   if (!title || !price || !detail || !img || !stock || !category || !mark) {
  //     res.status(404).send("faltan parametros")
  //   }
  // } catch (error) {
  //   res.status(404).send("aun no hay nada", error)
  // }

  try {
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
    console.log("ESTO llega marca", mark)
    if (mark.length) {
      mark.map(async mak => {
        let m = await Mark.findOrCreate({
          where: { title: mak },
        })

        productCreated.addMark(m[0])
        // console.log("ESTO GUARDA", m[0])
      })
    }

    res.status(200).send("Product created succesfully")
    console.log("producto creado");
  } catch (error) {
    console.log("este es el error", error)
    res.status(404).send(error)
  }
}

// getCategories te devuelve todas las categorias desde la api
const getCategories = async (req, res) => {
  try {
    const cat = await getAllProducts()
    let extrae = cat.filter(el => el.Categories[0] !== undefined)
    let c = extrae.map(el => {
      return el.Categories[0].title
    })
    res.status(200).send(c)
  } catch (error) {
    res.status(404).send(error)
  }
}

const getMarks = async (req, res) => {
  try {
    const mak = await getAllProducts()
    let extrae = mak.filter(el => el.Marks[0] !== undefined )
    let m = extrae.map(el => {
    return el.Marks[0].title
    })
    res.status(200).send(m)
  } catch (error) {
    res.status(404).send(error)
  }
}

const modifyProducts = async (req, res, next) => {
  const id = req.params.id;
  const product = req.body;
  try {
    await Product.update(product, {
      where: {
        id: id,
      },
    });
    return res.json("Producto modificado");
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllProducts,
  createProducts,
  getCategories,
  getMarks,
  modifyProducts
}
