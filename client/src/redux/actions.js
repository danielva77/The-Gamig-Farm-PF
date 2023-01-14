import axios from "axios"

export const GET_ALL_PROD = "GET_ALL_PROD"
export const SEARCH_BY_NAME = "SEARCH_BY_NAME"
export const GET_DETAIL = "GET_DETAIL"
export const CLEAN_DETAIL = "CLEAN_DETAIL"
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"
export const RESET_FILTER = "RESET_FILTER"
export const CHANGE_SORT = "CHANGE_SORT"
export const CHANGE_FILTER = "CHANGE_FILTER"
export const CHANGE_PAGE = "CHANGE_PAGE"
export const RESET_SORT = "RESET_SORT"

export const SET_PRICE_RANGE = "SET_PRICE_RANGE"
export const SET_SORT = "SET_SORT"
export const SET_FILTER_CATEGORY = "SET_FILTER_CATEGORY"
export const SET_NUMBERS_PAGINATED = "SET_NUMBERS_PAGINATED"
export const RESET_FILTERS = "RESET_FILTERS"
export const SET_FILTER_PRICE = "SET_FILTER_PRICE"
export const SET_NAME_FILTER = "SET_NAME_FILTER"

export const setNameFilter = payload => {
  console.log("object")
  return {
    type: SET_NAME_FILTER,
    payload,
  }
}

export const resetFilters = () => {
  return {
    type: RESET_FILTERS,
  }
}

export const setPriceRange = priceRange => {
  return {
    type: SET_PRICE_RANGE,
    payload: priceRange,
  }
}

export const setFilterPrice = () => {
  return { type: SET_FILTER_PRICE }
}

export const setSort = payload => {
  return {
    type: SET_SORT,
    payload,
  }
}

export const setFilterCategory = payload => {
  return {
    type: SET_FILTER_CATEGORY,
    payload,
  }
}

export const setNumbersPaginated = payload => {
  return {
    type: SET_NUMBERS_PAGINATED,
    payload,
  }
}

export function getAllProd() {
  // ----- Get from API
  return async function (dispatch) {
    var req = await axios.get("http://localhost:3001/products")
    const products = req.data

    return dispatch({
      type: "GET_ALL_PROD",
      payload: products,
    })
  }

  // ----- Get from json
  // return async function (dispatch) {
  //   return dispatch({
  //     type: "GET_ALL_PROD",
  //     payload: jsonData,
  //   })
  // }
}

export function getAllCategories() {
  return async function (dispatch) {
    try {
      //----- API
      const req = await axios.get("http://localhost:3001/category")

      const categories = req.data

      dispatch({ type: GET_ALL_CATEGORIES, payload: categories })

      // ----- JSON
      //   const categories = ["Consolas", "Periféricos"]
      //   dispatch({ type: GET_ALL_CATEGORIES, payload: categories })
    } catch (error) {
      // console.log(error.response.data)
      console.log("error en getAllCategories")
    }
  }
}

//Actions para la SearchBar
export function searchByName(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/products?title=" + name)
      return dispatch({
        type: "SEARCH_BY_NAME",
        payload: json.data,
      })
    } catch (error) {
      console.log(error)
      console.log("prueba error obtener title de producto")
      alert("No hay productos cargados con ese nombre")
    }
  }
}

export function resetFilter() {
  return {
    type: RESET_FILTER,
  }
}

export function resetSort() {
  return {
    type: RESET_SORT,
  }
}

export const changeSort = payload => {
  return {
    type: CHANGE_SORT,
    payload: payload,
  }
}

export function changeFilter(payload) {
  return {
    type: CHANGE_FILTER,
    payload,
  }
}

export const changePage = payload => {
  return {
    type: CHANGE_PAGE,
    payload: payload,
  }
}

export function volverAhome() {
  return function (dispatch) {
    dispatch({ type: "VOLVER_A_HOME" })
  }
}

//Actions para los Detalles
export const getDetail = id => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/products/${id}`)

    return dispatch({
      type: GET_DETAIL,
      payload: response.data,
    })
  }
}

//Actions para el carrito

export function removeFromCart(id) {
  return {
    type: "REMOVE_FROM_CART",
    id,
  }
}

export function cleanDetail() {
  return {
    type: "CLEAN_DETAIL",
  }
}

//Para Favoritos

export const addToFavorites = item => ({
  type: 'ADD_TO_FAVORITES',
  item,
});

export const removeFromFav = id => ({
  type: 'REMOVE_FROM_FAVORITES',
  
});