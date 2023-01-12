import React, { useState, useContext, createContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  Button,
  OverlayTrigger,
  Tooltip,
  Offcanvas,
} from "react-bootstrap";
import { removeFromCart } from "../../redux/actions";
import Carrito from "../Assets/cart.png";
import { CartContext, useShoppingCart } from "../../context/CartContext/CartContext";
import "./Cart.css";
import axios from "axios"

const Cart = () => {

<<<<<<< HEAD
  // const handleRemove = id => {
=======
//   const [cartItems, setCartItems] = useState(() => {
//     const localStorageCart = localStorage.getItem("cart");
//     return localStorageCart ? JSON.parse(localStorageCart) : [];
// });

// useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//     return () => localStorage.removeItem("cart");
// }, [cartItems])


  const {quantity } = useShoppingCart()
  //   const items = useSelector(state => state.cart.items);
  // const items = [];
  // const dispatch = useDispatch();
  const [show, setShow] = useState(false);
 

  const { cart, addToCart, removeFromCart, getItemQuantity, incrementItemQuantity, decrementItemQuantity } =
    useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // const handleRemove = (id) => {
>>>>>>> cffaf7930586661447545f325da330c2856659f9
  //   dispatch(removeFromCart(id));
  // };

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
  console.log("esto llega en cart", cart)
  return (
    <div className="cart">
      <Button variant="" class="btn btn float-right" onClick={handleShow}>
        {""}
        <img src={Carrito} alt="imagen" class="img-fluid" />
        <div className="cart-quantity-circle">{quantity}</div>
      </Button>
      <Offcanvas
        show={show}
        onHide={handleHide}
        placement="end"
        style={{ width: "50%", backgroundColor: "#0F0E17", color: "white" }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Tu carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ color: "white" }}>
          {cart.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            <>
            <Table striped bordered hover style={{ color: "white" }}>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Imagen</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{
                          width: "125px",
                          height: "75px",
                          objectFit: "cover",
                        }}
                      />
                    </td>

                    <td>{item.quantity}<Button class="btn btn-sm p-0" onClick={() => incrementItemQuantity(item)}>+</Button><Button className="btn-quantity" onClick={() => decrementItemQuantity(item)}>-</Button></td>
                    <td>{item.price}</td>
                    <td>
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>Eliminar {item.name} del carrito</Tooltip>
                        }
                      >
                        <Button
                          variant="danger"
<<<<<<< HEAD
                          // onClick={() => handleRemove(item.id)}
=======
                          onClick={() => removeFromCart(item.id)}
>>>>>>> cffaf7930586661447545f325da330c2856659f9
                        >
                          x
                        </Button>
                      </OverlayTrigger>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2">Total</td>
                  <td>
                    {quantity}
                  </td>
                  <td>
        {totalPrice}
        </td>
                </tr>
              </tfoot>
            </Table>
             <Button variant="success"
            onClick={() =>{axios.post("http://localhost:3001/payment", cart).then((res) => window.open(res.data))}}>
             Pagar {totalPrice}
             </Button>
             </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Cart;