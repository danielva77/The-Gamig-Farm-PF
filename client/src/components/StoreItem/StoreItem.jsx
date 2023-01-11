import React from "react";
import "./StoreItem.css";
import favo from "../Favorites/Favorites"
import carrito from "../Assets/carrito.svg"
import favoritos from "../Assets/favoritos.svg"

export function StoreItem({ id, name, price, img }) {
  const quantity = 0;
  const btnFav = (
    <div className="favoritoss">
      <button onClick={favo} className="botonnF"><img src={favoritos} /></button>
    </div>
  );

  return (
    <div className="modelo2">
      <img
        src={img}
        alt="falta la imagen"
        height="180px"
        // style={{ objectFit: "contain" }}
        className="imagen" />
      <div className="nombreC">
        <h4 className="nombre">{name}</h4>
      </div>
      <p className="precios">${price}</p>


      {quantity === 0 ? (
        <> {btnFav}
          <div className="carritoss">
            <button onClick={favo} className="botonn"><img src={carrito} /></button>
          </div>
        </>
      ) : (
        <div>
          <div className="carritoss">
            <button onClick={favo} className="botonn"><img src={carrito} /></button>
          </div>
        </div>
      )}
    </div>

  );
}
