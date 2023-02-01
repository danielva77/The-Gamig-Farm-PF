import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSort } from '../../redux/actions';

const Sort = () => {
    const dispatch = useDispatch();

    const handleChangeSort = e => {
        // console.log(e.target.value);
        dispatch(setSort(e.target.value));
    };

    return (
        
        <select 
            className="form-select filterSort" 
            aria-label="Default select example"
            name="type"
            id="type"
            onChange={handleChangeSort}
            menuPlacement="top"
            defaultValue={'DEFAULT'}
        >
            <option value="DEFAULT" disabled hidden selected>Precio</option>
            <option>Mayor a Menor</option>
            <option>Menor a Mayor</option>
        </select>

    );
};

export default Sort;





