'use strict';

// @flow

// external imports
import type {Node, Element} from 'react';
import type {FieldProps} from 'redux-form';

import type {EditorState} from 'draft-js';
import type {DraftInlineStyle} from 'draft-js/lib/DraftInlineStyle';

import React, {useState, useEffect, useContext} from 'react';
import {createUseStyles, useTheme} from 'react-jss';

import classNames from 'classnames';

import {
    curry,
    map,
} from 'ramda';

let draftJSLib: {[any]: any};

// local imports
import type {ThemeType} from './../../types/theme_types';
import type {RenderFunctionNoArgs} from './../../types/common_types';
import type {StateTypes as ThemContextType} from './../../theming/providers';
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';

import FontIcon from './../layout/icons/font_icon';

import {MainThemeContext} from './../../theming/providers';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type HandlesDataType = {
    [string]: number
};

type InlineControlDate = {
    label: string,
    controlStyle: string,
    iconClassName: string,
};

type InlineControlsDataType = Array<InlineControlDate>;

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
    componentContainer: {
        boxSizing: 'border-box',
        display: 'flex',

        flexDirection: 'column',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',

        '& > $toolbarContainer': {
            display: 'flex',

            flexDirection: 'column',
            flexWrap: 'nowrap',

            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 0,

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            '& > $controlSection': {
                boxSizing: 'border-box',
                display: 'flex',

                flexBasis: 'auto',
                flexShrink: 1,
                flexGrow: 0,

                flexDirection: 'row',
                flexWrap: 'wrap',

                justifyContent: 'flex-start',
                alignItems: 'center',
                alignContent: 'flex-start',

                '& > $controlsGroup': {
                    boxSizing: 'border-box',
                    display: 'flex',

                    flexBasis: 'auto',
                    flexShrink: 1,
                    flexGrow: 0,

                    flexDirection: 'row',
                    flexWrap: 'wrap',

                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    alignContent: 'flex-start',

                    '& > $control': {
                        boxSizing: 'border-box',

                        flexBasis: 'auto',
                        flexShrink: 1,
                        flexGrow: 0,

                        marginLeft: `${theme.layoutStyles.leftSpacing}px`,

                        color: theme.inputStyles.inactiveColor,

                        '&.active': {
                            color: theme.inputStyles.activeColor,
                        },

                        '&:hover': {
                            color: theme.inputStyles.hoverColor
                        },

                        '&:first-child': {
                            marginLeft: `0px`,
                        },
                    }
                }
            },
        }
    },

    toolbarContainer: {},

    controlSection: {},
    controlsGroup: {},
    control: {},
}));

// constants declaration
const LIB_LOADER_IDLE: string = 'LIB_LOADER_IDLE';
const LIB_LOADER_LOADING: string = 'LIB_LOADER_LOADING';
const LIB_LOADER_LOADED: string = 'LIB_LOADER_LOADED';
const LIB_LOADER_LOAD_ERROR: string = 'LIB_LOADER_LOAD_ERROR';

const GENERAL_INLINE_STYLES_CONTROLS: InlineControlsDataType = [
    {label: 'Bold', controlStyle: 'BOLD', iconClassName: 'fas fa-bold'},
    {label: 'Italic', controlStyle: 'ITALIC', iconClassName: 'fas fa-italic'},
    {label: 'Underline', controlStyle: 'UNDERLINE', iconClassName: 'fas fa-underline'},
];

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
    const theme: ThemeType = useTheme();
    const classes: {[string]: string} = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    // endregion

    // region state hooks declaration
    const [libLoaderState, setLibLoaderState] = React.useState(LIB_LOADER_IDLE);
    const [editorState, setEditorState] = React.useState(null);

    // endregion

    // region effect hooks declaration
    // endregion

    // region state variables declaration
    // endregion

    // region ref hooks declaration
    // endregion

    // region callback hooks declaration
    // endregion

    // region business logic
    // endregion

    // region event handler helpers
    const editorToggleInlineStyleHandle = curry((inlineStyle: string, event: SyntheticMouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        const {RichUtils} = draftJSLib;

        setEditorState(
            RichUtils.toggleInlineStyle(
                editorState,
                inlineStyle
            )
        );
    });

    // endregion

    // region render helpers
    const renderErrorContainer: RenderFunctionNoArgs = () => {
        return <div>
            Failed to load 'draft-js' library (probably not installed).
        </div>;
    };

    const renderEditor: RenderFunctionNoArgs = () => {
        const {Editor} = draftJSLib;

        return <Editor
            editorState={editorState}
            onChange={setEditorState}
        />;
    };

    const renderControlGroup: (children: Node) => Node = (children: Node) => {
        const {controlsGroup} = classes;

        return <div className={controlsGroup}>
            {children}
        </div>;
    };

    const renderGeneralInlineStylesControls: RenderFunctionNoArgs = () => {
        const {control} = classes;
        const currentInlineStyle: DraftInlineStyle = editorState.getCurrentInlineStyle();

        const controls: Node = map((controlData: InlineControlDate) => {
            const {controlStyle, iconClassName} = controlData;

            const className: string = classNames(control, {
                active: currentInlineStyle.has(controlStyle)
            });

            return <FontIcon
                size='small'
                className={className}
                iconClassName={iconClassName}
                onMouseDown={
                    editorToggleInlineStyleHandle(controlStyle)
                }

                key={controlStyle}
            />;
        }, GENERAL_INLINE_STYLES_CONTROLS);

        return renderControlGroup(controls);
    };

    const renderToolbarsContainer: RenderFunctionNoArgs = () => {
        const {toolbarContainer, controlSection, controlsGroup, control} = classes;

        return <div className={toolbarContainer}>
            <div className={controlSection}>
                {renderGeneralInlineStylesControls()}

                <div className={controlsGroup}>
                    <FontIcon size='small' className={control} iconClassName='fas fa-quote-left' />

                    <FontIcon size='small' className={control} iconClassName='fas fa-align-left' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-align-center' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-align-right' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-align-justify' />

                    <FontIcon size='small' className={control} iconClassName='fas fa-h1' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-h2' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-h3' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-h4' />

                    <FontIcon size='small' className={control} iconClassName='fas fa-link' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-image' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-film' />
                </div>
            </div>
        </div>;
    };

    const renderEditorContainer: RenderFunctionNoArgs = () => {
        return <div>
            {renderEditor()}
        </div>;
    };

    const renderComponentContainer: RenderFunctionNoArgs = () => {
        const {componentContainer} = classes;

        return <div className={componentContainer}>
            {renderToolbarsContainer()}
            {renderEditorContainer()}
        </div>;

    };

    // endregion

    // init
    switch(libLoaderState) {
        case LIB_LOADER_IDLE:
            setLibLoaderState(LIB_LOADER_LOADING);

            import('draft-js')
                .then((draftJS: {[any]: any}) => {
                    draftJSLib = draftJS.default;

                    setEditorState(draftJSLib.EditorState.createEmpty());
                    setLibLoaderState(LIB_LOADER_LOADED);
                })
                .catch(() => setLibLoaderState(LIB_LOADER_LOAD_ERROR));

            return null;
        case LIB_LOADER_LOADED:
            return renderComponentContainer();

        case LIB_LOADER_LOAD_ERROR:
            return renderErrorContainer();

        default:
            return null;
    };
}

// exports
export default FormRichTextInputComponent;
