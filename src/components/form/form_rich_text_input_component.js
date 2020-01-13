'use strict';

// @flow

// external imports
import type {Node} from 'react';
import type {FieldProps} from 'redux-form';

import React, {useState, useEffect, useCallback, useContext} from 'react';
import {createUseStyles, useTheme} from 'react-jss';

import {Editor, EditorState} from 'draft-js';
import classNames from 'classnames';

import {
    __,
    T,
    always,
    identity,
    isNil,
    isEmpty,
    ifElse,
    cond,
    any,
    defaultTo,
    nth,
    prop,
    mergeRight,
    apply,
    pipe,
    gt,
    lt,
    equals,
    clamp,
    length,
    head,
    last,
    prepend,
    map,
    reduce,
    juxt,
    sortBy,
    pair,
    toPairs,
    keys,
    subtract,
    multiply,
    divide
} from 'ramda';

import {generateRandomIdNumber} from '@webfuturistics/design_components/lib/helpers/general/dom_helpers';

// local imports
import type {ThemeType} from './../../types/theme_types';
import type {StateTypes as ThemContextType} from './../../theming/providers';
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';

import FormSliderHandleComponent from './form_slider_handle_component';
import GlobalOverlayComponent from './../window/global_overlay_component'

import {MainThemeContext} from './../../theming/providers';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type HandlesDataType = {
    [string]: number
};

export type FormSliderInputTypes = {
    /**
     * Number that indicates which visual variant will be used to represent the slider input
     */

    variant?: number,

    /**
     * Flag that dictates whether component should be readable only (handles will be fixed in place)
     */

    readOnly?: ?boolean,

    /**
     * Flag that dictates whether component should be disabled (handles will be fixed in place and whole component will be grayed)
     */

    disabled?: ?boolean,

    /**
     * Class name which will be added to the component container (main outer container)
     */

    componentContainerClassName?: string,

    /**
     * Styles for component container (main outer container) of the slider input component
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

type PropsTypes = FieldProps & FormSliderInputTypes & {
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
const useStyles = createUseStyles(theme => ({

}));

/**
 * Slider input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#/UI%20Components/Redux%20form/ReduxFormSliderInputComponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function FormRichTextInputComponent(props: PropsTypes) {
    // region private variables declaration
    // endregion

    // region style hooks declaration
    // endregion

    // region context hooks declaration
    // endregion

    // region state hooks declaration
    const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

    // endregion

    // region effect hooks declaration
    // endregion

    // region state variables declaration
    // endregion

    // region callback hooks declaration
    // endregion

    // region business logic
    // endregion

    // region event handler helpers
    // endregion

    // region render helpers
    const renderComponentContainer = () => {
        import(/* webpackIgnore: true */'draft-js')
            .then((Editor) => <Editor editorState={editorState} onChange={setEditorState} />)
            .catch(e => <div>331</div>);

        return <Editor editorState={editorState} onChange={setEditorState} />;
    };

    // endregion

    // init render
    return renderComponentContainer();
}

// exports
export default FormRichTextInputComponent;
