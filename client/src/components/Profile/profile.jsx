import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css"

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} className="imagenP"/>
        <h1 className="nameP">{user.given_name}</h1>
        {/* <p >Email: {user.email}</p> */}
        {console.log(user)}
      </div>
    )
  );
};