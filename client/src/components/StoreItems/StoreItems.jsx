import React from "react"
import { StoreItem } from "../StoreItem/StoreItem"
import { useState, useEffect } from "react";
// import data from "../../data/items.json";
import { useDispatch, useSelector } from "react-redux";
import { setNumbersPaginated } from "../../redux/actions";
import "./Storeee.css";
import { Link } from "react-router-dom";
import { filterByName } from "../../hooks/filterByName";
import { filteredbyCategory } from "../../hooks/filterByCategory";
import { sortByPrice } from "../../hooks/sortByPrice";
import { paginateItems } from "../../hooks/paginateItems";
import { getNumberButtons } from "../../hooks/getNumberButtons";
import Footer from "../Footer/Footer";


function StoreItems({ currentVideogames }) {
  const dispatch = useDispatch()

  // todos los productos
  const items = useSelector(state => state.items)

  // variables globales para Paginado
  const currentPage = useSelector(state => state.currentPage)
  const itemsPerPage = useSelector(state => state.itemsPerPage)

  // variables globales para filtrado y ordenamiento
  const nameFilter = useSelector(state => state.nameFilter)
  const categoryFilter = useSelector(state => state.categoryFilter)
  const sortBy = useSelector(state => state.sortBy);

  // Filtrado por categoria
  let filteredAndSorted = categoryFilter ? filteredbyCategory(items, categoryFilter) : items

  // Filtrado por nombre
  filteredAndSorted = nameFilter ? filterByName(filteredAndSorted, nameFilter) : filteredAndSorted

  // Ordenamiento
  filteredAndSorted = sortBy ? sortByPrice(filteredAndSorted, sortBy) : filteredAndSorted

  // Paginate items
  let currentItems = paginateItems(filteredAndSorted, currentPage, itemsPerPage)

  // Enviar array de botones al paginado
  getNumberButtons(filteredAndSorted, itemsPerPage, dispatch, setNumbersPaginated)

  return (
    <>
      <div className="divG">
        <h1 className="productosT">PRODUCTOS</h1>
        <div className="modelo3">
          {currentItems.map((card) => {
            return (
              <Link to={"/products/" + card.id}>
                <div className="modelo">
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
        <Footer className='footer2' />
      </div>
    </>

  )
}

export default StoreItems