import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Cart from '../Cart/Cart'
import "./NavBar.css"


 function navBar () {

    return ( 
    <div className='Componente'> 
    <div className="Botones">
    <div className='btnCart'></div>
      <Cart/> 
      </div> 
                <SearchBar/>       
        </div> 
    )
}

export default navBar


