const nodemailer = require("nodemailer");

const enviarMail = (req, res) => {

  const { dataMail } = req.body

  console.log("req-body → ", dataMail);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "oscarzavalatuti@gmail.com", // generated ethereal user
      pass: "ugcjaculkhnwjmne" // generated ethereal password
    },
  });
  
  transporter.verify().then(() => {
    console.log("DATOS → ", dataMail.email);

  })
<


  // send mail with defined transport object
  transporter.sendMail({
    from: dataMail.email, // sender address
    to: "thegamingfarm01@gmail.com", // list of receivers
    subject: dataMail.asunto, // Subject line
    text: dataMail.mensaje // plain text body
    // html: `<b>${dataMail.mensaje}</b>`, // html body
  },
    // console.log("mensaje enviado con exito")
  );
  console.log("ENVIADO", dataMail);
}

module.exports = enviarMail