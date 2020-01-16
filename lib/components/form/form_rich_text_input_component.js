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

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _font_icon = _interopRequireDefault(require("./../layout/icons/font_icon"));

var _providers = require("./../../theming/providers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
      }
    },
    toolbarContainer: {},
    controlSection: {},
    controlsGroup: {},
    control: {}
  };
}); // constants declaration

var LIB_LOADER_IDLE = 'LIB_LOADER_IDLE';
var LIB_LOADER_LOADING = 'LIB_LOADER_LOADING';
var LIB_LOADER_LOADED = 'LIB_LOADER_LOADED';
var LIB_LOADER_LOAD_ERROR = 'LIB_LOADER_LOAD_ERROR';
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
/**
 * Slider input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#/UI%20Components/Redux%20form/ReduxFormSliderInputComponent).
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

  var _React$useState = _react.default.useState(LIB_LOADER_IDLE),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      libLoaderState = _React$useState2[0],
      setLibLoaderState = _React$useState2[1];

  var _React$useState3 = _react.default.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      editorState = _React$useState4[0],
      setEditorState = _React$useState4[1]; // endregion
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


  var editorToggleInlineStyleHandle = (0, _ramda.curry)(function (inlineStyle, event) {
    event.preventDefault();
    var _draftJSLib = draftJSLib,
        RichUtils = _draftJSLib.RichUtils;
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  }); // endregion
  // region render helpers

  var renderErrorContainer = function renderErrorContainer() {
    return _react.default.createElement("div", null, "Failed to load 'draft-js' library (probably not installed).");
  };

  var renderEditor = function renderEditor() {
    var _draftJSLib2 = draftJSLib,
        Editor = _draftJSLib2.Editor;
    return _react.default.createElement(Editor, {
      editorState: editorState,
      onChange: setEditorState
    });
  };

  var renderControlGroup = function renderControlGroup(children) {
    var controlsGroup = classes.controlsGroup;
    return _react.default.createElement("div", {
      className: controlsGroup
    }, children);
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
      return _react.default.createElement(_font_icon.default, {
        size: "small",
        className: className,
        iconClassName: iconClassName,
        onMouseDown: editorToggleInlineStyleHandle(controlStyle),
        key: controlStyle
      });
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
    }, renderGeneralInlineStylesControls(), _react.default.createElement("div", {
      className: controlsGroup
    }, _react.default.createElement(_font_icon.default, {
      size: "small",
      className: control,
      iconClassName: "fas fa-quote-left"
    }), _react.default.createElement(_font_icon.default, {
      size: "small",
      className: control,
      iconClassName: "fas fa-align-left"
    }), _react.default.createElement(_font_icon.default, {
      size: "small",
      className: control,
      iconClassName: "fas fa-align-center"
    }), _react.default.createElement(_font_icon.default, {
      size: "small",
      className: control,
      iconClassName: "fas fa-align-right"
    }), _react.default.createElement(_font_icon.default, {
      size: "small",
      className: control,
      iconClassName: "fas fa-align-justify"
    }), _react.default.createElement(_font_icon.default, {
      size: "small",
      className: control,
      iconClassName: "fas fa-h1"
    }), _react.default.createElement(_font_icon.default, {
      size: "small",
      className: control,
      iconClassName: "fas fa-h2"
    }), _react.default.createElement(_font_icon.default, {
      size: "small",
      className: control,
      iconClassName: "fas fa-h3"
    }), _react.default.createElement(_font_icon.default, {
      size: "small",
      className: control,
      iconClassName: "fas fa-h4"
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