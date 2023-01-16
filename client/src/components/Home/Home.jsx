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

    </div>
  )
}
export default Home;