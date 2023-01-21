import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default function ModifyProducts(props){
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id))
  }, []);

  let myProduct = useSelector((state) => state.detail);
  

  return(
    <div>
      <NavBar/>
      {
        myProduct.length > 0 ?
          <div>
            <h6>Current Title : {myProduct[0].title}</h6>
            <input type="text" placeholder="Modify title ..."></input>
            {/* <div><img src={myProduct[0].img} alt="img"></img></div> */}
            <h6>Current Detail : {myProduct[0].detail}</h6>
            <input type="text" placeholder="Modify details ..."></input>
            <h6>Current Price: ${myProduct[0].price}</h6>
            <input type="number" min="0" placeholder="Modify price ..."></input>
            <h6>Current Mark : {myProduct[0].Marks[0] ? myProduct[0].Marks[0].title : "--"}</h6>
            <select>
            <option disabled selected>select other...</option>
              {marks?.map((m) => (
                <option name="mark" value={m.title} key={m.title}>
                  {m.title}
                </option>
              ))}
            </select>

            <h6>Current Category : {myProduct[0].Categories[0] ? myProduct[0].Categories[0].title : "--"}</h6>
            <select>
            <option disabled selected>select other...</option>
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