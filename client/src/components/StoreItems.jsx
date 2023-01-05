import React from "react"
import { StoreItem } from "./StoreItem"
import data from "../data/items.json"

function StoreItems() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ gap: "20px" }}
      >
        {data.map(card => (
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
