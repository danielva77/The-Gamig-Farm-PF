import React from "react"
import { StoreItem } from "../StoreItem/StoreItem"
import { useState, useEffect } from "react";
// import data from "../../data/items.json";
import { useDispatch, useSelector } from "react-redux";
import { getAllProd, setNumbersPaginated } from "../../redux/actions";
import "./Storeee.css";
import { Link } from "react-router-dom";

function StoreItems() {
  const dispatch = useDispatch()

  const currentPage = useSelector(state => state.currentPage)
  const itemsPerPage = useSelector(state => state.itemsPerPage)
  const nameFilter = useSelector(state => state.nameFilter)

  const items = useSelector(state => state.items)

  let filteredByName

  if (nameFilter) {
    console.log(nameFilter);
    // pokemonsFiltered: state.pokemons.filter(poke => {

    //   let aux = poke.name.slice(0, action.payload.length)

    //   return aux.toLowerCase() === action.payload.toLowerCase()
    // }
    filteredByName = items.filter(item => {
      let aux = item.title.slice(0, nameFilter.length)

      return aux.toLowerCase() === nameFilter.toLowerCase()
    })
  }

  // filtrado por categorias (cambiar nombre despuesss)
  const filterBy = useSelector(state => state.filterBy)

  let filteredItems = filteredByName ? filteredByName : items

  if (filterBy) {
    filteredItems = filteredItems.filter(item => item.categoryName === filterBy)
  }


  // ordenamiento
  const sortBy = useSelector(state => state.sortBy);

  let sortedItems = filteredItems

  // Sort items
  if (sortBy === 'Min price') {
    sortedItems = sortedItems.sort((a, b) => {
      return a.price - b.price;
    })
  } else if (sortBy === 'Max price') {
    sortedItems = sortedItems.sort((a, b) => {
      return b.price - a.price
    })
  }

  // Paginate items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

  // la cantidad de paginas
  const amountOfPages = Math.ceil(sortedItems.length / itemsPerPage)

  const numberButtons = []

  for (let i = 1; i <= amountOfPages; i++) {
    numberButtons.push(i)
  }

  dispatch(setNumbersPaginated(numberButtons))

  return (
    <div className="container">
      <div
        className="row"
        style={{ gap: "20px", backgroundColor: "#black" }}
      ><div className="row row-cols-1 row-cols-md-2 g-4">
          {currentItems?.map((card) => {
            return (
              <Link to={"/products/" + card.id} style={{ textDecoration: 'none' }}>

                <div className="col">
                  <StoreItem
                    id={card.id}
                    name={card.title}
                    imgUrl={card.img}
                    price={card.price}
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div >
  )
}

export default StoreItems
