import {React, useState} from 'react'
import { connect } from 'react-redux'
import { searchByName, getAllProd, volverAhome } from '../../redux/actions'
import './SearchBar.css'
import lupa from "../Assets/icone-loupe-gris.png"

function SearchBar({searchByName, volverAhome}) { 

    const [input, setInput] = useState({ 
        buscar: ''
    }) 

    const handleInputChange = function(e) { 
          setInput({ 
          [e.target.name]: e.target.value
        });
    } 

    const handleOnClick = () => {
        searchByName(input.buscar) 
        setInput({
            buscar: '' 
        });
    } 
    const handleOnClickAll = () => {
      
        volverAhome()
        setInput({
            buscar: ''
        });
    } 

    return (
      <div className="Background">
      <div className="searchbar-div">
      
      <div className='Nombrelogo'>
        <h1>The Gaming Farm</h1>
        </div>
        <input
          className="bar-btn"
          name="buscar" 
          placeholder="Search" 
          onChange={handleInputChange} 
          value={input.buscar} 
          autoComplete="off" 
        ></input>
        <button className="btn-search-bar" onClick={handleOnClick} > <img className="lupaa"src={lupa} /></button>
        </div>
      </div>
    );
}

export default connect(null, { searchByName, getAllProd, volverAhome })(SearchBar)