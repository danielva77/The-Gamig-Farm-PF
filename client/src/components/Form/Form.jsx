import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategories, getAllMarks } from '';
import { Link, useHistory } from "react-router-dom"
import "./Form.css"
import { postProduct, getProduct } from '../../redux/actions';
// import { log } from "console";
import Swal from "sweetalert2";


export const Form = () => {

    const marks = [{ title: 'Logitech' }, { title: 'Razer' }, { title: "Redragon" }, { title: "ASUS" }, { title: "HP" }];
    const categories = [{ title: 'Mouse' }, { title: 'Teclado' }, { title: 'Combos' }, { title: 'WebCam' }, { title: 'Auriculares' }, { title: 'Gabinetes' }, { title: 'MousePad' }, { title: 'Gabinete' }, { title: 'Placa Madre' }, { title: 'Tarjeta Grafica' }]

    // Guardo la data para enviar a la db en un estado local

    const [input, setInput] = useState({
        title: '',
        price: " ",
        detail: '',
        stock: " ",
        img: '',
        mark: "",
        category: "",
    })
      
    //Este estado me habilita a enviar el formulario 
    const [enviar, setEnviar] = useState(false)

    // VALIDACION → esta funcion valida los datos ingresados en el formulario y me da el ok para enviar el formulario
    function validate() {
        let errors = {}

        if (!input.title) {
            errors.title = 'Debe completar el campo Title';
            return Swal.fire({
                icon: "error",
                title: "Error",
                html: "Debes completar el campo <b>Titulo</b>",
                confirmButtonText: "Entiendo",
                confirmButtonColor: "Red"
                // footer: "El Titulo es obligatorio"
            })
                        
        } else if (input.title.length <= 3) {
            errors.title = 'El campo Title debe contener al menos 3 caracteres';
            return Swal.fire({
                icon: "error",
                title: "Error",
                html: "El campo <b>Titulo</b> debe contener al menos 3 caracteres",
                confirmButtonText: "Entiendo",
                confirmButtonColor: "Red"
                // footer: "El Titulo es obligatorio"
            });
        } else if (!/^[0-9]+$/.test(input.price)) {
            errors.price = 'El campo Price solo puede contener numeros';
            return Swal.fire({
                icon: "error",
                title: "Error",
                html: "Debes completar el campo de <b>Precio</b>",
                confirmButtonText: "Entiendo",
                confirmButtonColor: "Red"
                // footer: "El Titulo es obligatorio"
            });
        } else if (input.price <= 0) {
            errors.price = 'El campo Price debe ser mayor a 0';
            return Swal.fire({
                icon: "error",
                title: "Error",
                html: "El campo <b>Precio</b> debe ser mayor a 0",
                confirmButtonText: "Entiendo",
                confirmButtonColor: "Red"
                // footer: "El Titulo es obligatorio"
            });
        } else if (!input.detail) {
            errors.detail = 'Debes completar el campo Detail';
            return Swal.fire({
                icon: "error",
                title: "Error",
                html: "Debes completar el campo de <b>Detalles</b>",
                confirmButtonText: "Entiendo",
                confirmButtonColor: "Red"
                // footer: "El Titulo es obligatorio"
            });
        } else if (input.detail.length <= 10) {
            errors.detail = 'El campo Detail debe contener al menos 10 caracteres';
            return Swal.fire({
                icon: "error",
                title: "Error",
                html: "El campo de <b>Detalles</b> debe contener al menos 10 caracteres",
                confirmButtonText: "Entiendo",
                confirmButtonColor: "Red"
                // footer: "El Titulo es obligatorio"
            })
        } else if (!/^[0-9]+$/.test(input.stock)) {
            errors.stock = 'El campo Stock solo puede contener numeros';
            return Swal.fire({
                icon: "error",
                title: "Error",
                html: "Debes completar el campo de <b>Stock</b>",
                confirmButtonText: "Entiendo",
                confirmButtonColor: "Red"
                // footer: "El Titulo es obligatorio"
            });
        } else if (input.stock <= 0) {
            errors.stock = 'El campo Stock solo puede ser mayor o igual a 0';
            return Swal.fire({
                icon: "error",
                title: "Error",
                html: "El campo de <b>Stock</b> solo puede ser mayor a 0",
                confirmButtonText: "Entiendo",
                confirmButtonColor: "Red"
                // footer: "El Titulo es obligatorio"
            })
        } else if (!input.mark.length) {
            errors.mark = 'Debe seleccionar una Mark';
            return Swal.fire({
                icon: "error",
                title: "Error",
                html: "Debes seleccionar una <b>Marca</b>",
                confirmButtonText: "Entiendo",
                confirmButtonColor: "Red"
                // footer: "El Titulo es obligatorio"
            })
        } else if (!input.category.length) {
            errors.category = 'Debe seleccionar una Category';
            return Swal.fire({
                icon: "error",
                title: "Error",
                html: "Debes seleccionar una <b>Categoria</b>",
                confirmButtonText: "Entiendo",
                confirmButtonColor: "Red"
                // footer: "El Titulo es obligatorio"
            })
        } else {
            setEnviar(true)
        }
    }

    // esta funcion limpia mi state local input
    function clearInput() {
        setInput({
            title: '',
            price: "",
            detail: '',
            stock: "",
            img: '',
            mark: '',
            category: "",
        });

        setEnviar(false);
    }

    // Post 
    function newProduct(data) {
        
        console.log("esto es la data", data);
        return axios.post('http://localhost:3001/products', data)
        
            .then((data) => {
                alert(data)
                console.log(data);
            })
            .catch(e => {
                console.log(e)
                alert('error al crear el producto')
            })
    }

    // Handles
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    function handleMark(e) {
        setInput({
            ...input,
            mark: e.target.value
        })
    }

    function handleCategory(e) {
        if (e.target.value)
            setInput({
                ...input,
                category: e.target.value
            })
    }

  

    function handleCategoria (e){
        setInput({
            ...input,
            category : [e.target.value]
        })
    }
    function handleMarca (e){
        setInput({
            ...input,
            mark : [e.target.value]
        })
    }
    function handleImagen (e){
        setInput({
            ...input,
            img : e.target.value
        })
    }
    function handlePrice(e) {
        setInput({
            ...input,
            price: Number(e.target.value)
        })
        console.log(input)
    }
    function handleStock(e) {
        setInput({
            ...input,
            stock: Number(e.target.value)
        })
        console.log(input)
    }

    const history = useHistory()

    async function handleSubmit(e) {
        validate();
        e.preventDefault();
        console.log("esto va a post →",input);
        dispatch(postProduct(input))
       
        if (enviar) {

            // dispatch(postProduct(input))

            // await newProduct(input);
            clearInput()
            Swal.fire({
                title: "Producto creado con Exito",
                html: "Puedes encontrar tu producto en Home",
                icon: "success",
                timer: 5000,
                confirmButtonText: "Okay",
                confirmButtonColor: "Green"
            }
           
          
                
            )
            history.push("/home")
            // Swal.fire(
            //     "Perfecto", "Puedes encontrar el producto en home", "success"
            // )
            // window.location.reload()
            
        }
    }
    const dispatch = useDispatch()
    
    return (
        <div className="container padre">
            {/* <h1 className="as"> as</h1> */}
            <form className="formProduct row g-5 mt-2"  onSubmit={e => handleSubmit(e)}>
                <h3 className="h3T">📦 Cargar el Producto 📦</h3>

                {/* TITULO  */}

                <div className="div-title col-5">
                    <label htmlFor="tituloI" className="form-label ">Titulo</label>
                    <input type="text" name="title" value={input.title} onChange={handleChange} className="form-control form-control-lg escribir" id="tituloI" placeholder="Escribe aquí tu titulo" />
                    <div id="tituloI" className="form-text">Es el primer contacto que el consumidor tiene con tu producto en el ambiente online </div>
                </div>


                {/* DETALLES */}

                <div className="col-7">
                    <label htmlFor="detalle" className="form-label " name="detail" >Detalle</label>
                    <input className="form-control form-control-sm escribir detalless" type="text" id="detalle" placeholder="Escribe aquí los detalles" aria-label=".form-control-lg example" name="detail" value={input.detail} onChange={(e) => handleChange(e)} ></input>
                    <div id="tituloI" className="form-text">Mientras más detalles precisos les cuente al cliente, más interesado estaran en el producto
                    </div>
                </div>

                {/* PRECIO */}

                <div className="div-title col-2">
                    <label htmlFor="price" className="form-label labels" >Precio</label>
                    <input type="number" name="price" className="form-control escribir"  id="price" min="0" max="1000000" value={input.price} placeholder="$ USD " onChange={(e) => handlePrice(e)}/>
                    {/* <div id="emailHelp" class="form-text">Lo que los clientes están dispuestos a pagar por un producto.</div> */}
                    <div id="emailHelp" className="form-text">El cliente esta dispuesto a pagar</div>
                </div>

                    {/* STOCK NEW  */}

             
                <div className="div-title col-2">
                    <label htmlFor="stock" className="form-label labels">Stock</label>
                    <input type="number" name="stock" className="form-control escribir"  id="stock" min="0" max="1000000" value={input.stock} onChange={(e) => handleStock(e)} placeholder="Cantidad"/>
                    {/* <div id="emailHelp" class="form-text">Lo que los clientes están dispuestos a pagar por un producto.</div> */}
                    <div id="emailHelp" className="form-text">Responsable de evitar la falta del producto</div>
                </div>

                   {/* IMAGEN */}

                   <div className="col-8">
                    <label htmlFor="img" className="form-label labels">Imagen</label>
                    <input className="form-control escribir" type="text" id="img" value={input.img} onChange={(e) => handleImagen(e)}  />
                    <div id="emailHelp" className="form-text">Los potenciales clientes pueden observar en detalle cómo es el artículo que quieren comprar</div>
                </div>      

                {/* MARK */}

                <div className="div-mark col-5 selection2">
                    <label className="form-label labels ">Marca</label>
                    <select className="form-select escribir" aria-label="Default select example" onChange={(e) => handleMarca(e)}>
                        <option name="new" value='' key='new'>Otros...</option>
                        {marks?.map(m => (<option name='mark' value={m.title} key={m.title}>{m.title}</option>))}
                    </select>
                </div>

                {/* CATEGORIAS */}

                <div className="div-category col-5 selection">
                    <label className="form-label labels" >Categoria</label>
                    <select className="form-select escribir" aria-label="Default select example" onChange={(e) => handleCategoria(e)}>
                        <option selected >Otros...</option>
                        {categories?.map(c => (<option name="category" value={c.title} key={c.title}>{c.title}</option>))}
                    </select>
                </div>
                
                
            {/* BOTONES ↓ */}
              
                <button type="submit" className="btn-enviar btn btn-success col-6 guardarBoton" >Guardar</button>     
                <Link to="/Home"><button className="btn btn-danger volverBoton">Volver al Home</button></Link>
            
            </form>




            

        </div>

    )
    
}

export default Form;