import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { filterByCategory, orderByTittle, filterByMark } from '../../redux/actions';

const Filter = () => {
     const dispatch = useDispatch();
     const category = useSelector((state) => state.category)
     const [order, setOrder] = useState("");

           {/* FILTRADO */} 

    //  const handleOrderByPrice = (event) => {
    //      event.preventDefault();
    //      dispatch(orderByPrice(event.target.value));
    //      setCurrentPage(1);
    //      setOrder(`Ordenado ${event.target.value}`);
    //  }

     const handleFilterMark = (event) => {
         dispatch(filterByMark(event.target.value));
     }

    
     const handleFilterByCategory = (e) => {
         e.preventDefault();
         dispatch(filterByCategory(e.target.value));
        //  setCurrentPage(1);
     }

     return (
        
         <div className='Select'>
         {/* Ordenamiento */}
         <select onChange={(event) => handleTitlle(event)} id='tittle'>
             <option value='Asc-Desc Filter'>Orden Alfabetico</option>
             <option value="Asc">Ascendente</option>
             <option value="Desc">Descendente</option>
         </select>
         
         {/*filtrado por marcas */}
         <select onChange={(event) => handleFilterMark(event)} id='mark'>
             <option hidden='Mark'>Marcas</option>
         </select>

         {/*filtrado por categorias */}
         <select onChange={(e) => handleFilterByCategory(e)} id='category'>
             <option value="Category">Categorias</option>
             {category.map((el) => (
                 <option value={el} key={el.id}>{el}</option>
            ))}
         </select>
     </div>

     )
 }

export default Filter;