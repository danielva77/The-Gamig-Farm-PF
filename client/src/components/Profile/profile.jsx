import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link} from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css"
import axios from "axios";
import { getUser, cleanDetail } from "../../redux/actions";


export const Profile = () => {

  const { id } = useParams();
  const { isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const google = useAuth0();
  const user = useSelector(state => state.userID)


  useEffect(() => {
    dispatch(getUser(id))

    return () => dispatch(cleanDetail())
},[dispatch, id])


// console.warn(id) //⭐ Este id llega bien SOLAMENTE en 'my profile' 

  if (isLoading) {
    return <div>Loading...</div>;

  }else{

    const datosUser = {
      name: google.user.name,
      email: google.user.email,
      adress: " ",
      dateOfBirth : " ", 
      telephone : " ",
      avatar: google.user.picture,
      password: " "
    }

    axios.post("http://localhost:3001/createuser", datosUser)
  }

  return (
    isAuthenticated && (
      <div>
        <img src={google.user.picture} alt={google.user.name} className="imagenP"/>
        <h1 className="nameP">{google.user.given_name}</h1>       
  
      </div>
    )
  );
};