'use strict';

// @flow

// external imports
import type {ElementType} from 'react';

import * as d3 from 'd3';
import {csv} from 'd3-fetch';
import {timeParse} from 'd3-time-format';

import * as React from 'react';

// local imports
import {MainThemeContext} from './../../theming/providers/main_theme_provider';

// type definitions
type PropsTypes = {

};

type StateTypes = {};

// styles definition

/**
 * Chip component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
class TestChartClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'TestChartComponent';

    static defaultProps = {
    };

    // endregion

    // region private props
    // endregion

    // region constructor
    // endregion

    // region business logic
    loadRawData() {
        const dateFormat = timeParse("%m/%d/%Y");

        csv(this.props.url, (dataRow) => {
            if (!dataRow['base salary']) {
                return null;
            }
            return {employer: dataRow.employer,
                submit_date: dateFormat(dataRow['submit date']),
                start_date: dateFormat(dataRow['start date']),
                case_status: dataRow['case status'],
                job_title: dataRow['job title'],
                base_salary: Number(dataRow['base salary']),
                salary_to: dataRow['salary to'] ? Number(dataRow['salary to']) : null,
                city: dataRow.city,
                state: dataRow.state};
        }).then((data) => {
            this.setState({
                rawData: data
            })


            console.log('22', data);
        })





    }

    // endregion

    // region lifecycle methods
    componentWillMount() {
        this.loadRawData();
    }

    // endregion

    // region style accessors
    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    // endregion

    // region handlers
    // endregion

    // region render methods
    render(): React.Node {
        return (
            <div className="row">
                <div className="col-md-12">
                    <svg width="700" height="500">
                    </svg>
                </div>
            </div>
        );
    }

    // endregion
}

function TestChartComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <TestChartClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

TestChartComponent.displayName = 'TestChartComponent';

// exports
export {TestChartClass, TestChartComponent};
export default TestChartComponent;
