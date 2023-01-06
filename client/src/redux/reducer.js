//Reducers Search Bar

const initialState = { 
    filtered: []
};

export default function rootReducer(state = initialState, action) { 
    switch (action.type) { 
           case 'GET_ALL_GAMES': 
                return { 
                    ...state,
                    allGames: action.payload,
                    gamesBackUp: action.payload,
                    filtered: action.payload
                    
            }; 

           case 'SEARCH_BY_NAME':
                 return {
                    ...state,
                    filtered: action.payload
    };
  }
}; 

//Reducers Search Bar


export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};