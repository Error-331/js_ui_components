'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.styleSheetRegister = undefined;

var _reactJss = require('react-jss');

var _ramda = require('ramda');

// type definitions

// constants


// local imports
var DEFAULT_CUSTOM_GLOBAL_STYLESHEET_META_NAME = 'Custom, Dynamic, Global';

// implementation
var globalSheetsRegistryInstance = new _reactJss.SheetsRegistry();

// exports
var styleSheetRegister = exports.styleSheetRegister = Object.seal({
    styleSheetNames: [],

    prepareGlobalStyleSheet: function prepareGlobalStyleSheet(styles) {
        return { '@global': styles };
    },
    createStyleSheet: function createStyleSheet(styles, options) {
        return _reactJss.jss.createStyleSheet(styles, options);
    },
    addGlobalStyles: function addGlobalStyles(styles, name) {
        var preparedStyleSheetName = name + ', ' + DEFAULT_CUSTOM_GLOBAL_STYLESHEET_META_NAME;

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