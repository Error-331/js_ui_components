'use strict'; // external imports

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompanyCard1Function = CompanyCard1Function;
exports.default = exports.CompanyCard1 = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _moment = _interopRequireDefault(require("moment"));

var _ramda = require("ramda");

var _general_constants = require("./../../../theming/constants/general_constants");

var _elements_row = require("./../../layout/alignment/elements/elements_row");

var _slide_visual_effect = require("./../../visual_effects/slide_visual_effect");

var _grid_generator_component = require("./../../grid/grid_generator_component");

var _regular_card_component = require("./../../layout/structure/regular_card_component");

var _inline_text_block = require("./../../layout/text/inline_text_block");

var _inline_header = require("./../../layout/text/inline_header");

var _font_icon = require("./../../layout/icons/font_icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// styles definition
var styles = function styles(theme) {
  return {
    componentContainer: {
      height: '100%',
      '& > $cardBodyContainer': {
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        '& > $overlayContainer': {
          width: '100%',
          height: '100%',
          '& $buttonsContainer': {
            height: '100%',
            alignItems: 'center'
          }
        },
        '& > $contentGridContainer': {
          '&  $companyLogoContainer': {
            alignSelf: 'start',
            justifySelf: 'center'
          },
          '& > $creationDateContainer': {
            alignSelf: 'start',
            textAlign: 'right',
            paddingLeft: '8px',
            fontSize: '10px',
            color: theme.baseStyles.utilityBGColor
          },
          '& > $nameContainer': {
            paddingTop: '8px',
            fontFamily: theme.fontStacks.boldFontFamilyStack,
            fontSize: '18px',
            color: theme.baseStyles.mainPrimaryColor
          },
          '& > $phoneContainer': {
            textAlign: 'left',
            fontSize: '14px',
            textTransform: 'capitalize',
            color: theme.baseStyles.utilityBGColor
          }
        }
      }
    },
    cardBodyContainer: {},
    overlayContainer: {},
    buttonsContainer: {},
    contentGridContainer: {},
    companyLogoContainer: {},
    creationDateContainer: {},
    nameContainer: {},
    phoneContainer: {}
  };
};
/**
 * Company card (variant 1).
 * Pre-made card component which represents company.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function renderElementsGrid(props) {
  var companyLogoSrc = props.companyLogoSrc,
      name = props.name,
      phone = props.phone,
      creationDate = props.creationDate,
      classes = props.classes;
  var parsedCreationDate = (0, _moment.default)(creationDate);
  var formattedCreationDate = parsedCreationDate.format('LL');
  var noIconClassName = props.noIconClassName;
  noIconClassName = (0, _ramda.defaultTo)('fas fa-building')(noIconClassName);
  var companyLogoComponent = companyLogoSrc ? React.createElement("img", {
    src: companyLogoSrc
  }) : React.createElement(_font_icon.FontIcon, {
    size: _general_constants.MEDIUM_SIZE,
    iconClassName: noIconClassName
  });
  var bodyItems = [[{
    elm: companyLogoComponent,
    props: {
      className: classes.companyLogoContainer
    }
  }, {
    elm: _inline_text_block.InlineTextBlock,
    props: {
      className: classes.creationDateContainer
    },
    children: formattedCreationDate
  }], [{
    elm: _inline_header.InlineHeader,
    hspan: 2,
    props: {
      level: 6,
      className: classes.nameContainer
    },
    children: name
  }], [{
    elm: _inline_text_block.InlineTextBlock,
    hspan: 2,
    props: {
      className: classes.phoneContainer
    },
    children: "phone: ".concat(phone)
  }]];
  return React.createElement(_grid_generator_component.GridGeneratorComponent, {
    className: classes.contentGridContainer,
    style: {
      gridTemplateColumns: '35px 1fr',
      gridTemplateRows: 'minMax(35px, max-content) max-content',
      gridColumnGap: '0px',
      gridRowGap: '0px'
    },
    items: bodyItems
  });
}

function renderButtonsSlider(props, shouldShowOverlay) {
  var children = props.children,
      classes = props.classes;
  return React.createElement(_slide_visual_effect.SlideVisualEffect, {
    direction: "TopToBottom",
    show: shouldShowOverlay,
    className: classes.overlayContainer
  }, React.createElement(_elements_row.ElementsRow, {
    alignment: "center",
    className: classes.buttonsContainer
  }, children));
}

function CompanyCard1Function(props) {
  var classes = props.classes;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      shouldShowOverlay = _React$useState2[0],
      setShouldShowOverlay = _React$useState2[1];

  var showButtonsOverlay = props.showButtonsOverlay;
  showButtonsOverlay = (0, _ramda.defaultTo)(false)(showButtonsOverlay);
  return React.createElement(_regular_card_component.RegularCardComponent, {
    popOnHover: true,
    maxPopLevel: 3,
    containerClassName: classes.componentContainer,
    bodyClassName: classes.cardBodyContainer,
    onMouseOverContainer: function onMouseOverContainer() {
      return (0, _ramda.unless)((0, _ramda.equals)(true), function () {
        return showButtonsOverlay && setShouldShowOverlay(true);
      })(shouldShowOverlay);
    },
    onMouseLeaveContainer: function onMouseLeaveContainer() {
      return (0, _ramda.unless)((0, _ramda.equals)(false), function () {
        return showButtonsOverlay && setShouldShowOverlay(false);
      })(shouldShowOverlay);
    }
  }, showButtonsOverlay ? renderButtonsSlider(props, shouldShowOverlay) : null, renderElementsGrid(props));
}

CompanyCard1Function.displayName = 'CompanyCard1';
var CompanyCard1 = (0, _reactJss.default)(styles)(CompanyCard1Function); // exports

exports.CompanyCard1 = CompanyCard1;
var _default = CompanyCard1;
exports.default = _default;