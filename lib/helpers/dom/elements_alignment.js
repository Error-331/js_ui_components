'use strict'; // React
// external imports

require("core-js/modules/es.array.reduce");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareElementsAlignmentData = void 0;

var _ramda = require("ramda");

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
}; // exports


exports.prepareElementsAlignmentData = prepareElementsAlignmentData;