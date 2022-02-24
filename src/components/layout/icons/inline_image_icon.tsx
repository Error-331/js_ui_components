'use strict';

// external imports
import React, { useContext } from 'react';
import { Classes } from 'jss';
import { createUseStyles, useTheme } from 'react-jss';

import classNames from 'classnames';
import { defaultTo } from 'ramda';

// local imports
import { RenderFunctionNoArgsType } from './../../../types/common_types';
import { ThemeType } from './../../../types/theme_types';

import { MEDIUM_SIZE } from './../../../theming/constants/general_constants';
import { MainThemeContext } from './../../../theming/providers/main_theme_provider';

// type definitions
type FontIconSizeType = 'tiny' | 'small' | 'medium' | 'large' | 'extraLarge';

type PropsTypes = {
    /**
     * Icon size
     */

    size?: FontIconSizeType,

    /**
     * Path to image file
     */

    src?: string,

    /**
     * Icon container class name
     */

    className?: string,

    /**
     * Icon container style object
     */

    style?: React.CSSProperties,
};

// styles definition
const useStyles = createUseStyles((theme: ThemeType) => {
    return {
        componentContainer: {
        },
    };
});

/**
 * Inline image icon component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function InlineImageIcon(props: PropsTypes) {
    // region private variables declaration
    const className: string = defaultTo('')(props.className);
    const src: string | null = defaultTo(null)(props.src);
    const size: string = defaultTo(MEDIUM_SIZE)(props.size);

    // endregion

    // region style hooks declaration
    const theme: ThemeType = useTheme();
    const classes: Classes = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    const mainThemeContext = useContext(MainThemeContext);

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
        const height: number = theme.layoutStyles[`${size}IconSize`];
        const { componentContainer } = classes;

        const combinedContainerClassName: string = classNames(
            componentContainer,
            className
        );

        return (
            <img
                src={src}
                height={`${height}px`}

                className={combinedContainerClassName}
                style={props.style}
            />
        );
    };

    // endregion

    // init
    return renderComponentContainer();
}

InlineImageIcon.displayName = 'InlineImageIcon';

// exports
export default InlineImageIcon;
export {
    FontIconSizeType,
    PropsTypes,
}
