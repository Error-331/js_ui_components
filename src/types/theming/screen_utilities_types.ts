'use strict';

// external imports

// local imports
import type { ObjectStringKeyToAny } from '../common_data_types';

// type declaration
type DetermineDeviceByScreenWidthType = (screenWidth: number) => string;
type PrepareMediaQueriesForStyleType = (jssSelector: string, jssPropertyName: string, screenWidths: Array<number>, lockValues: Array<number>) => ObjectStringKeyToAny

type FontFamilyUtilitiesType = {
    determineDeviceByScreenWidth: DetermineDeviceByScreenWidthType,
    prepareMediaQueriesForStyle: PrepareMediaQueriesForStyleType,
};

// exports
export {
    DetermineDeviceByScreenWidthType,
    PrepareMediaQueriesForStyleType,
    FontFamilyUtilitiesType,
}
