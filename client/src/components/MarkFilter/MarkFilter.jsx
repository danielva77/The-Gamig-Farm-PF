import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategories, setFilterCategory } from '../../redux/actions';
import { getAllMarks, setFilterMarks } from '../../redux/actions';

const MarkFilter = () => {
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getAllMarks());
      }, [dispatch]);
      
    const marks = useSelector(state => state.marks)

    const handleChangeFilter = e => {
        // console.log(e.target.value);
        dispatch(setFilterMarks(e.target.value));
    };

    return (
        <select
            name="type"
            id="type"
            onChange={handleChangeFilter}
            menuPlacement="top"
            defaultValue={'DEFAULT'}
        >
            <option value="DEFAULT" disabled hidden>Mark</option>
            {marks?.map(mark => {
                return (
                    <option>{mark}</option>
                )
            })}
        </select>

    );
};

export default MarkFilter;