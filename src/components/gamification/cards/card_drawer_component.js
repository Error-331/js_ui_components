'use strict';

// @flow

// external imports
import * as React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import injectSheet from 'react-jss';
import classNames from 'classnames';

import {generateRandomIdNumber} from '@webfuturistics/design_components';

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
export class CardDrawerComponent extends React.Component<PropsTypes, StateTypes> {
    static displayName = 'CardDrawerComponent';

    _dndType: ?string = null;

    constructor(props: PropsTypes): void {
        super(props);

        this._dndType = this._createDNDType();
    }

    _createDNDType(): string {
        const randomIdNumber: number = generateRandomIdNumber();
        return `card_drawer_${randomIdNumber}`;
    }

    _getComponentContainerClass(): string {
        return this.props.classes.componentContainer;
    }

    _renderComponentContainer(): React.Node {
        return (<div className={this._getComponentContainerClass()}>
            <DraggableCardComponent dndType={this._dndType}>
                12
            </DraggableCardComponent>

            <DraggableCardComponent dndType={this._dndType}>
                12
            </DraggableCardComponent>

            <DraggableCardComponent dndType={this._dndType}>
                12
            </DraggableCardComponent>

            <DraggableCardComponent dndType={this._dndType}>
                12
            </DraggableCardComponent>
        </div>);
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }
}

// exports
