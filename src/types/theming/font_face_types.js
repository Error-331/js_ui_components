'use strict';

// @flow

// external imports

// local imports

// exports
export type FontFaceType = {
    fontFamily: string,
    fontStyle?: string,
    fontWeight?: number,
    src: Array<string> | string,
};

export type FontFacesType = {
    [string]: FontFaceType
};

export type FontFacesListType = Array<FontFaceType>;
export type FontFacesFuncType = (fontFaces: FontFacesType) => FontFacesListType;