const { Router } = require("express")
const mercadopago = require('mercadopago');
require("dotenv").config();
const axios = require("axios")
// Modelos de la base de datos ↓
const { User, Store } = require("../db")
const {
  getAllProducts,
  createProducts,
  getCategories,
  getMarks,
  modifyProducts,
} = require("../controllers/products/Controllers")
const { getAllReview, reviewCreate, reviewDelete  } = require("../controllers/review/controllers")
const { createshop, getShops } =require("../controllers/products/controllerShop")

const enviarMail = require("../config/mailer")
const configurandoEmail  = require("../config/mailer")

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
    let ProdId = await allprodById.filter(e => e.id == id)
    ProdId.length
      ? res.status(200).json(ProdId)
      : res.status(404).send("No existe juego con ese Id")
  }
})


mercadopago.configure({access_token: process.env.MERCADOPAGO_KEY})

router.post("/payment",(req, res) => {
   totalProducts = req.body
  console.log("totalproducts", totalProducts)

  let preference = {
    "items": totalProducts.map((product) => {

      return({
        title: product.name,
        unit_price: Number(product.price),
        quantity: Number(product.quantity),
        picture_url: product.img
      })
    }),
    "back_urls": {
      "success": "https://the-gamig-farm-pf-rho.vercel.app/confirmation/approve",
      "failure": "https://the-gamig-farm-pf-rho.vercel.app/home",
      "pending": "",
    },
    // "notification_url": "http://localhost:3000/products/notificacion",
    "auto_return": "approved",
  };

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
      console.log(error);
      res.status(400).json(error.message);
    });

}
)

router.put("/products/:id", modifyProducts)
// router.post("/enviarMensaje", enviarMail)







// USER -- JACQUE


















// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//funciones controladoras. Mas abajo las rutas.


// YA ESTA ACTUALIZADA ESTA FUNCION ↓↓↓ ❌

// const createUser = async () => {
//   return await User.bulkCreate([{
//       // id: 'pachilo@mail.com',
//       name: 'pachilo',
//       avatar:'pachilo',
//       email: 'pachilo@mail.com',
//       adress: '',
//       dateOfBirth: '01-07-2016',
//       telephone: 1122333211 ,
//       password: 'password',
//       isAdmin: false,
//       // Para desactivar el acceso
//       isActive: true,
//   }, 
//   {
//       // id: 'luu@mail.com',
//       name: 'luna',
//       avatar: 'luna',
//       email: 'luna@mail.com',
//       adress: '',
//       dateOfBirth: '01-12-2016',
//       telephone: 1122333211 ,
//       password: 'password',
//       isAdmin: true,
//       // Para desactivar el acceso
//       isActive: true,
//   }
// ])
// }

// const createStore = async (name) => {

//   const user1 = await User.findAll({
//       where: {name: name}
//   })

//   const store1= await Store.create([{
//       date: '01-01-2023',
//       detail: "id: 1, cant: 1, producto: monitor, precio: 5000 / id: 1, cant: 2, producto: cpu, precio: 10000",
//       total: '15200',
//       state: 'Entregado',
//       pay: 'Credito',
//   },
//   {
//     date: '09-01-2023',
//     detail: "id: 1, cant: 2, producto: teclado, precio: 500",
//     total: '500',
//     pay: 'debito',
//     state: 'entregado',
// }])

//   await user1.addStore(store1)

//   return 'base cargada'
// }

// ??? AL USUARIO AL COMPRAR ???
const store = async (user, shopping) => {
  try {
      const user = await User.findOne({
      where: { email: user }
     })
      const shop = await Store.create(shopping)

      await user.addStore(shop)

      return 'la compra se ha realizado con exito'
  } catch (error) {
      console.log(error);
  }

}






// Buscar usuario por id ↓
const userID = async (id) => {
  try {
      const us = await User.findByPk(id,{
          include: { model: Store }
      })
      if(us) {
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
                      state: s.state
                  }
              })
          }
          return data
      }
  } catch (error) {
      console.log(error);
  }
 
}
// Actualizar user 
const updateUser = async (data, id) => {
  try {
      await User.update(data, {
          where: { id: id }
      })
      return 'Se ha actualizado los datos con exito!'
  } catch (error) {
      console.log(error);
  }
}





// RUTAS 





// Esta ruta me carga la base de datos con user mas compras
router.post('/createuser', async function (req, res) {

  const { name, avatar, email, adress, dateOfBirth, telephone, password } = req.body 

// Buscar un usuario existente con el mismo correo electrónico !

User.findOne({
  where: {
    email: email
  }
})
.then(user => {
  // Si se encuentra un usuario existente con el mismo correo electrónico
  if (user) {
    // Devolver ese usuario
    return res.json(user);
  }
  // Si no se encuentra un usuario existente
  else {
    // Crear un nuevo usuario con los datos enviados en el cuerpo de la solicitud
    User.findOrCreate({
      where: {
        email: email
      },
      defaults: {
        name,
        avatar,
        email,
        adress,
        dateOfBirth,
        telephone,
        password,
      }
    })
      .then(([user, created]) => {
        if (created) {
          return res.json(user);
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: 'Error al crear el usuario' });
      });
  }
})
.catch(err => {
  console.log(err);
  res.status(500).json({ error: 'Error al buscar el usuario' });
});
})

// Esta ruta me busca un ususrio de mi base de datos por id más las compras que realizo
router.get('/user/:id', async function (req, res) {
  const { id } = req.params;
  try {
      const data = await userID(id); //Encontrar el usuario
      
      return res.status(200).json(data);

  } catch (error) {
      console.error(error);
      return res.status(404).send({mensaje: 'hubo un error'});
  }
})


// Esta ruta modifica los datos del user
router.put('/user/:id', async function (req, res) {
  const data  = req.body;
  const { id } = req.params;

  try {    
      const update = await updateUser(data, id);

          return res.status(200).json(update);
  } catch (error) {
      console.error(error);
      return res.status(404).send({mensaje: 'hubo un error, no se pudieron modificar los datos'});
  }
})


//REVIEW
router.post('/review', reviewCreate)
router.delete("/ewview/:reviewId", reviewDelete)
router.get('/review',getAllReview)

router.post("/addshop", createshop)
router.get("/shops", getShops)

















module.exports = router
