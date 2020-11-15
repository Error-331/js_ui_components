'use strict';

// @flow

// external imports

// local imports

// exports
export type ObjectStringKeyToAny = {
    [string]: any
}

export type ObjectStringKeyToStringArray = {
    [string]: Array<string>
}

export type ElementPositionDataType = {
    isFirst: boolean,
    isLast?: boolean,
    rowNum: number
};

export type ElementsPositionDataType = Array<ElementPositionDataType>; // ElementsPositionDataType

export type SectionRowPositionFullDataType = {
    totalWidth: number,
    currentRow: number,
    elementsRowPositionData: ElementsPositionDataType,
};

export type SectionsRowPositionDataType = Array<ElementsPositionDataType>;