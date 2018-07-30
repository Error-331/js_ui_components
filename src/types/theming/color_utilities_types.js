'use strict';

// @flow

// external imports

// local imports

// exports
export type ShadeColorFast = (hexColorString: string, shadingPercent: number) => string;

export type ColorUtilitiesTypes = {
    shadeColorFast: ShadeColorFast
};