import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom' //useHistory === 
import { useDispatch, useSelector } from 'react-redux'
// import {postActivity, getActivity} from "../actions"

export default function ActivityCreate() {
  return (
    <div className='created'>
      <Link to={"/"}> <button>Volver</button></Link>

      <h1>Crea tu Perfil</h1>

      <form >

        <div>
          <h3>Nombre y Apellido</h3>
          <input type="text" name="name" required />
        </div>

        <div>
          <h4 >Cargar Foto</h4>
          <label><input type="file"/></label>
        </div>

        <div>
          <h4 >Correo Electronico:</h4>
          <input type="text" name="duration" required className='creacion' />
        </div>

        <div>
          <h4>password</h4>
          <label><input type="password" required/></label>
        </div>

        <button type='submit' className='creacion1'>Registrarse</button>
        

        
      </form>


    </div>
  )
}
