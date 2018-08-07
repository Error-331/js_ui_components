'use strict';

// @flow

// external imports

import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {T, defaultTo, cond, addIndex, range, gt, lt, add, map} from 'ramda';
import moment from 'moment';

// local imports
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

// type definitions
type PropsTypes = {


    date?: Date | string,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
}

type StateTypes = {};

// styles definition
const styles = theme => ({
    daysSelectionTable: {
        boxSizing: 'border-box',
        tableLayout: 'fixed',

        width: '100%',

        '& th, td': {
            overflow: 'hidden',

            width: '40px',
            height: '40px',

            border: '0px none',
            borderCollapse: 'collapse',
            padding: '10px',

            textAlign: 'center',
            color: 'red'
        },

        '& td:hover:not(.c-selected):not(:empty)': {
            cursor: 'pointer'
        },

        '& td.selected': {
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
    };

    // endregion

    // region constructor
    // endregion

    // region general logic methods
    _normalizeDate(usrDate: moment): moment {
        return usrDate.clone().hour(0).minute(0).second(0).millisecond(0);
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getDate(): moment {
        const {date} = this.props;
        const currentDate: moment = defaultTo(moment())(moment(date));

        return this._normalizeDate(currentDate);
    }

    _getStartOfMonthOfDate() {
        return this._getDate().date(1)
    }

    _getEndOfMonthOfDate(): moment {
        return this._getDate().endOf('month');
    }

    _getNumberOfDays(): number {
        return this._getEndOfMonthOfDate().date();
    }

    _getNumberOfWeeks(): number {
        const numberOfDays: number = this._getNumberOfDays();
        return Math.floor(numberOfDays / 7) + (numberOfDays % 7 > 0 ? 1 : 0);
    }

    _getStartingDayNumber(): number {
        return this._getStartOfMonthOfDate().day();
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderDaysSelectionHeader(): React.Node {
        const weekDays = moment.weekdaysMin();
        const mapIndexed = addIndex(map);

        const weekDayCells = mapIndexed((day, dayIndex) => <th key={`weekDay_${dayIndex}`}>{weekDays[dayIndex]}</th>, weekDays);
        return <tr>{weekDayCells}</tr>;
    }

    _renderDaysSelectionBodyCell(dayIndex: number, cellText: number | string, isSelected: boolean) {
        const cellClasses = classNames({'c-selected': isSelected});
        return <td key={`day_${dayIndex}`} className={cellClasses}>{cellText}</td>;
    }

    _renderDaySelectionDays(weekIndex: number): React.Node {
        const currentDate: moment = this._getDate();
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
                return this._renderDaysSelectionBodyCell(dayIndex, currentDayText, currentDate.isSame(currentDayDate));
            }]
        ]), range(7 * weekIndex, (7 * weekIndex) + 7));
    }

    _renderDaysSelectionRows(): React.Node {
        const numberOfWeeks: number = this._getNumberOfWeeks();
        return map((weekIndex: number): React.Node => <tr key={`week_${weekIndex}`}>{this._renderDaySelectionDays(weekIndex)}</tr>,
            range(0, numberOfWeeks));
    }

    _renderDaysSelectionBody(): React.Node {
        return this._renderDaysSelectionRows();
    }

    _renderDaysSelection(): React.Node {
        return <Container>
            <Row>
                <Col full={true}>
                    <table className={this.props.classes.daysSelectionTable}>
                        <thead>
                            {this._renderDaysSelectionHeader()}
                        </thead>

                        <tbody>
                            {this._renderDaysSelectionBody()}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>;
    }

    _renderMonthNavigation(): React.Node {
        return null;
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
            {this._renderMonthNavigation()}
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