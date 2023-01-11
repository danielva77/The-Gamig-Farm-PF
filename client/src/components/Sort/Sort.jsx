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
            name="type"
            id="type"
            onChange={handleChangeSort}
            menuPlacement="top"
            defaultValue={'DEFAULT'}
        >
            <option value="DEFAULT" disabled hidden>Sort by price</option>
            <option>Max price</option>
            <option>Min price</option>
        </select>

    );
};

export default Sort;