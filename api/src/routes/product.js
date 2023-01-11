const { Router } = require('express');
const axios = require("axios");
// Modelos de la base de datos ↓
import { getAllProducts } from '../controllers/products/Controllers';
import { createProducts } from '../controllers/products/Controllers';

const router = Router()
// const { Router } = require('express');


// router.delete('/:productId', deleteProduct);
router.get("/prod", getAllProducts);



// router.get("/:productId", getOneProduct);
router.post("/prod", createProducts);
// router.put('/', productEdit)



module.exports = router;