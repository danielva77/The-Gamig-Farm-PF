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

  const currentItems = useSelector(state => state.currentItems);
  const loadingState = useSelector(state => state.loading)

  return (
    <div className="container">
      <div
        className="row"
        style={{ gap: "20px", backgroundColor: "#black" }}
      ><div className="row row-cols-1 row-cols-md-2 g-4">
          {currentItems?.map((card) => {
            return (
              // <Link to={"/products/" + card.id} style={{ textDecoration: 'none' }}>

              <div className="col">
                <StoreItem
                  id={card.id}
                  name={card.title}
                  imgUrl={card.img}
                  price={card.price}
                />
              </div>
              // </Link>
            )
          })}
        </div>
      </div>
    </div >
  )
}

export default StoreItems
