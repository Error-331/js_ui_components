'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

// local imports
import {DraggableCardComponent} from './draggable_card_component';

// type definitions
type PropsTypes = {
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
    componentContainer: {
        boxSizing: 'border-box',
        display: 'grid',

        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
    }
});

// component implementation
export class TestComponentClass extends React.Component<PropsTypes, StateTypes> {
    static displayName = 'TestComponent';

    _getComponentContainerClass(): string {
        return this.props.classes.componentContainer;
    }

    _renderComponentContainer(): React.Node {
        return (<div className={this._getComponentContainerClass()}>
            <DraggableCardComponent>
                12
            </DraggableCardComponent>

            <DraggableCardComponent>
                12
            </DraggableCardComponent>

            <DraggableCardComponent>
                12
            </DraggableCardComponent>

            <DraggableCardComponent>
                12
            </DraggableCardComponent>
        </div>);
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }
}

// exports
export const TestComponent = injectSheet(styles)(TestComponentClass);