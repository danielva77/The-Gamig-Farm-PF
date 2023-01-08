import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import StoreItems from "../StoreItems/StoreItems"
import Filter from "../Filter/Filter"
import Paginado from "../Paginado/Paginado";
import { changePage, getAllCategories, getAllProd, resetFilter } from "../../redux/actions";
import "./Home.css"


export function Home() {
  const dispatch = useDispatch();

  const currentPage = useSelector(state => state.currentPage);



  useEffect(() => {
    dispatch(getAllProd());
    dispatch(resetFilter())
  }, [dispatch]);


  return (
    <>

      {/* <NavBar/> */}
      <div className="Home">
        <Filter />
      </div>
      <div>
        <Paginado
        // videogamesPerPage={videogamesPerPage}
        // sorted={sorted.length}
        // paginado={paginado}
        />
      </div>
      <div><p>Page -{currentPage}-</p></div>


      <StoreItems
      // currentVideogames={currentVideogames} 
      />

    </>
  )
}
export default Home;