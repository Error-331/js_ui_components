'use strict';

// @flow

// external imports
import type {Node, Element} from 'react';
import type {FieldProps} from 'redux-form';

import type {DraftInlineStyle} from 'draft-js/lib/DraftInlineStyle';
import type {DraftBlockRenderConfig} from 'draft-js/lib/DraftBlockRenderConfig';
import type {DraftEntityInstance} from 'draft-js/lib/DraftEntityInstance';
import type {DraftEntityMutability} from 'draft-js/lib/DraftEntityMutability';

import type {CoreDraftBlockType} from 'draft-js/lib/DraftBlockType';
import type {BlockNodeRecord} from 'draft-js/lib/BlockNodeRecord';
import type {ContentBlock} from 'draft-js/lib/ContentBlock';

import type {Curry} from 'ramda';

import React, {useState, useRef} from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import Immutable from 'immutable';

import SelectionState from 'draft-js/lib/SelectionState';
import ContentState from 'draft-js/lib/ContentState';

import classNames from 'classnames';

import {
    T,
    isNil,
    isEmpty,
    equals,
    cond,
    always,
    defaultTo,
    pathOr,
    curry,
    all,
    any,
    none,
    map,
    mergeDeepRight,
} from 'ramda';

let draftJSLib: {[any]: any};

// local imports
import type {ThemeType} from './../../types/theme_types';
import type {RenderFunctionNoArgsType} from './../../types/common_types';
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';
import type {ControlGroupDataType, ControlIconDataType} from './../navigation/horizontal_icon_toolbar_component';

import HorizontalIconToolbarComponent from './../navigation/horizontal_icon_toolbar_component';

import TextBlock from './../layout/text/text_block';
import InlineHeader from './../layout/text/inline_header';
import InlineTextLink from './../layout/text/inline_text_link';

import LinkEditDialogBoxComponent from './form_rich_text_input_partials/link_edit_dialog_box_component';

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

type InlineEntityControlType = ControlDataType & {
    type: string,
};

type BlockControlDataType = ControlDataType & {
    blockData: string,
};

type BlockTypeControlType = ControlDataType & {
    blockType: string,
};

type InlineControlsDataType = Array<InlineControlDataType>;
type InlineEntityControlsType = Array<InlineEntityControlType>;
type BlockControlsDataType = Array<BlockControlDataType>;
type BlockTypeControlsType = Array<BlockTypeControlType>;

