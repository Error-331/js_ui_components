'use strict';

// @flow

// external imports

// local imports
import type {FontFacesType, FontFacesListType, FontFacesFuncType} from './../../../../types/theming/font_face_types';

// exports
export const fontFacesFunc: FontFacesFuncType = (fontFaces: FontFacesType): FontFacesListType => {
    return [
        fontFaces.RobotoThin,
        fontFaces.RobotoLight,
        fontFaces.RobotoRegular,
        fontFaces.RobotoBold,
    ];
};

