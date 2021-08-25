'use strict';

// external imports

// type declaration
type DatasetPropertyType = {
    [key: string]: string
};

type ClosestFunctionType = (path: string) => HTMLElement;

interface ExtendedEventTargetType extends EventTarget {
    closest: ClosestFunctionType,
    tagName: string,
    dataset: DatasetPropertyType
}

interface ExtendedEventType {
    target: ExtendedEventTargetType
}

type CombinedEventType = ExtendedEventType & Event;

// exports
export {
    DatasetPropertyType,
    ClosestFunctionType,
    ExtendedEventTargetType,
    ExtendedEventType,
    CombinedEventType,
}
