import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Logout.css"

export const LogoutButton = () => {
  const { logout } = useAuth0();

  function handleclick(){
    logout({ returnTo: window.location.origin });
    localStorage.clear();
  }

  return (

  
      // <a onClick={() => logout({ returnTo: window.location.origin })} className="logout">Salir</a>
      <a onClick={() => handleclick()} className="logout">Salir</a>

  );
};
