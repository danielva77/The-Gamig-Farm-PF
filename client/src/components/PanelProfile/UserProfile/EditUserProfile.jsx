import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, cleanDetail } from "../../../redux/actions";
import "./editUserProfile.css";
import usuarioSinFoto from "../../Assets/usuarioSinFoto.png";
import Swal from "sweetalert2";


const EditUserProfile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.userID);
  const history = useHistory()

  useEffect(() => {
    dispatch(getUser(id));

    return () => dispatch(cleanDetail());
  }, [dispatch, id]);

  const [input, setInput] = useState({});

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // clearInput();
      Swal.fire({
        title: "Cambios realizados con Exito",
        // html: "Puedes encontrar tu producto en Home",
        icon: "success",
        timer: 8000,
        confirmButtonText: "Okay",
        confirmButtonColor: "Green",
      });
      
     await axios.put("http://localhost:3001/user/" + id, input);
     history.push(`/myprofile/${id}`);
      

  }

  return (
    <div className="padre container">
      <h2 className="modificar">
        Solo completá los campos que desees modificar!
      </h2>
      <form className="formulario mt-2" onSubmit={(e) => handleSubmit(e)}>
        <div className="imagenFoto">
          <label name="img" htmlFor="img">
            Foto Actual:
          </label>
          <img
            src={user.avatar ? user.avatar : usuarioSinFoto}
            alt="img not found"
            className="profileF"
          />
        </div>
       <br />


            {/* NOMBRE Y APELLIDO */}
       <div class="form-floating mb-2 ">
          <input
            type="text"
            className="form-control inputNew"
            id="floatingName"
            placeholder="Nombre y Apellido"
            name="name"
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
          <label for="floatingPassword">Nombre y apellido</label>
        </div>



        {/* EMAIL */}
        <div class="form-floating mb-2 ">
          <input
            type="email"
            className="form-control inputNew"
            id="floatingEmail"
            placeholder="name@example.com"
            name="email"
            value={input.email}
            onChange={(e) => handleChange(e)}
          />
          <label for="floatingEmail">Email address</label>
        </div>

        {/* CONTRASEÑA */}
        <div class="form-floating mb-2">
          <input
            type="password"
            className="form-control inputNew"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={(e) => handleChange(e)}
          />
          <label for="floatingPassword">Password</label>
        </div>
        
        {/* DIRECCION */}
        <div class="form-floating mb-2">
          <input
            type="text"
            className="form-control inputNew"
            id="floatingDirection"
            placeholder="Direccion"
            name="adress"
            value={input.adress}
            onChange={(e) => handleChange(e)}
          />
          <label for="floatingDirection">Direccion</label>
        </div>


        {/* FECHA DE NACIMIENTO */}
        <div class="form-floating mb-2">
          <input
            type="text"
            className="form-control inputNew"
            id="floatingDate"
            placeholder="Fecha de Nacimiento"
            name="dateOfBirth"
            value={input.dateOfBirth}
            onChange={(e) => handleChange(e)}
          />
          <label for="floatingPassword">Fecha de nacimiento</label>
        </div>

  
        {/* CELULAR */}
        <div class="form-floating mb-2">
          <input
            type="number"
            className="form-control inputNew"
            id="floatingNumber"
            placeholder="Celular"
            name="telephone"
            value={input.telephone}
            onChange={(e) => handleChange(e)}
          />
          <label for="floatingPassword">Celular</label>
        </div>



        {/* FOTO */}
        <div class="form-floating mb-2">
          <input
            type="number"
            className="form-control inputNew"
            id="floatingFOTO"
            placeholder="Celular"
            name="avatar"
            value={input.avatar}
            onChange={(e) => handleChange(e)}
          />
          <label for="floatingFOTO">FOTO</label>
        </div>

        {/* BOTONES */}
        
        <button
          type="submit"
          className="btn btn-success mb-4" 
        //   onClick={(e) => handleSubmit(e)}
        >
          Guardar
        </button>

        <div>
          <Link to={`/myProfile/${id}`}>
            <button className="btn-volver btn btn-danger mb-2">Volver a mi perfil</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditUserProfile;
