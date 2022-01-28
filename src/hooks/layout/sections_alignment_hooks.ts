'use strict';

// external imports
import { MutableRefObject, useState, useEffect, useContext } from 'react';
import { isNil, defaultTo, map, concat } from 'ramda';

// local imports
import { StateTypes as ThemContextType } from './../../theming/providers/main_theme_provider';
import {
    SectionRowPositionFullDataType,
    SectionsRowPositionDataType,
} from './../../types/common_data_types';

import { MainThemeContext } from './../../theming/providers/main_theme_provider';
import { prepareElementsAlignmentData } from './../../helpers/dom/elements_alignment';

// type definitions

// hooks implementation
// TODO: add memoization
function useHorizontalSectionsAlignment($containerRef: MutableRefObject<HTMLElement>, spacingBetweenElms: number, dataToWatch: Array<any>): SectionsRowPositionDataType {
    const [sectionsAlignmentData, setSectionsAlignmentData] = useState([]);
    const themeContext: ThemContextType = useContext(MainThemeContext);

    dataToWatch = defaultTo([], dataToWatch);

    useEffect(() => {
        if (isNil($containerRef) || isNil($containerRef.current)) {
            return;
        }

        const $sections: HTMLCollection = $containerRef.current.children;

        const sectionsFormatData: SectionsRowPositionDataType = map(($section: HTMLElement) => {
            const controlSectionClientRect: ClientRect = $section.getBoundingClientRect();
            const $elementsElements: HTMLCollection = $section.children;

            const sectionRowPositionData: SectionRowPositionFullDataType =
                prepareElementsAlignmentData($elementsElements, controlSectionClientRect.width, spacingBetweenElms);
            return sectionRowPositionData.elementsRowPositionData;
        }, $sections);

        setSectionsAlignmentData(sectionsFormatData);
    }, concat([themeContext.windowDimensions.innerWidth], dataToWatch));

    return sectionsAlignmentData;
}

// TODO: add memoization
function useHorizontalElementsAlignment($containerRef: MutableRefObject<HTMLElement>, spacingBetweenElms: number, dataToWatch: Array<any>) {
    const [elementsAlignmentData, setElementsAlignmentData] = useState([]);
    const themeContext: ThemContextType = useContext(MainThemeContext);

    dataToWatch = defaultTo([], dataToWatch);

    useEffect(() => {
        if (isNil($containerRef) || isNil($containerRef.current)) {
            return;
        }

        const $elements: HTMLCollection = $containerRef.current.children;
        const containerClientRect: ClientRect = $containerRef.current.getBoundingClientRect();

        const sectionRowPositionData: SectionRowPositionFullDataType =
            prepareElementsAlignmentData($elements, containerClientRect.width, spacingBetweenElms);

        setElementsAlignmentData(sectionRowPositionData.elementsRowPositionData);
    }, concat([themeContext.windowDimensions.innerWidth], dataToWatch));

    return elementsAlignmentData;
}

// exports
export { useHorizontalSectionsAlignment, useHorizontalElementsAlignment };