export type FormRichTextInputTypes = {
    /**
     * Number that indicates which visual variant will be used to represent the rich text input
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
     * Styles for component container (main outer container) of the rich text input component
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

type PropsTypes = FieldProps & FormRichTextInputTypes & {
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

const EMBEDDED_INLINE_LINK_ENTITY_TYPE: string = 'EMBEDDED_INLINE_LINK_ENTITY_TYPE';
const EMBEDDED_IMAGE_ENTITY_TYPE: string = 'EMBEDDED_IMAGE_ENTITY_TYPE';
const EMBEDDED_VIDEO_ENTITY_TYPE: string = 'EMBEDDED_VIDEO_ENTITY_TYPE';

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

const EXTERNAL_EMBEDDED_ENTITIES_CONTROLS: InlineEntityControlsType = [
    {title: 'Link', type: EMBEDDED_INLINE_LINK_ENTITY_TYPE, iconClassName: 'fas fa-link'},
    {title: 'Image', type: EMBEDDED_IMAGE_ENTITY_TYPE, iconClassName: 'fas fa-image-polaroid'},
    {title: 'Video',  type: EMBEDDED_VIDEO_ENTITY_TYPE, iconClassName: 'fas fa-film'},
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
    const metaProps: ReduxFormFieldComponentMetaDataPropsTypes = defaultTo({}, props.meta);
    const inputProps: ReduxFormFieldComponentInputDataPropsTypes = defaultTo({}, props.input);

    //const initial: string =  pathOr('', ['initial'], metaProps);
    const inputName: string = pathOr('', ['name'], inputProps);
   // const value: string =  pathOr('', ['value'], inputProps);

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

    const [editLinkDialogState, setEditLinkDialogState] = useState({show: false, url: null});

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

    const isSelectionContainsEntityType = (entityType) => {
        const contentState: ContentState = editorState.getCurrentContent();

        const startKey: string = editorState.getSelection().getStartKey();
        const startOffset: number = editorState.getSelection().getStartOffset();

        const blockWithLinkAtBeginning: ContentBlock = contentState.getBlockForKey(startKey);
        const entityKeyValue: string | null = blockWithLinkAtBeginning.getEntityAt(startOffset);

        if (!isNil(entityKeyValue)) {
            const entityInstance: DraftEntityInstance = contentState.getEntity(entityKeyValue);

            return entityInstance.getType() === entityType;
        } else {
            return false;
        }
    };

    const findEmbeddedLinkEntities = (contentBlock, callback, contentState) => {
        contentBlock.findEntityRanges(
            (character) => {
                const entityKey = character.getEntity();

                return (
                    entityKey !== null &&
                    contentState.getEntity(entityKey).getType() === EMBEDDED_INLINE_LINK_ENTITY_TYPE
                );
            },
            callback
        );
    };

    const prepareGeneralInlineStylesControls: () => ControlGroupDataType =
        (): ControlGroupDataType => {
            const currentInlineStyle: DraftInlineStyle = editorState.getCurrentInlineStyle();

            return map((controlData: InlineControlsDataType) => {
                const toolbarControlData: ControlIconDataType = mergeDeepRight({}, controlData);

                const {controlStyle} = controlData;

                toolbarControlData.active = currentInlineStyle.has(controlStyle);
                toolbarControlData.mouseDownHandler = editorToggleInlineStyleHandle(controlStyle);

                return toolbarControlData;
            }, GENERAL_INLINE_STYLES_CONTROLS);
        };

    const prepareAlignmentBlockStylesControls: RenderFunctionNoArgsType = () => {
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

    const prepareExternalEmbeddedEntitiesControls = () => {
        return map((controlData: InlineEntityControlType) => {
            const toolbarControlData: ControlIconDataType = mergeDeepRight({}, controlData);

            const {type} = controlData;

            toolbarControlData.active = isSelectionContainsEntityType(type);
            toolbarControlData.mouseDownHandler = editorEditExternalEmbeddedEntityHandle(type);

            return toolbarControlData;
        }, EXTERNAL_EMBEDDED_ENTITIES_CONTROLS);
    };

    const alterContentBlock = (alterType: string, data: string | Immutable.Map) => {
        if (isNil(editorState)) {
            return;
        }

        const selectionState: SelectionState = editorState.getSelection();
        const contentState: ContentState = editorState.getCurrentContent();

        const {EditorState, Modifier} = draftJSLib;

        const modifierParams = [
            contentState,
            selectionState,
            data
        ];

        const newContentState: ContentState = alterType === 'type' ?
            Modifier.setBlockType(...modifierParams) :
            Modifier.setBlockData(...modifierParams);

        const newEditorState: EditorState = EditorState.createWithContent(newContentState, getContentDecorator());
        setEditorState(EditorState.forceSelection(newEditorState, selectionState));
    };

    const alterEntityForSelection: (usrContentState?: ContentState, entityKey?: string) => void =
        (usrContentState?: ContentState, entityKey?: string): void => {
            const {EditorState, Modifier} = draftJSLib;

            const contentState: ContentState = editorState.getCurrentContent();
            const selectionState: SelectionState = editorState.getSelection();

            const newContentState: ContentState = Modifier.applyEntity(
                isNil(usrContentState) ? contentState : usrContentState,
                selectionState,
                isNil(entityKey) ? null : entityKey
            );

            const newEditorState: EditorState = EditorState.push(
                editorState,
                newContentState,
                'apply-entity'
            );

            setEditorState(EditorState.forceSelection(newEditorState, selectionState));
        };

    const removeEntityFromSelection: () => void = (): void => {
        alterEntityForSelection();
    };

    const addEntityForSelection: (entityType: string, mutability: DraftEntityMutability, entityData: {[any]: any}) => void =
        (entityType: string, mutability: DraftEntityMutability, entityData: {[any]: any}): void => {
            const contentState: ContentState = editorState.getCurrentContent();
            const contentStateWithEntity: ContentState = contentState.createEntity(entityType, mutability, entityData);

            const entityKey: string = contentStateWithEntity.getLastCreatedEntityKey();

            alterEntityForSelection(contentStateWithEntity, entityKey);
        };

    const getContentDecorator = () => {
        const {CompositeDecorator} = draftJSLib;

        const decorator = new CompositeDecorator([
            {
                strategy: findEmbeddedLinkEntities,
                component: (props) => {

                    const {url} = props.contentState.getEntity(props.entityKey).getData();
                    return (
                        <InlineTextLink href={url}>
                            {props.children}
                        </InlineTextLink>
                    );
                },
            },
        ]);

        return decorator;
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

    const setBlockType: (blockType: string) => void =
        (blockType: string): void => {
            return alterContentBlock('type', blockType);
        };

    const setBlockData: (blockDataKey: string, blockData: string) => void =
      (blockDataKey: string, blockData: string): void => {
        return alterContentBlock('data', Immutable.Map({[blockDataKey]: blockData}));
    };

    // endregion

    // region event handler helpers
    const linkEditDialogBoxCancelHandle: () => void = () => setEditLinkDialogState({
        show: false,
        url: null,
    });

    const linkEditDialogBoxSaveHandle = (url: string) => {
        setEditLinkDialogState({show: false, url: null});

        if (isEmpty(url)) {
            removeEntityFromSelection();
        } else {
            addEntityForSelection(EMBEDDED_INLINE_LINK_ENTITY_TYPE, 'MUTABLE', {url});
        }
    };

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

    const editorEditExternalEmbeddedEntityHandle = curry((
        entityType: string,
        event: SyntheticMouseEvent<HTMLDivElement>
    ) => {
        event.preventDefault();

        if (isNil(entityType)) {
            return;
        }

        switch(entityType) {
            case EMBEDDED_INLINE_LINK_ENTITY_TYPE:
                const contentState: ContentState = editorState.getCurrentContent();

                const startKey: string = editorState.getSelection().getStartKey();
                const startOffset: number = editorState.getSelection().getStartOffset();

                const blockWithLinkAtBeginning: ContentBlock = contentState.getBlockForKey(startKey);
                const entityKeyValue: string | null = blockWithLinkAtBeginning.getEntityAt(startOffset);

                if (!isNil(entityKeyValue)) {
                    const linkInstance: DraftEntityInstance = contentState.getEntity(entityKeyValue);
                    const {url} = linkInstance.getData();

                    setEditLinkDialogState({
                        show: true,
                        url,
                    });
                } else {
                    setEditLinkDialogState({
                        show: true,
                        url: null
                    });
                }

                return;
            case EMBEDDED_IMAGE_ENTITY_TYPE:
            case EMBEDDED_VIDEO_ENTITY_TYPE:
            default:
                return;
        }
    });

    // endregion

    // region render helpers
    const renderErrorContainer: RenderFunctionNoArgsType = (): Node => {
        return <div>
            Failed to load 'draft-js' library (probably not installed).
        </div>;
    };

    const renderLinkEditDialogBox: RenderFunctionNoArgsType = (): Node => {
        const {show, url} = editLinkDialogState;

        return <LinkEditDialogBoxComponent
            show={show}
            name={inputName}
            url={url}

            onClickSave={linkEditDialogBoxSaveHandle}
            onClickCancel={linkEditDialogBoxCancelHandle}
        />;
    };

    const renderEditor: RenderFunctionNoArgsType = (): Node => {
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

    const renderToolbarsContainer: RenderFunctionNoArgsType = (): Node => {
        const {toolbarContainer} = classes;

        const toolbarSections = [
            [
                prepareGeneralInlineStylesControls(),
                prepareAlignmentBlockStylesControls(),
                prepareHeaderBlockStylesControls(),
                prepareExternalEmbeddedEntitiesControls(),
            ]
        ];

        return <HorizontalIconToolbarComponent
            className={toolbarContainer}
            data={toolbarSections}
        />;
    };

    const renderEditorContainer: RenderFunctionNoArgsType = (): Node => {
        return <div>
            {renderEditor()}
        </div>;
    };

    const renderComponentContainer: RenderFunctionNoArgsType = (): Node => {
        const {componentContainer} = classes;
        const {show} = editLinkDialogState;

        return <div className={componentContainer}>
            {renderToolbarsContainer()}
            {renderEditorContainer()}

            {show && renderLinkEditDialogBox()}
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

                    if (isNil(editorState)) {
                        setEditorState(draftJSLib.EditorState.createEmpty(getContentDecorator()));
                    } else {

                    }

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
