'use strict';

// external imports
import React, {useContext} from 'react'
import { Classes } from 'jss';
import { createUseStyles, useTheme } from 'react-jss';

import { isNil, defaultTo, mergeDeepRight } from 'ramda';
import classNames from 'classnames';

// local imports
import { ThemeType } from './../../../types/theme_types';
import { RenderFunctionNoArgsType } from './../../../types/common_types';

import { REGULAR_FONT } from './../../../theming/constants/general_constants';
import {MainThemeContext} from "../../../theming/providers/main_theme_provider";

// type definitions
type FontFamilyType = 'thin' | 'light' | 'regular' | 'bold';

type PropsTypes = {
    /**
     * The URL that the hyperlink points to
     */

    href?: string,

    /**
     * Font size
     */

    fontSize?: number,

    /**
     * Font family type ('thin', 'light', 'regular', 'bold')
     */

    fontFamilyType?: FontFamilyType,

    /**
     * Name of the class which will be applied to component outer container along with default one
     */

    className?: string,

    /**
     * React style object for in deep control of how header is represented
     */

    style?: React.CSSProperties,

    /**
     * React children
     *
     * @ignore
     */

    children: React.ReactElement | null,
};

// styles definition
const useStyles = createUseStyles((theme: ThemeType) => {
    return {
        componentContainer: {
            textDecoration: 'underline',
            color: theme.layoutStyles.linkFontColor,
        }
    }
});

/**
 * Inline text link component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
const defaultStyleObject: React.CSSProperties = {};

function InlineTextLink(props: PropsTypes): React.ReactElement | null {
    // region private variables declaration
    const href: string = defaultTo('#')(props.href);
    const fontFamilyType: string = defaultTo(REGULAR_FONT)(props.fontFamilyType);

    const className: string = defaultTo('')(props.className);
    const style: React.CSSProperties = defaultTo(defaultStyleObject)(props.style);

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
        const { componentContainer } = classes;
        const componentClassName: string = classNames(componentContainer, className);

        const newStyle: React.CSSProperties = mergeDeepRight({
            fontFamily: theme.fontFamilyUtilities.getFontFamilyByType(theme, fontFamilyType),
            fontSize: isNil(props.fontSize) ? 'inherit' : `${props.fontSize}px`,
        }, style);

        return <a
            href={href}
            className={componentClassName}
            style={newStyle}
        >
            {props.children}
        </a>;
    };

    // endregion

    // init
    return renderComponentContainer();
}

InlineTextLink.displayName = 'InlineTextLink';

// exports
export default InlineTextLink;
export {
    FontFamilyType,
    PropsTypes,
}
