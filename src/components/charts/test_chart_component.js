'use strict';

// @flow

// external imports
import type {ElementType} from 'react';

import {min, max} from 'd3-array'
import {axisBottom} from 'd3-axis';
import {csv} from 'd3-fetch';
import {timeParse} from 'd3-time-format';
import {scaleLinear} from 'd3-scale';
import d3Histogram from 'd3-histogram';


import * as React from 'react';

// local imports
import {MainThemeContext} from './../../theming/providers/main_theme_provider';

// type definitions
type PropsTypes = {

};

type StateTypes = {};

// styles definition

/*

.histogram {
.bar {
rect {
fill: steelblue;
shape-rendering: crispEdges;
}
text {
fill: #fff;
font: 12px sans-serif;
}
}
}

 */


// component implementation
class TestAxisClass extends React.Component<PropsTypes, StateTypes> {
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
    componentWillMount () {
        this.yScale = scaleLinear();
        this.axis = axisBottom()
            .scale(this.yScale)
            .orient("left")
            .tickFormat(function (d) {
                return "$"+this.yScale.tickFormat()(d);
            }.bind(this));
        this.update_d3(this.props);
    };

    componentDidUpdate() {
        this.update_d3(this.props);
    };

    update_d3(props) {
        this.yScale
            .domain([0,
                dmax(props.data.map(
                    function (d) { return d.x+d.dx; }))])
            .range([0, props.height-props.topMargin-props.bottomMargin]);
        this.axis
            .ticks(props.data.length)
            .tickValues(props.data
                .map(function (d) { return d.x; })
                .concat(props.data[props.data.length-1].x
                    +props.data[props.data.length-1].dx));
    };

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
    // endregion

    // region handlers
    // endregion

    // region render methods
    render(): React.Node {
        var translate = "translate("+(this.props.axisMargin-3)+", 0)";
        return (
            <g className="axis" transform={translate}>
            </g>
        );
    }

    // endregion
}

class TestHistogramBarClass extends React.Component<PropsTypes, StateTypes> {
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
    // endregion

    // region handlers
    // endregion

    // region render methods
    render(): React.Node {
        var translate = "translate(" + this.props.x + "," + this.props.y + ")",
            label = this.props.percent.toFixed(0)+'%';


        if (this.props.percent < 1) {
            label = this.props.percent.toFixed(2)+"%";
        }
        if (this.props.width < 20) {
            label = label.replace("%", "");
        }
        if (this.props.width < 10) {
            label = "";
        }

        return (
            <g transform={translate} className="bar">
                <rect width={this.props.width}
                      height={this.props.height-2}
                      transform="translate(0, 1)">
                </rect>
                <text textAnchor="end"
                      x={this.props.width-5}
                      y={this.props.height/2+3}>
                    {label}
                </text>
            </g>
        );
    }

    // endregion
}

class TestHistogramClass extends React.Component<PropsTypes, StateTypes> {
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
    // endregion

    // region lifecycle methods
    componentWillMount() {
        this.histogram = d3Histogram();
        this.widthScale = scaleLinear();
        this.yScale = scaleLinear();
        this.update_d3(this.props);
    };

    componentDidUpdate() {
        this.update_d3(this.props);
    };

    update_d3(props) {
        this.histogram
            .bins(props.bins)
            .value(this.props.value);
        var bars = this.histogram(props.data),
            counts = bars.map(function (d) { return d.y; });
        this.setState({bars: bars});
        this.widthScale
            .domain([min(counts), max(counts)])
            .range([9, props.width-props.axisMargin]);
        this.yScale
            .domain([0, max(bars.map(function (d) { return d.x+d.dx; }))])
            .range([0, props.height-props.topMargin-props.bottomMargin]);
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
    makeBar(bar) {
        var percent = bar.y/this.props.data.length*100;
        var props = {percent: percent,
            x: this.props.axisMargin,
            y: this.yScale(bar.x),
            width: this.widthScale(bar.y),
            height: this.yScale(bar.dx),
            key: "histogram-bar-"+bar.x+"-"+bar.y}
        return (
            <TestHistogramBarClass {...props} />
        );
    },


    render(): React.Node {
        var translate = `translate(0, ${this.props.topMargin})`;
        return (
            <g className="histogram" transform={translate}>
                {this.state.bars.map(this.makeBar)}
            </g>
        );
    }

    // endregion
}

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
            });


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
        if (!this.state.rawData.length) {
            return (
                <h2>Loading data about 81,000 H1B visas in the software industry\
                </h2>
            );
        }

        var params = {
                bins: 20,
                width: 500,
                height: 500,
                axisMargin: 83,
                topMargin: 10,
                bottomMargin: 5,
                value: function (d) { return d.base_salary; }
            };

        const fullWidth = 700;


        return (
            <div className="row">
                <div className="col-md-12">
                    <svg width="700" height="500">
                        <TestHistogramClass {...params} data={this.state.rawData}/>
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
