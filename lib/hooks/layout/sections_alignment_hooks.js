'use strict'; // external imports

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.date.to-string");

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
exports.useHorizontalSectionsAlignment = useHorizontalSectionsAlignment;
exports.useHorizontalElementsAlignment = useHorizontalElementsAlignment;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _ramda = require("ramda");

var _providers = require("./../../theming/providers");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// type definitions
// helper functions implementation
var prepareElementsAlignmentData = function prepareElementsAlignmentData($elements, sectionWidth, spacingBetweenElms) {
  return (0, _ramda.addIndex)(_ramda.reduce)(function (data, $element, elementIndex) {
    var elementClientRect = $element.getBoundingClientRect();
    var elementWidth = elementClientRect.width;

    if (elementIndex === 0) {
      data.totalWidth += elementWidth;
      data.elementsRowPositionData.push({
        isFirst: true,
        rowNum: data.currentRow
      });
      return data;
    } else {
      var elementMarginLeft = (0, _ramda.defaultTo)(0, spacingBetweenElms);
      var elementWithWithPadding = elementWidth + elementMarginLeft;
      var totalWidthWithPaddedElement = elementWithWithPadding + data.totalWidth;
      var totalWidthWithElement = elementWidth + data.totalWidth;

      if (totalWidthWithPaddedElement <= sectionWidth) {
        data.totalWidth += elementWithWithPadding;
        data.elementsRowPositionData.push({
          isFirst: false,
          rowNum: data.currentRow
        });
        return data;
      } else {
        if (totalWidthWithElement <= sectionWidth) {
          data.elementsRowPositionData[data.elementsRowPositionData.length - 1].isLast = true;
        }

        data.totalWidth = elementWidth;
        data.currentRow = data.currentRow + 1;
        data.elementsRowPositionData.push({
          isFirst: true,
          rowNum: data.currentRow
        });
        return data;
      }
    }
  }, {
    totalWidth: 0,
    currentRow: 0,
    elementsRowPositionData: []
  }, $elements);
}; // hooks implementation
// TODO: add memoization


function useHorizontalSectionsAlignment($containerRef, spacingBetweenElms) {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      sectionsAlignmentData = _useState2[0],
      setSectionsAlignmentData = _useState2[1];

  var themeContext = (0, _react.useContext)(_providers.MainThemeContext);
  (0, _react.useEffect)(function () {
    if ((0, _ramda.isNil)($containerRef) || (0, _ramda.isNil)($containerRef.current)) {
      return;
    }

    var $sections = $containerRef.current.children;
    var sectionsFormatData = (0, _ramda.map)(function ($section) {
      var controlSectionClientRect = $section.getBoundingClientRect();
      var $elementsElements = $section.children;
      var sectionRowPositionData = prepareElementsAlignmentData($elementsElements, controlSectionClientRect.width, spacingBetweenElms);
      return sectionRowPositionData.elementsRowPositionData;
    }, $sections);
    setSectionsAlignmentData(sectionsFormatData);
  }, [themeContext.windowDimensions.innerWidth]);
  return sectionsAlignmentData;
} // TODO: add memoization


function useHorizontalElementsAlignment($containerRef, spacingBetweenElms) {
  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      elementsAlignmentData = _useState4[0],
      setElementsAlignmentData = _useState4[1];

  var themeContext = (0, _react.useContext)(_providers.MainThemeContext);
  (0, _react.useEffect)(function () {
    if ((0, _ramda.isNil)($containerRef) || (0, _ramda.isNil)($containerRef.current)) {
      return;
    }

    var $elements = $containerRef.current.children;
    var containerClientRect = $containerRef.current.getBoundingClientRect();
    var sectionRowPositionData = prepareElementsAlignmentData($elements, containerClientRect.width, spacingBetweenElms);
    setElementsAlignmentData(sectionRowPositionData.elementsRowPositionData);
  }, [themeContext.windowDimensions.innerWidth]);
  return elementsAlignmentData;
} // exports