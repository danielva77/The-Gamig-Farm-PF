import React from "react"
import { StoreItem } from "../StoreItem/StoreItem"
import {useState, useEffect} from "react";
// import data from "../../data/items.json";
import {useDispatch, useSelector} from "react-redux";
import { getAllProd } from "../../redux/actions";




function StoreItems({currentVideogames}) {
  const dispatch = useDispatch();
  const allItems = useSelector(state => state.items);
  

  useEffect(() =>{
    dispatch(getAllProd());
  }, [dispatch]);
  console.log("array de items", allItems)


  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ gap: "20px" }}
      >
        {currentVideogames.map(card => (
          <div className="col-md-4  mt-4">
            <StoreItem
              name={card.title}
              imgUrl={card.img}
              price={card.price}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default StoreItems
