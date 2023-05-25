import { ADD_FAVORITES, DELETE_FAVORITES, FILTER_CARDS, ORDER_CARDS } from './action-types';

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state=initialState, { type, payload}) => {
    switch(type){
        case ADD_FAVORITES:
            return {
                ...state,
            myFavorites: [...state.allCharacters, payload], //yo debo ver donde puedo agregar characters en mi ESTADOOOO OJOOO.
            allCharacters: [...state.allCharacters, payload] 
            }
        case DELETE_FAVORITES:
            return {
                ...state,
            myFavorites: state.myFavorites.filter(favorite => favorite.id !== payload)    //:action.payload 
            }
        case FILTER_CARDS:
            const allCharactersFiltered = state.allCharacters.filter(character => character.gender === payload)
            return {
                ...state,
            myFavorites: allCharactersFiltered
            }
        case ORDER_CARDS:
            const allCharactersCopy = [...state.allCharacters]
            return {
                ...state,
            myFavorites:
                payload === 'Ascendente'
                ? allCharactersCopy.sort((a, b) => a.id - b.id)
                : allCharactersCopy.sort((a, b) => b.id - a.id)
            }
        default:
            return {...state};
    }

}

export default reducer;