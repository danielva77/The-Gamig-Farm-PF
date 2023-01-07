import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom' //useHistory === 
import { useDispatch, useSelector } from 'react-redux'
// import {postActivity, getActivity} from "../actions"

export default function ActivityCreate() {
  return (
    <div className='created'>
      <Link to={"/"}><button type="button" class="btn btn-outline-danger mt-3">Volver</button></Link>

      <h1>Crea tu Perfil</h1>

      <form className='bg-success'>


        {/* NAME AND LASTNAME */}
        <div class="input-group">
          <span class="input-group-text bg-warning">Nombre y Apellido</span>
          <input type="text" aria-label="First name" className="form-control bg-black bg-gradient text-light" placeholder='Nombre...' />
          <input type="text" aria-label="Last name" class="form-control bg-black bg-gradient text-light" placeholder='Apellido...' />
        </div>

        <div class="input-group mt-2">
          <label class="input-group-text bg-warning" for="inputGroupFile01">Avatar</label>
          <input type="file" class="form-control bg-black text-light" id="inputGroupFile01" />
        </div>

        <div class="input-group mt-2">
          <span class="input-group-text bg-warning" id="basic-addon1">@ Correo Electronico</span>
          <input type="text" class="form-control bg-black text-light" placeholder="example@henry.com" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div class="input-group mt-2">
          <span class="input-group-text bg-warning" id="basic-addon1">Password</span>
          <input type="password" class="form-control bg-black text-light" placeholder="Example:  xF34rRA_1" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <button type='submit' className='btn btn-primary p-4 m-4'>Registrarse</button>



      </form>


      <div>



      </div>

    </div>
  )
}
