const nodemailer = require("nodemailer");

// CONFIGURANDO EL NODEMAILER

// ENVIAR MENSAJE

const configurandoEmail = (req, res) => {

  const { cart, email } = req.body

  console.warn("LO QUE LLEGA DEL MENSAJE POR req.body → ", cart);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "thegamingfarm01@gmail.com", // generated ethereal user
      pass: "rveuzhibqljnpztq"
    },
  });



  // TOTAL DE TODA LA COMPRA == MULTIPLICAR PRECIO X CANTIDAD 

  const accountTotal = () => {

    const precio = cart.map(e => e.price * e.quantity)
    let total = 0;


    precio.forEach(function (precio) {
      total += precio;
    });

    return total
  } // ✅✅✅✅✅✅✅✅✅✅✅✅✅








  // Al terminar la compra 🛒
  const mensajeCompra = {
    from: " ", // sender address
    to: email, // list of receivers
    subject: "Compra finalizada con exito 🛍", // Subject line
    html: `<h1><u><cite>Estos fueron los productos que compraste:</cite></u></h1> <br> 


  ${cart.map(e => {
      return `
    <h2>Nombre: <cite>${e.name}</cite></h2> <h2>Precio: <cite>$${e.price}</cite></h2> <h2>Cantidad: <cite>${e.quantity}</cite></h2>
    <h2>Total del producto: $${e.price * e.quantity}</h2>
    <img src=${e.img} width=500px height=500px>
    <br> <br> <br> <hr/>`
    })} 


<br><br><br>

 <h1>Total de la Compra: <cite>$${accountTotal()} 🛒</cite></h1> 
                                             
`
  }

  transporter.verify().then(() => { })

  transporter.sendMail(mensajeCompra);
  console.log("Datos Enviado → ", cart);
}

module.exports = configurandoEmail


