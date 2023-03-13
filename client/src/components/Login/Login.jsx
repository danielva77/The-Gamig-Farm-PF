import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./login.css";
import Access from "../Assets/acceso.png"

export const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const saveToken = async () => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        localStorage.setItem("access_token", token);
      }
    };
    saveToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <img className="login" src={Access} onClick={() => loginWithRedirect() }  />
  );
};