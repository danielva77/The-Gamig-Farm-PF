const nodemailer = require("nodemailer");

// CONFIGURANDO EL NODEMAILER

const configurandoEmail = (req, res) => {

  const  cart  = req.body

  console.log("req-body → ", cart);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "thegamingfarm01@gmail.com", // generated ethereal user
      pass: "rveuzhibqljnpztq"},
  });



// ENVIAR EL MENSAJE 
 
// Iniciar Sesion
const mensajeLogin = {
  from: "infoInput.email", // sender address
  to: "oscarzavala2909@gmail.com", // list of receivers
  subject: "Bienvenido a la Comunidad 🎉", // Subject line
  html: `Hola que tal? 👋🏻 <br> <br>
  Estamos felices de que seas parte de nuestra comunidad, te damos la bienvenidad y cualquier consulta puedes escribir a nuestro soporte  <br>
  📩 'thegamingfarm01@gmail.com'
  
  <br> <br> <br>
  <b> Esto recien Empieza 🔥 </b>`
}




// SUMANDO PRICE

const total = () =>{
  
  let suma = 0

  for (let i = 0; i < cart.length; i++) {
    
    const sumar =  suma += cart[i].price
    return sumar
}
}



// Al terminar la compra
const mensajeCompra = {
  from: " ", // sender address
  to: "oscarzavala2909@gmail.com", // list of receivers
  subject: "Compra finalizada con exito 🛍", // Subject line
  html: `<h1><u><cite>Estos fueron los productos que compraste:</cite></u></h1> <br> 

  
  ${cart.map(e =>  {
    return `
    <h2>Nombre: <cite>${e.name}</cite></h2> <h3>Precio: <cite>$${e.price}</cite></h3> <h3>Cantidad: <cite>${e.quantity}</cite></h3>
    <img src=${e.img} width=500px height=500px>` 
})} 


<br><br><br>
 <h2>Total: <cite>$${cart.reduce((total, product) => total + product.price, 0)}</cite></h2> 

`
}

transporter.verify().then(() => {})

  transporter.sendMail(mensajeCompra);
  console.log("Datos Enviado → ", cart);
}

module.exports = configurandoEmail





// CONFIGURAR COMO VIENE EL TOTAL DEL PRECIO