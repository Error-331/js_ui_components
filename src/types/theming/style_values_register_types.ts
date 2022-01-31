'use strict';

// external imports

// local imports

// type declaration
type ZIndexType = number;
type ReleaseZIndexType = (oldZIndex?: ZIndexType) => void

type StyleValuesRegisterType = {
    lastUsedZIndexes: Array<ZIndexType>,

    isTop: (oldZIndex?: ZIndexType) => boolean,
    releaseZIndex: ReleaseZIndexType,

    zIndex: ZIndexType,
}

// exports
export {
    ZIndexType,
    ReleaseZIndexType,

    StyleValuesRegisterType,
}
