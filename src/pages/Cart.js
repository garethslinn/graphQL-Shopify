import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CartProducts from '../components/CartProducts';
import Nav from '../components/Nav';
import { handleBack } from '../helpers';
import allActions from '../actions';
import shortid from 'shortid';
import '../styles/App.css';
import '../styles/grid.css';

const Cart = () => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.cartList.listing) || [];
    const total = useSelector(state => state.cartList.total) || [];
    const [itemAvailable, setItemAvailable] = useState(false);
    const history = useHistory();
    dispatch(allActions.productActions.product(item));
    
    const handleRemove = (id) => {
        dispatch(allActions.cartActions.remove(id));
    }

    useEffect(() => {
        setItemAvailable(true);
    }, [item]);

    return (
        <React.Fragment>
            <div className="container">

                <Nav 
                    navType="cart"
                    handleBack={() => handleBack(history)}
                />

                <CartProducts 
                    key={shortid.generate()}
                    item={item}
                    setItemAvailable={setItemAvailable}
                    itemAvailable={itemAvailable}
                    handleRemove={handleRemove}
                    total={total}
                />
              
            </div>
        </React.Fragment>
    );
};

export default Cart;
