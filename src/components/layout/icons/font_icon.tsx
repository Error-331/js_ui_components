'use strict';

// external imports
import React, { MouseEvent } from 'react';
import { Classes } from 'jss';
import { createUseStyles, useTheme } from 'react-jss';

import classNames from 'classnames';
import { defaultTo } from 'ramda';

// local imports
import { ThemeType } from './../../../types/theme_types';
import { RenderFunctionNoArgsType } from './../../../types/common_types';

import { MEDIUM_SIZE, CUSTOM_SIZE } from './../../../theming/constants/general_constants';

// type definitions
type FontIconSizeType = 'tiny' | 'small' | 'medium' | 'large' | 'extraLarge' | 'custom';
type ClickCallbackType = (event: MouseEvent<HTMLElement>) => void;

type PropsTypes = {
    /**
     * Icon size
     */

    size?: FontIconSizeType,

    /**
     * Flag that indicates whether to show icon using accent color
     */

    accent?: boolean,

    /**
     * Callback function which will be called once user clicks on icon
     */

    onClick?: ClickCallbackType,

    /**
     * Callback function which will be called once user press mouse key while pointing cursor over icon
     */

    onMouseDown?: ClickCallbackType,

    /**
     * React style object for in deep control of how icon is represented
     */

    style?: React.CSSProperties,

    /**
     * Icon class name (example 'fas fa-coffee')
     */

    iconClassName: string,

    /**
     * Name of the class which will be applied to icon along with default one and class that represent icon
     */

    className?: string,
};

// styles definition
const useStyles = createUseStyles((theme: ThemeType) => {
    return {
        componentContainer: {
            boxSizing: 'border-box',
            display: 'block',

            color: theme.layoutStyles.baseIconColor,

            '&.tiny': {
                fontSize: theme.layoutStyles.tinyIconSize,
            },

            '&.small': {
                fontSize: theme.layoutStyles.smallIconSize,
            },

            '&.medium': {
                fontSize: theme.layoutStyles.mediumIconSize,
            },

            '&.large': {
                fontSize: theme.layoutStyles.largeIconSize,
            },

            '&.extraLarge': {
                fontSize: theme.layoutStyles.extraLargeIconSize,
            },

            '&.accent': {
                color: theme.layoutStyles.accentIconColor,
            }
        }
    };
});

/**
 * Font icon component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
const defaultStyleObject: React.CSSProperties = {};

function FontIcon(props: PropsTypes): React.ReactElement | null  {
    // region private variables declaration
    const accent = defaultTo(false)(props.accent);
    const className: string = defaultTo('')(props.className);
    const iconClassName: string = defaultTo('')(props.iconClassName);
    const style: React.CSSProperties = defaultTo(defaultStyleObject)(props.style);

    const onClick = defaultTo(() => {})(props.onClick);
    const onMouseDown = defaultTo(() => {})(props.onMouseDown);

    let size = defaultTo(MEDIUM_SIZE)(props.size);
    size = size === CUSTOM_SIZE ? '' : size;

    // endregion

    // region style hooks declaration
    const theme: ThemeType = useTheme();
    const classes: Classes = useStyles({...props, theme});

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
    // endregion

    // region callback hooks declaration
    // endregion

    // region custom hooks declaration
    // endregion

    // region business logic
    // endregion

    // region event handler helpers
    // endregion

    // region render helpers
    const renderComponentContainer: RenderFunctionNoArgsType = (): React.ReactElement | null => {
        const { componentContainer } = classes;

        const combinedClassName: string = classNames(
            componentContainer,
            iconClassName,
            size,
            {'accent': accent},
            className
        );

        return <i
            onClick={onClick}
            onMouseDown={onMouseDown}
            className={combinedClassName}
            style={style}
        />;
    };

    // endregion

    // init
    return renderComponentContainer();
}

FontIcon.displayName = 'FontIcon';

// exports
export default FontIcon;
export {
    FontIconSizeType,
    ClickCallbackType,
}
