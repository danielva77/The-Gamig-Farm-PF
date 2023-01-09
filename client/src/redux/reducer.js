//Reducers Search Bar
import { equalsCheck } from "../hooks/equalsCheck"
import {
  sortNameAsc,
  sortNameDesc,
  sortPriceAsc,
  sortPriceDesc,
} from "../hooks/combinedSorting"
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
} from "./actions"

const initialState = {
  items: [],
  sortBy: "",
  filterBy: "",
  numbersPaginated: [],

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
        filterBy: action.payload,
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

    case RESET_SORT:
      return {
        ...state,
        sort: {
          ascName: false,
          descName: false,
        },
        sorted: state.filtered,
        currentItems: state.filtered.slice(0, state.itemsPerPage),
        currentPage: 1,
      }

    case CHANGE_SORT:
      if (action.payload.ascPrice) {
        let aux = sortPriceAsc(state.filtered)
        return {
          ...state,
          sort: action.payload,
          sorted: aux,
          currentItems: aux.slice(0, state.itemsPerPage),
        }
      }

      if (action.payload.descPrice) {
        let aux = sortPriceDesc(state.filtered)
        return {
          ...state,
          sort: action.payload,
          sorted: aux,
          currentItems: aux.slice(0, state.itemsPerPage),
        }
      }

      if (action.payload.ascName) {
        let aux = sortNameAsc(state.filtered)
        return {
          ...state,
          sort: action.payload,
          sorted: aux,
          currentItems: aux.slice(0, state.itemsPerPage),
        }
      }

      if (action.payload.descName) {
        let aux = sortNameDesc(state.filtered)
        return {
          ...state,
          sort: action.payload,
          sorted: aux,
          currentItems: aux.slice(0, state.itemsPerPage),
        }
      }

    case SEARCH_BY_NAME:
      return {
        ...state,
        items: action.payload,
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

    case RESET_FILTER:
      return {
        ...state,
        filter: {
          type: "",
        },
        filtered: state.items,
        sorted: state.items,
        currentPage: 1,
      }
    case CHANGE_FILTER:
      let aux = state.items?.filter(item =>
        item.category?.includes(action.payload.type)
      )

      return {
        ...state,
        filter: {
          ...state.filter,
          type: action.payload.type,
        },
        filtered: aux,
      }

      return {
        ...state,
        sorted: state.filtered,
      }

    case CHANGE_PAGE:
      let currentPage = action.payload
      let lastItemOfPage = currentPage * state.itemsPerPage
      let firstItemOfPage = lastItemOfPage - state.itemsPerPage

      return {
        ...state,
        currentPage: action.payload,
        currentItems: state.sorted.slice(firstItemOfPage, lastItemOfPage),
      }
    default:
      return state
  }
}

//Reducers Search Bar
