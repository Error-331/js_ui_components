'use strict';

// external imports
import {createSelector} from 'reselect';

// selector implementation
const getForm = (state) => state.get('form');

const formSelector = createSelector(
    [getForm],
    form => form
);

// exports
export default formSelector;
