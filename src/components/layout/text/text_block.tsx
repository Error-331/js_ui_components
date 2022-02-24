'use strict';

// external imports
import React, {useContext} from 'react';
import { Classes } from 'jss';
import { createUseStyles, useTheme } from 'react-jss';

import classNames from 'classnames';
import { defaultTo } from 'ramda';

// local imports
import { ThemeType } from './../../../../src/types/theme_types';
import { RenderFunctionNoArgsType } from './../../../../src/types/common_types';
import {MainThemeContext} from "../../../theming/providers/main_theme_provider";

// type definitions
type PropsTypes = {
    /**
     * React style object for in deep control of how text block is represented
     */

    style?: React.CSSProperties,

    /**
     * Name of the class which will be applied to text block along with default one
     */

    className?: string,

    /**
     * Child node (with optional sub-nodes)
     */

    children?: React.ReactElement | null,
};

// styles definition
const useStyles = createUseStyles((theme: ThemeType) => {
    return {
        componentContainer: {
            fontFamily: theme.layoutStyles.fontStack,
            fontSize: theme.layoutStyles.bodyFontSize,
            lineHeight: theme.layoutStyles.bodyFontLineHeight,

            color: theme.layoutStyles.bodyFontColor,
        }

    }
});

/**
 * Text block component styled according to material-UI guidelines.
 * Used to represent simple text blocks, captions, labels and etc.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
const defaultStyleObject: React.CSSProperties = {};

function TextBlock(props: PropsTypes): React.ReactElement | null {
    // region private variables declaration
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
        const componentClassNames: string = classNames(componentContainer, className);

        return <div className={componentClassNames} style={style}>{props.children}</div>;
    };

    // endregion

    // init
    return renderComponentContainer();
}

// exports
export default TextBlock;
export {
    PropsTypes,
}
