'use strict';

// external imports
import React, {Component} from 'react';
import injectSheet from 'react-jss';

import {isNil, isEmpty, addIndex, map} from 'ramda';

// local imports

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
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',

                        borderBottom: `1px solid ${theme.tableStyles.commonTableCellBorderColor}`,

                        paddingTop: '0px',
                        paddingBottom: `${theme.tableStyles.commonTableCellPaddingBottom}px`,

                        paddingLeft: `${theme.tableStyles.commonTableCellPaddingLeft}px`,
                        paddingRight: `${theme.tableStyles.commonTableCellPaddingRight}px`,

                        fontFamily: '"Roboto-Bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
                        fontSize: `${theme.tableStyles.commonTableCellFontSize}px`,

                        textAlign: 'left',

                        color: theme.tableStyles.commonTableHeaderCellFontColor,
                        backgroundColor: theme.tableStyles.commonTableCellBGColor
                    }
                }
            },

            '& > tfoot': {
                '& > tr': {
                    '& th': {
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',

                        borderTop: `1px solid ${theme.tableStyles.commonTableCellBorderColor}`,

                        paddingTop: `${theme.tableStyles.commonTableCellPaddingTop}px`,
                        paddingBottom: '0px',

                        paddingLeft: `${theme.tableStyles.commonTableCellPaddingLeft}px`,
                        paddingRight: `${theme.tableStyles.commonTableCellPaddingRight}px`,

                        fontFamily: '"Roboto-Bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
                        fontSize: `${theme.tableStyles.commonTableCellFontSize}px`,

                        textAlign: 'left',

                        color: theme.tableStyles.commonTableHeaderCellFontColor,
                        backgroundColor: theme.tableStyles.commonTableCellBGColor
                    }
                }
            },

            '& > tbody': {
                '& tr': {
                    '& td': {
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',

                        borderBottom: `1px solid ${theme.tableStyles.commonTableCellBorderColor}`,

                        paddingTop: `${theme.tableStyles.commonTableCellPaddingTop}px`,
                        paddingBottom: `${theme.tableStyles.commonTableCellPaddingBottom}px`,

                        paddingLeft: `${theme.tableStyles.commonTableCellPaddingLeft}px`,
                        paddingRight: `${theme.tableStyles.commonTableCellPaddingRight}px`,

                        fontFamily: '"Roboto-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
                        fontSize: `${theme.tableStyles.commonTableCellFontSize}px`,

                        textAlign: 'left',

                        color: theme.tableStyles.commonTableCellFontColor,
                        backgroundColor: theme.tableStyles.commonTableCellBGColor
                    }
                },

                '& tr:hover': {
                    '& td': {
                        backgroundColor: theme.tableStyles.commonTableCellHoverBGColor
                    }
                },

                '& tr:last-child': {
                    '& td': {
                        borderBottom: '0px none'
                    }
                }
            }
        }
    }
});

// meta preparation
const mapIndexed = addIndex(map);

// component implementation
class RegularTableComponent extends Component {
    static displayName = 'RegularTableComponent';

    static defaultProps = {
        showTableHeader: true,
        showTableFooter: true,

        columnNames: [],
        columnWidths: [],

        idColumnIndex: null,
        data: undefined
    };

    _isIdColumn(columnIndex) {
        const {idColumnIndex} = this.props;

        if (isNil(idColumnIndex)) {
            return false;
        }

        return columnIndex === idColumnIndex;
    }

    _renderTableHeaderCells() {
        const {columnNames, columnWidths, idColumnIndex} = this.props;

        return mapIndexed((columnName, columnIndex) => {
            let columnWidth = columnWidths[columnIndex];
            columnWidth = isNil(columnWidth) ? 'auto' : columnWidth;

            return <th style={{width: columnWidth}} key={`headerColumn_${columnIndex}`}>{columnName}</th>;
        }, columnNames);
    }

    _renderTableFooter() {
        return (
            <tfoot>
                <tr>
                    {this._renderTableHeaderCells()}
                </tr>
            </tfoot>
        );
    }

    _renderTableHeader() {
        return (
            <thead>
                <tr>
                    {this._renderTableHeaderCells()}
                </tr>
            </thead>
        );
    }

    _renderTableBodyRows() {
        const {data} = this.props;

        return mapIndexed((rowData, rowIndex) => {
            const cellsData = mapIndexed((columnData, columnIndex) => {
                if (this._isIdColumn(columnIndex)) {
                    return null;
                }

                return <td key={`column_${columnIndex}`}>{columnData}</td>;
            }, rowData);

            return <tr key={`row_${rowIndex}`}>{cellsData}</tr>;
        }, data);
    }

    _renderTableBody() {
        const {data} = this.props;
        const renderedData = (isNil(data) || isEmpty(data)) ? null : this._renderTableBodyRows();

        return <tbody>{renderedData}</tbody>;
    }

    render() {
        const {componentContainer} = this.props.classes;
        const {showTableHeader, showTableFooter} = this.props;

        return (
            <div className={componentContainer}>
                <table>
                    {showTableHeader && this._renderTableHeader()}
                    {showTableFooter && this._renderTableFooter()}

                    {this._renderTableBody()}
                </table>
            </div>
        );
    }
}

// exports
export default injectSheet(styles)(RegularTableComponent);