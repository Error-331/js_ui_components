'use strict';

// https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)
// https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors/13542669#13542669

// external imports

// local imports

Object.defineProperty(exports, "__esModule", {
    value: true
});


// exports
var colorUtilities = exports.colorUtilities = Object.seal({
    shadeColorFast: function shadeColorFast(hexColorString, shadingPercent) {
        var hexColor = parseInt(hexColorString.slice(1), 16);

        var rangeCap = shadingPercent < 0 ? 0 : 255;
        var padding = shadingPercent < 0 ? shadingPercent * -1 : shadingPercent;

        var red = hexColor >> 16;
        var green = hexColor >> 8 & 0x00FF;
        var blue = hexColor & 0x0000FF;

        var shadedRed = (Math.round((rangeCap - red) * padding) + red) * 0x10000;
        var shadedGreen = (Math.round((rangeCap - green) * padding) + green) * 0x100;
        var shadedBlue = Math.round((rangeCap - blue) * padding) + blue;

        var shadedColorHex = 0x1000000 + shadedRed + shadedGreen + shadedBlue;

        return '#' + shadedColorHex.toString(16).slice(1);
    }
});