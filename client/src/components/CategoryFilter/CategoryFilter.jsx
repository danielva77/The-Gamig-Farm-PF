import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories, setFilterCategory } from '../../redux/actions';

const CategoryFilter = () => {
    const dispatch = useDispatch()

    const categories = useSelector(state => state.categories)

    const handleChangeFilter = e => {
        // console.log(e.target.value);
        dispatch(setFilterCategory(e.target.value));
    };

    return (
        <select
            name="type"
            id="type"
            onChange={handleChangeFilter}
            menuPlacement="top"
            defaultValue={'DEFAULT'}
        >
            <option value="DEFAULT" disabled hidden>Category</option>
            {categories?.map(category => {
                return (
                    <option>{category}</option>
                )
            })}
        </select>

    );
};

export default CategoryFilter;