import cartList from './cart';
import productStore from './product';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    cartList,
    productStore 
})

export default rootReducer