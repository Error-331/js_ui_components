'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {T, isNil, equals, defaultTo, unless, cond, addIndex, range, gt, lt, add, map} from 'ramda';
import moment from 'moment';

// local imports
import type {ExtendedEventTargetType, CombinedEventType} from './../../types/dom_types';

import {
    SimpleFlexGridContainer as Container,
    SimpleFlexGridRow as Row,
    SimpleFlexGridColumn as Col,
} from './../grid';

import {
    RegularCardComponent,
    RegularCardHeaderComponent,

    InlineHeader
} from './../layout';

import {SimpleMonthSelectorComponent} from './simple_month_selector_component';

// type definitions
type DateType = moment | Date | string;

type OnDateSelectCallbackType = (date: moment) => void;

type PropsTypes = {
    /**
     * Current selected date
     */

    date?: DateType,

    /**
     * Flag that indicates whether selected date should be highlighted
     */

    heightLightDate?: boolean,

    compact?: boolean,

    selectable?: boolean,

    /**
     * Flag that indicates whether month selector should be shown
     */

    showMonthSelector?: boolean,

    /**
     * Callback function which will be called once user selects new date
     */

    onDateSelect?: OnDateSelectCallbackType,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
}

type StateTypes = {
    /**
     * Internal selected date
     */

    date: moment,
};

// styles definition
const styles = theme => ({
    daysSelectionOuterContainer: {
        boxSizing: 'border-box',
        display: 'grid',

        gridAutoColumns: '1fr',
        gridAutoRows: 'max-content max-content',

        '& > $daysSelectionInnerContainer': {
            boxSizing: 'border-box',
            display: 'grid',

            gridTemplateColumns: 'repeat(7, 1fr)',
            gridAutoRows: 'minmax(40px, 1fr)',

            justifyItems: 'center',
            alignItems: 'center'
        },

        '& > $daysSelectionHeaderContainer': {},
        '& > $daysSelectionBodyContainer': {
            '& > $daySelectionOuterContainer': {
                '& > $daySelectionInnerContainer': {
                    padding: '20px',

                    '&.selected': {
                        borderRadius: '50%',
                        backgroundColor: 'green',

                        color: 'purple',
                    }
                },

                '& > $daySelectionInnerContainer:not(.selected):not(:empty)': {
                    cursor: 'pointer',
                },
            }

        },
    },

    daysSelectionInnerContainer: {},
    daysSelectionHeaderContainer: {},
    daysSelectionBodyContainer: {},

    daySelectionOuterContainer: {},
    daySelectionInnerContainer: {},

    daysSelectionTable: {
        boxSizing: 'border-box',
        tableLayout: 'fixed',

        width: '100%',

        '& td:hover:not(.c-selected):not(:empty)': {
            cursor: 'pointer',
        },

        '& td.c-selected': {
            borderRadius: '50%',
            backgroundColor: 'green',

            color: 'purple'
        }
    }
});

