import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategories, getAllMarks } from '';
import { Link } from "react-router-dom"
import "./Form.css"

export const Form = () => {

    const marks = [{ title: 'Logitech' }, { title: 'Razer' }, { title: "Redragon" }, { title: "ASUS" }, { title: "HP" }];
    const categories = [{ title: 'Mouse' }, { title: 'Teclado' }, { title: 'Combos' }, { title: 'WebCam' }, { title: 'Auriculares' }, { title: 'Gabinetes' }, { title: 'MousePad' }, { title: 'Gabinete' }, { title: 'Placa Madre' }, { title: 'Tarjeta Grafica' }]

    // Guardo la data para enviar a la db en un estado local

    const [input, setInput] = useState({
        title: '',
        price: 0,
        detail: '',
        stock: 0,
        imagen: '',
        mark: '',
        category: '',
    })

    //Este estado me habilita a enviar el formulario 
    const [enviar, setEnviar] = useState(false)

    // VALIDACION → esta funcion valida los datos ingresados en el formulario y me da el ok para enviar el formulario
    function validate() {
        let errors = {}

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
            price: 0,
            detail: '',
            stock: 0,
            imagen: '',
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

    return (
        <div className="container padre">
            <h1 className="as"> as</h1>
            <form className="formProduct row g-3 mt-2">
                <h3 className="h3T">Cargar el Producto 📦</h3>

                {/* TITULO  */}

                <div className="div-title col-5">
                    <label for="tituloI" class="form-label">Titulo</label>
                    <input type="text" name="title" value={input.title} onChange={handleChange} className="form-control form-control-lg escribir" id="tituloI" placeholder="Escribe aquí tu titulo" required />
                    <div id="tituloI" class="form-text">Es el primer contacto que el consumidor tiene con tu producto en el ambiente online </div>
                </div>


                {/* DETALLES */}

                <div className="col-7">
                    <label for="Detalle" class="form-label" name="detail" htmlFor="detail">Detalles:</label>
                    <input class="form-control form-control-sm escribir detalless" type="text" id="tituloI" placeholder="Escribe aquí los detalles" aria-label=".form-control-lg example" name="detail" value={input.detail} onChange={(e) => handleChange(e)} required></input>
                    <div id="tituloI" class="form-text">Afectan la forma en que el producto se muestra a los clientes, te facilitan la organización de tus productos y ayudan a los clientes a encontrar el producto
                    </div>
                </div>

                {/* IMAGEN */}

                <div class="col-8">
                    <label for="imagenI" class="form-label">Imagen</label>
                    <input class="form-control escribir" type="file" id="imagenI" value={input.imagen} onChange={(e) => handleChange(e)} required />
                    <div id="emailHelp" class="form-text">Los potenciales clientes pueden observar en detalle cómo es el artículo que quieren comprar</div>
                </div>

                {/* STOCK */}

                <div className="div-stock col-2">
                    <label name="stock" htmlFor="stock">Stock: </label>
                    <input class="form-control form-control-sm escribir" type="number" placeholder=".form-control-sm" aria-label=".form-control-sm example" required />
                    <div id="emailHelp" class="form-text">Es el responsable de evitar la falta del producto</div>
                </div>



                {/* PRECIO */}

                <div className="div-title col-2">
                    <label for="exampleInputEmail1" class="form-label">Precio:</label>
                    <input type="number" name="price" className="form-control escribir " required />
                    {/* <div id="emailHelp" class="form-text">Lo que los clientes están dispuestos a pagar por un producto.</div> */}
                    <div id="emailHelp" class="form-text">Lo que cliente esta dispuesto a pagar</div>
                </div>

                {/* MARK */}

                <div className="div-mark col-6">
                    <label>Mark:</label>
                    <select class="form-select mb-4 escribir" aria-label="Default select example" onChange={(e) => handleMark(e)}>
                        <option name="new" value='' key='new'>- new Mark -</option>
                        {marks?.map(m => (<option name='mark' value={m.title} key={m.title}>{m.title}</option>))}
                    </select>
                </div>

                {/* CATEGORIAS */}

                <div className="div-category col-6">
                    <label>Category:</label>
                    <select class="form-select mb-4 escribir" aria-label="Default select example" onChange={(e) => handleCategory(e)}>
                        <option selected >- Otra variedad -</option>
                        {categories?.map(c => (<option name="category" value={c.title} key={c.title}>{c.title}</option>))}
                    </select>
                </div>


            </form>



            {/* BOTONES ↓ */}

            <div>
                <Link to="/Home"><button className="btn btn-danger">Volver al Home</button></Link>
                <button type="submit" className="btn btn-success" >Guardar</button>
            </div>

        </div>

    )
}

export default Form;