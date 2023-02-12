const { Router } = require("express")
const mercadopago = require("mercadopago")
require("dotenv").config()
const axios = require("axios")
const prodJson = require("../../productos.json")
const { desactivarUsuario } = require("../controllers/userControllers")

// Modelos de la base de datos ↓
const { User, Store, Category, Mark, Product, Favorite } = require("../db")
const {
  getAllProducts,
  createProducts,
  getCategories,
  getMarks,
  modifyProducts,
} = require("../controllers/products/Controllers")
const {
  getAllReview,
  reviewCreate,
  reviewDelete,
} = require("../controllers/review/controllers")
const {
  createshop,
  getShops,
} = require("../controllers/products/controllerShop")
const {
  addFavorite,
  addToFavorites,
  getFavorites,
  removeFromFavorites,
} = require("../controllers/favorites/controllers")

// const enviarMail = require("../config/mailer") ← ESTA FUNCION NO VA??????????

const configurandoEmail = require("../config/mailer")
const mensajeBienvenida = require("../config/mailerBienvenida")

const router = Router()

// MIDDLEWARES 📌
// router.use('/auth', authRouter);

// Traer todos los usuarios de la base de datos
const getDbInfo = async () => {
  return await User.findAll()
}

// NODEMAILER 📨

// Al finalizar la compra ↓
router.post("/MensajeCompra", configurandoEmail)

// Al iniciar por primera vez
// router.post("/nuevoUsuario", mensajeBienvenida)

// RUTAS 🚧

// Obtener todos los usuarios
router.get("/usuarios", async (req, res) => {
  // AXIOS.GET("")
  const name = req.query.name // ?name="..."

  if (name) {
    let users = await getDbInfo()

    //Comparamos ambos valores en minuscula
    let usuarioName = await users.filter(
      e => e.name.toLowerCase() == name.toLowerCase()
    )

    usuarioName.length
      ? res.status(200).send(usuarioName)
      : res
          .status(404)
          .send(
            `<h1 style="background-color: black; color:red; text-align:center">ERORR 404 → No existe el usuario con el nombre de: ${name}<h1/>`
          )
  } else {
    //no hay query → Enviar todos los datos normal

    let users = await getDbInfo()
    res.status(200).send(users)
  }
}) // ✅✅✅✅✅

// obtener un usuario en particular
router.get("/usuario/name", async (req, res) => {
  res.status(202).send("Este es el perfil de : Alfredo Zavala")
}) // ❓❓❓❓❓

// **********************
// PRODUCTOS
// **********************
router.get("/products", async (req, res) => {
  const nombre = req.query.title
  let allprod = await getAllProducts()

  if (nombre) {
    let videogamesName = await allprod.filter(el =>
      el.title.toLowerCase().includes(nombre.toLowerCase())
    )
    videogamesName.length
      ? res.status(200).send(videogamesName.slice(0, 15))
      : res.status(404).send("product not found")
  } else {
    res.status(200).send(allprod)
  }
})

// getAllProducts);
router.post("/products", createProducts)

router.get("/category", getCategories)
router.get("/mark", getMarks)

router.get("/products/:id", async (req, res) => {
  // res.send("Soy el get /videogame")
  const { id } = req.params
  let allprodById = await getAllProducts()

  if (id) {
    let ProdId = allprodById.filter(e => e.id == id)
    ProdId.length
      ? res.status(200).json(ProdId)
      : res.status(404).send("No existe juego con ese Id")
  }
})

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY })

router.post("/payment", (req, res) => {
  totalProducts = req.body
  console.log("totalproducts", totalProducts)

  let preference = {
    items: totalProducts.map(product => {
      return {
        title: product.name,
        unit_price: Number(product.price),
        quantity: Number(product.quantity),
        picture_url: product.img,
      }
    }),
    back_urls: {
      success: "http://localhost:3000/confirmation/approve",
      failure: "http://localhost:3000/home",
      pending: "",
    },
    // "notification_url": "http://localhost:3000/products/notificacion",
    auto_return: "approved",
  }

  // totalProducts.map(async p => {
  // await Product.increment({stock: -p.quantity}, {where:{ title: p.title}});
  // })

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.send(response.body.init_point)
      //res.redirect({response.body.id})
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
    })
    .catch(function (error) {
      console.log(error)
      res.status(400).json(error.message)
    })
})

