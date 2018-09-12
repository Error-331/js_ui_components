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
    RegularCardComponent,
    RegularCardHeaderComponent,

    InlineHeader
} from './../layout';

import {SimpleMonthSelectorComponent} from './simple_month_selector_component';
import {MainThemeContext} from './../../theming';

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
const daySelectionInnerContainer = (theme) => ({
    padding: '20px',

    color: theme.dateStyles.fontColor,
});

const styles = theme => ({
    headerTitleContainer: {
        boxSizing: 'border-box',
        display: 'grid',

        width: '100%',

        gridTemplateColumns: '1fr',
        gridTemplateRows: 'max-content max-content',

        gridRowGap: '2px',

        '& > $headerTitleText': {
            color: theme.layoutStyles.headerFontColor
        }
    },

    headerTitleText: {},

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

        '& > $daysSelectionHeaderContainer': {
            '& > $daySelectionHeaderOuterContainer': {
                '& > $daySelectionHeaderInnerContainer': {
                    extend: daySelectionInnerContainer(theme),
                }
            }
        },

        '& > $daysSelectionBodyContainer': {
            '& > $daySelectionBodyOuterContainer': {
                '& > $daySelectionBodyInnerContainer': {
                    extend: daySelectionInnerContainer(theme),

                    '&.selected': {
                        borderRadius: '50%',
                        backgroundColor: theme.dateStyles.selectionBackgroundColor,

                        color: theme.dateStyles.selectionFontColor,
                    }
                },

                '& > $daySelectionBodyInnerContainer:not(.selected):not(:empty)': {
                    cursor: 'pointer',
                },
            }

        },
    },

    daysSelectionInnerContainer: {},
    daysSelectionHeaderContainer: {},
    daysSelectionBodyContainer: {},

    daySelectionHeaderOuterContainer: {},
    daySelectionHeaderInnerContainer: {},

    daySelectionBodyOuterContainer: {},
    daySelectionBodyInnerContainer: {},
});

// constants declaration
const EMPTY_DATE_CELL_DATA = 'empty';

/**
 * Simple small calendar component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
export class SimpleSmallCalendarClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'SimpleSmallCalendarClass';

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
    _getHeaderTitleTextClassName(): string {
        return this.props.classes.headerTitleText;
    }

    _getHeaderTitleContainerClassName(): string {
        return this.props.classes.headerTitleContainer;
    }

    _getDaysSelectionOuterContainerClassName(): string {
        return this.props.classes.daysSelectionOuterContainer;
    }

    _getDaysSelectionHeaderContainerClassName(): string {
        const {daysSelectionInnerContainer, daysSelectionHeaderContainer} = this.props.classes;
        return classNames(daysSelectionInnerContainer, daysSelectionHeaderContainer);
    }

    _getDaySelectionHeaderOuterCellClassName(): string {
        return this.props.classes.daySelectionHeaderOuterContainer;
    }

    _getDaySelectionHeaderInnerCellClassName(): string {
        return this.props.classes.daySelectionHeaderInnerContainer;
    }

    _getDaysSelectionBodyContainerClassName(): string {
        const {daysSelectionInnerContainer, daysSelectionBodyContainer} = this.props.classes;
        return classNames(daysSelectionInnerContainer, daysSelectionBodyContainer);
    }

    _getDaySelectionBodyOuterCellClassName(): string {
        return this.props.classes.daySelectionBodyOuterContainer;
    }

    _getDaySelectionBodyInnerCellClassName(selected: boolean): string {
        return classNames(this.props.classes.daySelectionBodyInnerContainer, {'selected': selected});
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
        return defaultTo(SimpleSmallCalendarClass.defaultProps.onDateSelect)(this.props.onDateSelect);
    }

    _getShowMonthSelector(): boolean {
        return defaultTo(SimpleSmallCalendarClass.defaultProps.showMonthSelector)(this.props.showMonthSelector);
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
            (dayCellData) => isNil(dayCellData) || equals(EMPTY_DATE_CELL_DATA, dayCellData),
            (dayCellData) => this._getOnDateSelectCallback()(moment(dayCellData))
        )(dayCellData);
    }

    // endregion

    // region render methods
    _renderDaysSelectionHeader(): React.ChildrenArray<React.Node> {
        const weekDays = moment.weekdaysMin();
        const mapIndexed = addIndex(map);

        return mapIndexed((day, dayIndex) => <div key={`weekDay_${dayIndex}`} className={this._getDaySelectionHeaderOuterCellClassName()}>
            <div className={this._getDaySelectionHeaderInnerCellClassName()}>
                {weekDays[dayIndex]}
            </div>
        </div>, weekDays);
    }

    _renderDaysSelectionBodyCell(dayIndex: number, cellText: number | string, isSelected: boolean, currentDayDate?: moment) {

        return <div key={`day_${dayIndex}`} className={this._getDaySelectionBodyOuterCellClassName()} data-date={isNil(currentDayDate) ? EMPTY_DATE_CELL_DATA : currentDayDate.format()}>
                <div className={this._getDaySelectionBodyInnerCellClassName(isSelected)}>{cellText}</div>
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

    _renderDaysSelection(): React.Node {
        return <div className={this._getDaysSelectionOuterContainerClassName()}>
            <div className={this._getDaysSelectionHeaderContainerClassName()}>
                {this._renderDaysSelectionHeader()}
            </div>

            <div className={this._getDaysSelectionBodyContainerClassName()} onClick={this._onDayCellClick}>
                {this._renderDaysSelectionRows()}
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
        const formattedDate: string = this._getDate().format('dd, MMM MM');
        return <InlineHeader className={this._getHeaderTitleTextClassName()} level={4}>{formattedDate}</InlineHeader>;
    }

    _renderHeaderYear(): React.Node {
        const formattedDate: string = this._getDate().format('YYYY');
        return <InlineHeader className={this._getHeaderTitleTextClassName()} level={6}>{formattedDate}</InlineHeader>;
    }

    _renderCardHeader(): React.Node {
        return <RegularCardHeaderComponent titleClassName={this._getHeaderTitleContainerClassName()}>
            {this._renderHeaderYear()}
            {this._renderHeaderDate()}
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
export function SimpleSmallCalendarComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <SimpleSmallCalendarClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

SimpleSmallCalendarComponent.displayName = 'SimpleSmallCalendarComponent';