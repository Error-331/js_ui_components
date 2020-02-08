'use strict';

// @flow

// external imports
import type {Node, Element} from 'react';
import type {FieldProps} from 'redux-form';

import type {EditorState} from 'draft-js';
import type {DraftInlineStyle} from 'draft-js/lib/DraftInlineStyle';
import type {DraftBlockRenderConfig} from 'draft-js/lib/DraftBlockRenderConfig';
import type {CoreDraftBlockType} from 'draft-js/lib/DraftBlockType';
import type {BlockNodeRecord} from 'draft-js/lib/BlockNodeRecord';

import type {Curry} from 'ramda';

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
    mergeDeepRight,
} from 'ramda';

import SelectionState from 'draft-js/lib/SelectionState';
import ContentState from 'draft-js/lib/ContentState';

let draftJSLib: {[any]: any};

// local imports
import type {ThemeType} from './../../types/theme_types';
import type {RenderFunctionNoArgs} from './../../types/common_types';
import type {StateTypes as ThemContextType} from './../../theming/providers';
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';

import type {ControlGroupDataType, ControlIconDataType} from './../navigation/horizontal_icon_toolbar_component';

import HorizontalIconToolbarComponent from './../navigation/horizontal_icon_toolbar_component';

import TextBlock from './../layout/text/text_block';
import InlineHeader from './../layout/text/inline_header';

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

type BlockTypeControlType = ControlDataType & {
    blockType: string,
};

