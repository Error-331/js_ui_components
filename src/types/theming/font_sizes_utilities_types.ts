'use strict';

// external imports

// local imports

// type declaration
type ParseFontSizePXType = (fontSizePX: string) => number | null;

type FontSizesUtilitiesType = {
    parseFontSizePX: ParseFontSizePXType,
};

// exports
export {
    ParseFontSizePXType,
    FontSizesUtilitiesType,
}
