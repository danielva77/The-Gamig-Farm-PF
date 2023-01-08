import axios from "axios"
import data from "../data/items.json"

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

export function getAllProd() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/products")

    return dispatch({
      type: "GET_ALL_PROD",
      payload: json.data,
    })
  }
}

export function getAllCategories() {
  return async function (dispatch) {
    try {
      const products = await axios.get("http://localhost:3001/products")

      let categories = []

      products.data.foreach(prod => {
        prod.Categories.foreach(prodCategory => {
          if (!categories.includes(prodCategory)) {
            categories.push(prodCategory)
          }
        })
      })

      console.log("categories: ", categories)

      dispatch({ type: GET_ALL_CATEGORIES, payload: categories })
    } catch (error) {
      console.log(error.response.data)
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
