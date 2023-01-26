const nodemailer = require("nodemailer");

// CONFIGURANDO EL NODEMAILER

// ENVIAR MENSAJE

const configurandoEmail = (email) => {

  // const email  = req.body

  // console.warn("Correo que le llega por req.body → ", email.email);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "thegamingfarm01@gmail.com", // generated ethereal user
      pass: "rveuzhibqljnpztq"},
  });



// ENVIAR EL MENSAJE 
 
// Iniciar Sesion por primera vez 👦🏻

const mensajeLogin = {
  from: " ", // sender address
  to: email , // list of receivers
  subject: "Bienvenido a la Comunidad 🎉", // Subject line
  html: `Hola que tal? 👋🏻 <br> <br>
  Estamos felices de que seas parte de nuestra comunidad, te damos la bienvenidad y cualquier consulta puedes escribir a nuestro soporte  <br>
  📩 'thegamingfarm01@gmail.com'
  
  <br> <br> <br> <br>
  <b> Esto recien Empieza 🔥 </b>`
}

transporter.verify().then(() => {})

  transporter.sendMail(mensajeLogin);
  // console.log("Datos Enviado → ", cart);
}

module.exports = configurandoEmail


