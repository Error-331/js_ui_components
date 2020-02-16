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
var prepareGroupsAlignmentData = function prepareGroupsAlignmentData($controlGroups, sectionWidth, theme) {
  return (0, _ramda.addIndex)(_ramda.reduce)(function (data, $controlGroup, controlGroupIndex) {
    var controlGroupClientRect = $controlGroup.getBoundingClientRect();
    var groupWidth = controlGroupClientRect.width;

    if (controlGroupIndex === 0) {
      data.totalWidth += groupWidth;
      data.groupsRowPositionData.push({
        isFirst: true,
        rowNum: data.currentRow
      });
      return data;
    } else {
      var groupWithWithPadding = groupWidth + theme.layoutStyles.formHorizontalSpacing;
      var totalWidthWithPaddedGroup = groupWithWithPadding + data.totalWidth;
      var totalWidthWithGroup = groupWidth + data.totalWidth;

      if (totalWidthWithPaddedGroup <= sectionWidth) {
        data.totalWidth += groupWithWithPadding;
        data.groupsRowPositionData.push({
          isFirst: false,
          rowNum: data.currentRow
        });
        return data;
      } else {
        if (totalWidthWithGroup <= sectionWidth) {
          data.groupsRowPositionData[data.groupsRowPositionData.length - 1].isLast = true;
        }

        data.totalWidth = groupWidth;
        data.currentRow = data.currentRow + 1;
        data.groupsRowPositionData.push({
          isFirst: true,
          rowNum: data.currentRow
        });
        return data;
      }
    }
  }, {
    totalWidth: 0,
    currentRow: 0,
    groupsRowPositionData: []
  }, $controlGroups);
}; // hooks implementation
// TODO: add memoization


function useHorizontalSectionsAlignment($containerRef) {
  var theme = (0, _reactJss.useTheme)();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      sectionsAlignmentData = _useState2[0],
      setSectionsAlignmentData = _useState2[1];

  var themeContext = (0, _react.useContext)(_providers.MainThemeContext);
  (0, _react.useEffect)(function () {
    if ((0, _ramda.isNil)($containerRef) || (0, _ramda.isNil)($containerRef.current)) {
      return;
    }

    var $controlSections = $containerRef.current.children;
    var sectionsFormatData = (0, _ramda.map)(function ($controlSection) {
      var controlSectionClientRect = $controlSection.getBoundingClientRect();
      var $controlGroups = $controlSection.children;
      var sectionRowPositionData = prepareGroupsAlignmentData($controlGroups, controlSectionClientRect.width, theme);
      return sectionRowPositionData.groupsRowPositionData;
    }, $controlSections);
    setSectionsAlignmentData(sectionsFormatData);
  }, [themeContext.windowDimensions.innerWidth]);
  return sectionsAlignmentData;
}