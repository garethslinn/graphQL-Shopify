
import React from "react";
import shortid from 'shortid';

const CartProduct = (props) => {
    const { item, setItemAvailable, handleRemove, total } = props;
    return (
        <React.Fragment>
                <section key={shortid.generate()} className="product-cart grid-noGutter">
                    <div className="col-12">
                        <h1>My Cart</h1>
                    </div>

                    <div className="col-4">
                       <span className="cart-heading">Cart items</span>
                    </div>
                    <div className="col-3 center">
                        <span className="cart-heading">Quantity</span>
                    </div>
                    <div className="col-3 center">
                        <span className="cart-heading">Price</span>
                    </div>
                    <div className="col-1 center">
                        <span className="cart-heading">Remove</span>
                    </div>

                    {/* create component */}
                    {setItemAvailable && item && <React.Fragment>
                        {item.map(item =>  {
                           return <React.Fragment key={shortid.generate()}>
                               <div className="col-4">
                                    <div className="cart-image">
                                    <img 
                                        alt={item.node.title} 
                                        src={item.node.images.edges[0] && item.node.images.edges[0].node.originalSrc } 
                                    />
                                    </div>
                                    <div className="cart-details">
                                        <div className="product-type">
                                            { item.node.productType }
                                        </div>
                                        <div className="product-title">
                                            { item.node.title }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 center product-details">
                                    <div className="product-qty">
                                    { item.node.qty }
                                    </div>
                                </div>
                                <div className="col-3 center product-details">
                                    <span>
                                        &#163;{ item.node.priceRange.maxVariantPrice.amount }
                                    </span>
                                </div>
                                <div className="col-1 center product-details">
                                    <button onClick={() => handleRemove(item.node.id)} className="remove">Delete</button>
                                </div>
                            </React.Fragment>
                        })
                        
                        }
                    </React.Fragment>
                    }
                    <div className="col-11">
                        <span className="total">Total: &#163;{total}</span>
                    </div>
                    <div className="col-11">
                        <button className="button pay">Pay</button>
                    </div>
                </section>
        </React.Fragment>
    );
};

export default CartProduct;

