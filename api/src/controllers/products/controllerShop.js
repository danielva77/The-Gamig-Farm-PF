const { Product, Mark, Category, Review, Store } = require("../../db")

const createshop = async (req, res) =>{
    const {email, idproduct , collection ,payment ,title, img, price, quantity} = req.body
    let llego = req.body;
    console.log("ESTOOO LLEGOOO BODY", llego)
    try {
        let createShop = await Store.findOrCreate({
            where: { 
                idproduct, 
                payment, 
                collection , 
                email,img,             
                price: price.toString(),
                title, 
                quantity: quantity.toString() },
            // collection , 
            // email, 
            // // idproduct, 
            // img, 
            // // payment, 
            // price: price.toString(),
            // title, 
            // quantity: quantity.toString()
        })

        res.send(200).status(createShop)
    console.log("COMPRA CARGADA CORRECTAMENTE")
    } catch (error) {
        res.status(404).send(error)
    }
}


const getShops = async (req,res) => {
    try {
        const shop = await Store.findAll();
        res.status(200).send(shop);
    } catch (error) {
        res.status(200).send(error)
    }
  }

module.exports={
    createshop,
    getShops
}