/**
 * Simple small calendar component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
export class SimpleSmallCalendarComponentClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'SimpleSmallCalendarComponent';

    static defaultProps = {
        date: moment(),
        heightLightDate: true,
        compact: false,
        selectable: true,
        showMonthSelector: true,

        onDateSelect: () => {},
    };

    // endregion

    // region constructor
    constructor(props: PropsTypes): void {
        super(props);
        const self: any = this;

        self._onMonthSelected = self._onMonthSelected.bind(this);
        self._onDayCellClick = self._onDayCellClick.bind(this);

        const {date} = props;

        this.state = {
            date: this._getDateOrDefault(date)
        };
    }

    // endregion

    // region general logic methods
    // TODO: to generic functions
    _normalizeDate(usrDate: moment): moment {
        return usrDate.clone().hour(0).minute(0).second(0).millisecond(0);
    }

    // TODO: to generic functions
    _getDateOrDefault(usrDate?: DateType): moment {
        const currentDate: moment = defaultTo(moment())(moment(usrDate));
        return this._normalizeDate(currentDate);
    }

    // endregion

    // region lifecycle methods
    _onMonthSelected(newDate: moment) {
        this.setState({
            date: newDate
        });
    }

    // endregion

    // region style accessors
    _getDaysSelectionOuterContainerClassName(): string {
        return this.props.classes.daysSelectionOuterContainer;
    }

    _getDaysSelectionHeaderContainerClassName(): string {
        const {daysSelectionInnerContainer, daysSelectionBodyContainer} = this.props.classes;
        return classNames(daysSelectionInnerContainer, daysSelectionBodyContainer);
    }

    _getDaysSelectionBodyContainerClassName(): string {
        const {daysSelectionInnerContainer, daysSelectionBodyContainer} = this.props.classes;
        return classNames(daysSelectionInnerContainer, daysSelectionBodyContainer);
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    _getDate(): moment {
        return this.state.date.clone();
    }

    _getDateForMonthSelector(): moment {
        return moment(this._getDate()).day(1);
    }

    _getStartOfMonthOfDate() {
        return this._getDate().date(1)
    }

    _getEndOfMonthOfDate(): moment {
        return this._getDate().endOf('month');
    }

    _getStartOfMonthDay() {
        return this._getStartOfMonthOfDate().day();
    }

    _getNumberOfDays(): number {
        return this._getEndOfMonthOfDate().date();
    }

    _getNumberOfWeeks(): number {
        const numberOfDays: number = this._getNumberOfDays();
        const startOfMonthDay: number = this._getStartOfMonthDay();

        const numberOfDaysWithPadding: number = numberOfDays + startOfMonthDay;

        return Math.floor(numberOfDaysWithPadding / 7) + (numberOfDaysWithPadding % 7 > 0 ? 1 : 0);
    }

    _getStartingDayNumber(): number {
        return this._getStartOfMonthOfDate().day();
    }

    // endregion

    // region prop accessors
    _getSelectedDate(): moment | null {
        if (isNil(this.props.date)) {
            return null;
        } else {
            return moment(this.props.date);
        }
    }

    _getOnDateSelectCallback(): OnDateSelectCallbackType {
        return defaultTo(SimpleSmallCalendarComponentClass.defaultProps.onDateSelect)(this.props.onDateSelect);
    }

    _getShowMonthSelector(): boolean {
        return defaultTo(SimpleSmallCalendarComponentClass.defaultProps.showMonthSelector)(this.props.showMonthSelector);
    }

    // endregion

    // region handlers
    _onDayCellClick(event: CombinedEventType): void {
        const target: ExtendedEventTargetType = event.target;

        const dayCellElement: ExtendedEventTargetType = unless(
            currentTarget => equals('div[data-date]', currentTarget.tagName.toLowerCase()),
            currentTarget => currentTarget.closest('div[data-date]'))(target);

        const dayCellData: string | null = isNil(dayCellElement) ? null : dayCellElement.dataset['date'];

        unless(
            (dayCellData) => isNil(dayCellData) || equals('empty', dayCellData),
            (dayCellData) => this._getOnDateSelectCallback()(moment(dayCellData))
        )(dayCellData);
    }

    // endregion

    // region render methods
    _renderDaysSelectionHeader(): React.ChildrenArray<React.Node> {
        const weekDays = moment.weekdaysMin();
        const mapIndexed = addIndex(map);

        return mapIndexed((day, dayIndex) => <div key={`weekDay_${dayIndex}`}>{weekDays[dayIndex]}</div>, weekDays);
    }

    _renderDaysSelectionBodyCell(dayIndex: number, cellText: number | string, isSelected: boolean, currentDayDate?: moment) {
        const cellClasses2 = classNames(this.props.classes.daySelectionInnerContainer, {'selected': isSelected});
        return <div key={`day_${dayIndex}`} className={this.props.classes.daySelectionOuterContainer} data-date={isNil(currentDayDate) ? 'empty' : currentDayDate.format()}>
                <div className={cellClasses2}>{cellText}</div>
            </div>;
    }

    _renderDaySelectionDays(weekIndex: number): React.Node {
        const selectedDate: moment | null = this._getSelectedDate();
        const currentDayDate: moment = this._getDate();

        const startingDayNumber: number = this._getStartingDayNumber();
        const numberOfDays: number = add(this._getNumberOfDays(), startingDayNumber) - 1;

        return map(cond([
            [(dayIndex) => gt(dayIndex, numberOfDays), (dayIndex) => this._renderDaysSelectionBodyCell(dayIndex, '', false)],
            [(dayIndex) => lt(dayIndex, startingDayNumber), (dayIndex) => this._renderDaysSelectionBodyCell(dayIndex, '', false)],
            [T, (dayIndex) => {
                const currentDay: number = dayIndex - (startingDayNumber - 1);
                const currentDayText: string = (dayIndex + 1 - startingDayNumber).toString();

                currentDayDate.set('date', currentDay);
                const isSameDate: boolean = isNil(selectedDate) ? false : currentDayDate.isSame(this._normalizeDate(selectedDate));

                return this._renderDaysSelectionBodyCell(dayIndex, currentDayText, isSameDate, currentDayDate);
            }]
        ]), range(7 * weekIndex, (7 * weekIndex) + 7));
    }

    _renderDaysSelectionRows(): React.ChildrenArray<React.Node> {
        const numberOfWeeks: number = this._getNumberOfWeeks();
        return map((weekIndex: number): React.Node => this._renderDaySelectionDays(weekIndex),
            range(0, numberOfWeeks));
    }

    _renderDaysSelectionBody(): React.Node {
        return this._renderDaysSelectionRows();
    }

    _renderDaysSelection(): React.Node {
        return <div className={this._getDaysSelectionOuterContainerClassName()}>
            <div className={this._getDaysSelectionHeaderContainerClassName()}>
                {this._renderDaysSelectionHeader()}
            </div>

            <div className={this._getDaysSelectionBodyContainerClassName()} onClick={this._onDayCellClick}>
                {this._renderDaysSelectionBody()}
            </div>
        </div>;
    }

    _renderMonthSelector(): React.Node {
        return cond([
           [equals(true), () => <SimpleMonthSelectorComponent onDateChange={this._onMonthSelected} initialDate={this._getDateForMonthSelector()} />],
           [equals(false), () => null]
        ])(this._getShowMonthSelector());
    }

    _renderHeaderDate(): React.Node {
        return <InlineHeader level={4}>Fri, Jul 28</InlineHeader>;
    }

    _renderHeaderYear(): React.Node {
        return <InlineHeader level={6}>2017</InlineHeader>;
    }

    _renderCardHeader(): React.Node {
        return <RegularCardHeaderComponent>
            <Container>
                <Row>
                    <Col full={true}>
                        {this._renderHeaderYear()}
                    </Col>
                </Row>

                <Row>
                    <Col full={true}>
                        {this._renderHeaderDate()}
                    </Col>
                </Row>
            </Container>
        </RegularCardHeaderComponent>;
    }

    _renderCard(): React.Node {
        return <RegularCardComponent header={this._renderCardHeader()}>
            {this._renderMonthSelector()}
            {this._renderDaysSelection()}
        </RegularCardComponent>;
    }

    render(): React.Node {
        return this._renderCard();
    }

    // endregion
}

// exports
export const SimpleSmallCalendarComponent = injectSheet(styles)(SimpleSmallCalendarComponentClass);