'use strict';

// @flow

// external imports
import type {Event} from 'redux-form/lib/types';

import {clone} from 'ramda';

// local imports
import type {
    ReduxFormFieldComponentInputDataPropsTypes,
    ReduxFormFieldComponentValueType
} from './../../types/redux_form_types';

// constants definition
export const name: string = '';
export const value: ReduxFormFieldComponentValueType = '';
export const checked: boolean = false;

export const onBlur: { (eventOrValue: Event | any): void } = () => {};
export const onChange: { (eventOrValue: Event | any): void } = () => {};
export const onDrop: { (eventOrValue: Event | any): void } = () => {};
export const onDragStart: { (eventOrValue: Event | any): void } = () => {};
export const onFocus: { (eventOrValue: Event | any): void } = () => {};

export const DEFAULT_REDUX_FORM_FIELD_COMPONENT_INPUT_DATA_PROPS: ReduxFormFieldComponentInputDataPropsTypes = clone({
    name,
    value,
    checked,

    onBlur,
    onChange,
    onDrop,
    onDragStart,
    onFocus,
});