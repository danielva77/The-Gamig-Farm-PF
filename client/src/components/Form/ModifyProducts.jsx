import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { disabledProducts, getDetail } from "../../redux/actions";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default function ModifyProducts(props){
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id))
  }, []);

  let myProduct = useSelector((state) => state.detail);

  const marks = [
    { title: "Logitech" },
    { title: "Razer" },
    { title: "Redragon" },
    { title: "ASUS" },
    { title: "HP" },
    { title: "HyperX" },
    { title: "Otros" }
  ];
  const categories = [
    { title: "Mouse" },
    { title: "Teclado" },
    { title: "Combos" },
    { title: "WebCam" },
    { title: "Auriculares" },
    { title: "Gabinetes" },
    { title: "MousePad" },
    { title: "Gabinete" },
    { title: "Placa Madre" },
    { title: "Tarjeta Grafica" },
    { title: "Otros" }
  ];

  const [input, setInput] = useState({
    title:"",
    price: 0,
    detail: "",
    stock: "",
    img: "",
    mark: "",
    category: "",
  });
console.log("esto queda en input", input)

function handleChange(e){
  setInput({
    ...input,
    [e.target.name] : e.target.value,
  })}
  

  return(
    <div>
      <NavBar/>
      {
        myProduct.length > 0 ?
          <div>
            <h3>{myProduct[0].isActive === true ? "PRODUCTO ACTIVO" : "PRODUCTO DESACTIVADO"}</h3>
            <button onClick={disabledProducts(props.match.params.id)}>Desactivar / Activar producto</button>
            <h6>Titulo actual : {myProduct[0].title}</h6>
            <input type="text" name="title" value={myProduct[0].title} placeholder="Modificar titulo ..." onChange={(e) =>{handleChange(e)}}></input>
            {/* <div><img src={myProduct[0].img} alt="img"></img></div> */}
            <h6>Detalle actual : {myProduct[0].detail}</h6>
            <input type="text" name="detail" value={myProduct[0].detail} placeholder="Modificar detalle ..." onChange={(e) =>{handleChange(e)}}></input>
            <h6>Stock actual : {myProduct[0].stock}</h6>
            <input type="number" name="stock" value={myProduct[0].stock} min="0" placeholder="Corregir el stock ..." onChange={(e) =>{handleChange(e)}}></input>
            <h6>Precio actual: ${myProduct[0].price}</h6>
            <input type="number" name="price" min="0" value={myProduct[0].price} placeholder="Modificar precio ..." onChange={(e) =>{handleChange(e)}}></input>
            <h6>Marca actual : {myProduct[0].Marks[0] ? myProduct[0].Marks[0].title : "--"}</h6>
            <select>
            <option disabled selected>seleccionar otro...</option>
              {marks?.map((m) => (
                <option name="mark" value={m.title} key={m.title}>
                  {m.title}
                </option>
              ))}
            </select>

            <h6>Categoria actual : {myProduct[0].Categories[0] ? myProduct[0].Categories[0].title : "--"}</h6>
            <select>
            <option disabled selected>seleccionar otro...</option>
              {categories?.map((c) => (
                <option name="category" value={c.title} key={c.title}>
                  {c.title}
                </option>
              ))}
            </select>

          </div> : <p>Cargando ...</p>
      }
      <div><Link to="/Home"><button>Cancelar</button></Link>
      <button>Guardar cambios</button></div>
      <Footer/>
    </div>
  )
}