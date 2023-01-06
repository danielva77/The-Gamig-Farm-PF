import axios from "axios";
import data from "../data/items.json"


export const GET_ALL_PROD = "GET_ALL_PROD";

//Actions para la SearchBar

export function searchByName(name)  { 
  return function (dispatch) { 
    return axios.get(`/product?name=${name}`) 
      .then((res) => { 
        console.log(res)
        dispatch({ type: 'SEARCH_BY_NAME', payload: res.data }); 
      })
      .catch((err) => {
        return err;
      });
  };
}

export function getAllProd() { 
      // ---------- get from api --------------
      // return function (dispatch) { 
        // return axios.get("/product/") 
        //   .then((res) => { 
        //     console.log(res)
        //     dispatch({ type: 'GET_ALL_PROD', payload: res.data }); 
        //   })
        //   .catch((err) => { 
        //     return err;
        //   });
      // };

      return {
        type: 'GET_ALL_PROD',
        payload: data
      }
  }

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


//Actions para el carrito

export function removeFromCart(id){
  return{
    type: "REMOVE_FROM_CART",
    id,
  };
}