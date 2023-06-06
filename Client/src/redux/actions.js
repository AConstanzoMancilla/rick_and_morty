import { ADD_FAVORITES, DELETE_FAVORITES, FILTER_CARDS, ORDER_CARDS } from './action-types';
import axios from 'axios';

export const addFavorites = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character)
        .then(({ data }) => {
            return dispatch({
                type: ADD_FAVORITES,
                payload: data,
         });
      });
   };
};

export const deleteFavorites = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint)
        .then(({ data }) => {
        return dispatch({
            type: DELETE_FAVORITES,
            payload: data,
        });
    });
    };
};
export const filterCards = (gender) => {
    return { type: FILTER_CARDS, payload: gender }
}
export const orderCards = (id) => {
    return { type: ORDER_CARDS, payload: id }
}