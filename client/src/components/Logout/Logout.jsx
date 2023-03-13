import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Logout.css"

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (

  
      <a onClick={() => logout({ returnTo: window.location.origin })} className="logout">X</a>
   

  );
};
