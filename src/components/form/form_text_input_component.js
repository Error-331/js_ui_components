'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import {T, always, isNil, cond, equals, defaultTo, clone} from 'ramda';
import {generateRandomIdNumber} from '@webfuturistics/design_components/lib/helpers/general/dom_helpers';

import type {ElementType} from 'react';
import type {FieldProps} from 'redux-form';

// local imports
import type {ThemeType} from './../../types/theme_types';
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';
import type {FormTextInputVariant1Types as ComponentVariantPropsType} from './form_text_input_variants/form_text_input_variant1_component';

import {FormTextInputVariant1Component} from './form_text_input_variants/form_text_input_variant1_component';
import {FormTextInputVariant2Component} from './form_text_input_variants/form_text_input_variant2_component';
import {MainThemeContext} from './../../theming/providers/main_theme_provider';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

export type ClickCallbackType = (event: SyntheticEvent<HTMLButtonElement>) => void;

type InputTypes = 'text' | 'password' | 'textarea';

export type FormTextInputTypes = {
    /**
     * Number that indicates which visual variant will be used to represent the text input
     */

    variant?: number,

    /**
     * Custom made representation of current component
     */

    customComponent?: ElementType | React.Node,

    /**
     * Input type (text or password)
     */

    type?: InputTypes,

    /**
     * Height of textarea (if type = 'textarea') input component (based on lines)
     */

    rows?: number,

    /**
     * Flag that dictates whether component should be readable only (text can be readable but not editable)
     */

    readOnly?: ?boolean,

    /**
     * Flag that dictates whether component should be disabled (text can not be readable or editable)
     */

    disabled?: ?boolean,

    /**
     * Callback function which will be called once user press some buttons on keyboard while editing the text
     */

    onKeyPress?: ClickCallbackType,

    /**
     * Flag that dictates whether errors should be shown only after user interacts with input or always (e.g. even if initial value is set)
     */

    errorsIfTouched?: boolean,

    /**
     * Flag that dictates whether warnings should be shown only after user interacts with input or always (e.g. even if initial value is set)
     */

    warningsIfTouched?: boolean,

    /**
     * Placeholder text used as hint for the user of how appropriate data should look like
     */

    placeholder?: ?string,

    /**
     * Input label
     */

    label?: ?string,

    /**
     * Class name which will be added to the component container (main outer container)
     */

    componentContainerClassName?: string,

    /**
     * Class names which will be added to the icon container of the current component
     */

    iconClassNames?: ?string,

    /**
     * Styles for component container (main outer container) of the form text input component
     */

    componentContainerStyles?: CSSStylesType,

    /**
     * Alias of 'componentContainerStyles'
     */

    style?: CSSStylesType,

    /**
     * 'Redux-form' field-component metadata
     *
     * @ignore
     */

    meta?: ?ReduxFormFieldComponentMetaDataPropsTypes,

    /**
     * 'Redux-form' field-component data
     *
     * @ignore
     */

    input?: ?ReduxFormFieldComponentInputDataPropsTypes,
};

type PropsTypes = FieldProps & FormTextInputTypes & {
    /**
     * JSS theme object
     *
     * @ignore
     */

    theme: ThemeType,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

type StateTypes = {};

// styles definition
const styles = theme => ({});

/**
 * Text input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformtextinputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
class FormTextInputClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormTextInputClass';

    static defaultProps = {
        variant: 1,
    };

    // endregion

    // region private props
    _id: string;

    // endregion

    // region constructor
    constructor(props: PropsTypes): void {
        super(props);

        this._id = this._createInputId();
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    // endregion

    // region label accessors
    // endregion

    // region state accessors
    _createInputId(): string {
        const {name} = this._getInputData();
        const randomIdNumber: number = generateRandomIdNumber();

        if (isNil(name)) {
            throw new Error('Name cannot be null, cannot create input ID');
        }

        return `text_input_${name}_${randomIdNumber}`;
    }

    // endregion

    // region prop accessors
    _getVariant(): number {
        return defaultTo(FormTextInputClass.defaultProps.variant)(this.props.variant);
    }

    _getMetaData(): ReduxFormFieldComponentMetaDataPropsTypes {
        const {meta}: {meta: ?ReduxFormFieldComponentMetaDataPropsTypes} = this.props;
        return isNil(meta) ? clone(FormTextInputClass.defaultProps.meta) : meta;
    }

    _getInputData(): ReduxFormFieldComponentInputDataPropsTypes {
        const {input}: {input: ?ReduxFormFieldComponentInputDataPropsTypes} = this.props;
        return isNil(input) ? clone(FormTextInputClass.defaultProps.input) : input;
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    render(): React.Node {
        const {
            customComponent,
            type,
            onKeyPress,

            readOnly,
            disabled,
            errorsIfTouched,
            warningsIfTouched,

            rows,
            placeholder,
            label,

            componentContainerClassName,
            componentContainerStyles,
            iconClassNames,
            style
        } = this.props;

        const {value, name, onChange, onFocus, onBlur} = this._getInputData();
        const {initial, active, touched, pristine, dirty, error, warning} = this._getMetaData();

        const componentVariantProps: ComponentVariantPropsType = {
            type, id: this._id,
            readOnly, disabled, active, touched, pristine, dirty,
            onKeyPress,
            errorsIfTouched, warningsIfTouched,
            error, warning,
            placeholder, label,
            value, initial, name, rows,
            onChange, onFocus, onBlur, onClick: () => {},
            componentContainerClassName, componentContainerStyles, iconClassNames, style,
        };

        if (!isNil(customComponent)) {
            return React.cloneElement(customComponent, componentVariantProps);
        }

        return cond([
            [equals(1), always(<FormTextInputVariant1Component {...componentVariantProps}/>)],
            [equals(2), always(<FormTextInputVariant2Component {...componentVariantProps}/>)],
            [T, always(null)]
        ])(this._getVariant());
    }

    // endregion
}

function FormTextInputComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <FormTextInputClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

FormTextInputComponent.displayName = 'FormTextInputComponent';

// exports
export {FormTextInputClass, FormTextInputComponent};
export default FormTextInputComponent;
