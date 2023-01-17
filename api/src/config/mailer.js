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
      user: "oscarzavalatuti@gmail.com", // generated ethereal user
      pass: "ugcjaculkhnwjmne" // generated ethereal password
    },
  });



// ENVIAR EL MENSAJE 

const mensaje = {
  from: infoInput.email, // sender address
  to: "thegamingfarm01@gmail.com", // list of receivers
  subject: infoInput.asunto, // Subject line
  text: infoInput.mensaje
}

// transporter.verify().then(() => {})

  transporter.sendMail(mensaje);
  console.log("Datos Enviado → ", infoInput);
}

const transporter = " "

module.exports = configurandoEmail