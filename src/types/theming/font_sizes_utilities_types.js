'use strict';

// @flow

// external imports

// local imports

// exports
export type ParseFontSizePXType = (fontSizePX: string) => number | null;

export type FontSizesUtilitiesType = {
    parseFontSizePX: ParseFontSizePXType,
};