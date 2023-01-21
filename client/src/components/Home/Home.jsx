import React from "react";
import "./Home.css"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StoreItems from "../StoreItems/StoreItems"
import Paginado from "../Paginado/Paginado";
import { getAllCategories, getAllProd } from "../../redux/actions";
import CategoryFilter from "../CategoryFilter/CategoryFilter"
import Sort from "../Sort/Sort"
import ReloadPageBtn from "../ReloadPageBtn/ReloadPageBtn"
import NavBar from "../NavBar/NavBar";
import MarkFilter from "../MarkFilter/MarkFilter";
import { useParams, Link} from "react-router-dom"



export function Home() {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.currentPage);
  
  useEffect(() => {
    dispatch(getAllProd())
    dispatch(getAllCategories())
  }, [dispatch]);
  

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
      <Link to={`/myProfile/70c87f8e-e26e-43d7-a496-8bf24007d8db`}><button className="editar">VER MI PERFIL</button></Link>
    </div>
  )
}
export default Home;