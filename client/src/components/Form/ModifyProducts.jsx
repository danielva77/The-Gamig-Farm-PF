import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { disabledProducts, getDetail } from "../../redux/actions";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Swal from "sweetalert2";

export default function ModifyProducts(props){
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id))
  }, []);

  let myProduct = useSelector((state) => state.detail);

  const [input, setInput] = useState({
    title:"",
    price: 0,
    detail: "",
  });
console.log("esto queda en input", input)

function handleChange(e){
  setInput({
    ...input,
    [e.target.name] : e.target.value,
  })}

  const {id} = useParams()
  async function handleSubmit(e){
    e.preventDefault();
    await axios.put(`http://localhost:3001/products/${id}`, {
      title: input.title, price: input.price, detail: input.detail
    });

    Swal.fire({
      title: "Cambios realizados con Exito",
      // html: "Puedes encontrar tu producto en Home",
      icon: "success",
      timer: 8000,
      confirmButtonText: "Okay",
      confirmButtonColor: "Green",
    });
    history.push(`/products/${id}`);
  }
  

  return(
    <div>
      <NavBar/>
      {
        myProduct.length > 0 ?
          <div>
            <h2>{myProduct[0].isActive === true ? "PRODUCTO ACTIVO" : "PRODUCTO DESACTIVADO"}</h2>
            <button onClick={disabledProducts(props.match.params.id)}>Desactivar / Activar producto</button>
            <h6>Titulo actual : {myProduct[0].title}</h6>
            <input type="text" name="title" placeholder="Modificar titulo ..." onChange={(e) =>{handleChange(e)}}></input>
            {/* <div><img src={myProduct[0].img} alt="img"></img></div> */}
            <h6>Detalle actual : {myProduct[0].detail}</h6>
            <input type="text" name="detail"  placeholder="Modificar detalle ..." onChange={(e) =>{handleChange(e)}}></input>
            <h6>Precio actual: ${myProduct[0].price}</h6>
            <input type="number" name="price" min="0"  placeholder="Modificar precio ..." onChange={(e) =>{handleChange(e)}}></input>
            

          </div> : <p>Cargando ...</p>
      }
      <div><Link to="/Home"><button>Cancelar</button></Link>
      <button onClick={(e) => handleSubmit(e)}>Guardar cambios</button></div>
      <Footer/>
    </div>
  )
}