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

import axios from "axios"
import { useShoppingCart } from "../../context/CartContext/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { formatCurrency } from "../../utilities/formatCurrency";


export function ShoppingCart({ isOpen }) {
    const storeItems = useSelector(state => state.items)

    const { closeCart, cart } = useShoppingCart()

    const precioTotal = formatCurrency(cart.reduce((total, cartItem) => {
        const item = storeItems.find((i) => i.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity
    }, 0))

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
                                    {precioTotal}
                                </div>
                            </Stack>
                            <Button variant="success"
                                onClick={() => { axios.post("http://localhost:3001/payment", cart).then((res) => window.open(res.data)) }}>
                                Pagar {precioTotal}
                            </Button>
                        </>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};