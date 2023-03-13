import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./contact.css";
import support from "../Assets/agente-de-servicio-al-cliente.png";
import Swal from "sweetalert2";
import axios from "axios";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default function Contact() {
  const history = useHistory();

  const [input, setInput] = useState({
    email: "",
    nombre: "", // Pensarlo bien si realmente va a estar a estar este input
    asunto: "",
    mensaje: "",
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
        footer:
          "El asunto es importante para poder ver de que trata tu mensaje",
      });
    } else if (!input.mensaje) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        html: "Debes completar el campo de <b>Mensaje</b>",
        confirmButtonText: "Entiendo",
        confirmButtonColor: "Red",
        footer:
          "Tus mensajes son importantes para nosotros, nos interesa leerte",
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
    // e.preventDefault();
    validate();

    if (enviar) {
      await Swal.fire({
        title: "Mensaje enviado con Exito",
        html: "Gracias, te responderemos a travez del Email",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "Green",
        timer: 5000,
      });
      history.push("/home");
    }
  }

  return (
    <div>
      <NavBar />
      <div className="casita">
        <section id="seccion-contacto">
          <div class="container" id="contenedor-formulario">
            <div id="titulo-formulario" class="text-center mb-4">
              <div>
                <img src={support} alt="contacto" className="img-f" />
              </div>
              <br />
              <p class="fs-5">
                Estamos aqui para hacer responder tus consultas
              </p>
            </div>

            <form
              action="https://formsubmit.co/thegamingfarm01@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/home"
              />
              <input type="hidden" name="_captcha" value="false" />

              <div class="mb-3">
                <input
                  type="email"
                  className="form-control inputs"
                  id="email"
                  placeholder="nombre@ejemplo.com"
                  value={input.email}
                  onChange={handleEmail}
                  name="Email"
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
                  name="Nombre"
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
                  name="Asunto"
                  // required
                />
              </div>

              <div class="mb-3">
                <input
                  type="text"
                  class="form-control inputs2"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Escribe aquí tu mensaje..."
                  value={input.mensaje}
                  onChange={handleMensaje}
                  name="Mensaje"
                  required
                />
              </div>

              {/* BOTONES  */}

              <div class="mb-3">
                <button
                  type="submit"
                  className="enviarMensaje"
                  onClick={handleSubmit}
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
