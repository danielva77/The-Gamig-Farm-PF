//Reducers Search Bar

import {
  GET_ALL_PROD,
  SEARCH_BY_NAME,
  GET_DETAIL,
  CLEAN_DETAIL,
  GET_ALL_CATEGORIES,
  RESET_FILTER,
  CHANGE_FILTER,
  CHANGE_SORT,
  CHANGE_PAGE,
  RESET_SORT,
  SET_PRICE_RANGE,
  SET_SORT,
  SET_FILTER_CATEGORY,
  SET_NUMBERS_PAGINATED,
  RESET_FILTERS,
  SET_FILTER_PRICE,
  SET_NAME_FILTER,
} from "./actions"

const initialState = {
  items: [],
  sortBy: "",
  numbersPaginated: [],
  categoryFilter: "",
  nameFilter: "",

  detail: [],
  filter: {
    type: "",
  },
  sort: {
    ascPrice: false,
    descPrice: false,
    ascName: false,
    descName: false,
  },
  filtered: [],
  priceRange: {
    min: 0,
    max: 0,
  },
  sorted: [],
  categories: [],
  itemsPerPage: 6,
  currentPage: 1,
  currentItems: [],
  loading: false,
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NAME_FILTER:
      return {
        ...state,
        nameFilter: action.payload,
      }
    case SET_FILTER_PRICE:
      return {
        ...state,
        filterBy: action.payload,
      }
    case RESET_FILTERS:
      return {
        ...state,
        sortBy: "",
        filter: {
          type: "",
        },
      }
    case SET_SORT:
      return {
        ...state,
        sortBy: action.payload,
      }
    case SET_PRICE_RANGE:
      return {
        ...state,
        priceRange: action.payload,
      }
    case SET_FILTER_CATEGORY:
      return {
        ...state,
        categoryFilter: action.payload,
      }

    case SET_NUMBERS_PAGINATED:
      return {
        ...state,
        numbersPaginated: action.payload,
      }

    case GET_ALL_PROD:
      return {
        ...state,
        items: action.payload,
      }
    // case GET_ALL_PROD:
    //   // Si ha habido algun ordenamiento, no modificamos aquí pokemonsSorted
    //   for (let prop in state.sort) {
    //     if (state.sort[prop] === true) {
    //       return {
    //         ...state,
    //       }
    //     }
    //   }

    //   // Si ha habido algun filtrado, no modificamos aquí pokemonsFiltered
    //   for (let filter in state.filter) {
    //     if (state.filter[filter]) {
    //       return {
    //         ...state,
    //       }
    //     }
    //   }

    //   // Inicialmente, tanto 'pokemonsFiltered' como 'pokemonsSorted' tienen lo mismo que 'pokemons'
    //   let allItems = action.payload
    //   return {
    //     ...state,
    //     items: allItems,
    //     sorted: allItems,
    //     filtered: allItems,
    //     currentItems: state.sorted.slice(0, state.ItemsPerPage),
    //     loading: false,
    //   }

    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      }
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      }
    case CLEAN_DETAIL:
      return {
        ...state,
        detail: [],
      }
    default:
      return state
  }
}

//Reducers Search Bar
