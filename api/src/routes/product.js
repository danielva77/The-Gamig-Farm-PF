const { Router } = require('express');
import { getAllProducts, createProducts } from '../controllers/products/Controllers';

const router = Router();

// router.delete('/:productId', deleteProduct);
router.get('/productos', getAllProducts),
// router.get("/:productId", getOneProduct);
router.post("/productos", createProducts);
// router.put('/', productEdit)



module.exports = router;