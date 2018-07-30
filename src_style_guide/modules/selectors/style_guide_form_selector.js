'use strict';

// external imports
import {createSelector} from 'reselect';

// local imports
import {MAIN_FORM_NAME} from './../constants/redux_constants';
import FormSelector from './form_selector';

// selector implementation
const styleGuideFormSelector = createSelector(
    [FormSelector],
    form => form.get(MAIN_FORM_NAME)
);

// exports
export default styleGuideFormSelector;

