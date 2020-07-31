import { TYPES } from '../constants/types';

const productStore = (state = {}, action) => {
    switch(action.type){
        case TYPES.SET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state
    }
}

export default productStore;