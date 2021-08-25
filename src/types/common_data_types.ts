'use strict';

// external imports

// local imports

// type declaration
type ObjectStringKeyToAny = {
    [key: string]: any
}

type ObjectStringKeyToStringArray = {
    [key: string]: Array<string>
}

type ElementPositionDataType = {
    isFirst: boolean,
    isLast?: boolean,
    rowNum: number
};

type ElementsPositionDataType = Array<ElementPositionDataType>; // ElementsPositionDataType

type SectionRowPositionFullDataType = {
    totalWidth: number,
    currentRow: number,
    elementsRowPositionData: ElementsPositionDataType,
};

type SectionsRowPositionDataType = Array<ElementsPositionDataType>;

// exports
export {
    ObjectStringKeyToAny,
    ObjectStringKeyToStringArray,

    ElementPositionDataType,
    ElementsPositionDataType,

    SectionRowPositionFullDataType,
    SectionsRowPositionDataType,
}
