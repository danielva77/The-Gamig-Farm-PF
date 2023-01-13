const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "oscarzavalatuti@gmail.com", // generated ethereal user
      pass: "ugcjaculkhnwjmne", // generated ethereal password
    },
  });


  transporter.verify().then(() => {
    console.log("ready para enviar");
  })

export default info = () => {
      // send mail with defined transport object
       transporter.sendMail({
        from: 'oscarzavalatuti@gmail.com', // sender address
        to: "thegamingfarm01@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      },
      console.log("mensaje enviado con exito"));
}

