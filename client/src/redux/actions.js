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
