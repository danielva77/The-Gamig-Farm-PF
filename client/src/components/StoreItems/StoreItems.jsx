import React from "react"
import { StoreItem } from "../StoreItem/StoreItem"
import { useState, useEffect } from "react";
// import data from "../../data/items.json";
import { useDispatch, useSelector } from "react-redux";
import { getAllProd } from "../../redux/actions";
import "./Storeee.css";
import { Link } from "react-router-dom";

function StoreItems() {
  const currentItems = useSelector(state => state.currentItems);

  const items = useSelector(state => state.items)

  // ordenamiento
  const sortBy = useSelector(state => state.sortBy);

  let sortedItems = items

  // Sort items
  if (sortBy === 'Min price') {
    sortedItems = sortedItems.sort((a, b) => {
      return a.price - b.price;
    })
  } else if (sortBy === 'Max price') {
    sortedItems = sortedItems.sort((a, b) => {
      return b.price - a.price
    })
  }

  return (
    <div className="container">
      {console.log(sortBy)}
      <div
        className="row"
        style={{ gap: "20px", backgroundColor: "#black" }}
      ><div className="row row-cols-1 row-cols-md-2 g-4">
          {sortedItems?.map((card) => {
            return (
              <Link to={"/products/" + card.id} style={{ textDecoration: 'none' }}>

                <div className="col">
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
    </div >
  )
}

export default StoreItems
