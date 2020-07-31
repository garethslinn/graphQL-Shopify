import { TYPES } from '../constants/types';
import _ from 'lodash';

const convertToList = (cartlist) => {
    const listing = [];
    const grouped = _.groupBy(cartlist, (cartlist) => {
        return cartlist.node.id;
    });

    for (const property in grouped) {
        grouped[property][0].node.qty = grouped[property].length
        listing.push(grouped[property][0]);
    }

    return listing;
}

const calculateTotal = (data) => {

    // transform data
    const totals = data.map(item => {
        return {
            qty: item.node.qty,
            price: item.node.priceRange.maxVariantPrice.amount
        }
    })

    // calculate total
    const getTotal = arr => arr.reduce((sum, { price, qty }) => sum + price * qty, 0);
    const total = getTotal(totals);

    return total;
}

const addItem = (state, action) => {
    const cartlist = state.cartlist || [];
    cartlist.push(action.payload);
    const listing = convertToList(cartlist);
    const total = calculateTotal(listing);

    return {
        ...state,
        cartlist,
        listing,
        total
    }
}

const removeItem = (state, action) => {
    const cartlist = state.cartlist || [];
    
    let itemUpdated = false;
    const removedItem = [];
    cartlist.forEach(item => {
        if (item.node.id === action.payload && !itemUpdated) {
            itemUpdated = true;
        } else {
            removedItem.push(item);
        }
    });

    const listing = convertToList(removedItem);
    const total = calculateTotal(listing);

    return {
        ...state,
        cartlist: removedItem,
        listing,
        total
    }
}

const cartStore = (state = {}, action) => {
    switch(action.type){
        case TYPES.SET_CART:
           return addItem(state, action)
        case TYPES.SET_REMOVE:
           return removeItem(state, action)
        default:
            return state
    }
}

export default cartStore;