import axios from "axios";
//
export const GET_USER_ID = "GET_USER_ID";
//
export const GET_ALL_PROD = "GET_ALL_PROD";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_ALL_MARKS = "GET_ALL_MARKS";
export const RESET_FILTER = "RESET_FILTER";
export const CHANGE_SORT = "CHANGE_SORT";
export const CHANGE_FILTER = "CHANGE_FILTER";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const RESET_SORT = "RESET_SORT";

export const SET_PRICE_RANGE = "SET_PRICE_RANGE";
export const SET_SORT = "SET_SORT";
export const SET_FILTER_CATEGORY = "SET_FILTER_CATEGORY";
export const SET_FILTER_MARKS = "SET_FILTER_MARKS";
export const SET_NUMBERS_PAGINATED = "SET_NUMBERS_PAGINATED";
export const RESET_FILTERS = "RESET_FILTERS";
export const SET_FILTER_PRICE = "SET_FILTER_PRICE";
export const SET_NAME_FILTER = "SET_NAME_FILTER";

// FORMULARIO

export const GET_PRODUCTS = "GET_PRODUCTS";
export const POST_PRODUCTS = "POST_PRODUCTS";

// REVIEWS
export const GET_ALL_REVIEWS = "GET_ALL_REVIEWS"

// ADMIN
export const DISABLED_PRODUCTS = "DISABLED_PRODUCTS"
export const GET_ALL_USERS = "GET_ALL_USERS"
export const DISABLE_USER = "DISABLE_USER"

//FILTER
export const FILTER_BY_JUEGOS = "FILTER_BY_JUEGOS";
export const FILTER_BY_MANDOS = "FILTER_BY_MANDOS";

export const setNameFilter = (payload) => {
  console.log("object");
  return {
    type: SET_NAME_FILTER,
    payload,
  };
};

export const resetFilters = () => {
  return {
    type: RESET_FILTERS,
  };
};

export const setPriceRange = (priceRange) => {
  return {
    type: SET_PRICE_RANGE,
    payload: priceRange,
  };
};

export const setFilterPrice = () => {
  return { type: SET_FILTER_PRICE };
};

export const setSort = (payload) => {
  return {
    type: SET_SORT,
    payload,
  };
};

export const setFilterCategory = (payload) => {
  return {
    type: SET_FILTER_CATEGORY,
    payload,
  };
};
export const setFilterMarks = (payload) => {
  return {
    type: SET_FILTER_MARKS,
    payload,
  };
};

export const setNumbersPaginated = (payload) => {
  return {
    type: SET_NUMBERS_PAGINATED,
    payload,
  };
};

export function getAllProd() {
  // ----- Get from API
  return async function (dispatch) {
    var req = await axios.get("/products");
    const products = req.data;

    return dispatch({
      type: "GET_ALL_PROD",
      payload: products,
    });
  };
}

export function postProducts(payload) {
  console.log("esto llega en payload POST", payload);
  return async function (dispatch) {
    const response = await axios.post(
      "/products",
      payload
    );

    return dispatch({
      type: "POST_PRODUCTS",
      payload: response.data,
    });
  };
}
export function postShop(payload) {
  console.log("esto llega accion shop", payload);
  return async function (dispatch) {
    const response = await axios.post("/addshop", payload);
    return dispatch({
      type: "POST_SHOP",
      payload: response.data,
    });
  };
}

export function getAllMarks() {
  return async function (dispatch) {
    try {
      const req = await axios.get("/mark");

      // const categories = req.data
      const unicos = req.data;
      const marks = [];

      for (var i = 0; i < unicos.length; i++) {
        const elemento = unicos[i];

        if (!marks.includes(unicos[i])) {
          marks.push(elemento);
        }
      }
      dispatch({ type: GET_ALL_MARKS, payload: marks });
    } catch (error) {
      console.log("error en getAllMarks", error);
    }
  };
}

export function getAllCategories() {
  return async function (dispatch) {
    try {
      //----- API
      const req = await axios.get("/category");

      // const categories = req.data
      const unicos = req.data;
      const categories = [];

      for (var i = 0; i < unicos.length; i++) {
        const elemento = unicos[i];

        if (!categories.includes(unicos[i])) {
          categories.push(elemento);
        }
      }

      dispatch({ type: GET_ALL_CATEGORIES, payload: categories });

      // ----- JSON
      //   const categories = ["Consolas", "Periféricos"]
      //   dispatch({ type: GET_ALL_CATEGORIES, payload: categories })
    } catch (error) {
      // console.log(error.response.data)
      console.log("error en getAllCategories", error);
    }
  };
}

//Actions para la SearchBar
export function searchByName(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get(
        "/products?title=" + name
      );
      return dispatch({
        type: "SEARCH_BY_NAME",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      console.log("prueba error obtener title de producto");
      alert("No hay productos cargados con ese nombre");
    }
  };
}

export function resetFilter() {
  return {
    type: RESET_FILTER,
  };
}

export function resetSort() {
  return {
    type: RESET_SORT,
  };
}

export const changeSort = (payload) => {
  return {
    type: CHANGE_SORT,
    payload: payload,
  };
};

export function changeFilter(payload) {
  return {
    type: CHANGE_FILTER,
    payload,
  };
}

export const changePage = (payload) => {
  return {
    type: CHANGE_PAGE,
    payload: payload,
  };
};

export function volverAhome() {
  return function (dispatch) {
    dispatch({ type: "VOLVER_A_HOME" });
  };
}

//Actions para los Detalles
export const getDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`/products/${id}`);

    return dispatch({
      type: GET_DETAIL,
      payload: response.data,
    });
  };
};

