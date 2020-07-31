
import React from "react";

const Nav = (props) => {
    const { navType, handleMore, handleCart, handleBack, showLimit } = props;

    return (
        <React.Fragment>
            {navType === 'products' &&
                <nav className="nav grid-noGutter">
                    <div className="col-6">
                    {!showLimit && 
                        <button onClick={handleMore} className="show-more">All</button>
                    }
                    </div>
                    <div className="col-6">
                        <button onClick={handleCart} className="cart">Cart</button>
                    </div>
                </nav>
            }
            {navType === 'singleProduct' &&
                <nav className  ="nav grid-noGutter"> 
                    <div className="col-6">
                        <button onClick={handleBack} className="show-more">Back to list</button>
                    </div>
                    <div className="col-6">
                        <button onClick={handleCart} className="cart">Cart</button>
                    </div>
                </nav>
            }
            {navType === 'cart' &&
                <nav className="nav grid-noGutter">
                    <div className="col-6">
                        <button onClick={handleBack} className="show-more">Back</button>
                    </div>
                </nav>
            }
        </React.Fragment>
    );
};

export default Nav;

