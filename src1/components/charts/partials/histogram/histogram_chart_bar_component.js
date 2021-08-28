'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import {MainThemeContext} from "../../../../../src/theming/providers";
import {HistogramChartAxisClass} from "./histogram_chart_axis_component";

// local imports

// type definitions
type PropsTypes = {
};

// styles definition
const styles = theme => ({
});


// component implementation
// $FlowFixMe decorators
@injectSheet(styles, {injectTheme: true})
class HistogramChartBarClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'HistogramChartBarClass';

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
        let translate = `translate(${this.props.x}, ${this.props.y})`;
        let label = this.props.percent.toFixed(0)+'%';

        if (this.props.percent < 1) {
            label = this.props.percent.toFixed(2) + '%';
        }

        if (this.props.width < 20) {
            label = label.replace("%", "");
        }

        if (this.props.width < 10) {
            label = '';
        }

        return (
            <g transform={translate} className='bar'>
                <rect width={this.props.width}
                      height={this.props.height - 2}
                      transform='translate(0, 1)'>
                </rect>
                <text textAnchor='end'
                      x={this.props.width - 5}
                      y={this.props.height / 2 + 3}>
                    {label}
                </text>
            </g>
        );
    }

    // endregion
}

function HistogramChartBarComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <HistogramChartBarClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

HistogramChartBarComponent.displayName = 'HistogramChartBarComponent';

// exports
export {HistogramChartAxisClass, HistogramChartBarComponent};
export default HistogramChartBarComponent;
