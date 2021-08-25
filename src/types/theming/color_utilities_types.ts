'use strict';

// external imports

// local imports

// type declaration
type HexToRGBArray = (hexValue: string) => number[];
type ToRGBAStyleString = (red: number, green: number, blue: number, alpha?: number) => string;
type ShadeColorFast = (hexColorString: string, shadingPercent: number) => string;

type ColorUtilitiesTypes = {
    hexToRGBArray: HexToRGBArray,
    toRGBAStyleString: ToRGBAStyleString,
    shadeColorFast: ShadeColorFast,
};

// exports
export {
    HexToRGBArray,
    ToRGBAStyleString,
    ShadeColorFast,

    ColorUtilitiesTypes,
}
