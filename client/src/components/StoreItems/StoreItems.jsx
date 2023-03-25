import React from "react";
import { StoreItem } from "../StoreItem/StoreItem";
import { useState, useEffect } from "react";
// import data from "../../data/items.json";
import { useDispatch, useSelector } from "react-redux";
import { changePage, setNumbersPaginated } from "../../redux/actions";
import "./Storeee.css";
import { Link } from "react-router-dom";
import { filterByName } from "../../hooks/filterByName";
import { filteredbyCategory } from "../../hooks/filterByCategory";
import { filteredbyMarks } from "../../hooks/filterByMarks";
import { sortByPrice } from "../../hooks/sortByPrice";
import { paginateItems } from "../../hooks/paginateItems";
import { getNumberButtons } from "../../hooks/getNumberButtons";
import Footer from "../Footer/Footer";
import { filteredbyGames } from "../../hooks/filterByGames";
import { filteredbyJoystick } from "../../hooks/filterByJoystick";

function StoreItems({ currentVideogames }) {
  const dispatch = useDispatch();

  // todos los productos
  const items = useSelector((state) => state.items);

  // variables globales para Paginado
  const currentPage = useSelector((state) => state.currentPage);
  // const itemsPerPage = useState(2)
  const itemsPerPage = useSelector((state) => state.itemsPerPage);

  // variables globales para filtrado y ordenamiento
  const nameFilter = useSelector((state) => state.nameFilter);
  const categoryFilter = useSelector((state) => state.categoryFilter);
  const joystickFilter = useSelector((state) => state.joystickFilter);
  const gamesFilter = useSelector((state) => state.gamesFilter);
  const sortBy = useSelector((state) => state.sortBy);

  // funcion para volver a la pagina 1 (se ejecutará cada vez que haya un filtrado u ordenamiento)
  const resetCurrentPage = () => dispatch(changePage(currentPage));

  // --------  filteredAndSorted como variable auxiliar para filtrado y ordenamiento   -----------
  // El estado global "items", que traemos con useSelector va a tener siempre todos los productos, sin filtrado ni ordenamiento.
  // Le damos a "filteredAndSorted" inicialmente todo lo que tenga "items". Va a ser una copia, la cual vamos a poder modificar con filtros y ordenamiento, sin cambiar nada en el estado global "items".
  // Finalmente, renderizamos "currentItems", que corresponde al paginado en base a "filteredAndSorted".
  let filteredAndSorted = items;

  // Filtrado por nombre
  // En esta caso, cada vez que filtremos por nombre vamos a buscar en el array que tiene todos los productos desordenados y sin filtro, osea, en el estado global "items".
  filteredAndSorted = nameFilter
    ? filterByName(filteredAndSorted, nameFilter, resetCurrentPage)
    : filteredAndSorted;

  /** -- Filtrado por categoria --
   Cuando seleccionemos un filtro por categoría (que en realidad representa a la consola), su valor es guardado en el estado global 'categoryFilter' (esto pasa en el componente CategoryFilter).
   
   Traemos acà este estado usando useSelector. Si 'categoryFilter' tiene algun valor, entonces filteredAndSorted será modificado haciendo uso del hook 'filteredbyCategory' (ver en carpeta hooks).
   
   Si "categoryFilter" está vacío, filteredAndSorted sigue siendo igual.
   */
  filteredAndSorted = categoryFilter
    ? filteredbyCategory(filteredAndSorted, categoryFilter, resetCurrentPage)
    : filteredAndSorted;

  filteredAndSorted = gamesFilter
    ? filteredbyGames(filteredAndSorted, gamesFilter, resetCurrentPage)
    : filteredAndSorted;

  filteredAndSorted = joystickFilter
    ? filteredbyJoystick(filteredAndSorted, joystickFilter, resetCurrentPage)
    : filteredAndSorted;

  // Ordenamiento
  filteredAndSorted = sortBy
    ? sortByPrice(filteredAndSorted, sortBy, resetCurrentPage)
    : filteredAndSorted;

  // if (mandofilter[0]) {
  //   filteredAndSorted = mandofilter;
  // }
  // if (juegosfilter[0]) {
  //   filteredAndSorted = juegosfilter;
  // }
  // console.log("MAAAANDOOOSSS", mandofilter);

  // Filtrado por marca
  // filteredAndSorted = markFilter
  //   ? filteredbyMarks(filteredAndSorted, markFilter, resetCurrentPage)
  //   : filteredAndSorted;

  // Filtrado por mandos
  // filteredAndSorted = mandofilter
  // ? mandofilter
  // : filteredAndSorted;

  // filteredAndSorted = mandofilter[0] ?
  // mandofilter : filteredAndSorted

  // filteredAndSorted = juegosfilter[0] ?
  // juegosfilter : filteredAndSorted

  // Paginate items
  let currentItems = paginateItems(
    filteredAndSorted,
    currentPage,
    itemsPerPage
  );

  // Enviar array de botones al paginado
  getNumberButtons(
    filteredAndSorted,
    itemsPerPage,
    dispatch,
    setNumbersPaginated
  );

  return (
    <>
      <div className="divG">
        <div className="modelo3">
          {currentItems.length ? (
            currentItems.map((item) => {
              if (item.isActive) {
                return (
                  <>
                    <Link to={`/products/${item.id}`}></Link>
                    <div className="modelo">
                      <StoreItem
                        id={item.id}
                        name={item.title}
                        img={item.img}
                        price={item.price}
                        stock={item.stock}
                      />
                    </div>
                  </>
                );
              }
            })
          ) : (
            <div> "No hay productos todavía."</div>
          )}
        </div>
      </div>
    </>
  );
}

export default StoreItems;
