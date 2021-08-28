'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import {T, equals, is, isNil, ifElse, cond, always, clone, defaultTo, bind, omit, map} from 'ramda';
import moment from 'moment';

// local imports
import {longTextCellStylesFunc, commonCellContentStylesFunc} from '../../../src/theming/common_styles/table_styles';

import type {UserPropsTypes as VerticalTablePropsTypes} from './vertical_table_component';
import type {UserPropsTypes as HorizontalTablePropsTypes} from './horizontal_table_component';

import {MainThemeContext} from '../../../src/theming/providers/main_theme_provider';
import TextBlock from '../layout/text/text_block';

import {FormCheckboxVariant3Component} from '../form/form_checkbox_variants/form_checkbox_variant3_component';

import {HorizontalTableComponent} from './horizontal_table_component';
import {VerticalTableComponent} from './vertical_table_component';

// type definitions
type BasicColumnDataType = void | null | string | number | boolean | moment | React.Element<any>;
type SpecificColumnDataType = {
    type: string,
    data: BasicColumnDataType
};
type PreparedColumnDataType = void | null | string | number | React.Element<any>;

type ColumnDataType = BasicColumnDataType | SpecificColumnDataType;
type RowDataType = Array<ColumnDataType>;
type PreparedRowDataType = Array<PreparedColumnDataType>;

type DataType = Array<RowDataType>;
type PreparedDataType = Array<PreparedRowDataType>;

type PropsTypes = (VerticalTablePropsTypes & HorizontalTablePropsTypes) & {
    /**
     * Flag that indicates whether placeholders should be shown for empty cells
     */

    showPlaceholder?: boolean,

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

type StateTypes = {
    tableType: string
};

// styles definition
const styles = theme => ({
    placeholderContainer: {
        width: '20px',
        borderTop: `1px solid ${theme.tableStyles.cellBorderColor}`
    },

    regularTextContainer: {
        extend: [commonCellContentStylesFunc(theme), longTextCellStylesFunc()],
        maxHeight: `${theme.tableStyles.cellLineHeight}px`,
    },

    longTextContainer: {
        extend: [commonCellContentStylesFunc(theme), longTextCellStylesFunc()],
        maxHeight: `${theme.tableStyles.cellLineHeight * 2}px`,

        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
});

// constants definition
export const SPECIFIC_COLUMN_TYPE_LONG_TEXT: string = 'SPECIFIC_COLUMN_TYPE_LONG_TEXT';

export const HORIZONTAL_TABLE_TYPE: string = 'horizontal';
export const VERTICAL_TABLE_TYPE: string = 'vertical';

/**
 * Regular table component styled according to material-UI guidelines.
 * Wrapper component for ['VerticalTableComponent'](#verticaltablecomponent) and ['HorizontalTableComponent'](#horizontaltablecomponent). It will change it representation
 * based on clients screen dimensions (['VerticalTableComponent'](#verticaltablecomponent) will be used for mobile like devices and
 * ['HorizontalTableComponent'](#horizontaltablecomponent) will be used for other devices).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
class RegularTableClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'RegularTableClass';

    static defaultProps = {
        showPlaceholder: false,
        data: null,
    };

    // endregion

    // region private props
    // endregion

    // region constructor
    constructor(props: PropsTypes) {
        super(props);

        this.state = {
            tableType: VERTICAL_TABLE_TYPE
        };
    }

    // endregion

    // region business logic
    _prepareNilColumnData(): React.Node {
        const showPlaceholder: boolean = this._getShowPlaceholder();
        return showPlaceholder ? <div className={this._getPlaceholderContainerClassName()}/> : '';
    }

    _prepareStringColumn(columnData: string): React.Node {
        return <TextBlock className={this._getRegularTextContainerClassName()}>
            {columnData}
        </TextBlock>;
    }

    _prepareLongTextColumn(columnData: SpecificColumnDataType): React.Node {
        const {data} = columnData;

        return <TextBlock className={this._getLongTextContainerClassName()}>
            {data}
        </TextBlock>;
    }

    _prepareSpecificColumnData(columnData: ColumnDataType): string | React.Node {
        if (typeof columnData !== 'object' || isNil(columnData)) {
            return this._prepareNilColumnData();
        }

        if (React.isValidElement(columnData)) {
            return columnData;
        }

        if (!columnData.type || !columnData.data) {
            return '';
        }

        return cond([
            [({type}) => equals(SPECIFIC_COLUMN_TYPE_LONG_TEXT, type), bind(this._prepareLongTextColumn, this)],
            [T, always('')]
        ])(columnData);
    }

    _prepareColumnData(columnData: ColumnDataType): PreparedColumnDataType {
        return cond([
            [isNil, bind(this._prepareNilColumnData, this)],
            [(columnData: ColumnDataType) => moment.isMoment(columnData), (columnData: moment) => columnData.format('YYYY-M-d H:mm:ss')],
            [is(Date), (columnData: moment) => moment(columnData).format('YYYY-M-d H:mm:ss')],
            [is(Boolean), (columnData: ColumnDataType) => <FormCheckboxVariant3Component forceCheck={columnData}/>],
            [is(Number), bind(this._prepareStringColumn, this)],
            [is(String), bind(this._prepareStringColumn, this)],
            [is(Object), bind(this._prepareSpecificColumnData, this)],
            [T, bind(this._prepareNilColumnData, this)]
        ])(columnData);
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getLongTextContainerClassName(): string {
        return this.props.classes.longTextContainer;
    }

    _getRegularTextContainerClassName(): string {
        return this.props.classes.regularTextContainer;
    }

    _getPlaceholderContainerClassName(): string {
        return this.props.classes.placeholderContainer;
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getShowPlaceholder(): boolean {
        return defaultTo(RegularTableClass.defaultProps.showPlaceholder)(this.props.showPlaceholder);
    }

    _getData(): DataType | null {
        return defaultTo(clone(RegularTableClass.defaultProps.data))(this.props.data);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    render(): React.Node {
        const data: DataType | null = this._getData();

        if (isNil(data)) {
            return null;
        }

        const preparedData: PreparedDataType = map(map(bind(this._prepareColumnData, this)), data);

        return ifElse(
            equals(HORIZONTAL_TABLE_TYPE),
            always(<HorizontalTableComponent {...omit(['data', 'classes'], this.props)} data={preparedData}/>),
            always(<VerticalTableComponent {...omit(['data', 'classes'], this.props)} data={preparedData} />)
        )(this.state.tableType);
    }

    // endregion
}

function RegularTableComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <RegularTableClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

RegularTableComponent.displayName = 'RegularTableComponent';

// exports
export {RegularTableClass, RegularTableComponent};
export default RegularTableComponent;
