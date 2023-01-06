const { Router } = require('express');
import { getAllProducts, createProducts} from "../controllers/products/Controllers.js"

const router = Router();

// router.delete('/:productId', deleteProduct);
router.get('/', getAllProducts),
// router.get("/:productId", getOneProduct);
router.post("/", createProducts);
// router.put('/', productEdit)



module.exports = router