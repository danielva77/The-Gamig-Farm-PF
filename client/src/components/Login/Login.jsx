import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css"


export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (

    <a onClick={() => loginWithRedirect()} className="login">
      <span className="loginSpan">INICAR SESION</span>
    </a>
  )
};