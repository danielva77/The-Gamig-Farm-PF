import React from "react";
import { useEffect, useState } from "react";
import "./StoreItem.css";
import { useShoppingCart } from "../../context/CartContext/CartContext";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavorites } from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

export function StoreItem({ id, name, price, img, stock }) {

  let idUser2 = useSelector((state) => state.idUsuarioActual);

  console.log("BANEADOOO", idUser2)

  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  let email = JSON.parse(localStorage.getItem("email"));
  let productId = id;
  let title = name;

  let favoritos = {
    email: email,
    productId: productId,
    img: img,
    price: price,
    title: title,
  };

  const handleAddToFavorites = () => {
    if (isAuthenticated) {
      Swal.fire({
        title: "Producto agregado a favoritos",
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: "Ok",
        denyButtonText: "Don't save",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          dispatch(addToFavorites(favoritos));
          window.location.reload();
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } else {
      Swal.fire({
        title: "Inicie sesión primero",
        text: "Debe iniciar sesión antes de continuar",
        icon: "warning",
        confirmButtonText: "OK",
      });
      loginWithRedirect({});
    }
  };

  const {
    cart,
    getItemQuantity,
    removeFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
    addItem,
  } = useShoppingCart();

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = () => {
    addItem({ id, name, price, img, quantity, stock });
  };

  const handleRemoveFromCart = () => {
    decrementItemQuantity(id);
  };

  return (
    <div
      className="card text-center bg-white"
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

        <div className="card-body ">
          <h4 className="card-title" style={{ fontSize: "20px" }}>
            {name}
          </h4>
          <br />
          <p className="card-text">${price}</p>
        </div>
      </Link>
      <div className="fav">
        <button className="btn-favorito" onClick={handleAddToFavorites}>
          ❤ Favoritos
        </button>
      </div>
      <div class="card-footer"></div>
      { !(idUser2 && !idUser2.isActive) ?
      <div class="card-footer">
        
        {getItemQuantity(id) === 0 ? (
          <div>
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
      : null }
    </div>
  );
}
