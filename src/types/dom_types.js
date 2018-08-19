'use strict';

// @flow

// external imports

// types definitions
export type DatasetPropertyType = {
    [string]: string
};

export type ClosestFunctionType = (path: string) => HTMLElement;

export interface ExtendedEventTargetType extends EventTarget {
    closest: ClosestFunctionType,
    tagName: string,
    dataset: DatasetPropertyType
}

export interface ExtendedEventType {
    target: ExtendedEventTargetType
}

export type CombinedEventType = ExtendedEventType & Event;