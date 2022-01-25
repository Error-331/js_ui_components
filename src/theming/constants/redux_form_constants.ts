'use strict';

// external imports
import { Event } from 'redux-form/lib/types';

import { clone } from 'ramda';

// local imports
import {
    ReduxFormFieldComponentInputDataPropsTypes,
    ReduxFormFieldComponentValueType
} from './../../types/redux_form_types';

// constants definition
const name: string = '';
const value: ReduxFormFieldComponentValueType = '';
const checked: boolean = false;

// TODO: do something with redux event type
const onBlur: { (eventOrValue: Event | any): void } = () => {};
const onChange: { (eventOrValue: Event | any): void } = () => {};
const onDrop: { (eventOrValue: Event | any): void } = () => {};
const onDragStart: { (eventOrValue: Event | any): void } = () => {};
const onFocus: { (eventOrValue: Event | any): void } = () => {};

const DEFAULT_REDUX_FORM_FIELD_COMPONENT_INPUT_DATA_PROPS: ReduxFormFieldComponentInputDataPropsTypes = clone({
    name,
    value,
    checked,

    onBlur,
    onChange,
    onDrop,
    onDragStart,
    onFocus,
});

// exports
export {
    name,
    value,
    checked,

    onBlur,
    onChange,
    onDrop,
    onDragStart,
    onFocus,

    DEFAULT_REDUX_FORM_FIELD_COMPONENT_INPUT_DATA_PROPS,
}
