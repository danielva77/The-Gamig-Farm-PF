import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, OverlayTrigger, Tooltip, Offcanvas } from 'react-bootstrap';
import { removeFromCart } from '../../redux/actions';
import Fav from "../Assets/favorito.png"


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
    <div className="Fav">
      <Button variant=""  class="btn btn float-left"  onClick={handleShow}> <img src={Fav} alt="imagen" class="img-fluid"/></Button>
      <Offcanvas show={show} onHide={handleHide} placement="end">
        <Offcanvas.Header>
          <Offcanvas.Title>Your Favourties</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {items.length === 0 ? (
            <p>No favourites</p>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Action</th>
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
                            Delete {item.name} from Favourites
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
              
            </Table>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Fav;
