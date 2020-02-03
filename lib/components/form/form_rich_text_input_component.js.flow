'use strict';

// @flow

// external imports
import type {Node, Element} from 'react';
import type {FieldProps} from 'redux-form';

import type {EditorState} from 'draft-js';
import type {DraftInlineStyle} from 'draft-js/lib/DraftInlineStyle';
import type {DraftBlockRenderConfig} from 'draft-js/lib//DraftBlockRenderConfig';
import type {CoreDraftBlockType} from 'draft-js/lib/DraftBlockType';
import type {BlockNodeRecord} from 'draft-js/lib//BlockNodeRecord';

import React, {useState, useEffect, useContext, useRef} from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import Immutable from 'immutable';

import classNames from 'classnames';

import {
    T,
    isNil,
    equals,
    cond,
    always,
    curry,
    all,
    any,
    none,
    map,
} from 'ramda';

import SelectionState from 'draft-js/lib/SelectionState';
import ContentState from 'draft-js/lib/ContentState';

let draftJSLib: {[any]: any};

// local imports
import type {ThemeType} from './../../types/theme_types';
import type {RenderFunctionNoArgs} from './../../types/common_types';
import type {StateTypes as ThemContextType} from './../../theming/providers';
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';

import TextBlock from './../layout/text/text_block';
import FontIcon from './../layout/icons/font_icon';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type ControlDataType = {
    label: string,
    iconClassName: string,
};

type InlineControlDataType = ControlDataType & {
    controlStyle: string,
};

type BlockControlDataType = ControlDataType & {
    blockData: string,
};

type InlineControlsDataType = Array<InlineControlDataType>;
type BlockControlsDataType = Array<BlockControlDataType>;

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
        },

        '& $contentBlockAlignInitial > div': {
            textAlign: 'initial'
        },

        '& $contentBlockAlignLeft > div': {
            textAlign: 'left'
        },

        '& $contentBlockAlignRight > div': {
            textAlign: 'right'
        },

        '& $contentBlockAlignCenter > div': {
            textAlign: 'center'
        },

        '& $contentBlockAlignJustify > div': {
            textAlign: 'justify'
        },
    },

    toolbarContainer: {},

    controlSection: {},
    controlsGroup: {},
    control: {},

    contentBlockAlignInitial: {},
    contentBlockAlignLeft: {},
    contentBlockAlignRight: {},
    contentBlockAlignCenter: {},
    contentBlockAlignJustify: {},
}));

// constants declaration
const LIB_LOADER_IDLE: string = 'LIB_LOADER_IDLE';
const LIB_LOADER_LOADING: string = 'LIB_LOADER_LOADING';
const LIB_LOADER_LOADED: string = 'LIB_LOADER_LOADED';
const LIB_LOADER_LOAD_ERROR: string = 'LIB_LOADER_LOAD_ERROR';

const BLOCK_ALIGNMENT_DATA_TYPE: string = 'BLOCK_ALIGNMENT_DATA_TYPE';

const BLOCK_ALIGNMENT_DATA_INITIAL: string = 'BLOCK_ALIGNMENT_DATA_INITIAL';
const BLOCK_ALIGNMENT_DATA_LEFT: string = 'BLOCK_ALIGNMENT_DATA_LEFT';
const BLOCK_ALIGNMENT_DATA_RIGHT: string = 'BLOCK_ALIGNMENT_DATA_RIGHT';
const BLOCK_ALIGNMENT_DATA_CENTER: string = 'BLOCK_ALIGNMENT_DATA_CENTER';
const BLOCK_ALIGNMENT_DATA_JUSTIFY: string = 'BLOCK_ALIGNMENT_DATA_JUSTIFY';

const GENERAL_INLINE_STYLES_CONTROLS: InlineControlsDataType = [
    {label: 'Bold', controlStyle: 'BOLD', iconClassName: 'fas fa-bold'},
    {label: 'Italic', controlStyle: 'ITALIC', iconClassName: 'fas fa-italic'},
    {label: 'Underline', controlStyle: 'UNDERLINE', iconClassName: 'fas fa-underline'},
];

const ALIGNMENT_BLOCK_STYLES_CONTROLS: BlockControlsDataType = [
    {label: 'Align left', blockData: BLOCK_ALIGNMENT_DATA_LEFT, iconClassName: 'fas fa-align-left'},
    {label: 'Align center', blockData: BLOCK_ALIGNMENT_DATA_CENTER, iconClassName: 'fas fa-align-center'},
    {label: 'Align right', blockData: BLOCK_ALIGNMENT_DATA_RIGHT, iconClassName: 'fas fa-align-right'},
    {label: 'Justify', blockData: BLOCK_ALIGNMENT_DATA_JUSTIFY, iconClassName: 'fas fa-align-justify'},
];

