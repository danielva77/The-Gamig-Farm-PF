import React from "react"
import { StoreItem } from "../StoreItem/StoreItem"
import { useState, useEffect } from "react";
// import data from "../../data/items.json";
import { useDispatch, useSelector } from "react-redux";
import { getAllProd, setNumbersPaginated } from "../../redux/actions";
import "./Storeee.css";
import { Link } from "react-router-dom";
import { filterByName } from "../../hooks/filterByName";
import { filteredbyCategory } from "../../hooks/filterByCategory";
import { sortByPrice } from "../../hooks/sortByPrice";
import { paginateItems } from "../../hooks/paginateItems";
import { getNumberButtons } from "../../hooks/getNumberButtons";

function StoreItems() {
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
