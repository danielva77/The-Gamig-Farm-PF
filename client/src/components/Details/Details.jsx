import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, cleanDetail } from '../../redux/actions';
import "./Details.css"
import cart from "../Assets/cart.png"
import Footer from "../Footer/Footer"
import "./Details.css"
export default function Details(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return function () {
      dispatch(cleanDetail())
    }
  }, []);

  let myProduct = useSelector((state) => state.detail);

  return (
    <div >
      {
        myProduct.length > 0 ?
          <div>
            <h1 className='titulo'>{myProduct[0].title}</h1>
            <img src={myProduct[0].img} alt="img" className='imagenProducto'></img>
            <h3 className='descripcionTitulo'>Descripcion del producto:</h3>
            <p className='descripcion'>{myProduct[0].detail}</p>
            <p className='precio'>Precio: ${myProduct[0].price}</p>
            <div className='botonDiv'>
              <button className='botonCarritoDetalle'><a className='suma'>+ </a><img src={cart} className="carrito" /> </button>
            </div>
            <p className='stock'>Unidades disponibles: {myProduct[0].stock}</p>



          </div> : <p>Cargando ...</p>
      }
      <div className='filtros'>
        <a href="/home" className='volver'> 🡰 Volver</a>
      </div>
      <Footer className='footer2' />
    </div>
  )
}