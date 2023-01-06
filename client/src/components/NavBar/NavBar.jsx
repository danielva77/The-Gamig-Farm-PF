import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import Cart from '../Cart/Cart'

function NavBar() {
    return ( 
    <div className='BotNav'> 
        
                <div className="Botones">
                <NavLink to='/'><button>Sign in</button></NavLink>
                <NavLink to='/'><button>Sign up</button></NavLink>
                <Cart/>
                <SearchBar></SearchBar>
                </div>
                
        </div> 
    )
}

export default NavBar
