'use strict';

// @flow

// external imports
import React, {useState, useEffect, useContext} from 'react';
import {useTheme} from 'react-jss';

import {isNil, defaultTo, addIndex, map, reduce} from 'ramda';

// local imports
import type {StateTypes as ThemContextType} from './../../theming/providers';
import type {
    SectionRowPositionFullDataType,
    SectionsRowPositionDataType,
} from './../../types/common_data_types';

import {MainThemeContext} from './../../theming/providers';

// type definitions

// helper functions implementation
const prepareElementsAlignmentData: ($elements: Array<HTMLDivElement>, sectionWidth: number, spacingBetweenElms: number) => SectionRowPositionFullDataType=
    ($elements: Array<HTMLDivElement>, sectionWidth: number, spacingBetweenElms: number): SectionRowPositionFullDataType => {
    return addIndex(reduce)(
        (data, $element: HTMLDivElement, elementIndex: number) => {
            const elementClientRect: ClientRect = $element.getBoundingClientRect();
            const elementWidth: number = elementClientRect.width;

            if (elementIndex === 0) {
                data.totalWidth += elementWidth;
                data.elementsRowPositionData.push({isFirst: true, rowNum: data.currentRow});

                return data;
            } else {
                const elementMarginLeft: number = defaultTo(0, spacingBetweenElms);
                const elementWithWithPadding: number = elementWidth + elementMarginLeft;

                const totalWidthWithPaddedElement: number = elementWithWithPadding + data.totalWidth;
                const totalWidthWithElement: number = elementWidth + data.totalWidth;

                if (totalWidthWithPaddedElement <= sectionWidth) {
                    data.totalWidth += elementWithWithPadding;
                    data.elementsRowPositionData.push({isFirst: false, rowNum: data.currentRow});

                    return data;
                } else {
                    if (totalWidthWithElement <= sectionWidth) {
                        data.elementsRowPositionData[data.elementsRowPositionData.length - 1].isLast = true;
                    }

                    data.totalWidth = elementWidth;
                    data.currentRow = data.currentRow + 1;

                    data.elementsRowPositionData.push({isFirst: true, rowNum: data.currentRow});

                    return data;
                }
            }

        },

        {totalWidth: 0, currentRow: 0, elementsRowPositionData: []},
        $elements,
    );
};

// hooks implementation
// TODO: add memoization
function useHorizontalSectionsAlignment($containerRef: any, spacingBetweenElms: number): SectionsRowPositionDataType {
    const [sectionsAlignmentData, setSectionsAlignmentData] = useState([]);
    const themeContext: ThemContextType = useContext(MainThemeContext);

    useEffect(() => {
        if (isNil($containerRef) || isNil($containerRef.current)) {
            return;
        }

        const $sections: Array<HTMLDivElement> = $containerRef.current.children;

        const sectionsFormatData: SectionsRowPositionDataType = map(($section: HTMLDivElement) => {
            const controlSectionClientRect: ClientRect = $section.getBoundingClientRect();
            const $elementsElements: Array<HTMLDivElement> = $section.children;

            const sectionRowPositionData: SectionRowPositionFullDataType =
                prepareElementsAlignmentData($elementsElements, controlSectionClientRect.width, spacingBetweenElms);
            return sectionRowPositionData.elementsRowPositionData;
        }, $sections);

        setSectionsAlignmentData(sectionsFormatData);
    }, [themeContext.windowDimensions.innerWidth]);

    return sectionsAlignmentData;
}

// TODO: add memoization
 function useHorizontalElementsAlignment($containerRef: any, spacingBetweenElms: number) {
    const [elementsAlignmentData, setElementsAlignmentData] = useState([]);
    const themeContext: ThemContextType = useContext(MainThemeContext);

    useEffect(() => {
        if (isNil($containerRef) || isNil($containerRef.current)) {
            return;
        }

        const $elements: Array<HTMLDivElement> = $containerRef.current.children;
        const containerClientRect: ClientRect = $containerRef.current.getBoundingClientRect();

        const sectionRowPositionData: SectionRowPositionFullDataType =
            prepareElementsAlignmentData($elements, containerClientRect.width, spacingBetweenElms);

        setElementsAlignmentData(sectionRowPositionData.elementsRowPositionData);
    }, [themeContext.windowDimensions.innerWidth]);

    return elementsAlignmentData;
}

// exports
export {useHorizontalSectionsAlignment, useHorizontalElementsAlignment};
