import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import '../styles/App.css';
import '../styles/grid.css';
import Product from '../components/Product';
import Nav from '../components/Nav';
import { getProducts } from '../api/getProducts';
import { handleNew, handleCart } from '../helpers';
import allActions from '../actions';

const Products = () => {
    const dispatch = useDispatch();
    const [queryCompleted, setQueryCompleted] = useState(false);
    const [products, setProducts] = useState([]);
    const [showLimit, setShowLimit] = useState(false);
    const history = useHistory();
    const limitProducts = products.slice(0,3);

    const handleMore = () => {
        setShowLimit(true);
    }

    const handleViewProduct = (item) => {
        dispatch(allActions.productActions.product(item));
        history.push("/single-product");
    }
    
    useEffect(() => {
        getProducts(setQueryCompleted, queryCompleted, setProducts)
    }, [products]);

    return (
        <React.Fragment>
            <div className="container">

                <Nav 
                    navType="products"
                    handleMore={handleMore}
                    handleCart={() => handleCart(history)}
                    showLimit={showLimit}
                />

                {!showLimit && limitProducts.map(item => {
                    return  <Product 
                                item={item}
                                handleNew={handleNew}
                                handleViewProduct={handleViewProduct}
                            />
                })}

                {showLimit && products.map(item => {
                    return  <Product 
                                item={item}
                                handleNew={handleNew}
                                handleViewProduct={handleViewProduct}
                            />
                })}
            </div>
        </React.Fragment>
    );
};

export default Products;
