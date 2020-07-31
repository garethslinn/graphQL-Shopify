
import React from "react";
import shortid from 'shortid';

const ProductView = (props) => {
    const { item, itemReady, handleNew, handleAdd } = props;
    return (
        <React.Fragment key={shortid.generate()}>
                {itemReady && item.node && <section className="single-product grid-noGutter">
                    <div className="product-image col-6">
                        <img 
                            alt={item.node.title} 
                            src={item.node.images.edges[0] && item.node.images.edges[1].node.originalSrc } 
                        />
                    </div>
                    <div className="product-details col-6">
                            { handleNew( item.node.tags ) }
                        <div className="product-type">
                            { item.node.productType }
                        </div>
                        <div className="product-title">
                            { item.node.title }
                        </div>
                        <div className="product-price">
                            &#163;{ item.node.priceRange.maxVariantPrice.amount }
                        </div>
                        <div className="product-add">
                            <button onClick={handleAdd} className="button">Add to basket</button>
                        </div>
                    </div>
                </section>}
        </React.Fragment>
    );
};

export default ProductView;

