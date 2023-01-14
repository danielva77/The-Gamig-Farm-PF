import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { removeFromFav } from "../../redux/actions";
import Fav from "../Assets/favorito.png";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { useDispatch } from "react-redux";


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
      <Offcanvas show={show} onHide={() => setShow(false)}>
        <h3>Tus favoritos</h3>
        <ul>
          {favItems.map((item) => (
            <li key={item.id}>
              <img class="favoritos-img" style={{
                          width: "125px",
                          height: "75px",
                          objectFit: "cover",
                        }} src={item.img} alt={item.name} />

              <h4>{item.name}</h4>
              <p>${item.price}</p>
              <button onClick={() => handleRemoveFromFav(item.id)}>
                Remove from favorites
              </button>
            </li>
          ))}
        </ul>
      </Offcanvas>
    </>
  );
};

export default Favoritos;
