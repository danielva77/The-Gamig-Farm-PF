const { Router } = require('express');
const { Category, Mark, Product} = require('../db');
const p = require('../../productos.json');

const router = Router()
//routes cargar db
const consola = [{title:'PlayStation'}, {title:'PlayStation 2'}, {title:'PlayStation 3'},{title:'PlayStation 4'} , {title: 'PlayStation 5'}, {title: 'Xbox'}, {title: 'Xbox 360'}, {title:'Xbox One'}, {title:'Sega Mega Drive'}, { title:'Nintendo 64'},
{title: 'Nintendo DS'}, {title: 'Wii'},{title: 'Nintendo Switch'}, {title: 'Nintendo (NES)'} ,{title: 'Nintendo 3DS'} ,{title: 'PSP'}  ];

const mark = [{title: 'Juegos'}, {title: 'Mandos'}];

const createCategory = async () => {
  try {
    await Category.bulkCreate(consola)  
   return  'Se crearon categorias'
  } catch (error) {
      console.log(error)
  }

}

const createMark = async () => {
  try {
    await Mark.bulkCreate(mark)  
    return  'Se crearon juegos y mandos'
  } catch (error) {
      console.log(error)
  }
  
}

const createProduct = async () => {
  try {
let category = '';
let marca = '';
let producto = '';
let allProducts = []
let agregarCategory = []
let agregarMark = []


  for (let i = 0; i < p.products.length; i++) {
      category = await Category.findOne({
          where: { title: p.products[i].category }
      })
      marca = await Mark.findOne({
          where: { title: p.products[i].mark }
      })
      producto = await Product.create({
          title: p.products[i].title,
          price: p.products[i].price,
          detail: p.products[i].detail,
          img: p.products[i].img,
          stock: p.products[i].stock,
      })

      let addM = producto.addMark(marca);
      let addC = producto.addCategory(category);
      allProducts.push(producto)
      agregarCategory.push(addC)
      agregarMark.push(addM)
  }

 await Promise.all([...allProducts, ...agregarCategory, ...agregarMark])

  return 'La base de datos se ha cargado con exito'
  } catch (error) {
      console.log(error)
  }
}

const filterByMandos = async () => {
  const data = await Mark.findAll({
    where: { title: "Mandos" },
    include: {
      model: Product,
      attributes: ["id", "title", "price", "detail", "img", "stock", "mark"],
      through: {
        attributes: [],
      },
    },
  });
  return data[0].Products;
};

const filterByJuegos = async () => {
  const data = await Mark.findAll({
    where: { title: "Juegos" },
    include: {
      model: Product,
      attributes: ["id", "title", "price", "detail", "img", "stock", "mark"],
      through: {
        attributes: [],
      },
    },
  });
  return data[0].Products;
};

const filterByCategory = async (consola) => {
  const data = await Category.findAll({
    where: { title: consola },
    include: {
      model: Product,
      attributes: ["id", "title", "price", "detail", "img", "stock", "mark"],
      through: {
        attributes: [],
      },
    },
  });
  return data[0].Products;
};


const filterByCategoryAndMark = async (mark, category) => {
    if(category && mark) {
    const data = await Product.findAll({
        include:
         [
            { model: Category, where: { title: category } },
            { model: Mark, where: { title: mark } }
        ],
        attributes: ['id','title', 'price', 'detail', 'img', 'stock' ]
    });
    return data;

    } else if(!category && mark === 'Juegos') {
        return filterByJuegos()
    } else if(!category && mark === 'Mandos') {
        return filterByMandos()
    } else if(category && !mark) {
        return filterByCategory()
    }
    
}

router.get('/db', async (req, res) => {
try {
  const categories = await createCategory();
  const marks = await createMark();
// await createCategory();
// await createMark();

  const products = await createProduct();

  return res.status(200).json(products)

} catch (error) {
  console.log(error)
  return res.status(404).json(error)
}
})

// router.get('/filterByMandos', async (req, res) => {
//     try {
//         const products = await filterByMandos();

//         return res.status(200).json(products)
        
//     } catch (error) {
//         console.log(error)
//   return res.status(404).json(error)
//     }
// })

// router.get('/filterByJuegos', async (req, res) => {
//     try {
//         const products = await filterByJuegos();

//         return res.status(200).json(products)
        
//     } catch (error) {
//         console.log(error)
//   return res.status(404).json(error)
//     }
// })

// router.get('/filterByCategory', async (req, res) => {
//     try {
//         const { consola } = req.query;
//         const products = await filterByCategory(consola);

//         return res.status(200).json(products)
        
//     } catch (error) {
//         console.log(error)
//   return res.status(404).json(error)
//     }
// })

router.get('/filter', async (req, res) => {
    try {
            const { tipo, consola} = req.query;
            
            const data = await filterByCategoryAndMark(tipo, consola);
            res.json(data);
        
    } catch (error) {
        console.log(error)
  return res.status(404).json(error)
    }
})
module.exports = router;