import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories, resetFilters, setFilterCategory } from '../../redux/actions';

const ResetFiltersBtn = () => {
  const dispatch = useDispatch();

  const sortBy = useSelector(state => state.sortBy)
  const filterBy = useSelector(state => state.filterBy)

  const handleResetFilters = e => {
    dispatch(resetFilters());
    console.log(sortBy);
    console.log(filterBy);
  };

  return (
    <button onClick={handleResetFilters}>
      Reset filters
    </button>

  );
};

export default ResetFiltersBtn;