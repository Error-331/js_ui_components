'use strict';

// @flowReact

// external imports
import {defaultTo, addIndex, reduce} from 'ramda';

// local imports
import type {SectionRowPositionFullDataType,} from './../../types/common_data_types';

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

// exports
export {prepareElementsAlignmentData};