router.put("/products/:id", modifyProducts)
// router.post("/enviarMensaje", enviarMail)

// ??? AL USUARIO AL COMPRAR ???
const store = async (user, shopping) => {
  try {
    const user = await User.findOne({
      where: { email: user },
    })
    const shop = await Store.create(shopping)

    await user.addStore(shop)

    return "la compra se ha realizado con exito"
  } catch (error) {
    console.log(error)
  }
}

// Buscar usuario por id ↓
const userID = async id => {
  try {
    const us = await User.findByPk(id, {
      include: { model: Store },
    })
    if (us) {
      const data = {
        id: us.id,
        name: us.name,
        avatar: us.avatar,
        email: us.email,
        adress: us.adress,
        dateOfBirth: us.dateOfBirth,
        telephone: us.telephone,
        isAdmin: us.isAdmin,
        isActive: us.isActive,
        store: us.Stores.map(s => {
          return {
            id: s.id,
            date: s.date,
            detail: s.detail,
            total: s.total,
            pay: s.pay,
            state: s.state,
          }
        }),
      }
      return data
    }
  } catch (error) {
    console.log(error)
  }
}
// Actualizar user
const updateUser = async (data, id) => {
  try {
    await User.update(data, {
      where: { id: id },
    })
    return "Se ha actualizado los datos con exito!"
  } catch (error) {
    console.log(error)
  }
}

// RUTAS

// Esta ruta me carga la base de datos con user mas compras
router.post("/createuser", async function (req, res) {
  const { name, avatar, email, adress, dateOfBirth, telephone, password } =
    req.body

  // Buscar un usuario existente con el mismo correo electrónico !

  User.findOne({
    where: {
      email: email,
    },
  })
    .then(user => {
      // Si se encuentra un usuario existente con el mismo correo electrónico
      if (user) {
        // Devolver ese usuario
        return res.json(user)
      }
      // Si no se encuentra un usuario existente
      else {
        // Crear un nuevo usuario con los datos enviados en el cuerpo de la solicitud
        User.findOrCreate({
          where: {
            email: email,
          },
          defaults: {
            name,
            avatar,
            email,
            adress,
            dateOfBirth,
            telephone,
            password,
          },
        })
          .then(([user, created]) => {
            if (created) {
              mensajeBienvenida(email)

              return res.json(user)
            }
          })
          .catch(err => {
            console.log(err)
            res.status(500).json({ error: "Error al crear el usuario" })
          })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "Error al buscar el usuario" })
    })
})

// Esta ruta me busca un ususrio de mi base de datos por id más las compras que realizo
router.get("/user/:id", async function (req, res) {
  const { id } = req.params
  try {
    const data = await userID(id) //Encontrar el usuario

    return res.status(200).json(data)
  } catch (error) {
    console.error(error)
    return res.status(404).send({ mensaje: "hubo un error" })
  }
})

// Esta ruta modifica los datos del user
router.put("/user/:id", async function (req, res) {
  const data = req.body
  const { id } = req.params

  try {
    const update = await updateUser(data, id)

    return res.status(200).json(update)
  } catch (error) {
    console.error(error)
    return res
      .status(404)
      .send({ mensaje: "hubo un error, no se pudieron modificar los datos" })
  }
})

//REVIEW
router.post("/review", reviewCreate)
router.delete("/review/:reviewId", reviewDelete)
router.get("/review", getAllReview)

router.post("/addshop", createshop)
router.get("/shops", getShops)

router.post("/favorites", addToFavorites)
router.get("/favorites", getFavorites)
// router.delete("/favorites/:email/:productId", removeFromFavorites);

router.delete("/favorites/:id", async (req, res) => {
  const id = req.params.id
  console.log("esto es id ", id)
  try {
    let nExcluidos = await Favorite.destroy({
      where: { id: id },
    })
    res.status(200).send("favorito eliminado")
  } catch (error) {
    console.log("error eliminacion favoritos", error)
    res.status(400).send(error)
  }
})

