'use strict';

// external imports
import {createSelector} from 'reselect';
import {isNil, unless} from 'ramda';

// local imports
import StyleGuideFormValuesSelector from './style_guide_form_values_selector';

// selector implementation
const styleGuideFormDropDownValuesSelector = createSelector(
    [StyleGuideFormValuesSelector],
    unless(isNil, values => values.get('reduxFormDropDownInputComponents'))
);

// exports
export default styleGuideFormDropDownValuesSelector;