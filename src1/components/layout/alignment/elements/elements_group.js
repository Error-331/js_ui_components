'use strict';

// @flow

// external imports
import type {ChildrenArray, ElementType, Node} from 'react';

import React from 'react'

import {defaultTo} from 'ramda';

// local imports
import type {RenderFunctionNoArgsType} from '../../../../../src/types/common_types';

import {ElementsRow} from './elements_row';
import {ElementsColumn} from './elements_column';

// type definitions
type CardChildren = ChildrenArray<void | null | string | number | ElementType>;

type DirectionType = 'row' | 'column';
type AlignmentType = 'left' | 'right' | 'center';

export type PropsTypes = {
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
     * Class name for in deep control of how elements group is represented
     */

    className?: string,

    /**
     * React style object for in deep control of how elements group is represented
     */

    style?: {[string]: mixed},

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
function ElementsGroupComponent(props: PropsTypes): Node {
    // region private variables declaration
    const alignment: AlignmentType = defaultTo('left')(props.alignment);
    const direction: string = defaultTo('column')(props.direction);

    const className: string = defaultTo('')(props.className);
    const style: {[string]: mixed} = defaultTo({})(props.style);

    // endregion

    // region style hooks declaration
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
        // TODO: can do better with ternary operator or if Else() but react-docgen do not understand them
        if (direction === 'column') {
            return <ElementsColumn
                alignment={alignment}
                className={className}
                style={style}>
                {props.children}
            </ElementsColumn>;
        } else {
            return <ElementsRow
                alignment={alignment}
                className={className}
                style={style}
            >
                {props.children}
            </ElementsRow>;
        }
    };

    // endregion

    // init
    return renderComponentContainer();
}

// exports
export default ElementsGroupComponent;
