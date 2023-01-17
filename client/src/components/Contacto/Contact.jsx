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
    nombre: "", // Pensarlo bien si realmente va a estar a estar este input
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
      // enviarCorreo()
      setEnviar(true)
      // setInput({
      //   email: "",
      //   nombre: "",
      //   asunto: "",
      //   mensaje: ""
      // })
      
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

  async function handleSubmit (e) {
    
    // e.preventDefault();
    validate();  

        if(enviar){
          await Swal.fire({
            title: "Mensaje enviado con Exito",
            html: "Gracias, te responderemos a travez del Email",
            icon: "success",
            confirmButtonText: "Okay",
            confirmButtonColor: "Green",
            timer: 5000
          });

      }
  // 
      
      
      
      // console.log("esto va a post →", input);
     
  }

  // RUTAS DE NODEMAILER

  const enviarCorreo = async() =>{
      await axios.post("http://localhost:3001/enviarMensaje",
      {dataMail: input})
  }



// NODEMAILER 

const enviarMsj = async () => {

  await axios.post("http://localhost:3001/enviarMensaje",
  {infoInput: input}).then(history.push("/home"))
}

  return (
    <div className="casita">
      <section id="seccion-contacto">
        <div class="container" id="contenedor-formulario">
          <div id="titulo-formulario" class="text-center mb-4">
            <div>
              <img src={support} alt="contacto" class="img-fluid" />
            </div>
            <h2>Contacto</h2>
            <p class="fs-5">Estamos aqui para hacer responder tus consultas</p>
          </div>

          <form  action="https://formsubmit.co/thegamingfarm01@gmail.com" method="POST" onSubmit={handleSubmit}>



          <input type="hidden" name="_next" value="http://localhost:3000/home"/>
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
              <textarea
                class="form-control inputs"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Escribe aquí tu mensaje..."
                value={input.mensaje}
                onChange={handleMensaje}
                name="Mensaje"
                required
              ></textarea>
            </div>



            {/* BOTONES  */}



            <div class="mb-3">
              <button
                type="submit"
                className="btn btn-primary w-100 fs-5 enviarMensaje"
                onClick={handleSubmit}
                >
                  
                Enviar mensaje
              </button>
            </div>

          

            <Link 
            to="/Home"><button className="btn btn-danger volverBoto">Volver al Home</button>
            </Link>


            {/* CONFIGURACION DEL MAIL */}



          </form>

          <div>
            <button onClick={enviarMsj} >Mensaje - Iniciar Sesion</button>
          </div>
        </div>
      </section>
    </div>
  );
}
