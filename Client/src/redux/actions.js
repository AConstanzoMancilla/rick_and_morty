import { ADD_FAVORITES, DELETE_FAVORITES, FILTER_CARDS, ORDER_CARDS } from './action-types';
import axios from 'axios';

export const addFavorites = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character);
            if(!data.length) throw Error('No hay favoritos')
            return dispatch({
                type: ADD_FAVORITES,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}        

export const deleteFavorites = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint);
            // if(!data.length) throw Error('No hay favoritos');
            return dispatch({
                type: DELETE_FAVORITES,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        }
    };
};
export const filterCards = (gender) => {
    return { type: FILTER_CARDS, payload: gender }
}
export const orderCards = (id) => {
    return { type: ORDER_CARDS, payload: id }
}