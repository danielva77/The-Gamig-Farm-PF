import React from "react"
import { StoreItem } from "../StoreItem/StoreItem"
import { useState, useEffect } from "react";
// import data from "../../data/items.json";
import { useDispatch, useSelector } from "react-redux";
import { getAllProd } from "../../redux/actions";
import "./Storeee.css";
import { Link } from "react-router-dom";


function StoreItems({ currentVideogames }) {
  const dispatch = useDispatch();
  const allItems = useSelector(state => state.items);


  useEffect(() => {
    dispatch(getAllProd());
  }, [dispatch]);
  console.log("array de items", allItems)

  return (
    <div className="divG">
      {/* <h1 className="productosT">PRODUCTOS</h1> */}
      <div className="modelo3">
        {currentVideogames.map((card) => {
          return (
            <Link to={"/products/" + card.id}>
              <div className="modelo">
                <StoreItem
                  id={card.id}
                  name={card.title} 
                  imgUrl={card.img}
                  price={card.price}
                />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default StoreItems