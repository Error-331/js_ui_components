'use strict';

// external imports

// type definitions

// helper functions implementation
const getComputedStylePixelVal: ($element: HTMLElement, propertyName: string) => number | null =
    ($element: HTMLElement, propertyName: string): number | null => {
    const computedValue: string = window.getComputedStyle($element).getPropertyValue(propertyName);
    const pxPostfixPos: number = computedValue.indexOf('px');

    if (pxPostfixPos === -1) {
        return null;
    } else {
        return parseInt(computedValue.substr(0, pxPostfixPos));
    }
};

// exports
export { getComputedStylePixelVal };
