const {
  Product,
  Mark,
  Category,
  Review,
  Store,
  Favorite,
  User,
} = require("../../db");

const addFavorite = async (req, res) => {
  const { email, idproduct, img, price, title } = req.body;
  let llego = req.body;
  console.log("ESTOOO LLEGOOO BODY", llego);

  try {
    let addFavorite = await Favorite.create({
      email,
      idproduct,
      img,
      price: price.toString(),
      title,
    });
    res.status(200).send("agregado a favoritos");
    console.log("agregado a favoritos correctamente");
  } catch (error) {
    res.status(404).send(error);
  }
};

const addToFavorites = async (req, res) => {
  const { email, productId, img, price, title, userId } = req.body;
  console.log("esto llego al controller addfavorites", req.body);

  try {
    // Buscar al usuario por su email
    const user = await Favorite.create({
      email,
      productId,
      img,
      price,
      title,
      userId,
    });
    res.status(200).send(user);
  } catch (error) {
    console.log("por esto no posteo", error);
    res.status(400).send(error);
  }
};

const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.findAll();
    res.status(200).send(favorites);
  } catch (error) {
    res.status(400).send(error);
  }
};

const removeFromFavorites = async (req, res) => {
  const { email, productId } = req.body;
  try {
    // Buscar al usuario por su email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }
    // Remover el producto de los favoritos del usuario
    await user.removeFavorite(productId);
    res.status(200).send("Producto removido de favoritos");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addFavorite,
  getFavorites,
  addToFavorites,
  removeFromFavorites,
};
