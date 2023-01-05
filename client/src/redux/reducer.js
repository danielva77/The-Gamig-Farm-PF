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

