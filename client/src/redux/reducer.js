//Reducers Search Bar
import { GET_ALL_PROD,
    SEARCH_BY_NAME,
    GET_DETAIL,
    CLEAN_DETAIL
    } from "./actions";

const initialState = { 
    filtered: [],
    items:[],
    detail:[]
};

export default function rootReducer(state = initialState, action) { 
    switch (action.type) { 
      case GET_ALL_PROD: 
        return { 
        ...state,
        items: action.payload,
        filtered: action.payload
        }; 

      case SEARCH_BY_NAME:
        return {
          ...state,
          items: action.payload
    };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      };
    case GET_DETAIL:
      return {
          ...state,
          detail: action.payload,
      }
    case CLEAN_DETAIL:
      return{
          ...state,
          detail: []
      }
    default:
      return state;
  }
}; 

//Reducers Search Bar



