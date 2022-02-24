'use strict';

// external imports
import {Node, Element} from 'react';

import * as React from 'react';
import {createUseStyles, useTheme} from 'react-jss';

import {defaultTo, mergeDeepRight} from 'ramda';
import classNames from 'classnames';

// local imports
import {ThemeType} from '../../../../src/types/theme_types';
import {RenderFunctionNoArgsType} from '../../../../src/types/common_types';

import {REGULAR_FONT} from '../../../../src/theming/constants/general_constants';

// type definitions
type FontFamilyType = 'thin' | 'light' | 'regular' | 'bold';

type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * Font size
     */

    fontSize?: number,

    /**
     * Font family type ('thin', 'light', 'regular', 'bold')
     */

    fontFamilyType?: FontFamilyType,

    /**
     * React style object for in deep control of how text block is represented
     */

    style?: {[string]: mixed},

    /**
     * Name of the class which will be applied to text block along with default one
     */

    className?: string,

    /**
     * Child node (with optional sub-nodes)
     */

    children?: React.ChildrenArray<any>,
};

// styles definition
const useStyles = createUseStyles(theme => ({
    componentContainer: {
        lineHeight: theme.layoutStyles.bodyFontLineHeight,
        color: theme.layoutStyles.bodyFontColor,
    }
}));

/**
 * Inline text block component styled according to material-UI guidelines.
 * Used to represent simple text blocks, captions, labels and etc.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function InlineTextBlock(props: PropsTypes) {
    // region private variables declaration
    const fontFamilyType: string = defaultTo(REGULAR_FONT)(props.fontFamilyType);

    const className: string = defaultTo('')(props.className);
    const style: CSSStylesType = defaultTo({})(props.style);

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
    const renderComponentContainer: RenderFunctionNoArgsType = (): Node => {
        const {componentContainer} = classes;
        const componentClassNames: string = classNames(componentContainer, className);

        const fontSize: number = defaultTo(theme.layoutStyles.bodyFontSize)(props.fontSize);

        const newStyle: CSSStylesType = mergeDeepRight({
            fontFamily: theme.fontFamilyUtilities.getFontFamilyByType(theme, fontFamilyType),
            fontSize: `${fontSize}px`,
        }, style);

        return <span className={componentClassNames} style={{...newStyle}}>{props.children}</span>;
    };

    // endregion

    // init
    return renderComponentContainer();
}

// exports
export default InlineTextBlock;
export { FontFamilyType };