// BENJA , JAQUE ↓

//routes cargar db
const consola = [
  { title: "PlayStation" },
  { title: "PlayStation 2" },
  { title: "PlayStation 3" },
  { title: "PlayStation 4" },
  { title: "PlayStation 5" },
  { title: "Xbox" },
  { title: "Xbox 360" },
  { title: "Xbox One" },
  { title: "Sega Mega Drive" },
  { title: "Nintendo 64" },
  { title: "Nintendo DS" },
  { title: "Wii" },
  { title: "Nintendo Switch" },
]

const mark = [{ title: "Juegos" }, { title: "Mandos" }]

const createCategory = async () => {
  try {
    await Category.bulkCreate(consola)
    return "Se crearon categorias"
  } catch (error) {
    console.log(error)
  }
}

const createMark = async () => {
  try {
    await Mark.bulkCreate(mark)
    return "Se crearon juegos y mandos"
  } catch (error) {
    console.log(error)
  }
}

const createProduct = async () => {
  try {
    let category = ""
    let marca = ""
    let producto = ""
    let allProducts = []
    let agregarCategory = []
    let agregarMark = []

    for (let i = 0; i < prodJson.products.length; i++) {
      category = await Category.findOne({
        where: { title: prodJson.products[i].category },
      })

      marca = await Mark.findOne({
        where: { title: prodJson.products[i].mark },
      })

      producto = await Product.create({
        title: prodJson.products[i].title,
        price: prodJson.products[i].price,
        detail: prodJson.products[i].detail,
        img: prodJson.products[i].img,
        stock: prodJson.products[i].stock,
      })

      await producto.addMark(marca)
      await producto.addCategory(category)

      // allProducts.push(producto)
      // agregarCategory.push(addC)
      // agregarMark.push(addM)

      // await Promise.all([...category, ...marca, ...producto])
    }

    return "La base de datos se ha cargado con exito"
  } catch (error) {
    console.log(error)
  }
}

const filterByMandos = async () => {
  const data = await Mark.findAll({
    where: { title: "Mandos" },
    include: {
      model: Product,
      attributes: [
        "id",
        "title",
        "price",
        "detail",
        "img",
        "stock",
        "isActive",
      ],
      through: {
        attributes: [],
      },
    },
  })
  return data[0].Products
}

const filterByJuegos = async () => {
  const data = await Mark.findAll({
    where: { title: "Juegos" },
    include: {
      model: Product,
      attributes: [
        "id",
        "title",
        "price",
        "detail",
        "img",
        "stock",
        "isActive",
      ],
      through: {
        attributes: [],
      },
    },
  })
  return data[0].Products
}

// Consola ↓
const filterByCategory = async consola => {
  const data = await Category.findAll({
    where: { title: consola },
    include: {
      model: Product,
      attributes: ["id", "title", "price", "detail", "img", "stock"],
      through: {
        attributes: [],
      },
    },
  })
  return data[0].Products
}

router.get("/db", async (req, res) => {
  try {
    //   const categories = await createCategory();
    //   const marks = await createMark();
    await createCategory()
    await createMark()

    const products = await createProduct()

    return res.status(200).send(products)
  } catch (error) {
    console.log(error)
    return res.status(404).json(error)
  }
})

router.get("/filterByMandos", async (req, res) => {
  try {
    const products = await filterByMandos()

    return res.status(200).json(products)
  } catch (error) {
    console.log(error)
    return res.status(404).json(error)
  }
})

router.get("/filterByJuegos", async (req, res) => {
  try {
    const products = await filterByJuegos()

    return res.status(200).json(products)
  } catch (error) {
    console.log(error)
    return res.status(404).json(error)
  }
})

router.get("/filterByCategory", async (req, res) => {
  try {
    const { consola } = req.query
    const products = await filterByCategory(consola)

    return res.status(200).json(products)
  } catch (error) {
    console.log(error)
    return res.status(404).json(error)
  }
})

router.put("/user/desactivar/:id", desactivarUsuario)

module.exports = router
