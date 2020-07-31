import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProductView from '../components/ProductView'
import Nav from '../components/Nav';
import { handleNew, handleCart, handleBack } from '../helpers';
import allActions from '../actions';
import shortid from 'shortid';
import '../styles/App.css';
import '../styles/grid.css';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.productStore.product) || [];
    const [itemReady, setItemReady] = useState(false)
   
    const history = useHistory();

    const handleAdd = () => {
        dispatch(allActions.cartActions.cart(item));
        history.push("/single-product");
    }

    useEffect(() => {
        setItemReady(true);
    }, [item]);

    return (
        <React.Fragment>
            <div className="container">

                <Nav 
                    navType="singleProduct"
                    handleBack={() => handleBack(history)}
                    handleCart={() => handleCart(history)}
                />

                <ProductView 
                    key={shortid.generate()}
                    item={item}
                    handleNew={handleNew}
                    handleAdd={handleAdd}
                    itemReady={itemReady}
                />
         
            </div>
        </React.Fragment>
    );
};

export default  SingleProduct;
