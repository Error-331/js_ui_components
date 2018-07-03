'use strict';

// @flow

// external imports

// local imports
import type {FontFacesType, FontFacesListType} from './../../../../types/theming/font_face_types';

// exports
export default (fontFaces: FontFacesType): FontFacesListType => {
    return [
        fontFaces.RobotoRegular,
        fontFaces.RobotoBold,
    ];
};
