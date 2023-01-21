// const { Router } = require('express');
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');
// const axios = require('axios');
// const { User, Store } = require('../db');

// const router = Router();

// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);

// //funciones controladoras. Mas abajo las rutas.
// const createUser = async () => {
//     return await User.bulkCreate([{
//         // id: 'pachilo@mail.com',
//         name: 'pachilo',
//         avatar:'pachilo',
//         email: 'pachilo@mail.com',
//         adress: '',
//         dateOfBirth: '01-07-2016',
//         telephone: 1122333211 ,
//         password: 'password',
//         isAdmin: false,
//         // Para desactivar el acceso
//         isActive: true,
//     }, 
//     {
//         // id: 'luu@mail.com',
//         name: 'luna',
//         avatar: 'luna',
//         email: 'luna@mail.com',
//         adress: '',
//         dateOfBirth: '01-12-2016',
//         telephone: 1122333211 ,
//         password: 'password',
//         isAdmin: true,
//         // Para desactivar el acceso
//         isActive: true,
//     }
// ])
// }

// const createStore = async () => {

//     const users = await createUser();

//     const user1 = await User.findOne({
//         where: {name: 'luna'}
//     })

//     const user2 = await User.findOne({
//         where: {name: 'pachilo'}
//     })
//     const store1= await Store.bulkCreate([{
//         date: '01-01-2023',
//         detail: "id: 1, cant: 1, producto: monitor, precio: 5000 / id: 1, cant: 2, producto: cpu, precio: 10000",
//         total: '15000',
//         state: 'entregado',
//         pay: 'credito',
//     }])

//     const store2= await Store.bulkCreate([{
//         date: '01-01-2023',
//         detail: "id: 1, cant: 2, producto: mouse, precio: 100",
//         total: '300',
//         pay: 'credito',
//         state: 'entregado',
//     },
//     {
//         date: '09-01-2023',
//         detail: "id: 1, cant: 2, producto: teclado, precio: 500",
//         total: '500',
//         pay: 'debito',
//         state: 'entregado',
//     }])

//     await user1.addStore(store1)
//     await user2.addStore(store2)

//     return 'base cargada'

// }


// const store = async (user, shopping) => {
//     try {
//         const user = await User.findOne({
//         where: { email: user }
//        })
//         const shop = await Store.create(shopping)

//         await user.addStore(shop)

//         return 'la compra se ha realizado con exito'
//     } catch (error) {
//         console.log(error);
//     }

// }

// const userID = async (id) => {
//     try {
//         const us = await User.findByPk(id,{
//             include: { model: Store }
//         })
//         if(us) {
//             const data = {
//                 id: us.id,
//                 name: us.name,
//                 avatar: us.avatar,
//                 email: us.email,
//                 adress: us.adress,
//                 dateOfBirth: us.dateOfBirth,
//                 telephone: us.telephone,
//                 isAdmin: us.isAdmin,
//                 isActive: us.isActive,
//                 store: us.Stores.map(s => {
//                     return {
//                         id: s.id,
//                         date: s.date,
//                         detail: s.detail,
//                         total: s.total,
//                         pay: s.pay,
//                         state: s.state
//                     }
//                 })
//             }
//             return data
//         }
//     } catch (error) {
//         console.log(error);
//     }
   
// }

// const updateUser = async (data, id) => {
    
//     try {
//         await User.update(data, {
//             where: { id: id }
//         })
//         return 'Se ha actualizado los datos con exito!'
//     } catch (error) {
//         console.log(error);
//     }
    
// }

// // esta ruta me carga la base de datos con user mas compras
// router.get('/createuser', async function (req, res) {
//     try {
//         await createStore();
    
//      return res.status(200).json('listo')        

//     } catch (error) {
//         console.error(error);
//         return res.status(404).send({mensaje: 'hubo un error'});
//     }
// })

// // esta ruta me busca un ususrio de mi base de datos por id  mas las compras que realizo
// router.get('/user/:id', async function (req, res) {
//     const { id } = req.params;
//     try {
//         const data = await userID(id);
        
//         return res.status(200).json(data);

//     } catch (error) {
//         console.error(error);
//         return res.status(404).send({mensaje: 'hubo un error'});
//     }
// })

// // esta ruta modifica los datos del user

// router.put('/user/:id', async function (req, res) {
//     const data  = req.body;
//     const { id } = req.params;

//     try {    
//         const update = await updateUser(data, id);

//             return res.status(200).json(update);
//     } catch (error) {
//         console.error(error);
//         return res.status(404).send({mensaje: 'hubo un error'});
//     }
// })

// module.exports = router;