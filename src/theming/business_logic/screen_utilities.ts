'use strict';

// external imports
import {
    always,
    identity,
    isNil,
    cond,
    and,
    lt,
    lte,
    gt,
    gte,
    length,
    head,
    last,
    sort,
    ascend,
    reduceWhile,
    addIndex,
} from 'ramda';

// local imports
import { ObjectStringKeyToAny } from './../../types/common_data_types';
import { FontFamilyUtilitiesType } from './../../types/theming/screen_utilities_types';

import {
    DEVICE_MOBILE,
    DEVICE_TABLET,
    DEVICE_DESKTOP,

    MOBILE_WIDTH_LIST,
    TABLET_WIDTH_LIST,
    DESKTOP_WIDTH_LIST,
} from '../constants/screen_resolution_constants';

// implementation
const screenUtilities: FontFamilyUtilitiesType = Object.seal({
    determineDeviceByScreenWidth(screenWidth: number): string {
        return cond([
            [(screenWidth: number) => lte(screenWidth, head(MOBILE_WIDTH_LIST)), always(DEVICE_MOBILE)],

            [
                (
                    screenWidth: number
                ) => and(
                    gte(screenWidth, head(MOBILE_WIDTH_LIST)),
                    lte(screenWidth, last(MOBILE_WIDTH_LIST))
                ),
                always(DEVICE_MOBILE)
            ],

            [
                (
                    screenWidth: number
                ) => and(
                    gt(screenWidth, last(MOBILE_WIDTH_LIST)),
                    lt(screenWidth, head(TABLET_WIDTH_LIST))
                ),
                always(DEVICE_TABLET)
            ],
            
            [
                (
                    screenWidth: number
                ) => and(
                    gte(screenWidth, head(TABLET_WIDTH_LIST)),
                    lte(screenWidth, last(TABLET_WIDTH_LIST))
                ),
                always(DEVICE_TABLET)
            ],

            [
                (
                    screenWidth: number) => and(
                    gt(screenWidth, last(TABLET_WIDTH_LIST)),
                    lt(screenWidth, head(DESKTOP_WIDTH_LIST))
                ),
                always(DEVICE_DESKTOP)
            ],

            [(screenWidth: number) => gte(screenWidth, head(DESKTOP_WIDTH_LIST)), always(DEVICE_DESKTOP)],
        ])(screenWidth);
    },

    // https://fvsch.com/em-alternatives
    // y = kx + b
    prepareMediaQueriesForStyle(jssSelector: string, jssPropertyName: string, screenWidths: Array<number>, lockValues: Array<number>): ObjectStringKeyToAny {
        screenWidths = sort(ascend(identity), screenWidths);
        const screenWidthsLength: number = length(screenWidths);
        let index: number = 0;

        // TODO: check
        return addIndex(reduceWhile)(
            (mediaQueriesObject: ObjectStringKeyToAny, width1: number, index: number): boolean => index + 1 < screenWidthsLength,
            (mediaQueriesObject: ObjectStringKeyToAny, width1): ObjectStringKeyToAny => {
                const width2: number = screenWidths[index + 1];
                const lockValue1: number = isNil(lockValues[index]) ? last(lockValues) : lockValues[index];

                if (isNil(lockValue1)) {
                    index += 1;
                    return mediaQueriesObject;
                }

                let lockValue2: number = isNil(lockValues[index + 1]) ? last(lockValues) : lockValues[index + 1];
                lockValue2 = isNil(lockValue2) ? lockValue1 : lockValue2;

                // x2 - x1
                const widthDiff: number = width2 - width1;

                // m
                let kFactor: number = 0;

                if (widthDiff !== 0) {
                    // k = (y2 - y1) / (x2 - x1)
                    kFactor = (lockValue2 - lockValue1) / widthDiff;
                }

                // b = y - kx
                const bFactor: number = lockValue1 - (kFactor * width1);

                // add media query for 'left' boundary
                if (index === 0) {
                    mediaQueriesObject[jssSelector] = {
                        [jssPropertyName]: `${lockValue1}px`
                    }
                }

                // add media query for current lock
                mediaQueriesObject[`@media (min-width: ${width1}px)`] = {
                    [jssSelector]: {
                        [jssPropertyName]: `calc( ${kFactor * 100}vw + ${bFactor}px )`
                    }
                };

                // add media query for 'right' boundary
                if (index + 1 === screenWidthsLength - 1) {
                    mediaQueriesObject[`@media (min-width: ${width2}px)`] = {
                        [jssSelector]: {
                            [jssPropertyName]: `${lockValue2}px`
                        }
                    }
                }

                index += 1;
                return mediaQueriesObject;
            },
            {},
            screenWidths
        );
    }
});

// exports
export default screenUtilities;
export { screenUtilities };
