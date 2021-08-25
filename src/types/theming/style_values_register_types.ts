'use strict';

// external imports

// local imports

// type declaration
type ZIndexType = number;
type ReleaseZIndexType = (oldZIndex?: ZIndexType) => void

type StyleValuesRegisterType = {
    lastUsedZIndexes: Array<ZIndexType>,
    zIndex: ZIndexType,
    releaseZIndex: ReleaseZIndexType
}

// exports
export {
    ZIndexType,
    ReleaseZIndexType,

    StyleValuesRegisterType,
}
