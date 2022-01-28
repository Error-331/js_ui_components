'use strict';

// external imports
import { InputProps } from 'redux-form/lib/FieldProps.types';

// type declaration
type ReduxFormFieldComponentValueType = (string | number);

type ReduxFormFieldComponentMetaDataPropsTypes = {
    initial: (string | number),

    active: boolean,
    pristine: boolean,
    dirty: boolean,
    touched: boolean,

    error?: string | Array<string>,
    warning?: string | Array<string>,
}

type ReduxFormFieldComponentInputDataPropsTypes = InputProps & {
    value?: ReduxFormFieldComponentValueType,
}

type OnSubmitCallbackType = (any) => any;

// exports
export {
    ReduxFormFieldComponentValueType,
    ReduxFormFieldComponentMetaDataPropsTypes,
    ReduxFormFieldComponentInputDataPropsTypes,
    OnSubmitCallbackType,
}
