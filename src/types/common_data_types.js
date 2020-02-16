'use strict';

// @flow

// external imports

// local imports

// exports
export type GroupRowPositionDataType = { // GroupFormatDataType
    isFirst: boolean,
    isLast?: boolean,
    rowNum: number
};

export type GroupsRowPositionDataType = Array<GroupRowPositionDataType>;

export type SectionRowPositionFullDataType = {
    totalWidth: number,
    currentRow: number,
    groupsRowPositionData: GroupsRowPositionDataType,
};

export type SectionsRowPositionDataType = Array<GroupsRowPositionDataType>;