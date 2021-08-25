'use strict';

// external imports

// local imports

// type declaration
type FontFaceType = {
    fontFamily: string,
    fontStyle?: string,
    fontWeight?: number,
    src: Array<string> | string,
};

type FontFacesType = {
    [key: string]: FontFaceType
};

type FontFacesListType = Array<FontFaceType>;
type FontFacesFuncType = (fontFaces: FontFacesType) => FontFacesListType;

// exports
export {
    FontFaceType,
    FontFacesType,
    FontFacesListType,
    FontFacesFuncType,
}
