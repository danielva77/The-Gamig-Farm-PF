
const express = require('express')
const router = express.Router()


router.get('/user/:id/history', (req, res) => {
    const userId = req.params.id

    res.json({compras: [/* aqui las compras */]})
});


router.get('/compra/:id', (req, res) => {
    const compraId = req.params.id

    res.json({detalles: {/* aqui los detalles */}})
});

router.post('/compra', (req, res) => {
    const compra = req.body;

    res.json({mensaje: "Compra agregada exitosamente"})
});

router.put('/compra/:id', (req, res) => {
    const compraId = req.params.id;
    const compra = req.body;

    res.json({mensaje: "Compra actualizada exitosamente"})
});



module.exports = router;