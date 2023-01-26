import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./login.css";

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
    <a className="login" onClick={() => loginWithRedirect() }>INICIAR SESIÓN</a>
  );
};