'use strict';

// @flow

// external imports
import * as React from 'react';
import { DragSource } from 'react-dnd';
import injectSheet from 'react-jss';
import classNames from 'classnames';

// local imports
import {RegularCardComponent} from './../../layout/structure/regular_card_component';

// type definitions
type ConnectDragSourceType = (dragSource: React.Element<any>) => React.Node;

type PropsTypes = {
    connectDragSource: ConnectDragSourceType,

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

const cardSource = {
    beginDrag(props) {
        return {
            text: 'vv'
        };
    },

    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }

        // When dropped on a compatible target, do something
      //  const item = monitor.getItem();
      //  const dropResult = monitor.getDropResult();
       // CardActions.moveCardToList(item.id, dropResult.listId);
    }
};

// $FlowFixMe decorators
@DragSource('ff', cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
@injectSheet(styles)
export class DraggableCardComponent extends React.Component<PropsTypes, StateTypes> {
    static defaultProps = {
        classes: {}
    };

    render() {
        alert('a');
        const { connectDragSource } = this.props;
        return connectDragSource(
            <RegularCardComponent>
             432
            </RegularCardComponent>
        );
    }
}

// exports
//export const DraggableCardComponent = injectSheet(styles)(DraggableCardComponentClass);