import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css"
import info from "../nodemailer/nodemailer";
import info from "../"

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }


// ENVIAR EMAIL



  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} className="imagenP"/> 
        <h1 className="nameP">{user.given_name}</h1>
      
        {/* {console.log(user)} */}
        
       
        <button type="submit" className="mt-5" onClick={console.log(user.email)}>enviar msj</button>
        
      </div>
    )
  );
};









