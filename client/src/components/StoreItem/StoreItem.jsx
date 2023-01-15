import React from "react";
import { useEffect, useState } from "react";
import "./StoreItem.css";
import { useShoppingCart } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";

export function StoreItem({ id, name, price, img }) {

  const {
    cart,
    getItemQuantity,
    removeFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
  } = useShoppingCart();

  const quantity = getItemQuantity(id)

  return (
    <div
      className="card text-center bg-dark"
      style={{ height: "100%", width: "100%" }}
      key={id}
    >
      <Link to={`/products/${id}`}>
        <img
          src={img}
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
      </Link>
      <div class="card-footer">
        {!cart.length ? (
          <div className="d-flex align-items-center">
            <button className="btn-primary" onClick={() => incrementItemQuantity(id)}>
              + Add to Cart
            </button>
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
              <button
                className="btn btn-outline-secondary rounded-0"
                onClick={() => decrementItemQuantity}
              >
                -
              </button>
              <div
                style={{
                  fontSize: "17px",
                  color: "white",
                }}
              >
                <span>{quantity}</span> in cart
              </div>
              <button
                className="btn btn-outline-secondary rounded-0"
                onClick={() => incrementItemQuantity(id)}
              >
                +
              </button>
            </div>
            <button
              className="btn btn-outline-danger rounded-0"
              size="sm"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
