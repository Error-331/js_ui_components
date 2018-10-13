'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import {equals, is, isNil, isEmpty, always, unless, defaultTo, bind, cond, map} from 'ramda';

// local imports
import type {ExtendedEventTargetType, CombinedEventType} from './../../types/dom_types';

import {MainThemeContext} from './../../theming';
import {
    commonHeaderCellStylesFunc,
    commonCellStylesFunc,
} from './../../theming/common_styles';

// type definitions
type ColumnDataType = void | null | string | number | React.Element<any>;
type RowDataType = Array<ColumnDataType>;
type DataType = Array<RowDataType>;

type ColumnWidthType = string | number;
type ColumnWidthsType = Array<ColumnWidthType>;

type ColumnNamesType = Array<string>;

type OnCellClickCallbackType = (event: CombinedEventType, rowIndex: number) => void;

type CSSStylesType = {
    [string]: mixed
};

export type UserPropsTypes = {
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

    columnNames?: ColumnNamesType,

    /**
     * Array of column widths
     */

    columnWidths?: ColumnWidthsType,

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
        overflow: 'hidden',

        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,

        '& > table': {
            boxSizing: 'border-box',
            overflow: 'hidden',

            width: '100%',

            tableLayout: 'fixed',
            borderCollapse: 'collapse',

            '& > thead': {
                '& > tr': {
                    '& th': {
                        extend: commonHeaderCellStylesFunc(theme)
                    }
                }
            },

            '& > tfoot': {
                '& > tr': {
                    '& th': {
                        extend: commonHeaderCellStylesFunc(theme)
                    }
                }
            },

            '& > tbody': {
                '& tr': {
                    '& td': {
                        extend: commonCellStylesFunc(theme),
                    }
                },

                '& tr:hover': {
                    '& td': {
                        backgroundColor: theme.tableStyles.cellHoverBGColor
                    }
                },

                '& tr:last-child': {
                    '& td': {
                        borderBottom: '0px none'
                    }
                }
            }
        }
    },
});

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
export class VerticalTableClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'VerticalTableClass';

    static defaultProps = {
        showTableHeader: true,
        showTableFooter: true,
        showPlaceholder: false,

        columnNames: [],
        columnWidths: [],

        idColumnIndex: null,
        data: [],

        onCellClick: () => {}
    };

    // endregion

    // region constructor
    // endregion

    // region lifecycle methods
    _onTableClick(event: CombinedEventType): void {
        const target: ExtendedEventTargetType = event.target;

        const rowElement: ExtendedEventTargetType = unless(
            currentTarget => equals('tr', currentTarget.tagName.toLowerCase()),
            currentTarget => currentTarget.closest('tr'))(target);

        this._getOnCellClickCallback()(event, parseInt(rowElement.dataset['row-index']));
    }

    // endregion

    // region style accessors
    _getTHStyle(columnIndex: number): CSSStylesType {
        return {
            width: this._getColumnWidth(columnIndex)
        };
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
    _getColumnNames(): ColumnNamesType {
        return defaultTo(VerticalTableClass.defaultProps.columnNames)(this.props.columnNames);
    }

    _getColumnWidths(): ColumnWidthsType {
        return defaultTo(VerticalTableClass.defaultProps.columnWidths)(this.props.columnWidths);
    }

    _getColumnWidth(columnIndex: number): ColumnWidthType {
        const columnWidth: ColumnWidthType = this._getColumnWidths()[columnIndex];

        return cond([
            [isNil, always('auto')],
            [is(Number), columnWidth => `${columnWidth}px`],
            [is(String), always(columnWidth)]
        ])
        (columnWidth);
    }

    _getData(): DataType {
        return defaultTo(VerticalTableClass.defaultProps.data)(this.props.data);
    }

    _getDataRow(dataRow: RowDataType): RowDataType {
        return defaultTo([])(dataRow);
    }

    _getDataColumn(dataColumn: ColumnDataType): ColumnDataType {
        return defaultTo(null)(dataColumn);
    }

    _isIdColumn(columnIndex: number): boolean {
        const {idColumnIndex} = this.props;

        if (isNil(idColumnIndex)) {
            return false;
        }

        return columnIndex === idColumnIndex;
    }

    _getOnCellClickCallback(): OnCellClickCallbackType {
        return defaultTo(VerticalTableClass.defaultProps.onCellClick)(this.props.onCellClick);
    }

    _shouldShowTableFooter(): boolean {
        return defaultTo(VerticalTableClass.defaultProps.showTableFooter)(this.props.showTableFooter);
    }

    _shouldShowTableHeader(): boolean {
        return defaultTo(VerticalTableClass.defaultProps.showTableHeader)(this.props.showTableHeader);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderTableBodyColumn(columnData: ColumnDataType, columnIndex: number): React.Node {
        return <td key={`column_${columnIndex}`}>{columnData}</td>;
    }

    _renderTableBodyColumns(rowData: RowDataType): React.Node {
        let columnIndex: number = -1;

        return map((columnData: ColumnDataType) => {
            ++columnIndex;

            if (this._isIdColumn(columnIndex)) {
                return null;
            }

            return this._renderTableBodyColumn(this._getDataColumn(columnData), columnIndex);
        }, rowData);
    }

    _renderTableBodyRows(): React.Node {
        let rowIndex: number = -1;

        return map((rowData: RowDataType) => {
            ++rowIndex;
            rowData = this._getDataRow(rowData);

            return <tr key={`row_${rowIndex}`} data-row-index={rowIndex}>{this._renderTableBodyColumns(rowData)}</tr>;
        }, this._getData());
    }

    _renderTableBody(): React.Node {
        const {data} = this.props;
        const renderedData = (isNil(data) || isEmpty(data)) ? null : this._renderTableBodyRows();

        return <tbody onClick={bind(this._onTableClick, this)}>{renderedData}</tbody>;
    }

    _renderTableHeaderCells(): React.Node {
        let columnIndex: number = -1;

        return map((columnName: string) => {
            ++columnIndex;

            return <th
                style={this._getTHStyle(columnIndex)}
                key={`headerColumn_${columnIndex}`}
            >{columnName}</th>;
        }, this._getColumnNames());
    }

    _renderTableFooter(): React.Node {
        return (
            <tfoot>
                <tr>
                    {this._renderTableHeaderCells()}
                </tr>
            </tfoot>
        );
    }

    _renderTableHeader(): React.Node {
        return (
            <thead>
                <tr>
                    {this._renderTableHeaderCells()}
                </tr>
            </thead>
        );
    }

    _renderTable(): React.Node {
        return <table>
            {this._shouldShowTableHeader() && this._renderTableHeader()}
            {this._shouldShowTableFooter() && this._renderTableFooter()}

            {this._renderTableBody()}
        </table>;
    }

    _renderComponentContainer(): React.Node {
        return <div className={this._getComponentContainerClassName()}>
            {this._renderTable()}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

// exports
export function VerticalTableComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <VerticalTableClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

VerticalTableComponent.displayName = 'VerticalTableComponent';