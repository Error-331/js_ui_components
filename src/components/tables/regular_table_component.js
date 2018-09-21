'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import {T, equals, is, isNil, isEmpty, always, unless, defaultTo, bind, mergeDeepRight, cond, map} from 'ramda';
import moment from 'moment';

// local imports
import type {ExtendedEventTargetType, CombinedEventType} from './../../types/dom_types';

import {TextBlock} from './../layout/';
import {FormCheckboxVariant2Component} from './../form/form_checkbox_variants/form_checkbox_variant2_component';

// type definitions
type BasicColumnDataType = void | null | string | number | boolean | moment | React.Element<any>;
type SpecificColumnDataType = {
    type: string,
    data: BasicColumnDataType
};

type ColumnWidthType = string | number;

type ColumnDataType = BasicColumnDataType | SpecificColumnDataType;
type RowDataType = Array<ColumnDataType>;

type ColumnNamesType = Array<string>;
type ColumnWidthsType = Array<ColumnWidthType>;

type DataType = Array<RowDataType>;

type OnRowHoverCallbackType = (event: CombinedEventType, rowIndex: number) => void;

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
     * Flag that indicates whether placeholders should be shown for empty cells
     */

    showPlaceholder?: boolean,

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
     * Array of data for each cell of the table
     */

    data?: DataType,

    /**
     * Callback function which will be called once user mouse hovers over table row
     */
    // TODO: why hover? - click
    onHoverCallback?: OnRowHoverCallbackType,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

type StateTypes = {};

// styles definition
const longTextCellStylesFunc = () => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

const commonCellContentStylesFunc = (theme) => ({
    lineHeight: '18px',

    fontFamily: theme.tableStyles.bodyFontStack,
    fontSize: `${theme.tableStyles.cellFontSize}px`,

    textAlign: 'left',

    color: theme.tableStyles.cellFontColor,
    backgroundColor: theme.tableStyles.cellBGColor
});

const commonCellStylesFunc = (theme) => ({
    borderBottom: `1px solid ${theme.tableStyles.cellBorderColor}`,

    paddingTop: `${theme.tableStyles.cellPaddingTop}px`,
    paddingBottom: `${theme.tableStyles.cellPaddingBottom}px`,

    paddingLeft: `${theme.tableStyles.cellPaddingLeft}px`,
    paddingRight: `${theme.tableStyles.cellPaddingRight}px`,

    extend: commonCellContentStylesFunc(theme)
});

