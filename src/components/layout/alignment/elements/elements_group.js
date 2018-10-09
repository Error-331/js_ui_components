'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import {defaultTo} from 'ramda';

// local imports
import {ElementsRow} from './elements_row';
import {ElementsColumn} from './elements_column';

// type definitions
type CardChildren = React.ChildrenArray<void | null | string | number | React.Element<any>>;

type DirectionType = 'row' | 'column';
type AlignmentType = 'left' | 'right' | 'center';

type PropsTypes = {
    /**
     * Flag that dictates how elements should be laid out
     */

    direction?: DirectionType,

    /**
     * Specifies how radio buttons will be align
     */

    alignment?: AlignmentType,

    /**
     * Radio buttons
     */

    children?: ?CardChildren,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

type StateTypes = {};

// styles definition
const styles = theme => ({});

/**
 * Elements group component.
 * Helps to layout columns (or rows) of elements (especially different buttons and checkboxes).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
export function ElementsGroupFunction(props: PropsTypes): React.Node {
    let {direction, alignment} = props;
    direction = defaultTo('column')(direction);

    // TODO: can do better with ternary operator or if Else() but react-docgen do not understand them
    if (direction === 'column') {
        return <ElementsColumn alignment={alignment}>{props.children}</ElementsColumn>;
    } else {
        return <ElementsRow alignment={alignment}>{props.children}</ElementsRow>;
    }
}

ElementsGroupFunction.displayName = 'ElementsGroup';

// exports
export const ElementsGroup = injectSheet(styles)(ElementsGroupFunction);
