import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css"
// import { transporter } from "../nodemailer/nodemailer";
// const nodemailer = require("nodemailer");

export const LoginButton = () => {
  const { loginWithRedirect, user } = useAuth0();


const crearUsuario = async() =>{
  await loginWithRedirect()  
}


  return (  

    <a onClick={() => crearUsuario()}  className="login">
  <span>INICIAR SESION</span>
  </a>  //onClick={() => info()}
)
};