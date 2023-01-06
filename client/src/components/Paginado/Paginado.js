import React from "react";

export default function Paginado({videogamesPerPage, allVideogames, paginado}){
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++) {
    pageNumbers.push(i);
  }
  return(
    <div>
      <p>
        {
          pageNumbers && 
          pageNumbers.map(number => {return(
            <button key={number} onClick={() => paginado(number)}>{number}</button>
          )})
        }
      </p>

    </div>
  )
}