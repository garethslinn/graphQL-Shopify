import { TYPES } from '../constants/types';

const cart = (products) => {
    return {
        type: TYPES.SET_CART,
        payload: products
    }
}

const remove = (id) => {
    return {
        type: TYPES.SET_REMOVE,
        payload: id
    }
}

export default {
    cart,
    remove
}