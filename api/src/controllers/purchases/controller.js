// const createPurchase = async (req, res) => {
//     try {
//       // obtener información de la compra de req.body
//       const { date, detail, total, pay, state, userId } = req.body;
//       // crear una nueva compra en la base de datos con la información obtenida
//       const newPurchase = await Store.create({ date, detail, total, pay, state, userId });
//       // responder con un mensaje de éxito
//       res.status(201).json({ message: "Purchase created successfully", purchase: newPurchase });
//     } catch (error) {
//       // responder con un mensaje de error
//       res.status(500).json({ message: "Error creating purchase", error });
//     }
//   };
  
//   const getUserPurchases = async (req, res) => {
//     try {
//       // obtener el ID del usuario de req.params o req.user
//       const userId = req.params.id;
//       // buscar las compras relacionadas con ese usuario en la base de datos
//       const purchases = await Store.findAll({ where: { userId }, include: [Product] });
//       // responder con las compras encontradas
//       res.status(200).json(purchases);
//     } catch (error) {
//       // responder con un mensaje de error
//       res.status(500).json({ message: "Error getting user purchases", error });
//     }
//   };
  


//   module.exports={
//     createPurchase,
//     getUserPurchases
//   }