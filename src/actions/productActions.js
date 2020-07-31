import { TYPES } from '../constants/types';

const product = (product) => {
    return {
        type: TYPES.SET_PRODUCT,
        payload: product
    }
}

export default {
    product
}