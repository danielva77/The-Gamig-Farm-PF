import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategories, getAllMarks } from '';
import { Link } from "react-router-dom"
import "./Form.css"
import { Container} from "reactstrap"
import Dropzone from "react-dropzone"

export const Form = () => {


    // Cloudinary ☁
    const [image, setImage] = useState({array : {}})
    const [loading, setLoading] = useState("")
    
    const handleDrop = (files) =>{
        const uploaders = files.map((file) => {
            const formData = new FormData();
            formData.append("file", file)
            formData.append("tags", "codeinfuse, medium, gist")
            formData.append("upload_preset", "gamingFarm")
            formData.append("api_key", "482539939152741")
            formData.append("timestamp", (Date.now() / 100) | 0)
            setLoading("true")
            return axios.post("https://api.cloudinary.com/v1_1/dfa5dlork/image/upload", formData,{
                headers: {"X-Requested-With" : "XMLHttpRequest"},
            })
            .then((response) =>{
                const data =response.data
                
                
                var fileURL = data.secure_url

                // URL DE LA IMAGEN
              
            })
        })
        axios.all(uploaders).then(() => {
            setLoading("false")
        })
    } // CLOUDINARY ↑


    // SELECT'S 
    const marks = [{ title: 'Logitech' }, { title: 'Razer' }, { title: "Redragon" }, { title: "ASUS" }, { title: "HP" }];
    const categories = [{ title: 'Mouse' }, { title: 'Teclado' }, { title: 'Combos' }, { title: 'WebCam' }, { title: 'Auriculares' }, { title: 'Gabinetes' }, { title: 'MousePad' }, { title: 'Gabinete' }, { title: 'Placa Madre' }, { title: 'Tarjeta Grafica' }]

    // Guardo la data para enviar a la db en un estado local

    const [input, setInput] = useState({
        title: '',
        price: " ",
        detail: '',
        stock: " ",
        imagen: '' ,
        mark: '',
        category: '',
    })



    // VALIDACION → esta funcion valida los datos ingresados en el formulario y me da el ok para enviar el formulario
    function validate() {
        let errors = {}

        if(!input.imagen){
            errors.imagen = "debe tener una foto"
        } else
        if (!input.title) {
            errors.title = 'Debe completar el campo Title';
            return alert(errors.title);
        } else if (input.title.length <= 3) {
            errors.title = 'El campo Title debe contener al menos 3 caracteres';
            return alert(errors.title);
        } else if (!/^[0-9]+$/.test(input.price)) {
            errors.price = 'El campo Price solo puede contener numeros';
            return alert(errors.price);
        } else if (input.price <= 0) {
            errors.price = 'El campo Price debe ser mayor a 0';
            return alert(errors.price);
        } else if (!input.detail) {
            errors.detail = 'Debe completar el campo Detail';
            return alert(errors.detail);
        } else if (input.detail.length <= 10) {
            errors.detail = 'El campo Detail debe contener al menos 10 caracteres';
            return alert(errors.detail);
        } else if (!/^[0-9]+$/.test(input.stock)) {
            errors.stock = 'El campo Stock solo puede contener numeros';
            return alert(errors.stock);
        } else if (input.stock <= 0) {
            errors.stock = 'El campo Stock solo puede ser mayor o igual a 0';
            return alert(errors.stock);
        } else if (!input.mark.length) {
            errors.mark = 'Debe seleccionar una Mark';
            return alert(errors.mark);
        } else if (!input.category.length) {
            errors.category = 'Debe seleccionar una Category';
            return alert(errors.category);
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
            imagen: ' ',
            mark: '',
            category: '',
        });

        setEnviar(false);
    }

    // Post 
    function newProduct(data) {
        return axios.post('http://localhost:3001/products', data)
            .then((data) => {
                alert(data)
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

    async function handleSubmit(e) {
        e.preventDefault();
        validate();

        if (enviar) {
            await newProduct(input);
            clearInput()
            alert('Se guardaron los datos del producto')
            window.location.reload()
        }
    }
    const [enviar, setEnviar] = useState(false)
	

    return (
        <div className="container padre">
            <h1 className="as"> as</h1>
            <form className="formProduct row g-5 mt-2">
                <h3 className="h3T">📦 Cargar el Producto 📦</h3>

                {/* TITULO  */}

                <div className="div-title col-5">
                    <label for="tituloI" class="form-label ">Titulo</label>
                    <input type="text" name="title" value={input.title} onChange={handleChange} className="form-control form-control-lg escribir" id="tituloI" placeholder="Escribe aquí tu titulo" required />
                    <div id="tituloI" class="form-text">Es el primer contacto que el consumidor tiene con tu producto en el ambiente online </div>
                </div>


                {/* DETALLES */}

                <div className="col-7">
                    <label for="detalle" class="form-label " name="detail" htmlFor="detail">Detallle</label>
                    <input class="form-control form-control-sm escribir detalless" type="text" id="detalle" placeholder="Escribe aquí los detalles" aria-label=".form-control-lg example" name="detail" value={input.detail} onChange={(e) => handleChange(e)} required></input>
                    <div id="tituloI" class="form-text">Mientras más detalles precisos les cuente al cliente, más interesado estaran en el producto
                    </div>
                </div>

                {/* PRECIO */}

                <div className="div-title col-2">
                    <label for="price" className="form-label labels" >Precio</label>
                    <input type="number" name="price" className="form-control escribir" htmlFor="price"  required id="price" min="0" max="1000000" value={input.price} placeholder="$ USD " onChange={(e) => handleChange(e)}/>
                    {/* <div id="emailHelp" class="form-text">Lo que los clientes están dispuestos a pagar por un producto.</div> */}
                    <div id="emailHelp" class="form-text">El cliente esta dispuesto a pagar</div>
                </div>

                    {/* STOCK NEW  */}

                    {/* Validar stock */}
                <div className="div-title col-2">
                    <label for="stock" className="form-label labels">Stock</label>
                    <input type="number" name="stock" className="form-control escribir" htmlFor="stock" required id="stock" min="0" max="1000000" value={input.stock} onChange={(e) => handleChange(e)} placeholder="Cantidad"/>
                    {/* <div id="emailHelp" class="form-text">Lo que los clientes están dispuestos a pagar por un producto.</div> */}
                    <div id="emailHelp" class="form-text">Responsable de evitar la falta del producto</div>
                </div>

                 


                {/* CLOUDINARY ☁  PART 2 */}

                <div className="col-8">
                    <Container>
                        <label for="foto" className="form-label labels" name="foto">Subir Foto</label>

                           
                            
                        <Dropzone className="dropzone"
                        onDrop={handleDrop}
                        onChange={(e) => setImage(e.target.value)}
                        value={image}>
                            

                                {({getRootProps, getInputProps}) => (
                                    <section>
                                        <div {...getRootProps({className : "dropzone"})}>
                                            <input {...getInputProps()}  />
                                            
                                            <p class="form-text"><span>📂</span>Coloca tus imagenes aqui o clickea para seleccionar</p>
                                        </div>
                                    </section>
                                )}
                        </Dropzone>
                    </Container>
                </div>


                  {/* IMAGEN */}

                   {/* <div class="col-8">
                    <label for="imagenI" class="form-label labels">Imagen</label>
                    <input class="form-control escribir" type="file" id="imagenI" value={input.imagen} onChange={(e) => handleChange(e)} required />
                    <div id="emailHelp" class="form-text">Los potenciales clientes pueden observar en detalle cómo es el artículo que quieren comprar</div>
                </div>       */}                        


                {/* MARK */}

                <div className="div-mark col-5 selection2">
                    <label className="form-label labels ">Marca</label>
                    <select class="form-select escribir" aria-label="Default select example" onChange={(e) => handleMark(e)}>
                        <option name="new" value='' key='new'>Otros...</option>
                        {marks?.map(m => (<option name='mark' value={m.title} key={m.title}>{m.title}</option>))}
                    </select>
                </div>

                {/* CATEGORIAS */}

                <div className="div-category col-5 selection">
                    <label className="form-label labels" >Categoria</label>
                    <select class="form-select escribir" aria-label="Default select example" onChange={(e) => handleCategory(e)}>
                        <option selected >Otros...</option>
                        {categories?.map(c => (<option name="category" value={c.title} key={c.title}>{c.title}</option>))}
                    </select>
                </div>

              
                <button type="submit" className="btn-enviar btn btn-success col-6 guardarBoton" onClick={(e) => handleSubmit(e)}>Guardar</button>     
                <Link to="/Home"><button className="btn btn-danger volverBoton">Volver al Home</button></Link>
            
            </form>



            {/* BOTONES ↓ */}

            

        </div>

    )
    
}

export default Form;