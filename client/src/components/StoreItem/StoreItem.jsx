import React from "react";
import { useEffect, useState } from "react";
import "./StoreItem.css";
import { CartContext } from "../../context/CartContext/CartContext";
import { useContext } from "react";
import { useShoppingCart } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";

export function StoreItem({ id, name, price, img }) {
  const [quantity, setQuantity] = useState(0);
  // const quantity = getItemQuantity(id);

  const {
    cart,
    addToCart,
    getItemQuantity,
    removeFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
  } = useShoppingCart();
  // const { getItemQuantity } = useShoppingCart();
  // useEffect(() => {
  //   setQuantity(getItemQuantity(id));
  // }, [cart, id]);
  const handleAddToCart = () => {
    // Obtén la cantidad actual del producto en el carrito
    const quantity = getItemQuantity(id);
    // // Agrega el elemento al carrito utilizando el método addToCart del contexto
    // addToCart({ id, name, price, imgUrl, quantity });

    incrementItemQuantity({ id, name, price, img, quantity });
    setQuantity(quantity + 1);
  };

  const handleRemoveFromCart = () => {
    // Obtén la cantidad actual del producto en el carrito
    const quantity = getItemQuantity(id);
    // // Agrega el elemento al carrito utilizando el método addToCart del contexto
    // addToCart({ id, name, price, imgUrl, quantity });

    // incrementItemQuantity({ id, name, price, imgUrl, quantity });
    decrementItemQuantity(id);
    setQuantity(quantity - 1);
  };

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
        {quantity === 0 ? (
          <div className="d-flex align-items-center">
            <button className="btn-primary" onClick={handleAddToCart}>
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
                onClick={handleRemoveFromCart}
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
                onClick={handleAddToCart}
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
