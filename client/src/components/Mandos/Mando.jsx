import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByMandos } from '../../redux/actions';
import "./Mando.css"


export default function Mando() {
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(filterByMandos());
      }, [dispatch]);

    const handleFilter = e => {
        dispatch(filterByMandos);
    };
    return (
        <div>
             <button class="filterMark3" onClick={handleFilter()}>Mandos</button>
        </div>
     );
}
