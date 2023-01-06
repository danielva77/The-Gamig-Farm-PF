import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

function NavBar() {
    return ( 
    <div className='BotNav'> 
        
                <div className="Botones">
                <NavLink to='/'><button>Sign in</button></NavLink>
                <NavLink to='/'><button>Sign up</button></NavLink>
                <NavLink to='/about'><button>ABOUT</button></NavLink>
        
                <SearchBar></SearchBar>
                </div>
                
        </div> 
    )
}

export default NavBar