type InlineControlsDataType = Array<InlineControlDataType>;
type BlockControlsDataType = Array<BlockControlDataType>;
type BlockTypeControlsType = Array<BlockTypeControlType>;

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
            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 0,
        },

        '& $contentBlockAlignInitial': {
            textAlign: 'initial'
        },

        '& $contentBlockAlignInitial > div,span': {
            textAlign: 'initial'
        },

        '& $contentBlockAlignLeft': {
            textAlign: 'left'
        },

        '& $contentBlockAlignLeft > div,span': {
            textAlign: 'left'
        },

        '& $contentBlockAlignRight': {
            textAlign: 'right'
        },

        '& $contentBlockAlignRight > div,span': {
            textAlign: 'right'
        },

        '& $contentBlockAlignCenter': {
            textAlign: 'center'
        },

        '& $contentBlockAlignCenter > div,span': {
            textAlign: 'center'
        },

        '& $contentBlockAlignJustify': {
            textAlign: 'justify'
        },

        '& $contentBlockAlignJustify > div,span': {
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
const BLOCK_HEADER_TYPE: string = 'BLOCK_HEADER_TYPE';

const BLOCK_ALIGNMENT_DATA_INITIAL: string = 'BLOCK_ALIGNMENT_DATA_INITIAL';
const BLOCK_ALIGNMENT_DATA_LEFT: string = 'BLOCK_ALIGNMENT_DATA_LEFT';
const BLOCK_ALIGNMENT_DATA_RIGHT: string = 'BLOCK_ALIGNMENT_DATA_RIGHT';
const BLOCK_ALIGNMENT_DATA_CENTER: string = 'BLOCK_ALIGNMENT_DATA_CENTER';
const BLOCK_ALIGNMENT_DATA_JUSTIFY: string = 'BLOCK_ALIGNMENT_DATA_JUSTIFY';

const BLOCK_HEADER_UNSTYLED_TYPE: string = 'unstyled';

const BLOCK_HEADER_LEVEL_1_TYPE: string = 'header-one';
const BLOCK_HEADER_LEVEL_2_TYPE: string = 'header-two';
const BLOCK_HEADER_LEVEL_3_TYPE: string = 'header-three';
const BLOCK_HEADER_LEVEL_4_TYPE: string = 'header-four';

const GENERAL_INLINE_STYLES_CONTROLS: InlineControlsDataType = [
    {title: 'Bold', controlStyle: 'BOLD', iconClassName: 'fas fa-bold'},
    {title: 'Italic', controlStyle: 'ITALIC', iconClassName: 'fas fa-italic'},
    {title: 'Underline', controlStyle: 'UNDERLINE', iconClassName: 'fas fa-underline'},
];

const ALIGNMENT_BLOCK_STYLES_CONTROLS: BlockControlsDataType = [
    {title: 'Align left', blockData: BLOCK_ALIGNMENT_DATA_LEFT, iconClassName: 'fas fa-align-left'},
    {title: 'Align center', blockData: BLOCK_ALIGNMENT_DATA_CENTER, iconClassName: 'fas fa-align-center'},
    {title: 'Align right', blockData: BLOCK_ALIGNMENT_DATA_RIGHT, iconClassName: 'fas fa-align-right'},
    {title: 'Justify', blockData: BLOCK_ALIGNMENT_DATA_JUSTIFY, iconClassName: 'fas fa-align-justify'},
];

const HEADER_BLOCK_TYPE_CONTROLS: BlockTypeControlsType = [
    {title: 'Header level 1', blockType: BLOCK_HEADER_LEVEL_1_TYPE, iconClassName: 'fas fa-h1'},
    {title: 'Header level 2', blockType: BLOCK_HEADER_LEVEL_2_TYPE, iconClassName: 'fas fa-h2'},
    {title: 'Header level 3', blockType: BLOCK_HEADER_LEVEL_3_TYPE, iconClassName: 'fas fa-h3'},
    {title: 'Header level 4', blockType: BLOCK_HEADER_LEVEL_4_TYPE, iconClassName: 'fas fa-h4'},
];

const editorBlockRenderMap: Immutable.Map<CoreDraftBlockType, DraftBlockRenderConfig> = Immutable.Map({
    'header-one': {
        element: 'div',
        wrapper: <InlineHeader level={1} />,
    },

    'header-two': {
        element: 'div',
        wrapper: <InlineHeader level={2} />,
    },

    'header-three': {
        element: 'div',
        wrapper: <InlineHeader level={3} />,
    },

    'header-four': {
        element: 'div',
        wrapper: <InlineHeader level={4} />,
    },

    'unstyled': {
        element: 'div',
        wrapper: <TextBlock />,
    }
});

let extendedEditorBlockRenderMap: Immutable.Map<CoreDraftBlockType, DraftBlockRenderConfig>;

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
    // TODO: for future use
   /* const editorBlockRender = (contentBlock) => {
        const type = contentBlock.getType();



        if (type === 'header-one') {
            return {
                component: BlockHeaderAdapterComponent,
                editable: true,
                props: {
                    level: 1,
                },
            };

        }
    };*/

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

    const areBlocksOfType = (
      blockType: string,
      contentBlocks: Array<BlockNodeRecord>
    ): Array<boolean> => {
        return map((contentBlock: BlockNodeRecord) => {
            const currentBlockType: string = contentBlock.getType();
            return currentBlockType === blockType;
        }, contentBlocks);
    };

    const blocksHasDataBy: Curry = curry((
      byFunc: equals<boolean>,
      dataKey: string,
      dataValue: string,
      contentBlocks: Array<BlockNodeRecord>
    ) => {
        return byFunc(equals(true), areBlocksHasData(dataKey, dataValue, contentBlocks));
    });

    const blocksOfTypeBy: Curry = curry((
      byFunc: equals<boolean>,
      blockType: string,
      contentBlocks: Array<BlockNodeRecord>
    ) => {
        return byFunc(equals(true), areBlocksOfType(blockType, contentBlocks));
    });

    const isSomeBlocksHasData: Curry = blocksHasDataBy(any);
    const isAllBlocksHasData: Curry = blocksHasDataBy(all);
    const isNoneBlocksHasData: Curry = blocksHasDataBy(none);

    const isSomeBlocksOfType: Curry = blocksOfTypeBy(any);
    const isAllBlocksOfType: Curry = blocksOfTypeBy(all);
    const isNoneBlocksOfType: Curry = blocksOfTypeBy(none);

    const prepareGeneralInlineStylesControls: () => ControlGroupDataType = (): ControlGroupDataType => {
        const currentInlineStyle: DraftInlineStyle = editorState.getCurrentInlineStyle();

        return map((controlData: InlineControlsDataType) => {
            const toolbarControlData: ControlIconDataType = mergeDeepRight({}, controlData);

            const {controlStyle} = controlData;

            toolbarControlData.active = currentInlineStyle.has(controlStyle);
            toolbarControlData.mouseDownHandler = editorToggleInlineStyleHandle(controlStyle);

            return toolbarControlData;
        }, GENERAL_INLINE_STYLES_CONTROLS);
    };

    const prepareAlignmentBlockStylesControls: RenderFunctionNoArgs = () => {
        const selectedContentBlocks: Array<BlockNodeRecord> = getSelectedContentBlocks();

        return map((controlData: BlockControlDataType) => {
            const toolbarControlData: ControlIconDataType = mergeDeepRight({}, controlData);

            const {blockData} = controlData;

            toolbarControlData.active = isSomeBlocksHasData(BLOCK_ALIGNMENT_DATA_TYPE, blockData, selectedContentBlocks);
            toolbarControlData.mouseDownHandler = editorToggleBlockData(BLOCK_ALIGNMENT_DATA_TYPE, blockData);

            return toolbarControlData;
        },  ALIGNMENT_BLOCK_STYLES_CONTROLS);
    };

    const prepareHeaderBlockStylesControls = () => {
        const selectedContentBlocks: Array<BlockNodeRecord> = getSelectedContentBlocks();

        return map((controlData: BlockTypeControlType) => {
            const toolbarControlData: ControlIconDataType = mergeDeepRight({}, controlData);

            const {blockType} = controlData;

            toolbarControlData.active = isSomeBlocksOfType(blockType, selectedContentBlocks);
            toolbarControlData.mouseDownHandler = editorToggleBlockType(blockType);

            return toolbarControlData;
        }, HEADER_BLOCK_TYPE_CONTROLS);
    };

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

    const getDefaultBlockDataByType: (blockDataType: string) => string = cond([
        [equals(BLOCK_ALIGNMENT_DATA_TYPE), always(BLOCK_ALIGNMENT_DATA_INITIAL)],
        [T, always('')]
    ]);

    const getDefaultBlockTypeByType: (blockType: string) => string = cond([
        [equals(BLOCK_HEADER_TYPE), always(BLOCK_HEADER_UNSTYLED_TYPE)],
        [T, always('')]
    ]);

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

    const setBlockType = (blockType: string) => {
        if (isNil(editorState)) {
            return;
        }

        const selectionState: SelectionState = editorState.getSelection();
        const contentState: ContentState = editorState.getCurrentContent();

        const {EditorState, Modifier} = draftJSLib;

        const newContentState: ContentState = Modifier.setBlockType(
          contentState,
          selectionState,
          blockType
        );

        const newEditorState: EditorState = EditorState.createWithContent(newContentState);
        setEditorState(EditorState.forceSelection(newEditorState, selectionState));
    };

    const setBlockData: (blockDataKey: string, blockData: string) => void =
      (blockDataKey: string, blockData: string): void => {
        if (isNil(editorState)) {
            return;
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
      blockType: string,
      event: SyntheticMouseEvent<HTMLDivElement>
    ) => {
        event.preventDefault();

        if (isNil(editorState)) {
            return;
        }

        if (isAllBlocksOfType(blockType, getSelectedContentBlocks())) {
            setBlockType(getDefaultBlockTypeByType(blockType));
        } else if (isSomeBlocksOfType(blockType, getSelectedContentBlocks())) {
            setBlockType(blockType);
        } else if (isNoneBlocksOfType(blockType, getSelectedContentBlocks())) {
            setBlockType(blockType);
        } else {
            return;
        }
    });

    const editorToggleBlockData = curry((
        blockDataKey: string,
        blockData: string,
        event: SyntheticMouseEvent<HTMLDivElement>
    ) => {
        event.preventDefault();

        if (isNil(editorState)) {
            return;
        }

        if (isAllBlocksHasData(blockDataKey, blockData, getSelectedContentBlocks())) {
            setBlockData(blockDataKey, getDefaultBlockDataByType(blockDataKey));
        } else if (isSomeBlocksHasData(blockDataKey, blockData, getSelectedContentBlocks())) {
            setBlockData(blockDataKey, blockData);
        } else if (isNoneBlocksHasData(blockDataKey, blockData, getSelectedContentBlocks())) {
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
            blockRenderMap={extendedEditorBlockRenderMap}
            // TODO: for future use
            //blockRendererFn={editorBlockRender}
            blockStyleFn={getBlockClassName}

            onChange={setEditorState}
        />;
    };


    const renderToolbarsContainer: RenderFunctionNoArgs = () => {
        const {toolbarContainer} = classes;

        const toolbarSections = [
            [
                prepareGeneralInlineStylesControls(),
                prepareAlignmentBlockStylesControls(),
                prepareHeaderBlockStylesControls(),
            ]
        ];

        return <HorizontalIconToolbarComponent
            className={toolbarContainer}
            data={toolbarSections}
        />;

        /*return <div className={toolbarContainer}>
            <div className={controlSection}>





                <div className={controlsGroup}>
                    <FontIcon size='small' className={control} iconClassName='fas fa-quote-left' />


                    <FontIcon size='small' className={control} iconClassName='fas fa-link' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-image' />
                    <FontIcon size='small' className={control} iconClassName='fas fa-film' />
                </div>
            </div>
        </div>;*/
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
                    extendedEditorBlockRenderMap = draftJSLib.DefaultDraftBlockRenderMap.merge(editorBlockRenderMap);

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
    }
}

// exports
export default FormRichTextInputComponent;
