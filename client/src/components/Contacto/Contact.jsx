import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./contact.css";
import support from "../Assets/support.png";
import Swal from "sweetalert2";
import axios from "axios";

export default function Contact() {
  const history = useHistory();

  const [input, setInput] = useState({
    email: "",
    nombre: "",
    asunto: "",
    mensaje: ""
  });

  //Este estado me habilita a enviar el formulario
  const [enviar, setEnviar] = useState(false);

  function validate() {
    if (!input.email) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        html: "Debes completar el campo de <b>Email</b>",
        confirmButtonText: "Entiendo",
        confirmButtonColor: "Red",
        footer: "Tu correo es importante para poder responderte",
      });
    } else if (!input.nombre) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        html: "Debes completar el campo de <b>Nombre</b>",
        confirmButtonText: "Entiendo",
        confirmButtonColor: "Red",
        footer: "Tu nombre es importante para poder conocerte",
      });
    } else if (!input.asunto) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        html: "Debes completar el campo de <b>Asunto</b>",
        confirmButtonText: "Entiendo",
        confirmButtonColor: "Red",
        footer: "El asunto es importante para poder ver de que trata tu mensaje",
      });
    } else if (!input.mensaje) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        html: "Debes completar el campo de <b>Mensaje</b>",
        confirmButtonText: "Entiendo",
        confirmButtonColor: "Red",
        footer: "Tus mensajes son importantes para nosotros, nos interesa leerte",
      });
    } else {
      setEnviar(true);
    }
  }

  // Handles
  function handleEmail(e) {
    setInput({
      ...input,
      email: e.target.value,
    });
    console.log(input);
  }

  function handleNombre(e) {
    setInput({
      ...input,
      nombre: e.target.value,
    });
    console.log(input);
  }

  function handleAsunto(e) {
    setInput({
        ...input,
        asunto: e.target.value,
      });
    console.log(input);
  }
  function handleMensaje(e) {
    setInput({
        ...input,
        mensaje: e.target.value,
      });
    console.log(input);
  }

  // Enviando el mensaje

  async function handleSubmit(e) {
    validate();
    e.preventDefault();
    console.log("esto va a post →", input);


    if(enviar){

      Swal.fire({
        title: "Mensaje enviado con Exito",
        html: "En breve estaremos leyendo tu mensaje y te responderemos sobre el mismo Mail",
        icon: "success",
        timer: 10000,
        confirmButtonText: "Okay",
        confirmButtonColor: "Green",
      });
      history.push("/home");
    }
  }

  return (
    <div>
      <section id="seccion-contacto">
        <div class="container" id="contenedor-formulario">
          <div id="titulo-formulario" class="text-center mb-4">
            <div>
              <img src={support} alt="contacto" class="img-fluid" />
            </div>
            <h2>Contacto</h2>
            <p class="fs-5">Estamos aqui para hacer responder tus consultas</p>
          </div>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div class="mb-3">
              <input
                type="email"
                className="form-control inputs"
                id="email"
                placeholder="nombre@ejemplo.com"
                value={input.email}
                onChange={handleEmail}
                // required
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                className="form-control inputs"
                id="nombre"
                placeholder="Tu nombre"
                value={input.nombre}
                onChange={handleNombre}
                // required
              />
            </div>


            <div class="mb-3">
              <input
                type="text"
                className="form-control inputs"
                id="asunto"
                placeholder="Asunto"
                value={input.asunto}
                onChange={handleAsunto}
                // required
              />
            </div>

        

            <div class="mb-3">
              <textarea
                class="form-control inputs"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Escribe aquí tu mensaje..."
                value={input.mensaje}
                onChange={handleMensaje}
              ></textarea>
            </div>

            <div class="mb-3">
              <button
                type="submit"
                className="btn btn-primary w-100 fs-5 enviarMensaje"
              >
                Enviar mensaje
              </button>
            </div>
            <Link to="/Home">
              <button className="btn btn-danger volverBoto">
                Volver al Home
              </button>
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
}
