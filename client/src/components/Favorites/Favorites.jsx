import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { removeFromFav } from "../../redux/actions";
import Fav from "../Assets/favorito.png";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import "../Favorites/Favorites.css"

const Favoritos = () => {


  


  const favItems = useSelector((state) => state.favItems);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleRemoveFromFav = (id) => {
    dispatch(removeFromFav(id));
  };

  return (
    <>
      <button className="btn btn float-left" onClick={() => setShow(true)}>
        <img src={Fav} alt="imagen" class="img-fluid2" />
      </button>
      <Offcanvas show={show} placement="end" onHide={() => setShow(false)} style={{
        height: "60vh",
        margin: "73px 0px"}}>
        <h3 className="header">Tus favoritos</h3>
        <ul>
        <ul className="scrollable">
          {favItems.map((item) => (
            <li key={item.id}>
              <Link to={`/products/${item.id}`}>
                <img class="favoritos-img" style={{
                  width:"200px",
                  height: "200px",
                  objectFit: "cover",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center"

                }} src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
              </Link>
              <p>${item.price}</p>
              <button className="removeBtn" onClick={() => handleRemoveFromFav(item.id)}>
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