/**
 * Rich text input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#/UI%20Components/Redux%20form/ReduxFormRichInputComponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function FormRichTextInputComponent(props: PropsTypes) {
    // region private variables declaration
    const editorBlockRenderMap: Immutable.Map<CoreDraftBlockType, DraftBlockRenderConfig> = Immutable.Map({
       /* 'header-one': {},
        'header-two': {},
        'header-three': {},
        'header-four': {},
        'header-five': {},*/

        'unstyled': {
            element: 'div',
            wrapper: <TextBlock />,
        }
    });

    // endregion

    // region style hooks declaration
    const theme: ThemeType = useTheme();
    const classes: {[string]: string} = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    // endregion

    // region state hooks declaration
    const [libLoaderState, setLibLoaderState] = useState(LIB_LOADER_IDLE);
    const [editorState, setEditorState] = useState(null);

    // endregion

    // region effect hooks declaration
    // endregion

    // region state variables declaration
    // endregion

    // region ref hooks declaration
    const $editorRef: any = useRef(null);

    // endregion

    // region callback hooks declaration
    // endregion

    // region business logic
    const areBlocksHasData = (
        dataKey: string,
        dataValue: string,
        contentBlocks: Array<BlockNodeRecord>
    ): Array<boolean> => {
        return map((contentBlock: BlockNodeRecord) => {
            const blockData: Immutable.Map<any, any> = contentBlock.getData();
            return blockData.has(dataKey) && blockData.get(dataKey) === dataValue;
        }, contentBlocks);
    };

    const isSomeBlockHasData = (
        dataKey: string,
        dataValue: string,
        contentBlocks: Array<BlockNodeRecord>
    ): boolean => {
        return any(equals(true), areBlocksHasData(dataKey, dataValue, contentBlocks));
    };

    const isAllBlockHasData = (
        dataKey: string,
        dataValue: string,
        contentBlocks: Array<BlockNodeRecord>
    ): boolean => {
        return all(equals(true), areBlocksHasData(dataKey, dataValue, contentBlocks));
    };

    const isNoneBlockHasData = (
        dataKey: string,
        dataValue: string,
        contentBlocks: Array<BlockNodeRecord>
    ): boolean => {
        return none(equals(true), areBlocksHasData(dataKey, dataValue, contentBlocks));
    };

    const isSomeSelectedBlockHasData = (
        dataKey: string,
        dataValue: string,
    ): boolean => isSomeBlockHasData(dataKey, dataValue, getSelectedContentBlocks());

    const isAllSelectedBlockHasData = (
        dataKey: string,
        dataValue: string,
    ): boolean => isAllBlockHasData(dataKey, dataValue, getSelectedContentBlocks());

    const isNoneSelectedBlockHasData = (
        dataKey: string,
        dataValue: string,
    ): boolean => isNoneBlockHasData(dataKey, dataValue, getSelectedContentBlocks());

    const getSelectedContentBlocks = (): Array<BlockNodeRecord> => {
        if (isNil(editorState)) {
            return [];
        }

        const selectionState: SelectionState = editorState.getSelection();
        const contentState: ContentState = editorState.getCurrentContent();

        const selectionStartKey: string = selectionState.getStartKey();
        const selectionEndKey: string = selectionState.getEndKey();

        const contentBlocks: Array<BlockNodeRecord> = [];
        let isSaving: boolean = false;

        for (let key: string of contentState.getBlockMap().keys()) {

            if (key === selectionStartKey) {
                isSaving = true;
            }

            if (isSaving === true) {
                contentBlocks.push(contentState.getBlockForKey(key));
            }

            if (key === selectionEndKey) {
                return contentBlocks;
            }
        }

        return contentBlocks;
    };

    const getBlockClassName = (contentBlock: BlockNodeRecord): string => {
        let blockClassName: string = '';

        const blockData: Immutable.Map<any, any> = contentBlock.getData();
        const {
            contentBlockAlignInitial,
            contentBlockAlignLeft,
            contentBlockAlignRight,
            contentBlockAlignCenter,
            contentBlockAlignJustify
        } = classes;

        blockClassName = cond([
            [equals(BLOCK_ALIGNMENT_DATA_INITIAL), always(classNames(blockClassName, contentBlockAlignInitial))],
            [equals(BLOCK_ALIGNMENT_DATA_LEFT), always(classNames(blockClassName, contentBlockAlignLeft))],
            [equals(BLOCK_ALIGNMENT_DATA_RIGHT), always(classNames(blockClassName, contentBlockAlignRight))],
            [equals(BLOCK_ALIGNMENT_DATA_CENTER), always(classNames(blockClassName, contentBlockAlignCenter))],
            [equals(BLOCK_ALIGNMENT_DATA_JUSTIFY), always(classNames(blockClassName, contentBlockAlignJustify))],
            [T, always(classNames(blockClassName, contentBlockAlignInitial))]
        ])(blockData.get(BLOCK_ALIGNMENT_DATA_TYPE));

        return blockClassName;
    };

    const setBlockData: (blockDataKey: string, blockData: string) => void =
      (blockDataKey: string, blockData: string): void => {
        if (isNil(editorState)) {
            return null;
        }

        const selectionState: SelectionState = editorState.getSelection();
        const contentState: ContentState = editorState.getCurrentContent();

        const {EditorState, Modifier} = draftJSLib;

        const newContentState: ContentState = Modifier.setBlockData(
          contentState,
          selectionState,
          Immutable.Map({[blockDataKey]: blockData})
        );

        const newEditorState: EditorState = EditorState.createWithContent(newContentState);
        setEditorState(EditorState.forceSelection(newEditorState, selectionState));
    };

    // endregion

    // region event handler helpers
    const editorToggleBlockType = curry((
        blockDataKey: string,
        blockData: string,
        event: SyntheticMouseEvent<HTMLDivElement>
    ) => {
        event.preventDefault();

        if (isNil(editorState)) {
            return;
        }

        if (isAllSelectedBlockHasData(blockDataKey, blockData)) {
            setBlockData(blockDataKey, BLOCK_ALIGNMENT_DATA_INITIAL);
        } else if (isSomeSelectedBlockHasData(blockDataKey, blockData)) {
            setBlockData(blockDataKey, blockData);
        } else if (isNoneSelectedBlockHasData(blockDataKey, blockData)) {
            setBlockData(blockDataKey, blockData);
        } else {
            return;
        }
    });

    const editorToggleInlineStyleHandle = curry((
        inlineStyle: string,
        event: SyntheticMouseEvent<HTMLDivElement>
    ) => {
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
            ref={$editorRef}
            editorState={editorState}

            blockRenderMap={editorBlockRenderMap}
            blockStyleFn={getBlockClassName}

            onChange={setEditorState}
        />;
    };

    const renderControlGroup: (children: Node) => Node = (children: Node) => {
        const {controlsGroup} = classes;

        return <div className={controlsGroup}>
            {children}
        </div>;
    };

    const renderControlIcon: (
        className: string,
        iconClassName: string,
        onMouseDown: (data: any, event: SyntheticMouseEvent<HTMLDivElement>) => void,
        key: string,
    ) => Node = (
        className: string,
        iconClassName: string,
        onMouseDown: (data: any, event: SyntheticMouseEvent<HTMLDivElement>) => void,
        key: string,
    ) => {
        return <FontIcon
            size='small'

            className={className}
            iconClassName={iconClassName}

            onMouseDown={onMouseDown}
            key={key}
        />;
    };

    const renderAlignmentBlockStylesControls: RenderFunctionNoArgs = () => {
        const {control} = classes;

        const controls: Node = map((controlData: BlockControlDataType) => {
            const {blockData, iconClassName} = controlData;

            const className: string = classNames(control, {
                active: isSomeSelectedBlockHasData(BLOCK_ALIGNMENT_DATA_TYPE, blockData),
            });

            return renderControlIcon(
                className,
                iconClassName,
                editorToggleBlockType(BLOCK_ALIGNMENT_DATA_TYPE, blockData),
                blockData
            );
        }, ALIGNMENT_BLOCK_STYLES_CONTROLS);

        return renderControlGroup(controls);
    };

    const renderGeneralInlineStylesControls: RenderFunctionNoArgs = () => {
        const {control} = classes;
        const currentInlineStyle: DraftInlineStyle = editorState.getCurrentInlineStyle();

        const controls: Node = map((controlData: InlineControlDataType) => {
            const {controlStyle, iconClassName} = controlData;

            const className: string = classNames(control, {
                active: currentInlineStyle.has(controlStyle)
            });

            return renderControlIcon(
              className,
              iconClassName,
              editorToggleInlineStyleHandle(controlStyle),
              controlStyle
            );
        }, GENERAL_INLINE_STYLES_CONTROLS);

        return renderControlGroup(controls);
    };

    const renderToolbarsContainer: RenderFunctionNoArgs = () => {
        const {toolbarContainer, controlSection, controlsGroup, control} = classes;

        return <div className={toolbarContainer}>
            <div className={controlSection}>
                {renderGeneralInlineStylesControls()}

                {renderAlignmentBlockStylesControls()}

                <div className={controlsGroup}>
                    <FontIcon size='small' className={control} iconClassName='fas fa-quote-left' />

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
