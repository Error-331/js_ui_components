'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {isNil, defaultTo, length, addIndex, range, map} from 'ramda';

// local imports
import type {CombinedEventType} from '../../../src/types/dom_types';

import {MainThemeContext} from '../../../src/theming/providers/main_theme_provider';
import {
    commonHorizontalTableCellStylesFunc,
} from '../../../src/theming/common_styles/table_styles';
import type {ThemeType} from "../../../src/types/theme_types";

// type definitions
type ColumnDataType = void | null | string | number | React.Element<any>;
type RowDataType = Array<ColumnDataType>;
type DataType = Array<RowDataType>;

type ColumnNamesType = Array<string | React.Element<any>>;

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
export const contentTableStylesFunc = (theme: ThemeType) => ({
    borderSpacing: '0px',

    '& > tbody': {
        '& > tr': {
            '& > td': {
                boxSizing: 'border-box',
                extend: commonHorizontalTableCellStylesFunc(theme),
            }
        }
    }
});

const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'grid',

        width: '100%',

        gridTemplateColumns: 'max-content 1fr',
        gridTemplateRows: 'max-content max-content',

        '& > $tableHeader': {
            boxSizing: 'border-box',
            overflow: 'hidden',

            '& > $contentTable': {
                extend: contentTableStylesFunc(theme),
            }
        },

        '& > $tableBody': {
            boxSizing: 'border-box',
            overflow: 'scroll',

            '& > $contentTable': {
                extend: contentTableStylesFunc(theme),
            }
        },

        '&.withHeader': {
            gridTemplateRows: 'max-content max-content',
        },

        '&.withoutHeader': {
            gridTemplateColumns: '1fr',
        }
    },

    tableHeader: {},

    tableBody: {},
    contentTable: {},
});

// component implementation

/**
 * Horizontal table component to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// $FlowFixMe decorators
@injectSheet(styles)
class HorizontalTableClass extends React.Component<PropsTypes, StateTypes> {
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
    _getContentTableWidth(): number {
        return this._getContentTableCelWidth() * this._getDataRowsCount();
    }

    _getContentTableCelWidth(): number {
        const tableWidth: number = this._getTableContainerWidth();
        const columnCount: number = this._getVisibleColumnCount();

        return tableWidth / columnCount;
    }

    _getTableContainerWidth(): number {
        if (isNil(this.$tableBody) || isNil(this.$tableBody.current)) {
            return 0;
        }

        return this.$tableBody.current.clientWidth;
    }

    _getContentTableCellStyle(): CSSStylesType {
        return {
            maxWidth: `${this._getContentTableCelWidth()}px`
        };
    }

    _getContentTableStyle(): CSSStylesType {
        return {
            width: `${this._getContentTableWidth()}px`
        };
    }

    _getContentTableClassName(): string {
        return this.props.classes.contentTable;
    }

    _getTableBodyClassName(): string {
        return this.props.classes.tableBody;
    }

    _getTableHeaderClassName(): string {
        return this.props.classes.tableHeader;
    }

    _getComponentContainerClassName(): string {
        return classNames(
            this.props.classes.componentContainer,
            {
                'withHeader': this._shouldShowTableHeader(),
                'withoutHeader': !this._shouldShowTableHeader(),
            }
        );
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getDataRowsCount(): number {
        return length(this._getData());
    }

    _getDataColumnsCount(): number {
        const columnsCount: number = this._getColumnsCount();

        if (isNil(this._getIdColumnIndex())) {
            return columnsCount;
        }

        return columnsCount + 1;
    }

    _getColumnsCount(): number {
        return length(this._getColumnNames());
    }

    _getVisibleColumnCount(): number {
        return defaultTo(4)(this.props.visibleColumnCount);
    }

    _shouldShowTableHeader(): boolean {
        return defaultTo(HorizontalTableClass.defaultProps.showTableHeader)(this.props.showTableHeader);
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
        const cellStyle: CSSStylesType = this._getContentTableCellStyle();

        return addIndex(map)((row, rowIndex) => {
            return <td key={`column_${rowIndex}_${columnIndex}`} style={cellStyle}>
                {row[columnIndex]}
            </td>;
        }, this._getData());
    }

    _renderContentTableRows(): React.Node {
        return map(columnIndex => {
            if (columnIndex === this._getIdColumnIndex()) {
                return null;
            }

            return <tr key={columnIndex}>
                {this._renderContentTableCells(columnIndex)}
            </tr>;
        }, range(0, this._getDataColumnsCount()));
    }

    _renderTableHeaderCells(): React.Node {
        let columnIndex: number = -1;

        return map((columnName: string) => {
            ++columnIndex;

            return <tr key={`headerColumn_${columnIndex}`}>
                <td>{columnName}</td>
            </tr>;
        }, this._getColumnNames());
    }

    _renderTableBody(): React.Node {
        return <div className={this._getTableBodyClassName()} ref={this.$tableBody}>
            <table
                className={this._getContentTableClassName()}
                style={this._getContentTableStyle()}
            >
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
            <table className={this._getContentTableClassName()}>
                <tbody>
                    {this._renderTableHeaderCells()}
                </tbody>
            </table>
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

function HorizontalTableComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <HorizontalTableClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

HorizontalTableComponent.displayName = 'HorizontalTableComponent';

// exports
export {HorizontalTableClass, HorizontalTableComponent};
export default HorizontalTableComponent;
