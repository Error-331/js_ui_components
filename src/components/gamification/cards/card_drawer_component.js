'use strict';

// @flow

// external imports
import * as React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import injectSheet from 'react-jss';
import classNames from 'classnames';

import {is, defaultTo, inc, map} from 'ramda'

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

    gapSize?: number,

    colSize?: number,

    rowSize?: number,

    rowCount?: number,

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

        padding: '5px',

        gridTemplateColumns: 'repeat(auto-fill, minmax(295px, 1fr))',
        gridAutoRows: '175px'
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
    _getGapSize(): number {
        return defaultTo(12)(this.props.gapSize);
    }

    _getColSize(): number {
        return defaultTo(295)(this.props.colSize);
    }

    _getRowSize(): number {
        return defaultTo(175)(this.props.rowSize);
    }

    _getRowCount(): number | string {
        return defaultTo('auto')(this.props.rowCount);
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
        const gapSize = this._getGapSize();

        const colWidth = this._getColSize();
        const rowHeight = this._getRowSize();

        let containerStyles = {
            gridGap: `${gapSize}px`
        };

        const rowCount = this._getRowCount();

        if (is(Number, rowHeight)) {
            if (rowCount === 1) {
                containerStyles = Object.assign(containerStyles, {
                    'width': `${gapSize * (this.props.data.length * 2 - 2) + (colWidth * this.props.data.length)}px`,
                    'height': `${gapSize * 2 + rowHeight}px`,
                });
            } else if (rowCount > 1) {
                containerStyles = Object.assign(containerStyles, {
                    'height': `${(gapSize * rowCount) + rowHeight * rowCount}px`
                });
            }
        }

        return <div style={{ boxSizing: 'border-boz',                   'overflowX': 'hidden',
            'overflowY': 'scroll',}}><div className={this._getComponentContainerClass()} style={containerStyles}>
            {this._renderDraggableCards()}
        </div></div>;
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