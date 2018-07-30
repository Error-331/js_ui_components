'use strict';

// external imports
import {createSelector} from 'reselect';
import {isNil, unless} from 'ramda';

// local imports
import StyleGuideFormSelector from './style_guide_form_selector';

// selector implementation
const styleGuideFormValuesSelector = createSelector(
    [StyleGuideFormSelector],
    unless(isNil, styleGuideForm => styleGuideForm.get('values'))
);

// exports
export default styleGuideFormValuesSelector;