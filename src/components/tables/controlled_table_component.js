'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {mergeDeepRight} from 'ramda';

// local imports
import {RegularTableComponentClass, RegularTableComponent} from './regular_table_component';

// type definitions
type PropsTypes = {
    /**
     * Flag that indicates whether table header should be shown
     */

    showTableHeader?: boolean,

    /**
     * Flag that indicates whether table footer should be shown
     */

    showTableFooter?: boolean,

    /**
     * Array of column names
     */

    columnNames?: Array<string>,

    /**
     * Array of column widths
     */

    columnWidths?: Array<string | number>,

    /**
     * Column index (inside data row) which will use data from this column as id and skip its rendering
     */

    idColumnIndex?: number,

    /**
     * Array of data for each cell of the table
     */

    data?: Array<Array<React.ChildrenArray<any>>>,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

type StateTypes = {};

// styles definition
const styles = theme => ({

});

/**
 * Controlled table component to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
export class ControlledTableComponentClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'ControlledTableComponent';

    static defaultProps = mergeDeepRight(RegularTableComponentClass.defaultProps, {

    });

    // endregion

    // region constructor
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    // endregion

    // region handlers
    // endregion

    // region render methods
    render(): React.Node {
        return <RegularTableComponent {...this.props}/>;
    }

    // endregion
}

// exports
export const ControlledTableComponent = injectSheet(styles)(ControlledTableComponentClass);