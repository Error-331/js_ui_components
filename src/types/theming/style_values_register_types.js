'use strict';

// @flow

// external imports

// local imports

// exports
export type ZIndexType = number;
export type ReleaseZIndexType = (oldZIndex?: ZIndexType) => void

export type StyleValuesRegisterType = {
    lastUsedZIndexes: Array<ZIndexType>,
    zIndex: ZIndexType,
    releaseZIndex: ReleaseZIndexType
}