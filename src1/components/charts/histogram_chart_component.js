'use strict';

// @flow

// external imports
import type {ElementType} from 'react';

import * as React from 'react';


import {min, max} from 'd3-array'
import {scaleLinear} from 'd3-scale';
//import d3Histogram from 'd3-histogram';

// local imports
import HistogramChartBarComponent from './partials/histogram/histogram_chart_bar_component';
import HistogramChartAxisComponent from './partials/histogram/histogram_chart_axis_component';

import {MainThemeContext} from '../../../src/theming/providers/main_theme_provider';

// type definitions
type PropsTypes = {

};

type StateTypes = {};

// styles definition


class HistogramChartClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'HistogramChartClass';

    static defaultProps = {
    };

    // endregion

    // region private props
    // endregion

    // region constructor
    constructor(props) {
        super(props);

       // this.histogram = d3Histogram();
        this.widthScale = scaleLinear();
        this.yScale = scaleLinear();

        this.updateD3(props);
    }

    // endregion

    // region business logic
    makeBar(bar) {
        let percent = bar.length / this.props.data.length * 100;

        let props = {
            percent: percent,
            x: this.props.axisMargin,
            y: this.yScale(bar.x0),
            width: this.widthScale(bar.length),
            height: this.yScale(bar.x1 - bar.x0),
            key: "histogram-bar-"+bar.x0
        };

        return (
            <HistogramChartBarComponent {...props} />
        );
    }

    updateD3(props) {
        /*this.histogram
            .thresholds(props.bins)
            .value(props.value);*/

        const bars = [
            [1],[2],[3],[4],[5]
        ];
        const counts = bars.map((d) => d.length);

        this.widthScale
            .domain([min(counts), max(counts)])
            .range([0, props.width-props.axisMargin]);

        this.yScale
            .domain([0, max(bars, (d) => d.x1)])
            .range([0, props.height-props.y-props.bottomMargin]);
    }

    // endregion

    // region lifecycle methods
    componentWillReceiveProps(newProps) {
        this.updateD3(newProps);
    };

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
        const translate = `translate(${this.props.x}, ${this.props.y})`;

        const bars = [
            1,2,3,4,5
        ];

        return (
            <svg width="700" height="500">

                <g className='histogram' transform={translate}>
                    <g className='bars'>
                        {bars.map(this.makeBar.bind(this))}
                    </g>
                    <HistogramChartAxisComponent x={this.props.axisMargin-3} y={0} data={bars} scale={this.yScale} />
                </g>
            </svg>
        );
    }

    // endregion
}

function HistogramChartComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <HistogramChartClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

HistogramChartComponent.displayName = 'HistogramChartComponent';

// exports
export {HistogramChartClass, HistogramChartComponent};
export default HistogramChartComponent;
