const nodemailer = require("nodemailer");

// CONFIGURANDO EL NODEMAILER

const configurandoEmail = (req, res) => {

  const { infoInput } = req.body

  console.log("req-body → ", infoInput);

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
const mensaje = {
  from: infoInput.email, // sender address
  to: "oscarzavala2909@gmail.com", // list of receivers
  subject: "Bienvenido a la Comunidad 🎉", // Subject line
  html: `Hola que tal? 👋🏻 <br> <br>
  Estamos felices de que seas parte de nuestra comunidad, te damos la bienvenidad y cualquier consulta puedes escribir a nuestro soporte  <br>
  📩 'thegamingfarm01@gmail.com'
  
  <br> <br> <br>
  <b> Esto recien Empieza 🔥 </b>`
}

// Al terminar la compra
const mensaje2 = {
  from: infoInput.email, // sender address
  to: "oscarzavala2909@gmail.com", // list of receivers
  subject: "Compra finalizada con exito", // Subject line
  text: "Estos fueron los productos que compraste"
}

transporter.verify().then(() => {})

  transporter.sendMail(mensaje);
  console.log("Datos Enviado → ", infoInput);
}

const transporter = " "

module.exports = configurandoEmail