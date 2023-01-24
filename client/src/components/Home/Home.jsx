import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StoreItems from "../StoreItems/StoreItems";
import Paginado from "../Paginado/Paginado";
import { getAllCategories, getAllProd, idUser } from "../../redux/actions";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import Sort from "../Sort/Sort";
import ReloadPageBtn from "../ReloadPageBtn/ReloadPageBtn";
import NavBar from "../NavBar/NavBar";
import MarkFilter from "../MarkFilter/MarkFilter";
import { useParams, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios"

export function Home() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  let idUser2 = useSelector((state) => state.idUsuarioActual);
  const google2 = useAuth0();

  let email = JSON.parse(localStorage.getItem("email"));

  useEffect(() => {
    dispatch(getAllProd());
    dispatch(getAllCategories());
    if (google2.isAuthenticated) {
      dispatch(idUser(email));
    } //This is a correct???
  }, [dispatch]);













      

  
  
  
    const enviarMensajeCorre = async () => {
  
      axios.post("http://localhost:3001/nuevoUsuario", email);
      console.log(email);
    }
  












  return (
    <div>
      <NavBar />
      <div className="filtros">
        <div>
          <Sort />
        </div>

        <div>
          <CategoryFilter />
        </div>

        <div>
          <MarkFilter />
        </div>

        <div>
          <ReloadPageBtn />
        </div>
      </div>

      <div>
        <p>Page -{currentPage}-</p>
      </div>
      <div>
        <Paginado />
      </div>

      <StoreItems />


    


      <button className="btn btn-danger" onClick={enviarMensajeCorre}>Enviar correo al Mail</button>
            














    </div>
  );
}
export default Home;
