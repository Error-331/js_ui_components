'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import {axisLeft} from 'd3-axis';
import {format} from 'd3-format';
import {select} from 'd3-selection';

// local imports
import {MainThemeContext} from '../../../../../src/theming/providers/main_theme_provider';

// type definitions
type PropsTypes = {
};

type StateTypes = {};

// styles definition
const styles = theme => ({
});

// component implementation
// $FlowFixMe decorators
@injectSheet(styles, {injectTheme: true})
class HistogramChartAxisClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'HistogramChartAxisClass';

    static defaultProps = {
    };

    // endregion

    // region private props
    // endregion

    // region constructor
    // endregion

    // region business logic
    prepareAxis() {
        const axis = axisLeft()
            .tickFormat(d => `${format(".2s")(d)}`)
            .scale(this.props.scale)
            .ticks(this.props.data.length);

        select(this.refs.anchor)
            .call(axis);
    }

    // endregion

    // region lifecycle methods
    componentDidMount() {
        this.prepareAxis();
    };

    componentDidUpdate() {
        this.prepareAxis();
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
        const { x, y } = this.props;
        return <g transform={`translate(${x}, ${y})`} ref="anchor" />;
    }

    // endregion
}

function HistogramChartAxisComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <HistogramChartAxisClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

HistogramChartAxisComponent.displayName = 'HistogramChartAxisComponent';

// exports
export {HistogramChartAxisClass, HistogramChartAxisComponent};
export default HistogramChartAxisComponent;

