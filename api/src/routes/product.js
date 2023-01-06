const { Router } = require('express');
import { getAllProducts, createProducts } from '../controllers/products/Controllers';

const router = Router();

// router.delete('/:productId', deleteProduct);
router.get("/prod", getAllProducts);



// router.get("/:productId", getOneProduct);
router.post("/prod", createProducts);
// router.put('/', productEdit)



module.exports = router;