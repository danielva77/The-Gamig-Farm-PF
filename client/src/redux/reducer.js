//Reducers Search Bar
import {
  GET_ALL_PROD,
  SEARCH_BY_NAME,
  GET_DETAIL,
  CLEAN_DETAIL,
} from "./actions";

const initialState = {
  filtered: [],
  items: [],
  detail: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PROD:
      return {
        ...state,
        items: action.payload,
        filtered: action.payload,
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        items: action.payload,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: action.payload,
        filtered: action.payload,
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        items: action.payload,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        detail: [],
      };
    case "ADD_TO_CART":
      // Comprobamos si el producto ya existe en el carrito
      const existingProduct = state.items.find(
        (item) => item.id === action.product.id
      );
      if (existingProduct) {
        // Si existe, aumentamos su cantidad
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      // Si el producto no existe en el carrito, lo añadimos con cantidad 1
      return {
        ...state,
        items: [...state.items, { ...action.product, quantity: 1 }],
      };
    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };
    case "INCREASE_QUANTITY":
      // Aumentamos la cantidad del producto seleccionado
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      // Disminuimos la cantidad del producto seleccionado
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
}

//Reducers Search Bar
