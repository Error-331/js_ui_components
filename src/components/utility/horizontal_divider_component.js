'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import classNames from 'classnames';

// local imports

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * Name of the class which will be applied to outer container (along with default one) of the component
     */

    componentContainerClassName?: string,

    /**
     * Name of the class which will be applied to inner container (along with default one) of the component
     */

    bodyContainerClassName?: string,

    /**
     * React style object for in deep control of how component container is represented
     */

    style?: CSSStylesType,

    /**
     * React style object for in deep control of how component body container is represented
     */

    bodyStyle?: CSSStylesType,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',

        width: '100%',

        padding: '10px 10px 10px 10px',

        '& > $bodyContainer': {
            boxSizing: 'border-box',

            height: '2px',
            lineHeight: '2px',
            backgroundColor: theme.baseStyles.subTertiaryColor
        }
    },

    bodyContainer: {},
});

/**
 * Horizontal divider.
 * Displays simple horizontal line.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function HorizontalDividerFunction(props: PropsTypes) {
    const {classes, componentContainerClassName, bodyContainerClassName, style, bodyStyle} = props;
    const {componentContainer, bodyContainer} = classes;

    const componentContainerClassNames: string = classNames(componentContainer, componentContainerClassName);
    const bodyContainerClassNames: string = classNames(bodyContainer, bodyContainerClassName);

    return <div className={componentContainerClassNames} style={style}>
        <div className={bodyContainerClassNames} style={bodyStyle}/>
    </div>;
}

HorizontalDividerFunction.displayName = 'HorizontalDivider';

// exports
export const HorizontalDivider = injectSheet(styles)(HorizontalDividerFunction);
export default HorizontalDivider;