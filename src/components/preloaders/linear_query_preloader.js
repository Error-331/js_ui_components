'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import classNames from 'classnames';

// local imports
import {LinearIndeterminatePreloader} from './linear_indeterminate_preloader';

// type definitions
type PropsTypes = {
    /**
     * React style object for in deep control of preloader is represented
     */

    style?: {[string]: mixed},

    /**
     * Name of the class which will be applied to component along with default one
     */

    className?: string,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any,
};

// styles definition

const styles = theme => ({
    componentContainer: {
        transform: 'rotate(180deg)',
    },
});

/**
 * Linear query preloader.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function LinearQueryPreloaderFunction(props: PropsTypes) {
    const {classes, className, style} = props;
    const componentClassNames: string = classNames(classes.componentContainer, className);

    return <LinearIndeterminatePreloader className={componentClassNames} style={style}/>;
}

LinearQueryPreloaderFunction.displayName = 'LinearQueryPreloader';

// exports
export const LinearQueryPreloader = injectSheet(styles)(LinearQueryPreloaderFunction);
