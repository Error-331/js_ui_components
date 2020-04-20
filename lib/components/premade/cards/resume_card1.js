'use strict'; // external imports

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResumeCard1Function = ResumeCard1Function;
exports.default = exports.ResumeCard1 = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _moment = _interopRequireDefault(require("moment"));

var _ramda = require("ramda");

var _general_constants = require("./../../../theming/constants/general_constants");

var _elements_row = require("./../../layout/alignment/elements/elements_row");

var _slide_visual_effect = require("./../../visual_effects/slide_visual_effect");

var _grid_generator_component = require("./../../grid/grid_generator_component");

var _regular_card_component = require("./../../layout/structure/regular_card_component");

var _inline_text_block = _interopRequireDefault(require("./../../layout/text/inline_text_block"));

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
          '& $personLogoContainer': {
            alignSelf: 'start',
            justifySelf: 'center'
          },
          '& > $nameContainer': {
            alignSelf: 'center',
            paddingLeft: '10px',
            paddingRight: '8px',
            fontFamily: theme.fontStacks.boldFontFamilyStack,
            fontSize: '16px',
            color: theme.baseStyles.mainPrimaryColor
          },
          '& > $lastNameContainer': {
            alignSelf: 'center',
            fontFamily: theme.fontStacks.boldFontFamilyStack,
            fontSize: '16px',
            color: theme.baseStyles.mainPrimaryColor
          },
          '& > $updateDateContainer': {
            alignSelf: 'start',
            textAlign: 'right',
            paddingLeft: '8px',
            fontSize: '10px',
            color: theme.baseStyles.utilityBGColor
          },
          '& > $positionContainer': {
            paddingTop: '8px',
            fontFamily: theme.fontStacks.boldFontFamilyStack,
            fontSize: '18px',
            color: theme.baseStyles.mainPrimaryColor
          },
          '& > $locationContainer': {
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyСontent: 'flex-start',
            alignItems: 'center',
            alignContent: 'flex-start',
            '& > $currentLocationContainer': {
              boxSizing: 'border-box',
              flexBasis: 'auto',
              flexShrink: '1',
              flexGrow: '0',
              textAlign: 'left',
              fontSize: '14px',
              color: theme.baseStyles.utilityBGColor
            },
            '& > $desiredLocationLogoContainer': {
              boxSizing: 'border-box',
              flexBasis: 'auto',
              flexShrink: '1',
              flexGrow: '0',
              paddingLeft: '8px'
            }
          },
          '& > $salaryContainer': {
            boxSizing: 'border-box',
            gridArea: 'salary',
            fontFamily: theme.fontStacks.boldFontFamilyStack,
            fontSize: '15px',
            textAlign: 'right',
            color: theme.baseStyles.accentColorPrimary
          }
        }
      }
    },
    cardBodyContainer: {},
    overlayContainer: {},
    buttonsContainer: {},
    contentGridContainer: {},
    personLogoContainer: {},
    nameContainer: {},
    lastNameContainer: {},
    updateDateContainer: {},
    positionContainer: {},
    locationContainer: {},
    currentLocationContainer: {},
    desiredLocationLogoContainer: {},
    salaryContainer: {}
  };
};
/**
 * Resume card (variant 1).
 * Pre-made card component which represents resume.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function renderElementsGrid(props) {
  var personLogoSrc = props.personLogoSrc,
      name = props.name,
      lastName = props.lastName,
      updateDate = props.updateDate,
      currentLocation = props.currentLocation,
      classes = props.classes;
  var parsedUpdateDate = (0, _moment.default)(updateDate);
  var formattedUpdateDate = parsedUpdateDate.format('LL');
  var position = props.position,
      specialization = props.specialization,
      currency = props.currency,
      remote = props.remote,
      desiredSalary = props.desiredSalary,
      noIconClassName = props.noIconClassName;
  position = "".concat(position).concat((0, _ramda.isNil)(specialization) ? '' : " (".concat(specialization.toLowerCase(), ")"));
  currency = (0, _ramda.defaultTo)('')(currency);

  if ((0, _ramda.isNil)(desiredSalary)) {
    desiredSalary = 'Negotiable';
  } else {
    desiredSalary = "".concat(currency).concat(desiredSalary);
  }

  noIconClassName = (0, _ramda.defaultTo)('fas fa-address-card')(noIconClassName);
  remote = (0, _ramda.defaultTo)(false)(remote);
  var locationIcon = remote ? 'fas fa-map-marker' : 'fas fa-map-marker-slash';
  var personLogoComponent = personLogoSrc ? React.createElement("img", {
    src: personLogoSrc
  }) : React.createElement(_font_icon.FontIcon, {
    size: _general_constants.MEDIUM_SIZE,
    iconClassName: noIconClassName
  });
  var personLocation = React.createElement("div", null, React.createElement(_inline_text_block.default, {
    className: classes.currentLocationContainer
  }, currentLocation), React.createElement(_font_icon.FontIcon, {
    size: _general_constants.SMALL_SIZE,
    className: classes.desiredLocationLogoContainer,
    iconClassName: locationIcon
  }));
  var bodyItems = [[{
    elm: personLogoComponent,
    props: {
      className: classes.personLogoContainer
    }
  }, {
    elm: _inline_text_block.default,
    props: {
      className: classes.nameContainer
    },
    children: name
  }, {
    elm: _inline_text_block.default,
    props: {
      className: classes.lastNameContainer
    },
    children: lastName
  }, {
    elm: _inline_text_block.default,
    props: {
      className: classes.updateDateContainer
    },
    children: formattedUpdateDate
  }], [{
    elm: _inline_header.InlineHeader,
    hspan: 4,
    props: {
      level: 6,
      className: classes.positionContainer
    },
    children: position
  }], [{
    elm: personLocation,
    hspan: 3,
    props: {
      className: classes.locationContainer
    }
  }, {
    elm: _inline_text_block.default,
    props: {
      className: classes.salaryContainer
    },
    children: desiredSalary
  }]];
  return React.createElement(_grid_generator_component.GridGeneratorComponent, {
    className: classes.contentGridContainer,
    style: {
      gridTemplateColumns: '35px max-content 1fr max-content',
      gridTemplateRows: 'minMax(35px, max-content) 1fr max-content',
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

function ResumeCard1Function(props) {
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

ResumeCard1Function.displayName = 'ResumeCard1';
var ResumeCard1 = (0, _reactJss.default)(styles)(ResumeCard1Function); // exports

exports.ResumeCard1 = ResumeCard1;
var _default = ResumeCard1;
exports.default = _default;