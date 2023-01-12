import React from "react";
import { StoreItem } from "../StoreItem/StoreItem";
import { useState, useEffect } from "react";
// import data from "../../data/items.json";
import { useDispatch, useSelector } from "react-redux";
import { setNumbersPaginated } from "../../redux/actions";
import "./Storeee.css";
import { Link } from "react-router-dom";
import { filterByName } from "../../hooks/filterByName";
import { filteredbyCategory } from "../../hooks/filterByCategory";
import { filteredbyMarks } from "../../hooks/filterByMarks";
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
  const markFilter = useSelector(state => state.marksFilter)
  const sortBy = useSelector(state => state.sortBy);

  let filteredAndSorted = items;

  // Filtrado por categoria
  filteredAndSorted = categoryFilter ? filteredbyCategory(filteredAndSorted, categoryFilter) : filteredAndSorted
  console.log("esto filtra categoria", filteredAndSorted)

   // Filtrado por marca
  filteredAndSorted = markFilter ? filteredbyMarks(filteredAndSorted, markFilter) : filteredAndSorted
  console.log("esto filtra marca", filteredAndSorted)

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
          {currentItems.length
            ?
            currentItems.map((card) => {
              // { console.log(card) }
              return (
                <>
                <Link to={`/products/${card.id}`}>
                </Link>
                  <div className="modelo">
                    <StoreItem
                      id={card.id}
                      name={card.title}
                      img={card.img}
                      price={card.price}
                    />
                  </div>
                  </>
              )
            })
            :
            <div>  "No hay productos todavía."</div>
          }
        </div>
        <Footer className='footer2' />
      </div>
    </>

  )
}

export default StoreItems