'use strict';

// external imports

// local imports

// type declaration
type MaterialDepthLevelsType = {
    materialDepth1BoxShadow: string,
    materialDepth2BoxShadow: string,
    materialDepth3BoxShadow: string,
    materialDepth4BoxShadow: string,
    materialDepth5BoxShadow: string,
}

type MaterialDepthLevelsFuncType = () => MaterialDepthLevelsType;

// exports
export { MaterialDepthLevelsType, MaterialDepthLevelsFuncType }
