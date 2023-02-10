import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { removeFromFavorites } from "../../redux/actions";
import { setFavorites } from "../../redux/actions";
import { getFavorites } from "../../redux/actions";
import { getUserFavorites, deleteFavorites } from "../../redux/actions";
import Fav from "../Assets/favorito.png";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import "../Favorites/Favorites.css";
import Swal from "sweetalert2";

const Favoritos = () => {
  const user = useSelector((state) => state.user);
  const favoritos = useSelector((state) => state.favItems);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleRemoveFromFavorites = (id) => {
    Swal.fire({
      title: "Eliminar items de sus favoritos?",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "Cancel",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteFavorites(id));
        window.location.reload();
      }
    });
  };

  let email = JSON.parse(localStorage.getItem("email"));

  let favItems = favoritos.filter((e) => e.email == email);
  useEffect(() => {
    dispatch(getUserFavorites());
  }, [dispatch]);

  return (
    <>
      <button className="btn btn float-left fav-btn" onClick={() => setShow(true)}>
        <img src={Fav} alt="imagen" />
      </button>
      <Offcanvas
        show={show}
        placement="end"
        onHide={() => setShow(false)}
        style={{
          height: "60vh",
          margin: "73px 0px",
        }}
      >
        <h3 className="header">Tus favoritos</h3>
        <ul>
          <ul className="scrollable">
            {favItems.map((item) => (
              <li key={item.id}>
                <Link to={`/products/${item.id}`}>
                  <img
                    class="favoritos-img"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    src={item.img}
                    alt={item.name}
                  />
                  <h4>{item.name}</h4>
                </Link>
                <p>${item.price}</p>
                <button
                  className="removeBtn"
                  onClick={() => handleRemoveFromFavorites(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </ul>
      </Offcanvas>
    </>
  );
};

export default Favoritos;
