'use strict'; // external imports

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _immutable = _interopRequireDefault(require("immutable"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _SelectionState = _interopRequireDefault(require("draft-js/lib/SelectionState"));

var _ContentState = _interopRequireDefault(require("draft-js/lib/ContentState"));

var _text_block = _interopRequireDefault(require("./../layout/text/text_block"));

var _inline_header = _interopRequireDefault(require("./../layout/text/inline_header"));

var _font_icon = _interopRequireDefault(require("./../layout/icons/font_icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(Object(source)); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var draftJSLib; // local imports

// styles definition
var useStyles = (0, _reactJss.createUseStyles)(function (theme) {
  return {
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
              marginLeft: "".concat(theme.layoutStyles.leftSpacing, "px"),
              color: theme.inputStyles.inactiveColor,
              '&.active': {
                color: theme.inputStyles.activeColor
              },
              '&:hover': {
                color: theme.inputStyles.hoverColor
              },
              '&:first-child': {
                marginLeft: "0px"
              }
            }
          }
        }
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
      }
    },
    toolbarContainer: {},
    controlSection: {},
    controlsGroup: {},
    control: {},
    contentBlockAlignInitial: {},
    contentBlockAlignLeft: {},
    contentBlockAlignRight: {},
    contentBlockAlignCenter: {},
    contentBlockAlignJustify: {}
  };
}); // constants declaration

var LIB_LOADER_IDLE = 'LIB_LOADER_IDLE';
var LIB_LOADER_LOADING = 'LIB_LOADER_LOADING';
var LIB_LOADER_LOADED = 'LIB_LOADER_LOADED';
var LIB_LOADER_LOAD_ERROR = 'LIB_LOADER_LOAD_ERROR';
var BLOCK_ALIGNMENT_DATA_TYPE = 'BLOCK_ALIGNMENT_DATA_TYPE';
var BLOCK_HEADER_TYPE = 'BLOCK_HEADER_TYPE';
var BLOCK_ALIGNMENT_DATA_INITIAL = 'BLOCK_ALIGNMENT_DATA_INITIAL';
var BLOCK_ALIGNMENT_DATA_LEFT = 'BLOCK_ALIGNMENT_DATA_LEFT';
var BLOCK_ALIGNMENT_DATA_RIGHT = 'BLOCK_ALIGNMENT_DATA_RIGHT';
var BLOCK_ALIGNMENT_DATA_CENTER = 'BLOCK_ALIGNMENT_DATA_CENTER';
var BLOCK_ALIGNMENT_DATA_JUSTIFY = 'BLOCK_ALIGNMENT_DATA_JUSTIFY';
var BLOCK_HEADER_UNSTYLED_TYPE = 'unstyled';
var BLOCK_HEADER_LEVEL_1_TYPE = 'header-one';
var BLOCK_HEADER_LEVEL_2_TYPE = 'header-two';
var BLOCK_HEADER_LEVEL_3_TYPE = 'header-three';
var BLOCK_HEADER_LEVEL_4_TYPE = 'header-four';
var GENERAL_INLINE_STYLES_CONTROLS = [{
  label: 'Bold',
  controlStyle: 'BOLD',
  iconClassName: 'fas fa-bold'
}, {
  label: 'Italic',
  controlStyle: 'ITALIC',
  iconClassName: 'fas fa-italic'
}, {
  label: 'Underline',
  controlStyle: 'UNDERLINE',
  iconClassName: 'fas fa-underline'
}];
var ALIGNMENT_BLOCK_STYLES_CONTROLS = [{
  label: 'Align left',
  blockData: BLOCK_ALIGNMENT_DATA_LEFT,
  iconClassName: 'fas fa-align-left'
}, {
  label: 'Align center',
  blockData: BLOCK_ALIGNMENT_DATA_CENTER,
  iconClassName: 'fas fa-align-center'
}, {
  label: 'Align right',
  blockData: BLOCK_ALIGNMENT_DATA_RIGHT,
  iconClassName: 'fas fa-align-right'
}, {
  label: 'Justify',
  blockData: BLOCK_ALIGNMENT_DATA_JUSTIFY,
  iconClassName: 'fas fa-align-justify'
}];
var HEADER_BLOCK_TYPE_CONTROLS = [{
  label: 'Header level 1',
  blockType: BLOCK_HEADER_LEVEL_1_TYPE,
  iconClassName: 'fas fa-h1'
}, {
  label: 'Header level 2',
  blockType: BLOCK_HEADER_LEVEL_2_TYPE,
  iconClassName: 'fas fa-h2'
}, {
  label: 'Header level 3',
  blockType: BLOCK_HEADER_LEVEL_3_TYPE,
  iconClassName: 'fas fa-h3'
}, {
  label: 'Header level 4',
  blockType: BLOCK_HEADER_LEVEL_4_TYPE,
  iconClassName: 'fas fa-h4'
}];

