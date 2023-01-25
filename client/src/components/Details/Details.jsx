import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, useContext } from "react-redux";
import { getDetail, cleanDetail } from "../../redux/actions";
import "../Details/details.css";
import cart from "../Assets/cart.png";
import Footer from "../Footer/Footer";
// import "./details.css"
import NavBar from "../NavBar/NavBar";
import { useShoppingCart } from "../../context/CartContext/CartContext";
import { addToFavorites } from "../../redux/actions";
import AddReview from "../AddReview/AddReview";
import ReviewContainer from "../AddReview/ReviewContainer";
import { disabledProducts, addStock } from "../../redux/actions";

export default function Details(props) {
  const { addItem, quantity } = useShoppingCart();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = {
      id: props.match.params.id,
      name: myProduct[0].title,
      price: myProduct[0].price,
      img: myProduct[0].img,
      stock: myProduct[0].stock,
    };
    addItem(item);
  };

  const favItems = useSelector((state) => state.favItems);

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return function () {
      dispatch(cleanDetail());
    };
  }, []);

  let myProduct = useSelector((state) => state.detail);

  const [stock, setStock] = useState(0);
  function handleStock(e) {
    setStock(parseInt(e.target.value));
  }
  console.log("llega stock a agregar", stock);

  return (
    <div className="details-container">
      <NavBar />

      {myProduct.length > 0 ? (
        <div className="details-info">
          <h1 className="titulo">{myProduct[0].title}</h1>
          <img
            src={myProduct[0].img}
            alt="img"
            className="imagenProducto"
          ></img>
          <h3 className="descripcionTitulo">Descripcion del producto:</h3>
          <p className="descripcion">{myProduct[0].detail}</p>
          <p className="precio">Precio: ${myProduct[0].price}</p>
          <div className="botonDiv">
            <button className="botonCarritoDetalle" onClick={handleAddToCart}>
              <a className="suma">+ {quantity}</a>
              <img src={cart} className="carrito" />{" "}
            </button>
          </div>
          <p className="stock">Unidades disponibles: {myProduct[0].stock}</p>
        </div>
      ) : (
        <p>Cargando ...</p>
      )}
      <div className="filtros">
        <a href="/home" className="volver">
          {" "}
          🡰 Volver
        </a>
      </div>
      <div>
        <AddReview className="Review" productId={props.match.params.id} />
      </div>
      <div>
        <button onClick={disabledProducts(props.match.params.id)}>
          Desactivar producto
        </button>
        <Link to={`/editproduct/${props.match.params.id}`}>
          <button>Editar informacion del producto</button>
        </Link>
        <input
          type="number"
          min="0"
          step="1"
          name="stock"
          onChange={(e) => handleStock(e)}
          placeholder="Cantidad a agregar ..."
        ></input>
        <button onClick={addStock(props.match.params.id, stock)}>
          Agregar stock
        </button>
      </div>
      <div>
        <ReviewContainer className="ReviewCont" productId={props.match.params.id} />
      </div>

      <div className="move-footer">
        <Footer />
      </div>
    </div>
  );
}
