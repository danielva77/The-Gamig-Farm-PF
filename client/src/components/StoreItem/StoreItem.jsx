import React from "react";
import { useEffect, useState } from "react";
import "./StoreItem.css";
import { useShoppingCart } from "../../context/CartContext/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {addToFavorites} from "../../redux/actions";

export function StoreItem({ id, name, price, img, stock }) {
  const [quantity, setQuantity] = useState(0);
  // const [isInCart, setIsInCart] = useState(false);
  // const quantity = getItemQuantity(id);
  const favItems = useSelector(state => state.favItems);
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    if(favItems.find(item => item.id === id)) {
        console.log("Item already in favorites");
        return;
    }
    dispatch(addToFavorites({ id, name, price, img }));
}

  const {
    cart,
    getItemQuantity,
    removeFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
    addItem
  } = useShoppingCart();

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);


  const handleAddToCart = () => {
    addItem({ id, name, price, img, quantity, stock });
    // setQuantity(quantity + 1);
    // setIsInCart(true);
  };

  const handleRemoveFromCart = () => {
    // Obtén la cantidad actual del producto en el carrito
    // const quantity = getItemQuantity(id);
    // // Agrega el elemento al carrito utilizando el método addToCart del contexto
    // addToCart({ id, name, price, imgUrl, quantity });

    // incrementItemQuantity({ id, name, price, imgUrl, quantity });
    decrementItemQuantity(id);
    // setQuantity(quantity - 1);
    // setIsInCart(false);
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
      <div className="fav">
              <button className="btn-primary" onClick={handleAddToFavorites}>❤ Favoritos</button>
            </div>
      <div class="card-footer"></div>
      <div class="card-footer">
        {getItemQuantity(id) === 0 ? (
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
            {/* <div className="fav">
            <button className="btn-primary" onClick={handleAddToFavorites}>❤ Favoritos</button>
            </div> */}
            <div className="d-flex align-items-center" style={{ gap: ".5rem" }}>
              <button
                className="btn btn-outline-secondary rounded-0"
                onClick={() => decrementItemQuantity(id)}
              >
                -
              </button>
              <div
                style={{
                  fontSize: "17px",
                  color: "white",
                }}
              >
                <span>{getItemQuantity(id)}</span> in cart
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
