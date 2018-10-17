'use strict';

// @flow

// external imports
import * as React from 'react';
import {DragSource, DropTarget} from 'react-dnd';
import injectSheet from 'react-jss';

import {defaultTo} from 'ramda';

// local imports

// type definitions
type ConnectDragSourceType = (dragSource: React.Element<any>) => React.Node;
type ConnectDropTargetType = (dragTarget: React.Element<any>) => React.Node;

type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * Unique drag and drop type (usually the same for each card if used inside card drawer component)
     */

    dndType: number | string,

    /**
     * Unique card id
     */

    id: number | string,

    /**
     * Data associated with the card
     */

    data: any,

    /**
     * Function used to connect DOM node with 'drag source' role
     *
     * @ignore
     */

    connectDragSource: ConnectDragSourceType,

    /**
     * Function used to connect DOM node with 'drop target' role
     *
     * @ignore
     */

    connectDropTarget: ConnectDropTargetType,

    /**
     * Additional style object which will be applied to card
     */

    style?: CSSStylesType,

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
    }
});

// component implementation
const cardSourceSpec = {
    beginDrag(props) {
        return {
            dragId: props,
            dragData: props.data
        };
    },

    endDrag(props, monitor) {
        if (!monitor.didDrop()) {
            return;
        }
        
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
    }
};

const cardTargetSpec = {
    drop(props) {
        return {
            dragId: props,
            dragData: props.data
        };
    },
};

function dragSourceCollector(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

function dragTargetCollector(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

// $FlowFixMe decorators
@DragSource(({dndType}) => dndType, cardSourceSpec, dragSourceCollector)
@DropTarget(({dndType}) => dndType, cardTargetSpec, dragTargetCollector)
@injectSheet(styles)
export class DraggableCardComponent extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static defaultProps = {
        classes: {}
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
    _getStyle(): CSSStylesType {
        return defaultTo({})(this.props.style);
    }

    _getComponentContainerStyle(): CSSStylesType {
        return Object.assign({}, this._getStyle());
    }

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
        const { children, connectDragSource, connectDropTarget, isDragging, isOver } = this.props;

        return connectDropTarget(connectDragSource(
            <div style={this._getComponentContainerStyle()}>
                {React.Children.map(children, child => React.cloneElement(child, {
                    isDragging, isOver
                }))}
            </div>
        ));
    }

    // endregion
}

// exports