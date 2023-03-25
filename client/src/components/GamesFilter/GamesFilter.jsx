import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getAllMarks, setFilterMarks } from '../../redux/actions';
import { filterByGames } from "../../redux/actions";
import "./gamesFilter.css";

const GamesFilter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button className="filterMark2" onClick={() => dispatch(filterByGames())}>
        Juegos
      </button>
    </div>
  );
};

export default GamesFilter;

// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { filterByJuegos, filterByMandos, getAllMarks, setFilterMarks } from '../../redux/actions';
// import "./markFilter.css"

// const MarkFilter = () => {
//     const dispatch = useDispatch()

//     return (
//        <div>
//             <button class="filterMark2" onClick={alerta}>JUEGOS</button>
//        </div>
//     );
// };

// export default MarkFilter;

{
  /* <select
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
</select> */
}
