'use strict';

// @flow

// https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)
// https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors/13542669#13542669
// https://stackoverflow.com/questions/21646738/convert-hex-to-rgba

// external imports
import {always, isNil, ifElse, join} from 'ramda';

// local imports
import type {ColorUtilitiesTypes} from './../../types/theming/color_utilities_types';

// exports
export const colorUtilities: ColorUtilitiesTypes = Object.seal({
    hexToRGBArray(hexValue: string): number[] {
        return [
            parseInt(hexValue.slice(1, 3), 16),
            parseInt(hexValue.slice(3, 5), 16),
            parseInt(hexValue.slice(5, 7), 16)
        ];
    },

    toRGBAStyleString(red: number, green: number, blue: number, alpha?: number): string {
        return ifElse(
            isNil,
            always(`rgba(${join(',', [red, green, blue])})`),
            always(`rgba(${join(',', [red, green, blue, alpha])})`),
        )(alpha);
    },

    shadeColorFast(hexColorString: string, shadingPercent: number): string {
        const hexColor: number = parseInt(hexColorString.slice(1),16);

        const rangeCap: number = shadingPercent < 0 ? 0 : 255;
        const padding: number = shadingPercent < 0 ? shadingPercent * -1 : shadingPercent;

        const red: number = hexColor >> 16;
        const green: number = hexColor >> 8 & 0x00FF;
        const blue: number = hexColor & 0x0000FF;

        const shadedRed: number = (Math.round((rangeCap - red) * padding) + red) * 0x10000;
        const shadedGreen: number = (Math.round((rangeCap - green) * padding) + green) * 0x100;
        const shadedBlue: number = Math.round((rangeCap - blue) * padding) + blue;

        const shadedColorHex: number = 0x1000000 + shadedRed + shadedGreen + shadedBlue;

        return `#${shadedColorHex.toString(16).slice(1)}`;
    },
});
