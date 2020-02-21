'use strict';

// @flow

// external imports
import type {Node} from 'react';

import React, {useRef, useContext} from 'react';
import {createUseStyles, useTheme} from 'react-jss';

import {defaultTo, addIndex, map} from 'ramda';
import classNames from 'classnames';

// local imports
import type {ThemeType} from './../../types/theme_types';
import type {RenderFunctionNoArgsType} from './../../types/common_types';
import type {
    ElementPositionDataType,
    ElementsPositionDataType,
    SectionsRowPositionDataType,
} from './../../types/common_data_types';
import type {StateTypes as ThemContextType} from './../../theming/providers';

import {MainThemeContext} from './../../theming/providers';
import {useHorizontalSectionsAlignment} from './../../hooks/layout/sections_alignment_hooks';

import FontIcon from './../layout/icons/font_icon';


// type definitions
export type ControlIconDataType = {
    active?: boolean,
    title?: string,

    iconClassName?: string,

    mouseClickHandler?: (event: SyntheticMouseEvent<HTMLDivElement>) => void,
    mouseDownHandler?: (event: SyntheticMouseEvent<HTMLDivElement>) => void,
};

export type ControlGroupDataType = Array<ControlIconDataType>;
export type ControlSectionDataType = Array<ControlGroupDataType>;

type CSSStylesType = {
    [string]: mixed
};

export type FormTextInputTypes = {
    /**
     * Data used to create representation of toolbar icons
     */

    data?: ControlSectionDataType,

    /**
     * Name of the class which will be applied to component outer container along with default one
     */

    className?: string,

    /**
     * React style object for in deep control of how header is represented
     */

    style?: CSSStylesType,
};

type PropsTypes = FormTextInputTypes & {
    /**
     * JSS theme object
     *
     * @ignore
     */

    theme: ThemeType,

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
        position: 'relative',

        flexDirection: 'column',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',

        '& > $controlSection': {
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

            '& > $controlsGroup': {
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

                marginLeft: `${theme.layoutStyles.formHorizontalSpacing}px`,

                '& > $control': {
                    boxSizing: 'border-box',

                    flexBasis: 'auto',
                    flexShrink: 1,
                    flexGrow: 0,

                    marginLeft: `${theme.layoutStyles.sectionHorizontalSpacing}px`,

                    color: theme.inputStyles.inactiveColor,

                    '&.active': {
                        color: theme.inputStyles.activeColor,
                    },

                    '&:hover': {
                        color: theme.inputStyles.hoverColor
                    },

                    '&:first-child': {
                        marginLeft: `0px`,
                    },
                },

                '&.firstGroupInSection': {
                    marginLeft: '0px',
                },

                '&.lastGroupInSection': {
                    marginRight: `${theme.layoutStyles.formHorizontalSpacing}px`,
                },

                '&.noneFirstGroupInRow': {
                    paddingTop: `${theme.layoutStyles.sectionVerticalSpacing}px`,
                }
            },
        },
    },

    controlSection: {},
    controlsGroup: {},
    control: {},
}));

/**
 * Horizontal icon toolbar component styled according to material-UI guidelines.
 * Component is intendent to be used as a toolbar for other components such as.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function HorizontalIconToolbarComponent(props: PropsTypes) {
    // region private variables declaration
    const data: ControlSectionDataType = defaultTo([], props.data);

    // endregion

    // region style hooks declaration
    const theme: ThemeType = useTheme();
    const classes: {[string]: string} = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    const themeContext: ThemContextType = useContext(MainThemeContext);

    // endregion

    // region state hooks declaration
    // endregion

    // region effect hooks declaration
    // endregion

    // region state variables declaration
    // endregion

    // region ref hooks declaration
    const $toolbarRef: any = useRef(null);

    // endregion

    // region callback hooks declaration
    // endregion

    // region custom hooks declaration
    const sectionsRowPositionData: SectionsRowPositionDataType =
        useHorizontalSectionsAlignment($toolbarRef, theme.layoutStyles.formHorizontalSpacing);

    // endregion

    // region business logic
    // endregion

    // region event handler helpers
    // endregion

    // region render helpers
    const renderControls = (controlGroupData: ControlGroupDataType) => {
        return addIndex(map)((controlIconData: ControlIconDataType, index: number) => {
            let {active, iconClassName, mouseClickHandler, mouseDownHandler} = controlIconData;
            const {control} = classes;

            active = defaultTo(false, active);
            mouseClickHandler = defaultTo(() => {}, mouseClickHandler);
            mouseDownHandler = defaultTo(() => {}, mouseDownHandler);

            const className = classNames(control, {active});

            return <FontIcon
                size='small'

                className={className}
                iconClassName={iconClassName}

                onMouseClick={mouseClickHandler}
                onMouseDown={mouseDownHandler}

                key={`control_${index}`}
            />;
        }, controlGroupData);
    };

    const renderControlGroups = (controlSectionData: ControlSectionDataType, groupsRowPositionDataData: ElementPositionDataType) => {
        return addIndex(map)((controlGroupData: ControlGroupDataType, index: number) => {
            const groupRowPositionData: ElementPositionDataType = defaultTo({}, groupsRowPositionDataData[index]);

            const ifFirstOnRow: boolean = defaultTo(false, groupRowPositionData.isFirst);
            const isLastOnRow: boolean = defaultTo(false, groupRowPositionData.isLast);
            const rowNum: number = defaultTo(false, groupRowPositionData.rowNum);

            const {controlsGroup} = classes;

            const className: string = classNames(controlsGroup, {
                firstGroupInSection: ifFirstOnRow,
                lastGroupInSection: isLastOnRow,
                noneFirstGroupInRow: rowNum > 0
            });

            return <div
                className={className}
                key={`group_${index}`}
            >
                {renderControls(controlGroupData)}
            </div>;
        }, controlSectionData);
    };

    const renderControlSections: RenderFunctionNoArgsType = () => {
        return addIndex(map)((controlSectionData: ControlSectionDataType, index: number) => {
            const groupsRowPositionData: ElementsPositionDataType = defaultTo([], sectionsRowPositionData[index]);
            const {controlSection} = classes;

            return <div
                className={controlSection}
                key={`section_${index}`}
            >
                {renderControlGroups(controlSectionData, groupsRowPositionData)}
            </div>;
        }, data);
    };

    const renderComponentContainer: RenderFunctionNoArgsType = (): Node => {
        const {componentContainer} = classes;

        return <div ref={$toolbarRef} className={componentContainer}>
            {renderControlSections()}
        </div>
    };

    // endregion

    // init
    return renderComponentContainer();
}

// exports
export default HorizontalIconToolbarComponent;
