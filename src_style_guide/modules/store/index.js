'use strict';

// external imports
import {applyMiddleware, compose, createStore} from 'redux';
import {Map} from 'immutable';
import {is} from 'ramda';

// local imports
import makeRootReducer from './reducers';

// store implementation
const createReduxStore = (initialState = Map(), middlewares = []) => {
    const enhancers = [];

    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (is(Function, devToolsExtension)) {
        enhancers.push(devToolsExtension());
    }

    return createStore(
        makeRootReducer(),
        initialState,
        compose(
            applyMiddleware(...middlewares),
            ...enhancers
        )
    );
};

const store = createReduxStore(window.___INITIAL_STATE__, []);

export default store;
