import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SingleProduct from './pages/SingleProduct';
import Products from './pages/Products';
import Cart from './pages/Cart';
import {createStore} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/single-product">
                    <SingleProduct />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/">
                  <Products />
                </Route>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));


