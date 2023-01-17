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



  transporter.verify().then(() => {})

  // send mail with defined transport object
  transporter.sendMail({
    from: "oscarzavala2909@gmail.com", // sender address
    to: "thegamingfarm01@gmail.com", // list of receivers
    subject: infoInput.asunto, // Subject line
    text: infoInput.mensaje
  },);

  console.log("Datos Enviado → ", infoInput);
}


const transporter = " "

module.exports = configurandoEmail