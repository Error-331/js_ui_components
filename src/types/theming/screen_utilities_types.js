'use strict';

// @flow

// external imports

// local imports
import type {ObjectStringKeyToAny} from './../common_data_types';

// exports

export type DetermineDeviceByScreenWidthType = (screenWidth: number) => string;
export type PrepareMediaQueriesForStyleType = (jssSelector: string, jssPropertyName: string, screenWidths: Array<number>, lockValues: Array<number>) => ObjectStringKeyToAny

export type FontFamilyUtilitiesType = {
    determineDeviceByScreenWidth: DetermineDeviceByScreenWidthType,
    prepareMediaQueriesForStyle: PrepareMediaQueriesForStyleType,
};