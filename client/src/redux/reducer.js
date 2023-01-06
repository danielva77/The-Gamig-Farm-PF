//Reducers Search Bar
import { GET_ALL_PROD } from "./actions";

const initialState = { 
    filtered: [],
    items:[]
};

export default function rootReducer(state = initialState, action) { 
    switch (action.type) { 
           case GET_ALL_PROD: 
                return { 
                    ...state,
                    items: action.payload,
                    filtered: action.payload
                    
            }; 

           case 'SEARCH_BY_NAME':
                 return {
                    ...state,
                    filtered: action.payload
    };
    default:
      return state;
  }
}; 

//Reducers Search Bar



