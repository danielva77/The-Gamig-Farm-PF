import React from "react";
import "./Home.css"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StoreItems from "../StoreItems/StoreItems"
import Paginado from "../Paginado/Paginado";
import { getAllCategories, getAllProd, idUser } from "../../redux/actions";
import CategoryFilter from "../CategoryFilter/CategoryFilter"
import Sort from "../Sort/Sort"
import ReloadPageBtn from "../ReloadPageBtn/ReloadPageBtn"
import NavBar from "../NavBar/NavBar";
import MarkFilter from "../MarkFilter/MarkFilter";
import { useParams, Link} from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";




export function Home() {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.currentPage);
  let idUser2 = useSelector((state) => state.idUsuarioActual)
  const google2 = useAuth0();
  
  // useEffect(() => {
  //   dispatch(idUser(google2.user.email))
  // },[])
  let email= JSON.parse(localStorage.getItem("email"));

  useEffect(() => {
    dispatch(getAllProd())
    dispatch(getAllCategories())
    if(google2.isAuthenticated){dispatch(idUser(email))} //This is a correct???
  }, [dispatch]);

  //   useEffect(() => {
  //     console.log("HARTO!", email)
  //  dispatch(idUser(email)) //This is a correct???
  //   }, [dispatch]);





  return (
    <div>

      <div className="home-container">
        <NavBar />

        <Sort />
        <CategoryFilter />
        <MarkFilter />
        <ReloadPageBtn />
        {/* <PriceFilter /> */}
      </div>
      <div>
        <Paginado />
      </div>
      <div><p>Page -{currentPage}-</p></div>

 
      <StoreItems />
      {/* {google2.isAuthenticated ? <Link to={`/myProfile/${idUser2.id}`}><button className="editar">VER MI PERFIL</button></Link> : <div></div>} */}
    {/* {idUser(google2.user.email)} */}
    {/* <Link to={`/myProfile/${idUser2.id}`}><button className="editar">VER MI PERFIL</button></Link> */}
    
    </div>
  )
}
export default Home;