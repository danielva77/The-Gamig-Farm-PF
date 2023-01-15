import axios from 'axios';
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const EditUserProfile = () => {
    const { id } = useParams()

    const [input, setInput] = useState({})

    function handleChange (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    async function handleSubmit (e) {
        e.preventDefault();
        return await axios.put('http://localhost:3001/user/'+ id, input)

    }

    return (
        <div>
            <form>
                <div className="div-name">
                    <label name="title" htmlFor="name">Nombre: </label>
                    <input type="text" name="name" value={input.name} onChange={(e) => handleChange(e)} />
                </div>
                <br></br>
                <div className="div-email">
                    <label name="email" htmlFor="email">Email: </label>
                    <input type="text" name="email" value={input.email} onChange={(e) => handleChange(e)} />
                </div>
                <br></br>
                <div className="div-adress">
                    <label name="adress" htmlFor="adress">Direccion: </label>
                    <input type="text" name="adress" value={input.adress} onChange={(e) => handleChange(e)} />
                </div>
                <br></br>
                <div className="div-date">
                    <label name="date" htmlFor="date">Fecha de Nacimiento: </label>
                    <input type="date" name="date" value={input.date} onChange={(e) => handleChange(e)} />
                </div>
                <br></br>
                    <div className="div-telephone">
                        <label name="telephone" htmlFor="telephone">Telefono: </label>
                        <input type="number" name="telephone"  value={input.telephone} onChange={(e) => handleChange(e)} />
                    </div>
                <br></br>
                <div className="div-avatar">
                    <label name="avatar" htmlFor="avatar">Avatar: </label>
                    <input type="text" name="avatar" value={input.avatar} onChange={(e) => handleChange(e)} />
                </div>
            </form>
            <button type="submit" className="btn-enviar" onClick={(e) => handleSubmit(e)}>Guardar</button>

            <div>
                <Link to={`/myProfile/${id}`}><button className="btn-volver">Volver a mi perfil</button></Link>
            </div>
        </div>
    )
}

export default EditUserProfile;