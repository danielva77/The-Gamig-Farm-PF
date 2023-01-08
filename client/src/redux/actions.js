import axios from "axios";
import data from "../data/items.json"


export const GET_ALL_PROD = "GET_ALL_PROD";
export const GET_DETAIL = "GET_DETAIL";
export const FILTER_CATEGORY ="FILTER_CATEGORY";
export const ORDER_BY_ALFABETICO = "ORDER_BY_ALFABETICO";
export const FILTER_BY_MARK = "FILTER_BY_MARK";

export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

//Actions para la SearchBar

export function searchByName(name)  { 
  return async function (dispatch) { 
    try {
      let json = await axios.get("http://localhost:3001/products?title="+name);
      return dispatch({
        type: "SEARCH_BY_NAME",
        payload: json.data,
      })
    } catch (error) {
        console.log(error)
        console.log("prueba error obtener title de producto")
        alert("No hay productos cargados con ese nombre")
    };
  };
};

export function getAllProd() { 
  return async function(dispatch){
    var json = await axios.get("http://localhost:3001/products");

    return dispatch({
      type: "GET_ALL_PROD",
      payload: json.data,
    });
  };
};

  export function volverAhome(){ 
    return function (dispatch){ 
      dispatch({type:'VOLVER_A_HOME'}) 
    }
  }

  //Actions para los Detalles
  
  export const getDetail = (id) => {
    return async function (dispatch) {
        const response = await axios.get(
            `http://localhost:3001/productss/${id}`
        )
  
        return dispatch({
            type: GET_DETAIL,
            payload: response.data
        })
    }
}

//Actions para los filtros

export const filterByCategory = (payload) => {
  return {
      type: 'FILTER_CATEGORY',
      payload
  }
}

export const filterByMark = (payload) => {
  return {
      type: 'FILTER_BY_MARK',
      payload
  }
}
  
  
  export function cleanDetail(){
    return{
        type: 'CLEAN_DETAIL'
    }
  }
