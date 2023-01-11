import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategories, getAllMarks } from '';
import { Link } from "react-router-dom"
import "./Form.css"

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
    const marks = [{ title: 'Logitech' }, { title: 'Razer' }, {title: "Redragon"}, {title: "ASUS"},{title: "HP"}];
    const categories = [{ title: 'Mouse' }, { title: 'Teclado' }, { title: 'Combos' },{ title: 'WebCam' },{ title: 'Auriculares' },{ title: 'Gabinetes' },{ title: 'MousePad' }, { title: 'Gabinete' },{ title: 'Placa Madre' },{ title: 'Tarjeta Grafica' }]

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
        // } else if (!/^[0-9]+$/.test(input.price)) {
        //     errors.price = 'El campo Price solo puede contener numeros';
        //     return alert(errors.price);
        // } else if (input.price <= 0) {
        //     errors.price = 'El campo Price debe ser mayor a 0';
        //     return alert(errors.price);
        // } else if (!input.detail) {
        //     errors.detail = 'Debe completar el campo Detail';
        //     return alert(errors.detail);
        // } else if (input.detail.length <= 10) {
        //     errors.detail = 'El campo Detail debe contener al menos 10 caracteres';
        //     return alert(errors.detail);
        // } else if (!/^[0-9]+$/.test(input.stock)) {
        //     errors.stock = 'El campo Stock solo puede contener numeros';
        //     return alert(errors.stock);
        // } else if (input.stock <= 0) {
        //     errors.stock = 'El campo Stock solo puede ser mayor o igual a 0';
        //     return alert(errors.stock);
        // } else if (!input.mark.length) {
        //     errors.mark = 'Debe seleccionar una Mark';
        //     return alert(errors.mark);
        // } else if (!input.category.length) {
        //     errors.category = 'Debe seleccionar una Category';
        //     return alert(errors.category);
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
            // .catch(e => {
            //     console.log(e)
            //     alert('error al crear el producto')
            // })
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
        <div className="container mb-5 padre">
            <h1 className="tras"> 5</h1>
          <div >
                <h3 className="h3T">Formulario de carga de Productos!</h3>
                <form className="formProduct">
                    <div className="div-title">
                    <label for="exampleInputEmail1" class="form-label">Titulo</label>
                        <input type="text" name="title" value={input.title} onChange={(e) => handleChange(e)} className="form-control form-control-lg escribir"required/>
                        <div id="emailHelp" class="form-text">Es el primer contacto que el consumidor tiene con tu producto en el ambiente online </div>
                    </div>
                    
                    <br></br>
                    <div className="div-title">
                    <label for="exampleInputEmail1" class="form-label">Precio:</label>
                        <input type="text" name="price" className="form-control escribir"required />
                        <div id="emailHelp" class="form-text">Es el que los clientes están dispuestos a pagar por un producto.</div>
                    </div>
                    <br></br>
                    {/* <div className="div-detail">
                        <label name="detail" htmlFor="detail">Detail: </label>
                        <input type="text" name="detail" value={input.detail} onChange={(e) => handleChange(e)} required />
                    </div> */}
                    <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" name="detail" htmlFor="detail">Detalles:</label>
  <input class="form-control form-control-sm escribir" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" name="detail" value={input.detail} onChange={(e) => handleChange(e)}></input>
  <div id="emailHelp" class="form-text">Afectan la forma en que el producto se muestra a los clientes, te facilitan la organización de tus productos y ayudan a los clientes a encontrar el producto</div>

</div>
                    <br></br>
                    <div className="div-stock col-2">
                        <label name="stock" htmlFor="stock">Stock: </label>
                        <input class="form-control form-control-sm escribir" type="number" placeholder=".form-control-sm" aria-label=".form-control-sm example"/>
                        <div id="emailHelp" class="form-text">Es el responsable de evitar la falta del producto</div>
                    </div>
              
                    <br></br>
                   
                        <div class="mb-3 col-7 mb-4">
  <label for="formFile" class="form-label">Imagen</label>
  <input class="form-control escribir" type="file" id="formFile" value={input.imagen} onChange={(e) => handleChange(e)} />
  <div id="emailHelp" class="form-text">Los potenciales clientes pueden observar en detalle cómo es el artículo que quieren comprar</div>
</div>
                   
                    <br></br>
                    <label>Mark:</label>
                    <div className="div-mark">


                    

                        <select class="form-select mb-4 escribir" aria-label="Default select example" onChange={(e) => handleMark(e)}>
                        <option name="new" value='' key='new'>- new Mark -</option>
                        {marks?.map(m => (<option name='mark' value={m.title} key={m.title}>{m.title}</option>))}
                        </select>
                        

                        
                       </div>

                    <br></br>
                    <label>Category:</label>
                    <div className="div-category">                
                        <select class="form-select mb-4 escribir" aria-label="Default select example" onChange={(e) => handleCategory(e)}>
                        <option selected >- Otra variedad -</option>
                        {categories?.map(c => (<option name="category" value={c.title} key={c.title}>{c.title}</option>))}
                        </select>
                 
                    </div>
                </form>                            
                                                 {/* btn-enviar */}
                <button type="submit" className="btn btn-success mb-5 mt-4" onClick={(e) => alert("producto creado")}>Guardar</button>
                {/* <button type="button" class="btn btn-success">Success</button> */}
            </div>
            <div>
                                                 {/* btn-volver */}
                <Link to="/Home"><button className="btn btn-danger mb-5">Volver al Home</button></Link>
            </div>
        </div>

    )
}

export default Form;