const thStylesFunc = (theme) => {
    return mergeDeepRight(commonCellStylesFunc(theme), {
        paddingTop: '0px',
    });
};

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
                        extend: thStylesFunc(theme)
                    }
                }
            },

            '& > tfoot': {
                '& > tr': {
                    '& th': {
                        extend: thStylesFunc(theme)
                    }
                }
            },

            '& > tbody': {
                '& tr': {
                    '& td': {
                        extend: commonCellStylesFunc(theme),

                        '& > $regularTextContainer': {
                            extend: [commonCellContentStylesFunc(theme), longTextCellStylesFunc()],
                            height: `${theme.tableStyles.cellLineHeight}px`,
                        },

                        '& > $longTextContainer': {
                            extend: [commonCellContentStylesFunc(theme), longTextCellStylesFunc()],
                            height: `${theme.tableStyles.cellLineHeight * 2}px`,
                        },

                        '& > $placeholderContainer': {
                            width: '20px',
                            borderTop: `1px solid ${theme.tableStyles.cellBorderColor}`
                        }
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

    regularTextContainer: {},
    longTextContainer: {},

    placeholderContainer: {},
});

// constants declaration
export const SPECIFIC_COLUMN_TYPE_LONG_TEXT: string = 'SPECIFIC_COLUMN_TYPE_LONG_TEXT';

// component implementation
export class RegularTableComponentClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'RegularTableComponent';

    static defaultProps = {
        showTableHeader: true,
        showTableFooter: true,
        showPlaceholder: false,

        columnNames: [],
        columnWidths: [],

        idColumnIndex: null,
        data: [],

        onHoverCallback: () => {}
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

        this._getOnHoverCallback()(event, parseInt(rowElement.dataset['row-index']));
    }

    // endregion

    // region style accessors
    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getColumnNames(): ColumnNamesType {
        return defaultTo(RegularTableComponentClass.defaultProps.columnNames)(this.props.columnNames);
    }

    _getColumnWidths(): ColumnWidthsType {
        return defaultTo(RegularTableComponentClass.defaultProps.columnWidths)(this.props.columnWidths);
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
        return defaultTo(RegularTableComponentClass.defaultProps.data)(this.props.data);
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

    _getShowPlaceholder(): boolean {
        return defaultTo(RegularTableComponentClass.defaultProps.showPlaceholder)(this.props.showPlaceholder);
    }

    _getOnHoverCallback(): OnRowHoverCallbackType {
        return defaultTo(RegularTableComponentClass.defaultProps.onHoverCallback)(this.props.onHoverCallback);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderTableBodyNilColumn(): React.Node | boolean {
        const showPlaceholder: boolean = this._getShowPlaceholder();

        return showPlaceholder ? <div className={this.props.classes.placeholderContainer}/> : '';
    }

    _renderTableBodyStringColumn(columnData: string): React.Node {
        return <TextBlock className={this.props.classes.regularTextContainer}>
            {columnData}
        </TextBlock>;
    }

    _renderTableBodyLongTextColumn(columnData: SpecificColumnDataType): React.Node {
        const {data} = columnData;

        return <TextBlock className={this.props.classes.longTextContainer}>
            {data}
        </TextBlock>;
    }

    _renderSpecificColumnData(columnData: ColumnDataType): BasicColumnDataType {
        if (!is(Object, columnData) || isNil(columnData.type) || isNil(columnData.data)) {
            return this._renderTableBodyNilColumn();
        }

        const preparedColumnData: SpecificColumnDataType = columnData;

        return cond([
            [({type}) => equals(SPECIFIC_COLUMN_TYPE_LONG_TEXT, type), bind(this._renderTableBodyLongTextColumn, this)]
        ])(preparedColumnData);
    }

    _renderTableBodyColumn(columnData: ColumnDataType, columnIndex: number): React.Node {
        const preparedColumnData: BasicColumnDataType = cond([
            [isNil, bind(this._renderTableBodyNilColumn, this)],
            [(columnData: ColumnDataType) => moment.isMoment(columnData), (columnData: moment) => columnData.format('YYYY-M-d H:mm:ss')],
            [is(Date), (columnData: moment) => moment(columnData).format('YYYY-M-d H:mm:ss')],
            [is(Boolean), (columnData: ColumnDataType) => <FormCheckboxVariant2Component forceCheck={columnData}/>],
            [(columnData: ColumnDataType) => columnData instanceof React.Component, always(columnData)],
            [is(String), bind(this._renderTableBodyStringColumn, this)],
            [is(Object), bind(this._renderSpecificColumnData, this)],
            [T, bind(this._renderTableBodyNilColumn, this)]
        ])(columnData);

        return <td key={`column_${columnIndex}`}>{preparedColumnData}</td>;
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
                style={{width: this._getColumnWidth(columnIndex)}}
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
        const {showTableHeader, showTableFooter} = this.props;

        return <table>
            {showTableHeader && this._renderTableHeader()}
            {showTableFooter && this._renderTableFooter()}

            {this._renderTableBody()}
        </table>;
    }

    _renderComponentContainer(): React.Node {
        const {componentContainer} = this.props.classes;

        return <div className={componentContainer}>
            {this._renderTable()}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

// exports
export const RegularTableComponent = injectSheet(styles)(RegularTableComponentClass);