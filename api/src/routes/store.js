const { Router } = require('express');
const { User, Store } = require('../db');

const router = Router();

const newshopping = async (id, data) => {

    const user = await User.findByPK(id)

    const store= await Store.create(data)
        // detail: "[{id: 1, cant: 1, producto: 'monitor', precio: '5000'},{id: 1, cant: 2, producto: 'cpu', precio: '10000'}]",
        // total: '15000',
        // state: 'entregado',
        // pay: 'credito',
    
    await user.addStore(store)

    return 'Se ha efectuado la compra exitosamnete'

}

router.post('/store/:id', async function (req, res) {
    const { id } = req.params;
    const { data } = req.body;
    try {
        const shop = await newshopping(id, data);
    
     return res.status(200).json(shop)        

    } catch (error) {
        console.error(error);
        return res.status(404).send({mensaje: 'hubo un error'});
    }
})