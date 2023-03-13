import React from "react";
import "./Home.css";
import Mandos from "../Mandos/Mando";

import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StoreItems from "../StoreItems/StoreItems";
import Paginado from "../Paginado/Paginado";
import { getAllCategories, getAllProd, idUser } from "../../redux/actions";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import Sort from "../Sort/Sort";
import ReloadPageBtn from "../ReloadPageBtn/ReloadPageBtn";
import NavBar from "../NavBar/NavBar";
import MarkFilter from "../MarkFilter/MarkFilter";

import { useAuth0 } from "@auth0/auth0-react";

import Footer from "../Footer/Footer";
import News from "../News/News";

export function Home() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  let idUser2 = useSelector((state) => state.idUsuarioActual);
  const google2 = useAuth0();

  let email = JSON.parse(localStorage.getItem("email"));
  
  // MODO OSCURO
  // const functionModo = () => {
  //   alert(
  //     "Todavia estamos en proceso sobre el cambio de modo oscuro a modo claro, gracias por entender..."
  //   );
  // };

  useEffect(() => { 
    dispatch(getAllProd());
    dispatch(getAllCategories());
    if (google2.isAuthenticated) {
      dispatch(idUser(email));
    } //This is a correct???
  }, [dispatch]);

  // 📨📨📨📨📨 POST PARA HACER LA PETICION 📨📨📨📨📨

  // const msj = { email }
  //   const enviarMensajeCorre =  () => {

  //    axios.post("http://localhost:3001/nuevoUsuario", msj);
  //     console.log(msj);
  //   }

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
          <Mandos />
        </div>

        <div>
          <ReloadPageBtn />
        </div>
        {/* 
        <div>
          <Noticas/>
        </div> */}
      </div>

      <div className="pagina">
        <p>Page -{currentPage}-</p>
      </div>
      <div></div>

      <StoreItems />
      <Paginado />
      <News />

      <Footer className="footer2" />

      {/* 📨📨📨   BOTON DE PRUEBA DEL POST  📨📨📨  */}

      {/* <button type="submit" className="btn btn-danger" onClick={enviarMensajeCorre}>Enviar correo al Mail</button> */}
    </div>
  );
}
export default Home;
