import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    // const dispatch = useDispatch();

           {/* FILTRADO */} 

    // const handleOrder = (event) => {
    //     event.preventDefault();
    //     dispatch(orderByOrder(event.target.value));
    //     setCurrentPage(1);
    //     setOrder(`Ordenado ${event.target.value}`);
    // }

    // const handleOrderByPopularidad = (event) => {
    //     event.preventDefault();
    //     dispatch(orderByPopularidad(event.target.value));
    //     setCurrentPage(1);
    //     setOrder(`Ordenado ${event.target.value}`);
    // }

    // const handleFilterMarcas = (event) => {
    //     dispatch(filterMarcas(event.target.value));
    // }

    
    // const handleFilterByConsolas = (e) => {
    //     e.preventDefault();
    //     dispatch(FilterByConsolas(e.target.value));
    //     setCurrentPage(1);
    // }

//     return (
        
//         <div className='Select'>
//         {/* Ordenamiento */}
//         <select onChange={(event) => handleOrder(event)} id=''>
//             <option value='Asc-Desc Filter'>Orden Alfabetico</option>
//             <option value="Asc">Ascendente</option>
//             <option value="Desc">Descendente</option>
//         </select>

//         {/* filtrado por popularidad */}
//         <select onChange={(event) => handleOrderByPopularidad(event)} id=''>
//             <option value='Popularidad'>Pupularidad</option>
//         </select>


//         {/*filtrado por marcas */}
//         <select onChange={(event) => handleFilterMarcas(event)} id=''>
//             <option hidden='Marcas'>Marcas</option>
//         </select>

//         {/*filtrado por consolas */}
//         <select onChange={(e) => handleFilterByConsolas(e)} id=''>
//             <option value="Consolas">Consolas</option>
//             {consolas.map((el) => (
//                 <option value={el} key={el.id}>{el}</option>
//             ))}
//         </select>
//     </div>

//     )
// }

{/* Este apartado es solo para mostrar el esqueleto de los filtros..*/}

return (
        
    <div className='Select'>
    {/* Ordenamiento */}
    <select>
        <option value='Asc-Desc Filter'>Orden Alfabetico</option>
        <option value="Asc">Ascendente</option>
        <option value="Desc">Descendente</option>
    </select>

    {/* filtrado por popularidad */}
    <select>
        <option value='Popularidad'>Pupularidad</option>
    </select>


    {/*filtrado por marcas */}
    <select>
        <option hidden='Marcas'>Marcas</option>
    </select>

    {/*filtrado por consolas */}
    <select>
        <option value="Consolas">Consolas</option>
        {/* {consolas.map((el) => (
            <option value={el} key={el.id}>{el}</option>
        ))} */}
    </select>
</div>

)
}

export default Home;
