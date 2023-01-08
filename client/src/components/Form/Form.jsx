import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategories, getAllMarks } from '';
import { Link } from "react-router-dom"

export const Form = () => {

    // const dispatch = useDispatch();
    // // llamo a la actions para traiga las marcas y cartegorias de la db
    // useEffect(() => {
    //     dispatch(getAllCategories)
    //     dispatch(getAllMarks)
    // },[dispatch])

    // // me traigo los estados de categoria y marcas
    // const marks = (state) => useSelector(state.marks);
    // const categories = (state) => useSelector(state.categories);
    const marks = [{ title: 'Logitech' }, { title: 'Razer' }, {title: "Redragon"}, {title: "Noga"}];
    const categories = [{ title: 'MONITOR' }, { title: 'WEBCAM' }]

    // guardo la data para enviar a la db en un estado local

    const [input, setInput] = useState({
        title: '',
        price: 0,
        detail: '',
        stock: 0,
        imagen: '',
        mark: '',
        category: '',
    })

    //este estado me habilita a enviar el formulario 
    const [enviar, setEnviar] = useState(false)

    // esta funcion valida los datos ingresados en el formulario y me da el ok para enviar el formulario
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

    //post 
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

    // handles
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
        <div>
            <div className="createProduct">
                <h3>Formulario de carga de Productos!</h3>
                <form className="formProduct">
                    <div className="div-title">
                        <label name="title" htmlFor="title">Title: </label>
                        <input type="text" name="title" value={input.title} onChange={(e) => handleChange(e)} required />
                    </div>
                    <br></br>
                    <div className="div-price">
                        <label name="price" htmlFor="price">Price: </label>
                        <input type="number" name="price" min="0" max="1000000" value={input.price} onChange={(e) => handleChange(e)} required />

                    </div>
                    <br></br>
                    <div className="div-detail">
                        <label name="detail" htmlFor="detail">Detail: </label>
                        <input type="text" name="detail" value={input.detail} onChange={(e) => handleChange(e)} required />
                    </div>
                    <br></br>
                    <div className="div-stock">
                        <label name="stock" htmlFor="stock">Stock: </label>
                        <input type="number" name="stock" min="0" max="1000000" value={input.stock} onChange={(e) => handleChange(e)} required />
                    </div>

                    <br></br>
                    <div className="div-imagen">
                        <label name="imagen" htmlFor="imagen">Imagen: </label>
                        <input type="text" name="imagen" value={input.imagen} onChange={(e) => handleChange(e)} required />
                    </div>
                    <br></br>
                    <label>Mark:</label>
                    <div className="div-mark">


                    

                        <select class="form-select mb-4" aria-label="Default select example" onChange={(e) => handleMark(e)}>
                        <option name="new" value='' key='new'>- new Mark -</option>
                        {marks?.map(m => (<option name='mark' value={m.title} key={m.title}>{m.title}</option>))}
                        </select>

                        
                       </div>

                    <br></br>
                    <label>Category:</label>
                    <div className="div-category">                
                        <select class="form-select mb-4" aria-label="Default select example" onChange={(e) => handleCategory(e)}>
                        <option selected >- Otra variedad -</option>
                        {categories?.map(c => (<option name="category" value={c.title} key={c.title}>{c.title}</option>))}
                        </select>
                 
                    </div>
                </form>
                <button type="submit" className="btn-enviar" onClick={(e) => handleSubmit(e)}>Guardar</button>
            </div>
            <div>
                <Link to="/Home"><button className="btn-volver">Volver al Home</button></Link>
            </div>
        </div>

    )
}

export default Form;