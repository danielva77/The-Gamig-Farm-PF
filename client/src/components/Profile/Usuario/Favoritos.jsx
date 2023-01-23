import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getAllProd } from "../../../redux/actions";
import { removeFromFav } from "../../../redux/actions";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import MarkFilter from "../../MarkFilter/MarkFilter";
import CategoryFilter from "../../CategoryFilter/CategoryFilter";
import Paginado from "../../Paginado/Paginado";
import Favoritos from "../../Favorites/Favorites"





export function Favor() {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.currentPage);

  useEffect(() => {
    dispatch(getAllProd());
    dispatch(getAllCategories());
  }, [dispatch]);

  const favItems = useSelector((state) => state.favItems);
  const handleRemoveFromFav = (id) => {
    dispatch(removeFromFav(id));
  };
  
  
  
  
  return (
    <div>
      <div className="home-container">
        <NavBar />

        <CategoryFilter />
        <MarkFilter />
        <Favoritos/>
        {/* <PriceFilter /> */}
      </div>
      <div>
        <Paginado />
      </div>
      <div>
        <p>Page -{currentPage}-</p>
      </div>
      
      
        <ul className="scrollable">
          {favItems.map((item) => (
            <li key={item.id}>
              <Link to={`/products/${item.id}`}>
                <img class="favoritos-img" style={{
                  width:"200px",
                  height: "200px",
                  objectFit: "cover",
                  display:"",
                  alignItems:"center",
                  justifyContent:"center"

                }} src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
              </Link>
              <p>${item.price}</p>
              <button className="removeBtn" onClick={() => handleRemoveFromFav(item.id)}>
                Eliminar
              </button>
            </li> 
          ))}
          </ul>
     </div>
  )
};

