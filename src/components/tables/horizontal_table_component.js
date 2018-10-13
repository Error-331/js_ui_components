'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import {defaultTo, map} from 'ramda';

// local imports
import type {CombinedEventType} from './../../types/dom_types';

import {MainThemeContext} from './../../theming';
import {
    commonHeaderCellStylesFunc,
} from './../../theming/common_styles';
import {VerticalTableClass} from "./vertical_table_component";

// type definitions
type ColumnDataType = void | null | string | number | React.Element<any>;
type RowDataType = Array<ColumnDataType>;
type DataType = Array<RowDataType>;

type ColumnNamesType = Array<string>;

type OnCellClickCallbackType = (event: CombinedEventType, rowIndex: number) => void;

export type UserPropsTypes = {
    /**
     * Flag that indicates whether table header should be shown
     */

    showTableHeader?: boolean,

    /**
     * Array of column names
     */

    columnNames?: ColumnNamesType,

    /**
     * Column index (inside data row) which will use data from this column as id and skip its rendering
     */

    idColumnIndex?: number,

    /**
     * Callback function which will be called once user clicks on a cell
     */

    onCellClick?: OnCellClickCallbackType,
}

export type PropsTypes = UserPropsTypes & {

    /**
     * Array of data for each cell of the table
     */

    data?: DataType,

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
    componentContainer: {
        boxSizing: 'border-box',
        display: 'flex',

        flexDirection: 'row',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',

        '& > $tableHeader': {
            boxSizing: 'border-box',

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            '& > $tableHeaderCell': {
                whiteSpace: 'nowrap',
                extend: commonHeaderCellStylesFunc(theme),
            }
        }
    },

    tableHeader: {},
    tableHeaderCell: {},
});

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
export class HorizontalTableClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'HorizontalTableClass';

    static defaultProps = {
        showTableHeader: true,

        columnNames: [],
        idColumnIndex: null,
        data: [],

        onCellClick: () => {}
    };

    // endregion

    // region private props
    // endregion

    // region constructor
    // endregion

    // region business logic
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _gettableHeaderCellClassName(): string {
        return this.props.classes.tableHeaderCell;
    }

    _getTableHeaderClassName(): string {
        return this.props.classes.tableHeader;
    }

    _getComponentContainerClassName(): string {
        return this.props.classes.componentContainer;
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _shouldShowTableHeader(): boolean {
        return defaultTo(HorizontalTableClass.defaultProps.showTableHeader)(this.props.showTableHeader)
    }

    _getColumnNames(): ColumnNamesType {
        return defaultTo(HorizontalTableClass.defaultProps.columnNames)(this.props.columnNames);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderTableHeaderCells(): React.Node {
        let columnIndex: number = -1;

        return map((columnName: string) => {
            ++columnIndex;

            return <div
                className={this._gettableHeaderCellClassName()}
                key={`headerColumn_${columnIndex}`}
            >{columnName}</div>;
        }, this._getColumnNames());
    }

    _renderTableHeader(): React.Node {
        if (!this._shouldShowTableHeader()) {
            return null;
        }

        return <div className={this._getTableHeaderClassName()}>
            {this._renderTableHeaderCells()}
        </div>;
    }

    _renderComponentContainer(): React.Node {
        return <div className={this._getComponentContainerClassName()}>
            {this._renderTableHeader()}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

// exports
export function HorizontalTableComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <HorizontalTableClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

HorizontalTableComponent.displayName = 'HorizontalTableComponent';