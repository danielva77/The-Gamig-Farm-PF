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


  const handleAddToFavorites = (item) => {
    dispatch(addToFavorites(item));
    localStorage.setItem("favItems", JSON.stringify([...favItems, item]));

  };


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
      className="card text-center bg-white"
      style={{ height: "104%", width: "100%", bottom: "15px" }}
      key={id}
    >
      <Link to={`/products/${id}`}>
        <img className="Image"
          src={img}
          alt="falta la imagen"
          height="180px"
          style={{ objectFit: "contain", 
        margin: "10px",
      top:"15px"}}
          class="card-img-top"
        />


        <div className="card-body ">
          <div className="title-container">
          <h4 className="card-title" style={{ fontSize: "20px" }}>
            {name}
          </h4>
          
          </div>
<br/>       
    
          <p className="card-text">Precio: ${price}</p>
        </div>
      </Link>
      <div className="fav">
              <button className="btn-favorito" onClick={() => handleAddToFavorites({id, name, price, img})}>Favoritos</button>
            </div>
    
      <div class="card-footer clear">
        {getItemQuantity(id) === 0 ? (
          <div >
            <button className="btn-favorito" onClick={handleAddToCart}>
              + Agregar al carrito
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
                  color: "black",
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