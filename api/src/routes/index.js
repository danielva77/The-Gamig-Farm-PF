const { Router } = require("express")
const axios = require("axios")
// Modelos de la base de datos ↓
const { User } = require("../db")
const {
  getAllProducts,
  createProducts,
  getCategories,
  getMarks,
} = require("../controllers/products/Controllers")

const router = Router()

// MIDDLEWARES 📌
// router.use('/auth', authRouter);

// Traer todos los usuarios de la base de datos
const getDbInfo = async () => {
  return await User.findAll()
}

// RUTAS

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
// cargar/crear usuario
router.post("/usuarios", async (req, res) => {
  const { name, avatar, email, adress, dateOfBirth, telephone, password } =
    req.body

  User.create({
    name,
    avatar,
    email,
    adress,
    dateOfBirth,
    telephone,
    password,
  }) // ✅✅✅✅✅

  res.status(200).send("El elemento fue publicado con exito")
}) //✅
// Actualizar informacion del usuario
router.put("/usuario/name", async (req, res) => {
  res.send("El elemento fue actualizado")
}) //✅
// Eliminar cuenta del usuario
router.delete("/usuario/name", async (req, res) => {
  res.send("El elemento fue eliminado con exito")
}) //✅

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

  console.log("numero", id.toString().length)

  let allprodById = await getAllProducts()

  if (id) {
    let ProdId = await allprodById.filter(e => e.id == id)
    ProdId.length
      ? res.status(200).json(ProdId)
      : res.status(404).send("No existe juego con ese Id")
  }
})

module.exports = router
