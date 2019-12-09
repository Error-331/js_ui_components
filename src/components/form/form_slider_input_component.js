'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import type {ElementType} from 'react';
import type {FieldProps} from 'redux-form';

// local imports
import type {ThemeType} from './../../types/theme_types';
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';
import {generateRandomIdNumber} from "@webfuturistics/design_components/lib/helpers/general/dom_helpers";
import {always, clone, cond, defaultTo, equals, isNil, T} from "ramda";
import type {FormTextInputVariant1Types as ComponentVariantPropsType} from "./form_text_input_variants";
import {FormTextInputVariant1Component, FormTextInputVariant2Component} from "./form_text_input_variants";
import {MainThemeContext} from "../../theming/providers";

// type definitions
type CSSStylesType = {
    [string]: mixed
};

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
     * Flag that dictates whether component should be readable only (text can be readable but not editable)
     */

    readOnly?: ?boolean,

    /**
     * Flag that dictates whether component should be disabled (text can not be readable or editable)
     */

    disabled?: ?boolean,

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
class FormSliderInputClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormSliderInputClass';

    static defaultProps = {
    };

    // endregion

    // region private props
    // endregion

    // region constructor
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    // endregion

    // region handlers
    // endregion

    // region render methods
    render(): React.Node {
        return 331;
    }

    // endregion
}

function FormSliderInputComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <FormSliderInputClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

FormSliderInputComponent.displayName = 'FormSliderInputComponent';

// exports
export {FormSliderInputClass, FormSliderInputComponent};
export default FormSliderInputComponent;