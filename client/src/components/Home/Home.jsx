import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import StoreItems from "../StoreItems/StoreItems"
import PriceFilter from "../PriceFilter/PriceFilter"
import Paginado from "../Paginado/Paginado";
import { changePage, getAllCategories, getAllProd, resetFilter } from "../../redux/actions";
import "./Home.css"
import Sort from "../Sort/Sort";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import ResetFiltersBtn from "../ResetFiltersBtn/ResetFiltersBtn";


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
        <Sort />
        <CategoryFilter />
        {/* <ResetFiltersBtn /> */}
        {/* <PriceFilter /> */}
      </div>
      <div>
        <Paginado />
      </div>
      <div><p>Page -{currentPage}-</p></div>


      <StoreItems />

    </>
  )
}
export default Home;