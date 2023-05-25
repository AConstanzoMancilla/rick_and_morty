import { ADD_FAVORITES, DELETE_FAVORITES, FILTER_CARDS, ORDER_CARDS } from './action-types';

export const addFavorites = (character) => {
    return { type: ADD_FAVORITES, payload: character }
}
export const deleteFavorites = (id) => {
    return { type: DELETE_FAVORITES, payload: id }
}
export const filterCards = (gender) => {
    return { type: FILTER_CARDS, payload: gender }
}
export const orderCards = (id) => {
    return { type: ORDER_CARDS, payload: id }
}