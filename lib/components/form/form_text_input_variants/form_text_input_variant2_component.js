'use strict'; // external imports

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormTextInputVariant2Component = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _form_text_input_variant1_component = require("./form_text_input_variant1_component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// local imports
// type definitions
// styles definition
var topAdditionalPadding = 7;
var iconAdditionalPadding = 2;

var styles = function styles(theme) {
  return {
    componentContainer: {
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      flexBasis: 'auto',
      flexShrink: 1,
      flexGrow: 0,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'flex-start',
      padding: "".concat(theme.inputStyles.labelActiveFontSize + topAdditionalPadding, "px 0px 0px 0px"),
      '& > $inputContainer': {
        boxSizing: 'border-box',
        position: 'relative',
        display: 'flex',
        flexBasis: 'auto',
        flexShrink: '1',
        flexGrow: '0',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',
        '& > $inputControl': {
          boxSizing: 'border-box',
          overflow: 'hidden',
          flexBasis: "".concat(theme.inputStyles.lineHeight, "px"),
          flexShrink: '0',
          flexGrow: '0',
          margin: '0 0 0 0',
          border: 'none',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: theme.inputStyles.alternateInputColor,
          borderRadius: '0',
          padding: '0',
          fontFamily: theme.inputStyles.fontStack,
          fontSize: "".concat(theme.inputStyles.fontSize, "px"),
          boxShadow: 'none',
          transition: 'all .3s',
          lineHeight: "".concat(theme.inputStyles.lineHeight, "px"),
          backgroundColor: theme.inputStyles.bgColor,
          resize: 'none',
          color: theme.inputStyles.alternateInputColor,
          '&::-webkit-input-placeholder': {
            color: theme.inputStyles.alternateInputColor
          },
          '&::-moz-placeholder': {
            color: theme.inputStyles.alternateInputColor
          },
          '&::-ms-input-placeholder': {
            color: theme.inputStyles.alternateInputColor
          },
          '&:focus': {
            outline: 'none',
            borderBottomColor: theme.inputStyles.alternateInputColor,
            color: theme.inputStyles.alternateInputColor
          },
          '&.error': {
            color: theme.inputStyles.attentionColor,
            borderBottomColor: theme.inputStyles.attentionColor
          },
          '&.readOnly': {
            color: theme.inputStyles.alternateInputColor,
            borderBottomColor: theme.inputStyles.alternateInputColor
          },
          '&.disabled': {
            borderBottomStyle: 'dotted',
            borderBottomColor: theme.inputStyles.alternateInputColor,
            color: theme.inputStyles.alternateInputColor
          }
        },
        '& > $inputControlLabel': {
          position: 'absolute',
          top: "".concat(theme.inputStyles.fontSize - theme.inputStyles.labelInactiveFontSize, "px"),
          left: '0px',
          fontFamily: theme.inputStyles.fontStack,
          fontSize: "".concat(theme.inputStyles.labelActiveFontSize, "px"),
          cursor: 'text',
          transition: '.2s ease-out',
          color: theme.inputStyles.alternateInputColor,
          '&.active': {
            fontSize: "".concat(theme.inputStyles.labelActiveFontSize, "px"),
            '-webkit-transform': 'translateY(-145%)',
            transform: 'translateY(-145%)'
          },
          '&.passive': {
            fontSize: "".concat(theme.inputStyles.labelInactiveFontSize, "px"),
            '-webkit-transform': 'translateY(0%)',
            transform: 'translateY(0%)'
          },
          '&.focus': {
            color: theme.inputStyles.alternateInputColor
          },
          '&.error': {
            color: theme.inputStyles.attentionColor
          },
          '&.readOnly': {
            color: theme.inputStyles.alternateInputColor
          },
          '&.disabled': {
            color: theme.inputStyles.alternateInputColor
          }
        },
        '& > $inputControlLabel:first-letter': {
          textTransform: 'capitalize'
        },
        '& > $inputControlIcon': {
          position: 'absolute',
          left: "calc(100%  - ".concat(theme.inputStyles.iconFontSize + iconAdditionalPadding, "px)"),
          bottom: "".concat(theme.inputStyles.lineHeight - theme.inputStyles.iconFontSize, "px"),
          transition: 'all .3s',
          fontSize: "".concat(theme.inputStyles.iconFontSize, "px"),
          color: theme.inputStyles.alternateInputColor,
          '&.focus': {
            color: theme.inputStyles.alternateInputColor
          },
          '&.error': {
            color: theme.inputStyles.attentionColor
          },
          '&.readOnly': {
            color: theme.inputStyles.alternateInputColor
          },
          '&.disabled': {
            color: theme.inputStyles.alternateInputColor
          }
        }
      },
      '& > $subMessagesContainer': {
        boxSizing: 'border-box',
        display: 'flex',
        flexBasis: 'auto',
        flexShrink: '1',
        flexGrow: '0',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start'
      },
      '& > $errorsContainer': {
        color: theme.inputStyles.attentionColor,
        '& > $errorContainer': {
          marginTop: '2px',
          fontFamily: theme.inputStyles.fontStack,
          fontSize: theme.inputStyles.errorFontSize
        }
      },
      '& > $warningsContainer': {
        color: theme.inputStyles.alternateInputColor,
        '& > $warningContainer': {
          marginTop: '2px',
          fontFamily: theme.inputStyles.fontStack,
          fontSize: theme.inputStyles.errorFontSize
        }
      }
    },
    inputContainer: {},
    inputControl: {},
    inputControlLabel: {},
    inputControlIcon: {},
    subMessagesContainer: {},
    errorsContainer: {},
    errorContainer: {},
    warningsContainer: {},
    warningContainer: {}
  };
};
/**
 * Text input component (variant 2) styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


var FormTextInputVariant2Component = (0, _reactJss.default)(styles)(_form_text_input_variant1_component.FormTextInputVariant1Class);
exports.FormTextInputVariant2Component = FormTextInputVariant2Component;
FormTextInputVariant2Component.displayName = 'FormTextInputVariant2Component'; // exports

var _default = FormTextInputVariant2Component;
exports.default = _default;