import axios from "axios";
import data from "../data/items.json"


export const GET_ALL_PROD = "GET_ALL_PROD";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";

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

  export const GET_DETAIL = 'GET_DETAIL';

  export const getDetail = (id) => {
    return async (dispatch) => {
        let info = await axios.get(`/product/${id}`);
        dispatch({ type: GET_DETAIL, payload: info.data });
    }
}
