import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { removeFromFav } from "../../redux/actions";
import { setFavorites } from "../../redux/actions";
import Fav from "../Assets/me-gusta.png";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "../Favorites/Favorites.css";
import { StoreItem } from "../StoreItem/StoreItem";

const Favoritos = () => {
  // const [favItems, setFavItems] = useState([]);
  const favItems = useSelector((state) => state.favItems);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleRemoveFromFav = (id) => {
    dispatch(removeFromFav(id));
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("favItems");
    if (storedItems) {
      const items = JSON.parse(storedItems);
      dispatch(setFavorites(items));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("favItems", JSON.stringify(favItems));
  }, [favItems]);

  return (
    <>
      <button className="img-fluid botonFavoritos" onClick={() => setShow(true)}>
  <img src={Fav} alt="imagen" style={{width: "22px"}}/>
</button>

      <Offcanvas
        show={show}
        placement="end"
        onHide={() => setShow(false)}
        style={{
          height: "60vh",
          margin: "146px 0px",
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
                  onClick={() => handleRemoveFromFav(item.id)}
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
