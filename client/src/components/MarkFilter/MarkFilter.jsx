import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMarks, setFilterMarks } from '../../redux/actions';
import "./markFilter.css"


const MarkFilter = () => {
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getAllMarks());
      }, [dispatch]);
      
    const marks = useSelector(state => state.marks)

    const handleChangeFilter = e => {
        // console.log(e.target.value);
        dispatch(setFilterMarks(e.tarnget.value));
    };

    const alerta = () => {
        alert("Hola")
    }

    return (
       <div>
            <button class="filterMark2" onClick={alerta}>Juegos</button>
       </div>
    );
};

export default MarkFilter;



{/* <select
class="form-select filterMark"
name="type"
id="type"
onChange={handleChangeFilter}
menuPlacement="top"
defaultValue={'DEFAULT'}
>
<option value="DEFAULT" disabled hidden>Boton</option>
{marks?.map(mark => {
    return (
        <option>{mark}</option>
    )
})}
</select> */}