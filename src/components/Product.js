
import React from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import allActions from '../actions';
import shortid from 'shortid';

const Product = (props) => {
    const { item, handleNew, handleViewProduct } = props;
    const dispatch = useDispatch();
    const history = useHistory();

    const handleAdd = () => {
        dispatch(allActions.cartActions.cart(item));
    }

    return (
        <React.Fragment>
            <section key={shortid.generate()} className="products grid-noGutter">
                <div className="product-image col-6" onClick={() => handleViewProduct(item)}>
                    <img 
                        alt={item.node.title} 
                        src={item.node.images.edges[0] && item.node.images.edges[0].node.originalSrc } 
                    />
                </div>
                <div className="product-details col-6">
                        { handleNew( item.node.tags ) }
                    <div className="product-type" onClick={() => handleViewProduct(item)} >
                        { item.node.productType }
                    </div>
                    <div className="product-title" onClick={() => handleViewProduct(item)} >
                        { item.node.title }
                    </div>
                    <div className="product-add">
                        <button onClick={handleAdd} className="button button-small">Add</button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Product;

