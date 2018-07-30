'use strict';

// @flow

// external imports

// local imports
import type {FontFacesType} from './../../types/theming/font_face_types';

// exports
const fontFaces: FontFacesType = Object.freeze({
    RobotoRegular: {
        fontFamily: 'Roboto-Regular',
        fontStyle: 'normal',
        fontWeight: 400,
        src: 'url(/assets/fonts/roboto/Roboto-Regular.ttf) format("truetype")',
    },

    RobotoBold: {
        fontFamily: 'Roboto-Bold',
        fontStyle: 'normal',
        fontWeight: 700,
        src: 'url(/assets/fonts/roboto/Roboto-Bold.ttf) format("truetype")',
    }
});

export default fontFaces;