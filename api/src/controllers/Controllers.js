
const { Product, Category } = require('../db');


const getAllProducts = async() => {
	let products = await Product.findAll({
		include: [{
			model: Category,
			attributes: ['name'],
			through: {
				attributes: [],
			},
		}]
	});
return products;

}

module.exports = {
  getAllProducts
};