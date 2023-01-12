import React, { useState, useContext, createContext } from "react";
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
import "./Cart.css"

const Cart = () => {
  const {quantity } = useShoppingCart()
  //   const items = useSelector(state => state.cart.items);
  // const items = [];
  // const dispatch = useDispatch();
  const [show, setShow] = useState(false);
 

  const { cart, addToCart, removeFromCart, getItemQuantity } =
    useContext(CartContext);

  // const handleRemove = (id) => {
  //   dispatch(removeFromCart(id));
  // };

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

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
            <Table striped bordered hover style={{ color: "white" }}>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Imagen</th>
                  <th>Cantidad</th>
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

                    <td>{item.quantity}</td>
                    <td>
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>Eliminar {item.name} del carrito</Tooltip>
                        }
                      >
                        <Button
                          variant="danger"
                          onClick={() => removeFromCart(item.id)}
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
                </tr>
              </tfoot>
            </Table>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Cart;
