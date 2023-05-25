import { ADD_FAVORITES, DELETE_FAVORITES } from './action-types';

const initialState = {
    myFavorites: []
}

const reducer = (state=initialState, { type, payload}) => {
    switch(type){
        case ADD_FAVORITES:
            return {
                ...state,
            myFavorites: [...state.myFavorites, payload] //yo debo ver donde puedo agregar characters en mi ESTADOOOO OJOOO. 
            }
        case DELETE_FAVORITES:
            return {
                ...state,
            myFavorites: state.myFavorites.filter(favorite => favorite.id !== payload)    //:action.payload 
            }
        default:
            return {...state};
    }

}

export default reducer;