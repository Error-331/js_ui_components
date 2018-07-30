'use strict';

// external imports
import {createSelector} from 'reselect';
import {isNil, unless} from 'ramda';

// local imports
import StyleGuideFormDropDownValuesSelector from './style_guide_form_drop_down_values_selector';

// selector implementation
const styleGuideThemeValueSelector = createSelector(
    [StyleGuideFormDropDownValuesSelector],
    unless(isNil, values => values.get('themeSelectorValue'))
);

// exports
export default styleGuideThemeValueSelector;