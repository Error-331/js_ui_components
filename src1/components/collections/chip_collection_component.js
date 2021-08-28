'use strict';

// @flow

// external imports
import type {ElementType, Node} from 'react';

import React, {useRef} from 'react'
import {createUseStyles, useTheme} from 'react-jss';

import {defaultTo, addIndex, map} from 'ramda';
import classNames from 'classnames';

// local imports
import type {ThemeType} from '../../../src/types/theme_types';
import type {RenderFunctionNoArgsType} from '../../../src/types/common_types';
import type {
    ElementPositionDataType,
    SectionsRowPositionDataType,
} from '../../../src/types/common_data_types';
import type {BaseComponentProps as ChipComponentProps} from '../buttons/chip_component';

import {useHorizontalElementsAlignment} from '../../../src/hooks/layout/sections_alignment_hooks';

import ChipComponent from '../buttons/chip_component';

// type definitions
export type ChipCollectionDataType = Array<ChipComponentProps>;

type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * Custom made representation of chip component used inside current component
     */

    customChipComponent?: ElementType | React.Node,

    /**
     * Data used to create representation of 'chip' components
     */

    data?: ChipCollectionDataType,

    /**
     * Name of the class which will be applied to component outer container along with default one
     */

    className?: string,

    /**
     * React style object for in deep control of how header is represented
     */

    style?: CSSStylesType,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

type StateTypes = {};

// styles definition
const useStyles = createUseStyles(theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'flex',

        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 0,

        flexDirection: 'row',
        flexWrap: 'wrap',

        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'flex-start',

        '& > $chipContainer': {
            boxSizing: 'border-box',

            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 0,

            marginLeft: `${theme.layoutStyles.rightSpacing}px`,

            color: theme.inputStyles.inactiveColor,

            '&:first-child': {
                marginLeft: `0px`,
            },

            '&.firstChipInRow': {
                marginLeft: '0px',
            },

            '&.lastChipInRow': {
                marginRight: `${theme.layoutStyles.rightSpacing}px`,
            },

            '&.noneFirstChipInRow': {
                paddingTop: `${theme.layoutStyles.topSpacing}px`,
            }
        },
    },

    chipContainer: {},
}));

/**
 * Chip collection component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function ChipCollectionComponent(props: PropsTypes) {
    // region private variables declaration
    const data: ControlSectionDataType = defaultTo([], props.data);

    // endregion

    // region style hooks declaration
    const theme: ThemeType = useTheme();
    const classes: {[string]: string} = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    // endregion

    // region state hooks declaration
    // endregion

    // region effect hooks declaration
    // endregion

    // region state variables declaration
    // endregion

    // region ref hooks declaration
    const $mainContainerRef: any = useRef(null);

    // endregion

    // region callback hooks declaration
    // endregion

    // region custom hooks declaration
    const elementsRowPositionData: SectionsRowPositionDataType =
        useHorizontalElementsAlignment($mainContainerRef, theme.layoutStyles.rightSpacing, [data]);

    // endregion

    // region business logic
    // endregion

    // region event handler helpers
    // endregion

    // region render helpers
    const renderChips: RenderFunctionNoArgsType = () => {
        return addIndex(map)((chipData: ChipComponentProps, index: number) => {
            const elementRowPositionData: ElementPositionDataType = defaultTo({}, elementsRowPositionData[index]);

            const ifFirstOnRow: boolean = defaultTo(false, elementRowPositionData.isFirst);
            const isLastOnRow: boolean = defaultTo(false, elementRowPositionData.isLast);
            const rowNum: number = defaultTo(false, elementRowPositionData.rowNum);

            const {chipContainer} = classes;

            const containerClassName1: string = classNames(chipContainer, {
                firstChipInRow: ifFirstOnRow,
                lastChipInRow: isLastOnRow,
                noneFirstChipInRow: rowNum > 0
            });

            chipData = defaultTo({}, chipData);
            const {containerClassName, className} = chipData;
            const componentClassName = classNames(containerClassName, className);

            return <div
                className={containerClassName1}
                key={`chip_${index}`}
            >
                <ChipComponent
                    {...chipData}
                    customComponent={props.customChipComponent}
                    className={componentClassName}
                />
            </div>;

        }, data);
    };

    const renderComponentContainer: RenderFunctionNoArgsType = (): Node => {
        const {componentContainer} = classes;

        return <div ref={$mainContainerRef} className={componentContainer}>
            {renderChips()}
        </div>
    };

    // endregion

    // init
    return renderComponentContainer();
}

// exports
export default ChipCollectionComponent;
