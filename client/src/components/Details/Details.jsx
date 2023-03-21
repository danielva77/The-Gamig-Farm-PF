import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, useContext } from "react-redux";
import { getDetail, cleanDetail } from "../../redux/actions";
import "../Details/Details.css";
import cart from "../Assets/cart.png";
import Footer from "../Footer/Footer";
// import "./details.css"
import NavBar from "../NavBar/NavBar";
import { useShoppingCart } from "../../context/CartContext/CartContext";
import { addToFavorites } from "../../redux/actions";
import AddReview from "../AddReview/AddReview";
import ReviewContainer from "../AddReview/ReviewContainer";
import { disabledProducts, addStock } from "../../redux/actions";
import Carrusel from "../Slider/Slider";
import Swal from "sweetalert2";
import { shopUser } from "../../redux/actions";
export default function Details(props) {
  let usuariologueado = JSON.parse(localStorage.getItem("email"));
  let emailadmin = "thegamingfarm01@gmail.com";
  const { addItem, quantity } = useShoppingCart();
  const dispatch = useDispatch();

  const shop = useSelector((state) => state.shopuser);
  console.log("ESTE ES SHOOOOOP", shop);
  useEffect(() => {
    dispatch(shopUser(usuariologueado)); //This is a correct???
  }, [dispatch]);

  let confirmacion = shop.filter(
    (e) => e.email == usuariologueado && e.idproduct == props.match.params.id
  );

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

  const successAlert = () => {
    Swal.fire({
      title: "stock agregado satisfactoriamente",
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: "Ok",
      icon: "success",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };
  function agregarstock(id, stock) {
    console.log("estollegoastock", id, stock);
    dispatch(addStock(id, stock));
    successAlert();
  }
  function disabled(id) {
    dispatch(disabledProducts(id));
  }

  return (
    <div className="details-container">
      <NavBar />

      {myProduct.length > 0 ? (
        <div className="infocont">
          <div className="details">
            <div className="elementoss">
              <h1 className="titulo">{myProduct[0].title}</h1>
              <img
                src={myProduct[0].img}
                alt="img"
                className="imagenProducto"
              />
              {/* <h3 className="ver">Ver detalles del producto</h3> */}
              <p className="precio">Precio: ${myProduct[0].price}</p>
              <div className="botonDiv">
                <button
                  className="botonCarritoDetalle"
                  onClick={handleAddToCart}
                >
                  <a className="suma">+ {quantity}</a>
                  <img src={cart} className="carrito" />{" "}
                </button>
              </div>
            
            <p className="stock">Unidades disponibles: {myProduct[0].stock}</p>
            </div>
          </div>
          <h3 className="descripcionTitulo">Descripcion del producto</h3>
          <p className="descripcion">{myProduct[0].detail}</p>
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
      <div className="carrusel">
        <Carrusel />
      </div>
      {usuariologueado && confirmacion.length > 0 ? (
        <div>
          <div>
            <AddReview className="Review" productId={props.match.params.id} />
          </div>
        </div>
      ) : null}
      <div>
        <ReviewContainer
          className="ReviewCont"
          productId={props.match.params.id}
        />
      </div>
      {usuariologueado == emailadmin ? (
        <div>
          {/* <button onClick={disabledProducts(props.match.params.id)}> */}
          <button onClick={(e) => disabled(props.match.params.id)}>
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
          {/* <button onClick={addStock(props.match.params.id, stock)}> */}
          <button onClick={() => agregarstock(props.match.params.id, stock)}>
            Agregar stock
          </button>
        </div>
      ) : null}
      <div>
        <Footer />
      </div>
    </div>
  );
}
