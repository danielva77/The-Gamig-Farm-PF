import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
function NavBar() {
    return ( 
    <div className='BotNav'> 
                <div className="BotSign">
                <NavLink to='/'><button>Sign in</button></NavLink>
                <NavLink to='/'><button>Sign up</button></NavLink>
                </div>
        
                <SearchBar/>
                
        </div> 
    )
}

export default NavBar