var editorBlockRenderMap = _immutable.default.Map({
  'header-one': {
    element: 'div',
    wrapper: _react.default.createElement(_inline_header.default, {
      level: 1
    })
  },
  'header-two': {
    element: 'div',
    wrapper: _react.default.createElement(_inline_header.default, {
      level: 2
    })
  },
  'header-three': {
    element: 'div',
    wrapper: _react.default.createElement(_inline_header.default, {
      level: 3
    })
  },
  'header-four': {
    element: 'div',
    wrapper: _react.default.createElement(_inline_header.default, {
      level: 4
    })
  },
  'unstyled': {
    element: 'div',
    wrapper: _react.default.createElement(_text_block.default, null)
  }
});

var extendedEditorBlockRenderMap;
/**
 * Rich text input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#/UI%20Components/Redux%20form/ReduxFormRichInputComponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation

function FormRichTextInputComponent(props) {
  // region private variables declaration
  // endregion
  // region style hooks declaration
  var theme = (0, _reactJss.useTheme)();
  var classes = useStyles(_objectSpread({}, props, {
    theme: theme
  })); // endregion
  // region context hooks declaration
  // endregion
  // region state hooks declaration

  var _useState = (0, _react.useState)(LIB_LOADER_IDLE),
      _useState2 = _slicedToArray(_useState, 2),
      libLoaderState = _useState2[0],
      setLibLoaderState = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      editorState = _useState4[0],
      setEditorState = _useState4[1]; // endregion
  // region effect hooks declaration
  // endregion
  // region state variables declaration
  // endregion
  // region ref hooks declaration


  var $editorRef = (0, _react.useRef)(null); // endregion
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

  var areBlocksHasData = function areBlocksHasData(dataKey, dataValue, contentBlocks) {
    return (0, _ramda.map)(function (contentBlock) {
      var blockData = contentBlock.getData();
      return blockData.has(dataKey) && blockData.get(dataKey) === dataValue;
    }, contentBlocks);
  };

  var areBlocksOfType = function areBlocksOfType(blockType, contentBlocks) {
    return (0, _ramda.map)(function (contentBlock) {
      var currentBlockType = contentBlock.getType();
      return currentBlockType === blockType;
    }, contentBlocks);
  };

  var blocksHasDataBy = (0, _ramda.curry)(function (byFunc, dataKey, dataValue, contentBlocks) {
    return byFunc((0, _ramda.equals)(true), areBlocksHasData(dataKey, dataValue, contentBlocks));
  });
  var blocksOfTypeBy = (0, _ramda.curry)(function (byFunc, blockType, contentBlocks) {
    return byFunc((0, _ramda.equals)(true), areBlocksOfType(blockType, contentBlocks));
  });
  var isSomeBlocksHasData = blocksHasDataBy(_ramda.any);
  var isAllBlocksHasData = blocksHasDataBy(_ramda.all);
  var isNoneBlocksHasData = blocksHasDataBy(_ramda.none);
  var isSomeBlocksOfType = blocksOfTypeBy(_ramda.any);
  var isAllBlocksOfType = blocksOfTypeBy(_ramda.all);
  var isNoneBlocksOfType = blocksOfTypeBy(_ramda.none);

  var getSelectedContentBlocks = function getSelectedContentBlocks() {
    if ((0, _ramda.isNil)(editorState)) {
      return [];
    }

    var selectionState = editorState.getSelection();
    var contentState = editorState.getCurrentContent();
    var selectionStartKey = selectionState.getStartKey();
    var selectionEndKey = selectionState.getEndKey();
    var contentBlocks = [];
    var isSaving = false;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = contentState.getBlockMap().keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _key = _step.value;

        if (_key === selectionStartKey) {
          isSaving = true;
        }

        if (isSaving === true) {
          contentBlocks.push(contentState.getBlockForKey(_key));
        }

        if (_key === selectionEndKey) {
          return contentBlocks;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return contentBlocks;
  };

  var getDefaultBlockDataByType = (0, _ramda.cond)([[(0, _ramda.equals)(BLOCK_ALIGNMENT_DATA_TYPE), (0, _ramda.always)(BLOCK_ALIGNMENT_DATA_INITIAL)], [_ramda.T, (0, _ramda.always)('')]]);
  var getDefaultBlockTypeByType = (0, _ramda.cond)([[(0, _ramda.equals)(BLOCK_HEADER_TYPE), (0, _ramda.always)(BLOCK_HEADER_UNSTYLED_TYPE)], [_ramda.T, (0, _ramda.always)('')]]);

  var getBlockClassName = function getBlockClassName(contentBlock) {
    var blockClassName = '';
    var blockData = contentBlock.getData();
    var contentBlockAlignInitial = classes.contentBlockAlignInitial,
        contentBlockAlignLeft = classes.contentBlockAlignLeft,
        contentBlockAlignRight = classes.contentBlockAlignRight,
        contentBlockAlignCenter = classes.contentBlockAlignCenter,
        contentBlockAlignJustify = classes.contentBlockAlignJustify;
    blockClassName = (0, _ramda.cond)([[(0, _ramda.equals)(BLOCK_ALIGNMENT_DATA_INITIAL), (0, _ramda.always)((0, _classnames.default)(blockClassName, contentBlockAlignInitial))], [(0, _ramda.equals)(BLOCK_ALIGNMENT_DATA_LEFT), (0, _ramda.always)((0, _classnames.default)(blockClassName, contentBlockAlignLeft))], [(0, _ramda.equals)(BLOCK_ALIGNMENT_DATA_RIGHT), (0, _ramda.always)((0, _classnames.default)(blockClassName, contentBlockAlignRight))], [(0, _ramda.equals)(BLOCK_ALIGNMENT_DATA_CENTER), (0, _ramda.always)((0, _classnames.default)(blockClassName, contentBlockAlignCenter))], [(0, _ramda.equals)(BLOCK_ALIGNMENT_DATA_JUSTIFY), (0, _ramda.always)((0, _classnames.default)(blockClassName, contentBlockAlignJustify))], [_ramda.T, (0, _ramda.always)((0, _classnames.default)(blockClassName, contentBlockAlignInitial))]])(blockData.get(BLOCK_ALIGNMENT_DATA_TYPE));
    return blockClassName;
  };

  var setBlockType = function setBlockType(blockType) {
    if ((0, _ramda.isNil)(editorState)) {
      return;
    }

    var selectionState = editorState.getSelection();
    var contentState = editorState.getCurrentContent();
    var _draftJSLib = draftJSLib,
        EditorState = _draftJSLib.EditorState,
        Modifier = _draftJSLib.Modifier;
    var newContentState = Modifier.setBlockType(contentState, selectionState, blockType);
    var newEditorState = EditorState.createWithContent(newContentState);
    setEditorState(EditorState.forceSelection(newEditorState, selectionState));
  };

  var setBlockData = function setBlockData(blockDataKey, blockData) {
    if ((0, _ramda.isNil)(editorState)) {
      return;
    }

    var selectionState = editorState.getSelection();
    var contentState = editorState.getCurrentContent();
    var _draftJSLib2 = draftJSLib,
        EditorState = _draftJSLib2.EditorState,
        Modifier = _draftJSLib2.Modifier;
    var newContentState = Modifier.setBlockData(contentState, selectionState, _immutable.default.Map(_defineProperty({}, blockDataKey, blockData)));
    var newEditorState = EditorState.createWithContent(newContentState);
    setEditorState(EditorState.forceSelection(newEditorState, selectionState));
  }; // endregion
  // region event handler helpers


  var editorToggleBlockType = (0, _ramda.curry)(function (blockType, event) {
    event.preventDefault();

    if ((0, _ramda.isNil)(editorState)) {
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
  var editorToggleBlockData = (0, _ramda.curry)(function (blockDataKey, blockData, event) {
    event.preventDefault();

    if ((0, _ramda.isNil)(editorState)) {
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
  var editorToggleInlineStyleHandle = (0, _ramda.curry)(function (inlineStyle, event) {
    event.preventDefault();
    var _draftJSLib3 = draftJSLib,
        RichUtils = _draftJSLib3.RichUtils;
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  }); // endregion
  // region render helpers

  var renderErrorContainer = function renderErrorContainer() {
    return _react.default.createElement("div", null, "Failed to load 'draft-js' library (probably not installed).");
  };

  var renderEditor = function renderEditor() {
    var _draftJSLib4 = draftJSLib,
        Editor = _draftJSLib4.Editor;
    return _react.default.createElement(Editor, {
      ref: $editorRef,
      editorState: editorState,
      blockRenderMap: extendedEditorBlockRenderMap // TODO: for future use
      //blockRendererFn={editorBlockRender}
      ,
      blockStyleFn: getBlockClassName,
      onChange: setEditorState
    });
  };

  var renderControlGroup = function renderControlGroup(children) {
    var controlsGroup = classes.controlsGroup;
    return _react.default.createElement("div", {
      className: controlsGroup
    }, children);
  };

  var renderControlIcon = function renderControlIcon(className, iconClassName, onMouseDown, key) {
    return _react.default.createElement(_font_icon.default, {
      size: "small",
      className: className,
      iconClassName: iconClassName,
      onMouseDown: onMouseDown,
      key: key
    });
  };

  var renderHeaderBlockStylesControls = function renderHeaderBlockStylesControls() {
    var control = classes.control;
    var controls = (0, _ramda.map)(function (controlData) {
      var blockType = controlData.blockType,
          iconClassName = controlData.iconClassName;
      var className = (0, _classnames.default)(control, {
        active: isSomeBlocksOfType(blockType, getSelectedContentBlocks())
      });
      return renderControlIcon(className, iconClassName, editorToggleBlockType(blockType), blockType);
    }, HEADER_BLOCK_TYPE_CONTROLS);
    return renderControlGroup(controls);
  };

  var renderAlignmentBlockStylesControls = function renderAlignmentBlockStylesControls() {
    var control = classes.control;
    var controls = (0, _ramda.map)(function (controlData) {
      var blockData = controlData.blockData,
          iconClassName = controlData.iconClassName;
      var className = (0, _classnames.default)(control, {
        active: isSomeBlocksHasData(BLOCK_ALIGNMENT_DATA_TYPE, blockData, getSelectedContentBlocks())
      });
      return renderControlIcon(className, iconClassName, editorToggleBlockData(BLOCK_ALIGNMENT_DATA_TYPE, blockData), blockData);
    }, ALIGNMENT_BLOCK_STYLES_CONTROLS);
    return renderControlGroup(controls);
  };

  var renderGeneralInlineStylesControls = function renderGeneralInlineStylesControls() {
    var control = classes.control;
    var currentInlineStyle = editorState.getCurrentInlineStyle();
    var controls = (0, _ramda.map)(function (controlData) {
      var controlStyle = controlData.controlStyle,
          iconClassName = controlData.iconClassName;
      var className = (0, _classnames.default)(control, {
        active: currentInlineStyle.has(controlStyle)
      });
      return renderControlIcon(className, iconClassName, editorToggleInlineStyleHandle(controlStyle), controlStyle);
    }, GENERAL_INLINE_STYLES_CONTROLS);
    return renderControlGroup(controls);
  };

  var renderToolbarsContainer = function renderToolbarsContainer() {
    var toolbarContainer = classes.toolbarContainer,
        controlSection = classes.controlSection,
        controlsGroup = classes.controlsGroup,
        control = classes.control;
    return _react.default.createElement("div", {
      className: toolbarContainer
    }, _react.default.createElement("div", {
      className: controlSection
    }, renderGeneralInlineStylesControls(), renderAlignmentBlockStylesControls(), renderHeaderBlockStylesControls(), _react.default.createElement("div", {
      className: controlsGroup
    }, _react.default.createElement(_font_icon.default, {
      size: "small",
      className: control,
      iconClassName: "fas fa-quote-left"
    }), _react.default.createElement(_font_icon.default, {
      size: "small",
      className: control,
      iconClassName: "fas fa-link"
    }), _react.default.createElement(_font_icon.default, {
      size: "small",
      className: control,
      iconClassName: "fas fa-image"
    }), _react.default.createElement(_font_icon.default, {
      size: "small",
      className: control,
      iconClassName: "fas fa-film"
    }))));
  };

  var renderEditorContainer = function renderEditorContainer() {
    return _react.default.createElement("div", null, renderEditor());
  };

  var renderComponentContainer = function renderComponentContainer() {
    var componentContainer = classes.componentContainer;
    return _react.default.createElement("div", {
      className: componentContainer
    }, renderToolbarsContainer(), renderEditorContainer());
  }; // endregion
  // init


  switch (libLoaderState) {
    case LIB_LOADER_IDLE:
      setLibLoaderState(LIB_LOADER_LOADING);
      import('draft-js').then(function (draftJS) {
        draftJSLib = draftJS.default;
        extendedEditorBlockRenderMap = draftJSLib.DefaultDraftBlockRenderMap.merge(editorBlockRenderMap);
        setEditorState(draftJSLib.EditorState.createEmpty());
        setLibLoaderState(LIB_LOADER_LOADED);
      }).catch(function () {
        return setLibLoaderState(LIB_LOADER_LOAD_ERROR);
      });
      return null;

    case LIB_LOADER_LOADED:
      return renderComponentContainer();

    case LIB_LOADER_LOAD_ERROR:
      return renderErrorContainer();

    default:
      return null;
  }

  ;
} // exports


var _default = FormRichTextInputComponent;
exports.default = _default;