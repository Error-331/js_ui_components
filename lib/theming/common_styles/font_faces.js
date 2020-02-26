'use strict'; // external imports
// local imports

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontFaces = void 0;
// exports
var fontFaces = Object.freeze({
  RobotoThin: {
    fontFamily: 'Roboto-Thin',
    fontStyle: 'normal',
    fontWeight: 100,
    src: 'url(/assets/fonts/roboto/Roboto-Thin.ttf) format("truetype")'
  },
  RobotoLight: {
    fontFamily: 'Roboto-Light',
    fontStyle: 'normal',
    fontWeight: 300,
    src: 'url(/assets/fonts/roboto/Roboto-Light.ttf) format("truetype")'
  },
  RobotoRegular: {
    fontFamily: 'Roboto-Regular',
    fontStyle: 'normal',
    fontWeight: 400,
    src: 'url(/assets/fonts/roboto/Roboto-Regular.ttf) format("truetype")'
  },
  RobotoBold: {
    fontFamily: 'Roboto-Bold',
    fontStyle: 'normal',
    fontWeight: 700,
    src: 'url(/assets/fonts/roboto/Roboto-Bold.ttf) format("truetype")'
  }
});
exports.fontFaces = fontFaces;