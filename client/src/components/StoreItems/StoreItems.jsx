import React from "react"
import { StoreItem } from "../StoreItem/StoreItem"
import {useState, useEffect} from "react";
import data from "../../data/items.json";
import {useDispatch, useSelector} from "react-redux";
import { getAllProd } from "../../redux/actions";
import "./Storeee.css";




function StoreItems() {
  const dispatch = useDispatch();
  const allItems = useSelector(state => state.items);
  

  useEffect(() =>{
    dispatch(getAllProd());
  }, [dispatch]);
  console.log("array de items", allItems)


  return (
    <div className="container">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ gap: "20px" }} 
      >
        {allItems.map(card => (
          <div className="col-md-4  mt-4">
            <StoreItem
              name={card.name}
              imgUrl={card.imgUrl}
              price={card.price}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default StoreItems
