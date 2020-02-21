'use strict';

// @flow

// external imports
import React, {useState, useEffect, useContext} from 'react';
import {useTheme} from 'react-jss';

import {isNil, defaultTo, map, concat} from 'ramda';

// local imports
import type {StateTypes as ThemContextType} from './../../theming/providers';
import type {
    SectionRowPositionFullDataType,
    SectionsRowPositionDataType,
} from './../../types/common_data_types';

import {MainThemeContext} from './../../theming/providers';
import {prepareElementsAlignmentData} from './../../helpers/dom/elements_alignment';

// type definitions

// hooks implementation
// TODO: add memoization
function useHorizontalSectionsAlignment($containerRef: any, spacingBetweenElms: number, dataToWatch: Array<any>): SectionsRowPositionDataType {
    const [sectionsAlignmentData, setSectionsAlignmentData] = useState([]);
    const themeContext: ThemContextType = useContext(MainThemeContext);

    dataToWatch = defaultTo([], dataToWatch);

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
    }, concat([themeContext.windowDimensions.innerWidth], dataToWatch));

    return sectionsAlignmentData;
}

// TODO: add memoization
 function useHorizontalElementsAlignment($containerRef: any, spacingBetweenElms: number, dataToWatch: Array<any>) {
    const [elementsAlignmentData, setElementsAlignmentData] = useState([]);
    const themeContext: ThemContextType = useContext(MainThemeContext);

    dataToWatch = defaultTo([], dataToWatch);

    useEffect(() => {
        if (isNil($containerRef) || isNil($containerRef.current)) {
            return;
        }

        const $elements: Array<HTMLDivElement> = $containerRef.current.children;
        const containerClientRect: ClientRect = $containerRef.current.getBoundingClientRect();

        const sectionRowPositionData: SectionRowPositionFullDataType =
            prepareElementsAlignmentData($elements, containerClientRect.width, spacingBetweenElms);

        setElementsAlignmentData(sectionRowPositionData.elementsRowPositionData);
    }, concat([themeContext.windowDimensions.innerWidth], dataToWatch));

    return elementsAlignmentData;
}

// exports
export {useHorizontalSectionsAlignment, useHorizontalElementsAlignment};
