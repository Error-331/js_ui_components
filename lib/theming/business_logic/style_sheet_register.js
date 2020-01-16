'use strict'; // external imports

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.seal");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheetRegister = void 0;

var _reactJss = require("react-jss");

var _ramda = require("ramda");

// type definitions
// constants definition
var DEFAULT_CUSTOM_GLOBAL_STYLESHEET_META_NAME = 'Custom, Dynamic, Global'; // implementation

var globalSheetsRegistryInstance = new _reactJss.SheetsRegistry(); // exports

var styleSheetRegister = Object.seal({
  styleSheetNames: [],
  prepareGlobalStyleSheet: function prepareGlobalStyleSheet(styles) {
    return {
      '@global': styles
    };
  },
  createStyleSheet: function createStyleSheet(styles, options) {
    return _reactJss.jss.createStyleSheet(styles, options);
  },
  addGlobalStyles: function addGlobalStyles(styles, name) {
    var preparedStyleSheetName = "".concat(name, ", ").concat(DEFAULT_CUSTOM_GLOBAL_STYLESHEET_META_NAME);

    if ((0, _ramda.contains)(preparedStyleSheetName, this.styleSheetNames)) {
      return;
    }

    var preparedGlobalStyleSheet = this.prepareGlobalStyleSheet(styles);
    var globalStyleSheet = this.createStyleSheet(preparedGlobalStyleSheet, {
      meta: preparedStyleSheetName
    });
    globalSheetsRegistryInstance.add(globalStyleSheet);
    globalStyleSheet.attach();
    this.styleSheetNames.push(preparedStyleSheetName);
  }
});
exports.styleSheetRegister = styleSheetRegister;