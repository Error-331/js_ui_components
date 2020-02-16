import React, {useState, useEffect, useContext} from 'react';
import {addIndex, forEach, isNil, map} from "ramda";
import type {GroupsFormatDataType} from "../../components/navigation/horizontal_icon_toolbar_component";

import {MainThemeContext} from './../../theming/providers';
import type {StateTypes as ThemContextType} from "./../../theming/providers";



function useHorizontalSectionsAlignment($containerRef) {
    const [sectionsAlignmentData, setSectionsAlignmentData] = useState([]);
    const themeContext: ThemContextType = useContext(MainThemeContext);

    useEffect(() => {
        if (isNil($containerRef) || isNil($containerRef.current)) {
            return;
        }

        const $controlSections: Array<HTMLDivElement> = $containerRef.current.children;

        const sectionsFormatData: Array<GroupsFormatDataType> = map(($controlSection: HTMLDivElement) => {
            const controlSectionClientRect: ClientRect = $controlSection.getBoundingClientRect();
            const $controlGroups: Array<HTMLDivElement> = $controlSection.children;

            const sectionWidth: number = controlSectionClientRect.width;
            let totalWidth: number = 0;
            let currentRow: number = 0;

            const groupFormatData: GroupsFormatDataType = [];

            addIndex(forEach)(($controlGroup: HTMLDivElement, controlGroupIndex: number) => {
                const controlGroupClientRect: ClientRect = $controlGroup.getBoundingClientRect();
                const groupWidth: number = controlGroupClientRect.width;

                if (controlGroupIndex === 0) {
                    totalWidth += groupWidth;

                    groupFormatData.push({isFirst: true, rowNum: currentRow});
                } else {
                    const groupWithWithPadding: number = groupWidth + theme.layoutStyles.formHorizontalSpacing;

                    const totalWidthWithPaddedGroup: number = groupWithWithPadding + totalWidth;
                    const totalWidthWithGroup: number = groupWidth + totalWidth;

                    if (totalWidthWithPaddedGroup <= sectionWidth) {
                        totalWidth += groupWithWithPadding;

                        groupFormatData.push({isFirst: false, rowNum: currentRow});
                    } else {
                        if (totalWidthWithGroup <= sectionWidth) {
                            groupFormatData[groupFormatData.length - 1].isLast = true;
                        }

                        totalWidth = groupWidth;
                        currentRow = currentRow + 1;

                        groupFormatData.push({isFirst: true, rowNum: currentRow});
                    }
                }
            }, $controlGroups);

            return groupFormatData;
        }, $controlSections);

        setSectionsFormatData(sectionsFormatData);
    }, [themeContext.windowDimensions.innerWidth]);





    return sectionsAlignmentData;
}
