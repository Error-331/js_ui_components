'use strict';

// @flow

// external imports
import * as React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

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

// $FlowFixMe decorators
@DragDropContext(HTML5Backend)
@injectSheet(styles)
export class TestComponent extends React.Component<PropsTypes, StateTypes> {
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