//Actions para el carrito
export function addToCart(payload) {
  return {
    type: "ADD_TO_CART",
    payload,
  };
}

export function removeFromCart(id) {
  return {
    type: "REMOVE_FROM_CART",
    id,
  };
}

export function cleanDetail() {
  return {
    type: "CLEAN_DETAIL",
  };
}

//Para Favoritos
export function getFavorites(email) {
  return function (dispatch) {
    return axios
      .get(`/favorites?email=${email}`)
      .then((res) => {
        dispatch({ type: "GET_FAVORITES", payload: res.data });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export const setFavorites = (items) => {
  return {
    type: "SET_FAVORITES",
    payload: items,
  };
};

export function addToFavorites(payload) {
  return async function (dispatch) {
    const response = await axios.post(
      "/favorites",
      payload
    );
    return response;
  };
}

export function removeFromFavorites(email, productId) {
  return function (dispatch) {
    return axios
      .post("/favorites/remove", { email, productId })
      .then(() => {
        dispatch({ type: "REMOVE_FROM_FAVORITES", productId });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export function deleteFavorites(id) {
  return async function (dispatch) {
    console.log("esto llega antes de elminiar", id);
    const response = await axios.delete(
      `/favorites/${id}`
    );
    return response;
  };
}

export function getUserFavorites() {
  return async function (dispatch) {
    try {
      const favorites = await axios.get(`/favorites`);
      dispatch({ type: "SET_FAVORITES", payload: favorites.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export const removeFromFav = (id) => {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: {
      id: id,
    },
  };
};
// Trabajando  en el formulario 2.0

export function getProduct() {
  return async function (dispatch) {
    var info = await axios.get("/products", {});
    return dispatch({
      type: GET_PRODUCTS,
      payload: info.data,
    });
  };
}

export function postProduct(payload) {
  //payload es lo que nos llega en el front
  return async function (dispatch) {
    const response = await axios.post(
      "/products",
      payload
    );
    console.log("Producto creaado " + response);
    return response;
  };
}

export const addReview = (payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "/review",
        payload
      );

      return dispatch({
        type: "ADD_REVIEW",
        payload: response.data.body,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };
};

export function getReviews() {
  return async function (dispatch) {
    const jsonreview = await axios.get("/review");
    const review = jsonreview.data;

    return dispatch({
      type: "GET_ALL_REVIEWS",
      payload: review,
    });
  };
}

export function disabledReviews(id){
  return async function(dispatch){
    const disabled = await axios.delete(`/review/${id}`)
    const review = disabled.data

    return dispatch({
      type: "DISABLED_REVIEWS",
      payload: review,
    })
  }
}

export function disabledProducts(id) {
  return async function (dispatch) {
    let producto = await axios.get(`/products/${id}`);
    let isActive = producto.data[0].isActive;
    let b;
    if (isActive) {
      b = false;
      alert("Desactivado");
    } else {
      b = true;
      alert("Activado");
    }

    axios.put(`/products/${id}`, { isActive: b });

    return dispatch({
      type: DISABLED_PRODUCTS,
      payload: id,
    });
  };
  // let b;
  // if(isActive){b=false}else{b=true}
  // return function (dispatch){
  //   return axios.put(`/products/${id}`, {isActive: b})
  // }
}

export function addStock(id, number) {
  console.log("esto llego del boton", number);
  return async function (dispatch) {
    let producto = await axios.get(`/products/${id}`);
    let total = producto.data[0].stock + number;
    return axios.put(`/products/${id}`, { stock: total });
  };
}

// Accion para traer ID usuario

export function idUser(email) {
  return async function (dispatch) {
    let usuarios = await axios.get("/usuarios");
    let tocarUser = usuarios.data;
    let miUsuario = tocarUser.filter((e) => e.email === email);
    let idUsuario = miUsuario[0];
    return dispatch({
      type: "ID_USER",
      payload: idUsuario,
    });
  };
}
export function shopUser(email) {
  return async function (dispatch) {
    let usuarios = await axios.get("/shops");
    let tocarUser = usuarios.data;
    let miUsuario = tocarUser.filter((e) => e.email === email);
    let idUsuario = miUsuario;
    return dispatch({
      type: "SHOP_USER",
      payload: idUsuario,
    });
  };
}

// trae user por id mas compras
export function getUser(id) {
  return function (dispatch) {
    return axios
      .get(`/user/${id}`)
      .then((res) => {
        dispatch({ type: GET_USER_ID, payload: res.data });
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export function getAllUsers() {
  return async function (dispatch) {
    let aux = await axios.get(`/usuarios`)
    const users = aux.data

    return dispatch({
      type: GET_ALL_USERS,
      payload: users,
    })
  }
}

export function disableUser(id) {
  return async function (dispatch) {
    let producto = await axios.get(`/user/${id}`)

    // console.log("producto: ", producto.data)
    let isActive = producto.data.isActive

    if (isActive) {
      alert("Desactivado")
    } else {
      alert("Activado")
    }

    await axios.put(`/user/desactivar/${id}`)

    return dispatch({
      type: DISABLE_USER,
      payload: id,
    })
  }
  // let b;
  // if(isActive){b=false}else{b=true}
  // return function (dispatch){
  //   return axios.put(`/products/${id}`, {isActive: b})
  // }
}

export function filterByJuegos () {
  return async function (dispatch) {
    const data = await axios('/filterByJuegos')

    return dispatch({
      type: FILTER_BY_JUEGOS,
      payload: data.data
    })
  }
}

export function filterByMandos () {
  return async function (dispatch) {
    const data = await axios('/filterByMandos')

    return dispatch({
      type: FILTER_BY_MANDOS,
      payload: data.data
    })
  }
}