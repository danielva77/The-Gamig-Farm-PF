import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Cart from '../Cart/Cart'
import "./NavBar.css"
import Favoritos from "../Favorites/Favorites"


 function navBar () {

    return ( 
    <div className='Componente'> 
    <div className="Botones">
    <div className='btnCart'></div>
      <Cart/> 
      <Favoritos/>
      </div> 
                <SearchBar/>       
        </div> 
    )
}

export default navBar


