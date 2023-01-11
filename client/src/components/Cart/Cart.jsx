import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, OverlayTrigger, Tooltip, Offcanvas } from 'react-bootstrap';
import { removeFromCart } from '../../redux/actions';
import Carrito from "../Assets/cart.png"
import "./Cart.css"


const Cart = () => {
//   const items = useSelector(state => state.cart.items);
  const items = []
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleRemove = id => {
    dispatch(removeFromCart(id));
  };

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  return (
    <div className="cart">
      <Button variant=""  class="btn btn float-right"  onClick={handleShow}> <img src={Carrito} alt="imagen" class="img-fluid"/></Button>
      <Offcanvas show={show} onHide={handleHide} placement="end">
        <Offcanvas.Header>
          <Offcanvas.Title>Tu carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {items.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>
                     
                    <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>
                            Eliminar {item.name} del carrito
                          </Tooltip>
                        }
                      >
                        <Button
                          variant="danger"
                          onClick={() => handleRemove(item.id)}
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
                    {items.reduce((total, item) => total + item.quantity, 0)}
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
