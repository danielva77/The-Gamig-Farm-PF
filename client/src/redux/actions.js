import axios from "axios";


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
    return function (dispatch) { 
      return axios.get("/product/") 
        .then((res) => { 
          console.log(res)
          dispatch({ type: 'GET_ALL_PROD', payload: res.data }); 
        })
        .catch((err) => { 
          return err;
        });
    };
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


export const filterByCategory = (payload) => {
  return {
      type: 'FILTER_CATEGORY',
      payload
  }
}

export const orderByTittle = (payload) => {
  return {
      type: 'ORDER_BY_ALFABETICO',
      payload
  }
}


export const orderByPrice = (payload) => {
  return {
      type: 'ORDER_BY_PRICE',
      payload
  }
}


export const filterByMarcas = (payload) => {
  return {
      type: 'FILTER_BY_MARCAS',
      payload
  }
}