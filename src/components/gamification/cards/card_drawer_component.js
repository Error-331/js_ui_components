'use strict';

// @flow

// external imports
import * as React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import injectSheet from 'react-jss';
import classNames from 'classnames';

import {defaultTo, inc, map} from 'ramda'

import {generateRandomIdNumber} from '@webfuturistics/design_components';

// local imports
import {DraggableCardComponent} from './draggable_card_component';

// type definitions
type CardContentType = void | null | string | number | React.Element<any>;

type DataType = {
    id: number | string,
    card: CardContentType,
    data: any
};

type DataArrayType = Array<DataType>;

type PropsTypes = {
    /**
     * Data for each card in the card drawer
     *
     */

    data?: DataArrayType,

    minRowSize: number | string,

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

        gridTemplateColumns: 'repeat(auto-fill, minmax(calc(3.125vw + 200px), 1fr))',
        gridAutoRows: 'minmax(175px, max-content)',

        gridGap: '12px',
    },
});

// component implementation

// $FlowFixMe decorators
@DragDropContext(HTML5Backend)
@injectSheet(styles)
export class CardDrawerComponent extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'CardDrawerComponent';

    static defaultProps = {
        classes: {}
    };

    // endregion

    // region private props
    _dndType: string = `card_drawer_${generateRandomIdNumber()}`;

    // endregion

    // region constructor
    constructor(props: PropsTypes): void {
        super(props);
    }

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
    _getMinRowSize() {

    }

    _getData(): DataArrayType {
        return defaultTo([])(this.props.data);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderDraggableCards(): Array<React.Node> {
        let draggableCardKey: number = -1;

        return map(({id, data, card}) => {
            draggableCardKey = inc(draggableCardKey);
            return <DraggableCardComponent id={id} data={data} dndType={this._dndType} key={`draggable_card_${draggableCardKey}`}>
                {card}
            </DraggableCardComponent>;
        }, this._getData());
    }

    _renderComponentContainer(): React.Node {
        return <div className={this._getComponentContainerClass()}>
            {this._renderDraggableCards()}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion







    _getComponentContainerClass(): string {
        return this.props.classes.componentContainer;
    }
}

// exports