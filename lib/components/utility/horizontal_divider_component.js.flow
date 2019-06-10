'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import classNames from 'classnames';

// local imports

// type definitions
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

// component implementation
function HorizontalDividerFunction(props: PropsTypes) {
    const {classes, componentContainerClassName, bodyContainerClassName} = props;
    const {componentContainer, bodyContainer} = classes;

    const componentContainerClassNames: string = classNames(componentContainer, componentContainerClassName);
    const bodyContainerClassNames: string = classNames(bodyContainer, bodyContainerClassName);

    return <div className={componentContainerClassNames}>
        <div className={bodyContainerClassNames}/>
    </div>;
}

HorizontalDividerFunction.displayName = 'HorizontalDivider';

// exports
export const HorizontalDivider = injectSheet(styles)(HorizontalDividerFunction);
export default HorizontalDivider;