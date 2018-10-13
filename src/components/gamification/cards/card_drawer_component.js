'use strict';

// @flow

// external imports
import * as React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import injectSheet from 'react-jss';
import classNames from 'classnames';

import {is, equals, gt, and, defaultTo, inc, map} from 'ramda'

import {generateRandomIdNumber} from '@webfuturistics/design_components';

// local imports
import {DraggableCardComponent} from './draggable_card_component';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

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
    componentContainerOuter: {
        boxSizing: 'border-box',

        '&.withScrollX': {
            'overflowX': 'scroll',
            'overflowY': 'hidden',
        },

        '&.withScrollY': {
            'overflowX': 'hidden',
            'overflowY': 'scroll',
        },

        '& > $componentContainerInner': {
            boxSizing: 'border-box',
            display: 'grid',

            padding: '5px',

            gridTemplateColumns: 'repeat(auto-fill, minmax(295px, 1fr))',
        },
    },

    componentContainerInner: {}
});

// component implementation

// $FlowFixMe decorators
@DragDropContext(HTML5Backend)
@injectSheet(styles)
export class CardDrawerComponent extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'CardDrawerComponent';
//TODO: DEFAULT PROPS FUNCTIONS!!!
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
    _getCardStyle(): CSSStylesType {
        let cardStyle: CSSStylesType = {};

        const gapSize: number = this._getGapSize();
        const rowCount: number | string = this._getRowCount();

        if (this._isOneLine() && is(Number, rowCount)) {
            return cardStyle;
        } else if (this._isRestrictedVertically() && is(Number, rowCount)) {
            return Object.assign(cardStyle, {
                marginBottom: `${gapSize}px`,
                marginRight: '10px'
            });
        } else {
            return cardStyle;
        }
    }

    _getInnerComponentContainerStyle(): CSSStylesType {
        const gapSize: number = this._getGapSize();

        const colWidth: number = this._getColSize();
        const rowHeight: number = this._getRowSize();

        const rowCount: number | string = this._getRowCount();

        let containerStyle: CSSStylesType = {
            gridAutoRows: `${rowHeight}px`,
            gridGap: `${gapSize}px`
        };

        if (this._isOneLine() && is(Number, rowCount)) {
            const data: DataArrayType = this._getData();

            const totalGaps: number = (data.length * 2 - 2);
            const totalGapsWidth: number = gapSize * totalGaps;
            const totalColumnsWidth: number = colWidth * data.length;

            const width: number = totalGapsWidth + totalColumnsWidth;
            const height: number = gapSize * 2 + rowHeight;

            return Object.assign(containerStyle, {
                'width': `${width}px`,
                'height': `${height}px`,
            });
        } else if (this._isRestrictedVertically() && is(Number, rowCount)) {
            const gridRowsHeight: number = rowHeight + gapSize;

            const gapsHeight: number = gapSize * rowCount;
            const rowsHeight: number = rowHeight * rowCount;
            const height: number = gapsHeight + gapSize + rowsHeight;

            return Object.assign(containerStyle, {
                'gridAutoRows': `${gridRowsHeight}px`,
                'height': `${height}px`
            });
        } else {
            return containerStyle;
        }
    }

    _getInnerComponentContainerClass(): string {
        return classNames(this.props.classes.componentContainerInner);
    }

    _getOuterComponentContainerClass(): string {
        return classNames(this.props.classes.componentContainerOuter, {
            withScrollX: this._isOneLine(),
            withScrollY: this._isRestrictedVertically()
        });
    }

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

    _isOneLine(): boolean {
        const rowCount: string | number = this._getRowCount();
        return and(is(Number, rowCount), equals(rowCount, 1));
    }

    _isRestrictedVertically(): boolean {
        const rowCount: string | number = this._getRowCount();
        return and(is(Number, rowCount), gt(rowCount, 1));
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderDraggableCards(): Array<React.Node> {
        let draggableCardKey: number = -1;

        return map(({id, data, card}) => {
            draggableCardKey = inc(draggableCardKey);
            return <DraggableCardComponent
                id={id}
                data={data}
                dndType={this._dndType}
                style={this._getCardStyle()}
                key={`draggable_card_${draggableCardKey}`}
            >
                {card}
            </DraggableCardComponent>;
        }, this._getData());
    }

    _renderInnerComponentContainer(): React.Node {
        console.log(this._getInnerComponentContainerStyle());
        return <div
            className={this._getInnerComponentContainerClass()}
            style={this._getInnerComponentContainerStyle()}
        >
            {this._renderDraggableCards()}
        </div>;
    }

    _renderOuterComponentContainer(): React.Node {
        return <div className={this._getOuterComponentContainerClass()}>
            {this._renderInnerComponentContainer()}
        </div>;
    }

    render(): React.Node {
        return this._renderOuterComponentContainer();
    }

    // endregion
}

// exports