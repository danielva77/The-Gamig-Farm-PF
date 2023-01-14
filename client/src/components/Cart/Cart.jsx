import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Table,
  Button,
  OverlayTrigger,
  Tooltip,
  Offcanvas,
  Stack,
} from "react-bootstrap";

import "./Cart.css";
import axios from "axios"
import { useShoppingCart } from "../../context/CartContext/CartContext";
import { CartItem } from "../CartItem/CartItem";

const Cart = () => {
  const storeItems = useSelector(state => state.items)

  const { closeCart, cart, isOpen } = useShoppingCart()

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setTotalPrice(currTotal => setTotalPrice(currTotal))
  }, [cart])

  return (
    <div className="cart">
      {console.log("cart: ", cart)}
      <Offcanvas
        show={isOpen}
        onHide={closeCart}
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
              <Stack gap={3}>
                {cart?.map(item => (
                  <CartItem key={item.id} {...item} />
                ))}
                <div className="ms-auto fw-bold fs-5">
                  Total:{" "}
                  ${totalPrice}
                </div>
              </Stack>
              <Button variant="success"
                onClick={() => { axios.post("http://localhost:3001/payment", cart).then((res) => window.open(res.data)) }}>
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