import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter, changeSort, getAllCategories, getAllProd, resetFilter, resetSort } from '../../redux/actions';

const Filter = ({ allVideogames, setCurrentPage }) => {

    const dispatch = useDispatch()

    const filter = useSelector(state => state.filter)
    const sort = useSelector(state => state.sort)
    const categories = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(getAllProd())
    }, [dispatch, sort, filter])

    const handleChangeSort = (e) => {
        // dispatch(actions.getAllPokemons())

        switch (e.target.value) {
            case "default":
                dispatch(resetSort())
                break
            case "nameAscendent":
                dispatch(resetSort())
                dispatch(changeSort({
                    ...sort,
                    ascName: true,
                    descName: false
                }))
                break
            case "nameDescendent":
                dispatch(resetSort())
                dispatch(changeSort({
                    ...sort,
                    ascName: false,
                    descName: true
                }))
                break
            default:
                return
        }
    }

    const handleChangeCategory = (e) => {
        dispatch(resetFilter())

        if (e.target.value === 'categoryDefault') {
            dispatch(resetFilter())
            // Los pokemons a renderizar finalmente siempre vienen de la variable pokemonsSort
            return dispatch(changeSort({}))
        }

        dispatch(changeFilter({
            ...filter,
            type: e.target.value
        }))

        // Los pokemons a renderizar finalmente siempre vienen de la variable pokemonsSort
        return dispatch(changeSort({}))
    }

    return (
        <div className='filters-container'>
            <select
                defaultValue={'default'}
                name={'name'}
                id={'name'}
                onChange={handleChangeSort}
            >
                <option
                    value='default'
                >
                    Order
                </option>
                <option
                    value='nameAscendent'
                >
                    A - Z
                </option>
                <option
                    value='nameDescendent'
                >
                    Z - A
                </option>
            </select>

            {/*filtrado por categorias */}
            <select
                defaultValue={'default'}
                name={'category'}
                id={'category'}
                onChange={handleChangeCategory}
            >
                <option
                    value='categoryDefault'
                >
                    All Categories
                </option>
                {categories?.map(category => {
                    return (
                        <option value={category.name}>{category.name}</option>
                    )
                })}
            </select>
        </div>

    )
}

export default Filter;