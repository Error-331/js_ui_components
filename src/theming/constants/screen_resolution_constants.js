'use strict';

// @flow

// external imports
import {keys, map, sort, ascend, identity} from 'ramda';

// local imports
import type {ObjectStringKeyToStringArray} from './../../types/common_data_types';

// constants definition
const DEVICE_MOBILE: string = 'DEVICE_MOBILE';
const DEVICE_TABLET: string = 'DEVICE_TABLET';
const DEVICE_DESKTOP: string = 'DEVICE_DESKTOP';

const DESKTOP_DISPLAY_HD_MINUS_TYPE = 'DESKTOP_DISPLAY_HD_MINUS_TYPE';
const DESKTOP_DISPLAY_HD_TYPE = 'DESKTOP_DISPLAY_HD_TYPE';
const DESKTOP_DISPLAY_HD_PLUS_TYPE = 'DESKTOP_DISPLAY_HD_PLUS_TYPE';
const DESKTOP_DISPLAY_FULL_HD_TYPE = 'DESKTOP_DISPLAY_FULL_HD_TYPE';
const DESKTOP_DISPLAY_4K_TYPE = 'DESKTOP_DISPLAY_4K_TYPE';
const DESKTOP_DISPLAY_8K_TYPE = 'DESKTOP_DISPLAY_8K_TYPE';

// mobile
const MOBLILE_WIDTH_TO_HEIGHTS_DIMENSIONS: ObjectStringKeyToStringArray = Object.freeze({
    '360': Object.freeze(['640', '740', '760', '780']),
    '375': Object.freeze(['667', '812']),
    '412': Object.freeze(['846']),
    '414': Object.freeze(['736', '816', '896']),
});

// tablet
const TABLET_WIDTH_TO_HEIGHTS_DIMENSIONS: ObjectStringKeyToStringArray = Object.freeze({
    '600': Object.freeze(['1024']),
    '601': Object.freeze(['962']),
    '768': Object.freeze(['1024']),
    '800': Object.freeze(['1280']),
    '1024': Object.freeze(['1366']),
    '1280': Object.freeze(['800']),
});

// desktop
const DESKTOP_WIDTH_TO_HEIGHTS_DIMENSIONS: ObjectStringKeyToStringArray = Object.freeze({
    '1280': Object.freeze(['720', '800']), // < nthGA
    '1366': Object.freeze(['768']), // HD
    '1440': Object.freeze(['900']), // > HD+
    '1536': Object.freeze(['864']),
    '1600': Object.freeze(['900']),
    '1920': Object.freeze(['1080']), // FHD
});

const DESKTOP_DISPLAY_HD_MINUS_WIDTH = 1280;
const DESKTOP_DISPLAY_HD_WIDTH = 1366;
const DESKTOP_DISPLAY_HD_PLUS_WIDTH = 1600;
const DESKTOP_DISPLAY_FULL_HD_WIDTH = 1920;
const DESKTOP_DISPLAY_4K_WIDTH = 3840;
const DESKTOP_DISPLAY_8K_WIDTH = 7680;

const MOBILE_WIDTH_LIST: Array<number> = sort(ascend(identity), map(parseInt, keys(MOBLILE_WIDTH_TO_HEIGHTS_DIMENSIONS)));
const TABLET_WIDTH_LIST: Array<number> = sort(ascend(identity), map(parseInt, keys(TABLET_WIDTH_TO_HEIGHTS_DIMENSIONS)));
const DESKTOP_WIDTH_LIST: Array<number> = sort(ascend(identity), map(parseInt, keys(DESKTOP_WIDTH_TO_HEIGHTS_DIMENSIONS)));

// export
export {
    DEVICE_MOBILE,
    DEVICE_TABLET,
    DEVICE_DESKTOP,

    DESKTOP_DISPLAY_HD_MINUS_TYPE,
    DESKTOP_DISPLAY_HD_TYPE,
    DESKTOP_DISPLAY_HD_PLUS_TYPE,
    DESKTOP_DISPLAY_FULL_HD_TYPE,
    DESKTOP_DISPLAY_4K_TYPE,
    DESKTOP_DISPLAY_8K_TYPE,

    MOBLILE_WIDTH_TO_HEIGHTS_DIMENSIONS,
    TABLET_WIDTH_TO_HEIGHTS_DIMENSIONS,
    DESKTOP_WIDTH_TO_HEIGHTS_DIMENSIONS,

    DESKTOP_DISPLAY_HD_MINUS_WIDTH,
    DESKTOP_DISPLAY_HD_WIDTH,
    DESKTOP_DISPLAY_HD_PLUS_WIDTH,
    DESKTOP_DISPLAY_FULL_HD_WIDTH,
    DESKTOP_DISPLAY_4K_WIDTH,
    DESKTOP_DISPLAY_8K_WIDTH,

    MOBILE_WIDTH_LIST,
    TABLET_WIDTH_LIST,
    DESKTOP_WIDTH_LIST,
}
