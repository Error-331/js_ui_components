'use strict'; // external imports

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ramda = require("ramda");

var _elements_row = require("./elements_row");

var _elements_column = require("./elements_column");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// styles definition
var styles = function styles(theme) {
  return {};
};
/**
 * Elements group component.
 * Helps to layout columns (or rows) of elements (especially different buttons and checkboxes).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function ElementsGroupComponent(props) {
  // region private variables declaration
  var alignment = (0, _ramda.defaultTo)('left')(props.alignment);
  var direction = (0, _ramda.defaultTo)('column')(props.direction);
  var className = (0, _ramda.defaultTo)('')(props.className);
  var style = (0, _ramda.defaultTo)({})(props.style); // endregion
  // region style hooks declaration
  // endregion
  // region context hooks declaration
  // endregion
  // region state hooks declaration
  // endregion
  // region effect hooks declaration
  // endregion
  // region state variables declaration
  // endregion
  // region ref hooks declaration
  // endregion
  // region callback hooks declaration
  // endregion
  // region custom hooks declaration
  // endregion
  // region business logic
  // endregion
  // region event handler helpers
  // endregion
  // region render helpers

  var renderComponentContainer = function renderComponentContainer() {
    // TODO: can do better with ternary operator or if Else() but react-docgen do not understand them
    if (direction === 'column') {
      return _react.default.createElement(_elements_column.ElementsColumn, {
        alignment: alignment,
        className: className,
        style: style
      }, props.children);
    } else {
      return _react.default.createElement(_elements_row.ElementsRow, {
        alignment: alignment,
        className: className,
        style: style
      }, props.children);
    }
  }; // endregion
  // init


  return renderComponentContainer();
} // exports


var _default = ElementsGroupComponent;
exports.default = _default;