import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css"
// import { transporter } from "../nodemailer/nodemailer";
// const nodemailer = require("nodemailer");

export const LoginButton = () => {
  const { loginWithRedirect, user } = useAuth0();





  return (  

    <a onClick={() => loginWithRedirect()}  className="login">
  <span>INICAR SESION</span>
  </a>  //onClick={() => info()}
)
};