import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getDetail } from "../../redux/actions";

export default function ModifyProducts(props){
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id))
  }, []);

  let myProduct = useSelector((state) => state.detail);
  

  return(
    <div>
      <h1>HOLA</h1>
      {
        myProduct.length > 0 ?
          <div>
            <h1>{myProduct[0].title}</h1>
            <img src={myProduct[0].img} alt="img"></img>
            <h3>Descripcion del producto:</h3>
            <p >{myProduct[0].detail}</p>
            <p >Precio: ${myProduct[0].price}</p>
            <p>Unidades disponibles: {myProduct[0].stock}</p>

          </div> : <p>Cargando ...</p>
      }
    </div>
  )
}