'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import {isNil, defaultTo, length, addIndex, range, map} from 'ramda';

// local imports
import type {CombinedEventType} from './../../types/dom_types';

import {MainThemeContext} from './../../theming/providers/main_theme_provider';
import {
    commonCellStylesFunc,
} from './../../theming/common_styles/table_styles';

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
     * Number of visible columns
     */


    visibleColumnCount?: number,

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
        display: 'grid',

        width: '100%',

        gridTemplateColumns: 'max-content 1fr',
        gridTemplateRows: 'max-content max-content',

        '& > $tableHeader': {
            boxSizing: 'border-box',

            '& > $tableHeaderCell': {
                boxSizing: 'border-box',

                whiteSpace: 'nowrap',
                extend: commonCellStylesFunc (theme),
            }
        },

        '& > $tableBody': {
            boxSizing: 'border-box',
            overflow: 'hidden',

            '& > $contentTable': {
                '& > tbody': {
                    '& > tr': {
                        '& > td': {
                            boxSizing: 'border-box',
                            extend: commonCellStylesFunc (theme),
                        }
                    }
                }
            }
        }
    },

    tableHeader: {},
    tableHeaderCell: {},

    tableBody: {},
    contentTable: {},
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
    $tableBody: any;

    // endregion

    // region constructor
    constructor(props: PropsTypes) {
        super(props);

        this.$tableBody = React.createRef();
    }

    // endregion

    // region business logic
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getContentTableCelWidth() {
        const tableWidth: number = this._getContentTableWidth();
        const columnCount: number = this._getVisibleColumnCount();

        return tableWidth / columnCount;
    }

    _getContentTableWidth(): number {
        if (isNil(this.$tableBody) || isNil(this.$tableBody.current)) {
            return 0;
        }

        return this.$tableBody.current.clientWidth;
    }

    _getContentTableClassName(): string {
        return this.props.classes.contentTable;
    }

    _getTableBodyClassName(): string {
        return this.props.classes.tableBody;
    }

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
    _getDataColumnsCount(): number {
        const columnsCount: number = this._getColumnsCount();

        if (isNil(this._getIdColumnIndex())) {
            return columnsCount;
        }

        return columnsCount - 1;
    }

    _getColumnsCount(): number {
        return length(this._getColumnNames());
    }

    _getVisibleColumnCount(): number {
        return defaultTo(4)(this.props.visibleColumnCount);
    }

    _shouldShowTableHeader(): boolean {
        return defaultTo(HorizontalTableClass.defaultProps.showTableHeader)(this.props.showTableHeader)
    }

    _getData(): DataType {
        return defaultTo(HorizontalTableClass.defaultProps.data)(this.props.data);
    }

    _getIdColumnIndex(): number | null {
        return defaultTo(HorizontalTableClass.defaultProps.idColumnIndex)(this.props.idColumnIndex);
    }

    _getColumnNames(): ColumnNamesType {
        return defaultTo(HorizontalTableClass.defaultProps.columnNames)(this.props.columnNames);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderContentTableCells(columnIndex: number): React.Node {
        return addIndex(map)((row, rowIndex) => {
            return <td key={`column_${rowIndex}_${columnIndex}`}>
                {typeof row[columnIndex] === 'object' ? 'b' : 'c'}
            </td>;
        }, this._getData())
    }

    _renderContentTableRows(): React.Node {
        return map(columnIndex => {
            return <tr key={columnIndex}>
                {this._renderContentTableCells(columnIndex)}
            </tr>;
        }, range(0,this._getDataColumnsCount() - 1))
    }

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

    _renderTableBody(): React.Node {
        const s = {
          width: this._getContentTableCelWidth()
        };


        return <div className={this._getTableBodyClassName()} ref={this.$tableBody}>
            <table className={this._getContentTableClassName()} style={{width: this._getContentTableCelWidth() * 7}}>
                <tbody>
                    {this._renderContentTableRows()}
                </tbody>
            </table>

        </div>;
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
            {this._renderTableBody()}
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