'use strict';

// @flow

// external imports
import type moment from 'moment';

import * as React from 'react';
import injectSheet from 'react-jss';

import {__, is, isNil, defaultTo, unless, clone, bind, map, curry, append, prepend} from 'ramda';

// local imports
import type {CombinedEventType} from './../../types/dom_types';

import {MainThemeContext} from './../../theming/providers/main_theme_provider';
import {RegularTableComponent} from './regular_table_component';
import {ElementsRow} from './../layout/alignment/elements/elements_row';

import {FormCheckboxInputComponent} from './../form/form_checkbox_input_component';
import {FontIcon} from './../layout/icons/font_icon';

// type definitions
type BasicColumnDataType = void | null | string | number | boolean | moment | React.Element<any>;
type SpecificColumnDataType = {
    type: string,
    data: BasicColumnDataType
};

type ColumnDataType = BasicColumnDataType | SpecificColumnDataType;
type RowDataType = Array<ColumnDataType>;

type DataType = Array<RowDataType>;

type RowControlClickHandlerType = (event: CombinedEventType, rowIndex: mixed) => void;
type RowControlType = {
  iconClassName: string,
  onClickHandler?: RowControlClickHandlerType
};

type RowControlsType = Array<RowControlType>;
type ColumnNamesType = Array<string | React.Element<any>>;

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

    columnNames?: ColumnNamesType,

    /**
     * Array of column widths
     */

    columnWidths?: Array<string | number>,

    /**
     * Column index (inside data row) which will use data from this column as id and skip its rendering
     */

    idColumnIndex?: number,

    selectableRows?: boolean,

    /**
     * Array of control icons and handler functions which will be used to create row controls
     */

    rowControls?: RowControlsType,

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
    controlIcon: {
        cursor: 'pointer',
    }
});

/**
 * Controlled table component to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
// $FlowFixMe decorators
@injectSheet(styles)
class ControlledTableClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'ControlledTableClass';

    static defaultProps = {
        idColumnIndex: null,
        selectableRows: false,
        rowControls: null,

        columnNames: [],
        data: null,
    };

    // endregion

    // region constructor
    constructor(props: PropsTypes) {
        super(props);
        const self: any = this;

        self._prepareData = bind(self._prepareData, this);
        self._prepareColumnNames = bind(self._prepareColumnNames, this);
        self._prepareIdColumnIndex = bind(self._prepareIdColumnIndex, this);
    }

    // endregion

    // region business logic
    _prepareIdColumnIndex(idColumnIndex: number) {
        return this._shouldShowRowSelector() ? idColumnIndex + 1 : idColumnIndex;
    }

    _prepareRowControls(rowControls: RowControlsType, rowIndex: mixed): React.Node {
        let index: number = -1;
        const controls: React.Node = map((rowControl: RowControlType) => {
            index++;

            let {iconClassName, onClickHandler} = rowControl;
            onClickHandler = is(Object, onClickHandler) ? curry(onClickHandler)(__, rowIndex) : null;

            return <FontIcon
                key={`control_${index}`}
                size='small'
                accent
                className={this._getControlIconClassName()}
                iconClassName={iconClassName}
                onClick={onClickHandler}
            />;
        }, rowControls);

        return <ElementsRow alignment='right'>
            {controls}
        </ElementsRow>;
    }

    _prepareColumnNames(columnNames: ColumnNamesType): ColumnNamesType {
        if (!this._shouldShowRowControls()) {
            return columnNames;
        }

        columnNames = this._shouldShowRowControls() ? append('', columnNames) : columnNames;
        columnNames = this._shouldShowRowSelector() ? prepend(<FormCheckboxInputComponent variant={1}/>, columnNames) : columnNames;

        return columnNames;
    }

    _addRowControls(dataRow: RowDataType): RowDataType {
        const indexColumn: number | null = this._getIdColumnIndex();
        const rowControls: RowControlsType | null = this._getRowControls();

        const preparedControls: React.Node = this._prepareRowControls(rowControls, dataRow[indexColumn]);
        return append(preparedControls, dataRow);
    }

    _addRowSelector(dataRow) {
        return prepend(<FormCheckboxInputComponent variant={1}/>, dataRow);
    }

    _prepareData(data: DataType): DataType | null {
        if (!this._shouldShowRowControls() && !this._shouldShowRowSelector()) {
            return data;
        }

        return map((dataRow: RowDataType) => {
            dataRow = this._shouldShowRowControls() ? this._addRowControls(dataRow) : dataRow;
            dataRow = this._shouldShowRowSelector() ? this._addRowSelector(dataRow) : dataRow;

            return dataRow;
        }, data);
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getControlIconClassName(): string {
        return this.props.classes.controlIcon;
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _shouldShowRowSelector(): boolean {
        return !isNil(this._getIdColumnIndex()) && !isNil(this._areRowsSelectable());
    }

    _shouldShowRowControls(): boolean {
        return !isNil(this._getIdColumnIndex()) && !isNil(this._getRowControls());
    }

    _areRowsSelectable(): boolean {
        return defaultTo(ControlledTableClass.defaultProps.selectableRows)(this.props.selectableRows);
    }

    _getRowControls(): boolean {
        return defaultTo(ControlledTableClass.defaultProps.rowControls)(this.props.rowControls);
    }

    _getColumnNames(): ColumnNamesType {
        return defaultTo(ControlledTableClass.defaultProps.columnNames)(this.props.columnNames);
    }

    _getData(): DataType | null {
        return defaultTo(clone(ControlledTableClass.defaultProps.data))(this.props.data);
    }

    _getIdColumnIndex(): number | null {
        return defaultTo(ControlledTableClass.defaultProps.idColumnIndex)(this.props.idColumnIndex);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    render(): React.Node {
        return <RegularTableComponent
            {...this.props}
            idColumnIndex={unless(isNil, this._prepareIdColumnIndex)(this._getIdColumnIndex())}
            data={unless(isNil, this._prepareData)(this._getData())}
            columnNames={unless(isNil, this._prepareColumnNames)(this._getColumnNames())}
        />;
    }

    // endregion
}

function ControlledTableComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <ControlledTableClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

ControlledTableComponent.displayName = 'ControlledTableComponent';

// exports
export {ControlledTableClass, ControlledTableComponent};
export default ControlledTableComponent;
