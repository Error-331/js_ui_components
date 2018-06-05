'use strict';

// external imports
import {combineReducers} from 'redux-immutable';
import {reducer as formReducer} from 'redux-form/immutable';

// local imports

// root reducer implementation
const makeRootReducer = () => {
    return combineReducers({
        form: formReducer
    });
};

export default makeRootReducer;