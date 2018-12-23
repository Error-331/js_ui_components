'use strict';

// @flow

// external imports
import * as React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import injectSheet from 'react-jss';
import classNames from 'classnames';

import {is, equals, gt, and, defaultTo, inc, map} from 'ramda'

import {generateRandomIdNumber} from '@webfuturistics/design_components/lib/helpers/general/dom_helpers';

// local imports
import type {ThemeType} from './../../../types/theme_types';

import {DraggableCardComponent} from './draggable_card_component';
import {MainThemeContext} from './../../../theming/providers/main_theme_provider';

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
     * Unique drag and drop type (it will be passed to child cards) which, if not provided, will be auto-generated
     */

    dndType?: string,

    /**
     * Data for each card in the card drawer
     */

    data?: DataArrayType,

    /**
     * Size of the gap between cards (CSS grid gap), default: 12px
     */

    gapSize?: number,

    /**
     * Width of the card (CSS grid column), default: 295px
     */

    colSize?: number,

    /**
     * Width of the card (CSS grid row), default: 175px
     */

    rowSize?: number,

    /**
     * Row count (if not specified - all cards will be rendered)
     */

    rowCount?: number,

    /**
     * JSS theme object
     *
     * @ignore
     */

    theme: ThemeType,

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
        },
    },

    componentContainerInner: {}
});

// component implementation

// $FlowFixMe decorators
@DragDropContext(HTML5Backend)
@injectSheet(styles)
export class CardDrawerClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'CardDrawerClass';

    static defaultProps = {
        dndType: `card_drawer_${generateRandomIdNumber()}`,

        colSize: 295,
        rowSize: 175,

        classes: {}
    };

    // endregion

    // region private props
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

        const verticalGapSize: number = this._getVerticalGapSize();
        const rowCount: number | string = this._getRowCount();

        if (this._isOneLine() && is(Number, rowCount)) {
            return cardStyle;
        } else if (this._isRestrictedVertically() && is(Number, rowCount)) {
            return Object.assign(cardStyle, {
                paddingBottom: `${verticalGapSize}px`,
            });
        } else {
            return cardStyle;
        }
    }

    _getInnerComponentContainerStyle(): CSSStylesType {
        const horizontalGapSize: number = this._getHorizontalGapSize();
        const verticalGapSize: number = this._getVerticalGapSize();

        const colWidth: number = this._getColSize();
        const rowHeight: number = this._getRowSize();

        const rowCount: number | string = this._getRowCount();

        let containerStyle: CSSStylesType = {
            gridAutoRows: `${rowHeight}px`,

            gridColumnGap: `${horizontalGapSize}px`,
            gridRowGap: `${verticalGapSize}px`,

            gridTemplateColumns: `repeat(auto-fill, minmax(${colWidth}px, 1fr))`,
        };

        if (this._isOneLine() && typeof rowCount === 'number') {
            const data: DataArrayType = this._getData();

            const totalGaps: number = (data.length * 2 - 2);
            const totalGapsWidth: number = horizontalGapSize * totalGaps;
            const totalColumnsWidth: number = colWidth * data.length;

            const width: number = totalGapsWidth + totalColumnsWidth;
            const height: number = verticalGapSize * 2 + rowHeight;

            return Object.assign(containerStyle, {
                'gridRowGap': `0px`,

                'width': `${width}px`,
                'height': `${height}px`,
            });
        } else if (this._isRestrictedVertically() && typeof rowCount === 'number') {
            const gridRowsHeight: number = rowHeight + verticalGapSize;

            const gapsHeight: number = verticalGapSize * rowCount;
            const rowsHeight: number = rowHeight * rowCount;
            const height: number = gapsHeight + rowsHeight;

            return Object.assign(containerStyle, {
                'gridAutoRows': `${gridRowsHeight}px`,
                'gridRowGap': `0px`,

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
    _getVerticalGapSize(): number {
        return defaultTo(this.props.theme.layoutStyles.sectionVerticalSpacing)(this.props.gapSize);
    }

    _getHorizontalGapSize(): number {
        return defaultTo(this.props.theme.layoutStyles.sectionHorizontalSpacing)(this.props.gapSize);
    }

    _getColSize(): number {
        return defaultTo(CardDrawerClass.defaultProps.colSize)(this.props.colSize);
    }

    _getRowSize(): number {
        return defaultTo(CardDrawerClass.defaultProps.rowSize)(this.props.rowSize);
    }

    _getRowCount(): number | string {
        return defaultTo('auto')(this.props.rowCount);
    }

    _getData(): DataArrayType {
        return defaultTo([])(this.props.data);
    }

    _getDndType(): string | number {
        return defaultTo(CardDrawerClass.defaultProps.dndType)(this.props.dndType)
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
                dndType={this._getDndType()}
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
// exports
export function CardDrawerComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <CardDrawerClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

CardDrawerComponent.displayName = 'CardDrawerComponent';