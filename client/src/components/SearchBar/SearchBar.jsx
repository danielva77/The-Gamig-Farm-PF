import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from '../../redux/actions'
import './SearchBar.css'
import lupa from "../Assets/icone-loupe-gris.png"

export default function SearchBar(){
  const dispatch = useDispatch(); //hoks
  const [name, setName] = useState(" "); //estado local

  function handleInputChange(e){
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  };

  function handleSubmit(e){
    e.preventDefault();
    dispatch(searchByName(name));
    setName("");
  }; 

    return (
      <div className="Background">
      <div className="searchbar-div">
      
      <div className='Nombrelogo'>
        <h1>The Gaming Farm</h1>
        </div>
        <input
          className="bar-btn"
          type="text"
          name="buscar" 
          placeholder="Search ..." 
          onChange={(e) =>{handleInputChange(e)}} 
          // value={input.buscar} 
          autoComplete="off" 
        ></input>
        <button className="btn-search-bar" type="submit" onClick={(e) =>{handleSubmit(e)}} > <img className="lupaa" src={lupa} alt="lupa" /></button>
        </div>
      </div>
    );
}