import React from "react"
import "./StoreItem.css"

export function StoreItem({ id, name, price, imgUrl }) {
  const quantity = 0
  return (
    <div className="card text-center bg-dark" style={{ height: "400px", width: "350px" }}>
      <img
        src={imgUrl}
        alt="falta la imagen"
        height="180px"
        style={{ objectFit: "contain" }}
        class="card-img-top"
      />

      <div className="card-body text-light">
        <h4 className="card-title" style={{ fontSize: "18px" }}>
          {name}
        </h4>
        <p className="card-text text-secondary">${price}</p>
      </div>
      <div class="card-footer">
        {quantity === 0 ? (
          <div className="d-flex align-items-center">
            <button className="btn-primary">+ Add to Cart</button>
          </div>

        ) : (
          <div
            className="d-flex flex-column align-items-center "
            style={{ gap: ".5rem" }}
          >
            <div className="fav">
              <button className="btn-primary">+ Favoutires</button>
            </div>
            <div className="d-flex align-items-center" style={{ gap: ".5rem" }}>
              <button className="btn btn-outline-secondary rounded-0">-</button>
              <div
                style={{
                  fontSize: "17px",
                  color: "white",
                }}
              >
                <span>{quantity}</span> in cart
              </div>
              <button className="btn btn-outline-secondary rounded-0">+</button>
            </div>
            <button className="btn btn-outline-danger rounded-0" size="sm">
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
