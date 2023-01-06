import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const Filter = () => {
     const dispatch = useDispatch();

           {/* FILTRADO */} 

     const handleOrder = (event) => {
         event.preventDefault();
         dispatch(orderByOrder(event.target.value));
         setCurrentPage(1);
         setOrder(`Ordenado ${event.target.value}`);
     }

     const handleOrderByPopularidad = (event) => {
         event.preventDefault();
         dispatch(orderByPopularidad(event.target.value));
         setCurrentPage(1);
         setOrder(`Ordenado ${event.target.value}`);
     }

     const handleFilterMarcas = (event) => {
         dispatch(filterMarcas(event.target.value));
     }

    
     const handleFilterByConsolas = (e) => {
         e.preventDefault();
         dispatch(FilterByConsolas(e.target.value));
         setCurrentPage(1);
     }

     return (
        
         <div className='Select'>
         {/* Ordenamiento */}
         <select onChange={(event) => handleOrder(event)} id=''>
             <option value='Asc-Desc Filter'>Orden Alfabetico</option>
             <option value="Asc">Ascendente</option>
             <option value="Desc">Descendente</option>
         </select>
         
         {/*filtrado por marcas */}
         <select onChange={(event) => handleFilterMarcas(event)} id=''>
             <option hidden='Marcas'>Marcas</option>
         </select>

         {/*filtrado por consolas */}
         <select onChange={(e) => handleFilterByConsolas(e)} id=''>
             <option value="Categorias">Categorias</option>
             {categorias.map((el) => (
                 <option value={el} key={el.id}>{el}</option>
            ))}
         </select>
     </div>

     )
 }

export default Filter;