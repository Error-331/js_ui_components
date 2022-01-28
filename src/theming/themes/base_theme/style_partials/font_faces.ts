'use strict';

// external imports

// local imports
import { FontFacesType, FontFacesListType, FontFacesFuncType } from './../../../../types/theming/font_face_types';

// implementation
const fontFacesFunc: FontFacesFuncType = (fontFaces: FontFacesType): FontFacesListType => {
    return [
        fontFaces.RobotoThin,
        fontFaces.RobotoLight,
        fontFaces.RobotoRegular,
        fontFaces.RobotoBold,
    ];
};

// exports
export default fontFacesFunc;
