'use strict';

// @flow

// external imports

// local imports

// exports
export type MaterialDepthLevelsType = {
    materialDepth1BoxShadow: string,
    materialDepth2BoxShadow: string,
    materialDepth3BoxShadow: string,
    materialDepth4BoxShadow: string,
    materialDepth5BoxShadow: string,
}

export type MaterialDepthLevelsFuncType = () => MaterialDepthLevelsType;