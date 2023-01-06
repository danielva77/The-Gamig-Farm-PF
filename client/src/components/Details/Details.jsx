import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, cleanDetail } from '../../redux/actions';

export default function Details(props){

const dispatch = useDispatch();

useEffect(() =>{
  dispatch(getDetail(props.match.params.id))
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [dispatch]);

useEffect(() => {
  return function () {
      dispatch(cleanDetail())
  }
},[dispatch])

let myProduct = useSelector((state) => state.detail);

return(
    <div>
      {
        myProduct.length > 0 ?
        <div>
          <h1>{myProduct[0].title}</h1>
          <img src={myProduct[0].img } alt="img"></img>
          <p><strong>Descripcion:</strong> {myProduct[0].detail}</p>
          <p><strong>Precio:</strong> {myProduct[0].price}</p>
          <p><strong>Stock:</strong> {myProduct[0].stock}</p>
        
        
        </div> : <p>Cargando ...</p>
      }
        <div>
          <Link to="/Home">
            <button>Volver</button>
          </Link>
        </div>
    </div>
)}