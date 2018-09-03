'use strict';

// @flow

// external imports
import * as React from 'react';
import {DragSource, DropTarget} from 'react-dnd';
import injectSheet from 'react-jss';
import classNames from 'classnames';

// local imports
import {RegularCardComponent} from './../../layout/structure/regular_card_component';

// type definitions
type ConnectDragSourceType = (dragSource: React.Element<any>) => React.Node;

type PropsTypes = {
    dndType: string,

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

const cardTarget = {
    drop(props) {
        return 'bb'
    },
}

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

function collect1(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

function collect2(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

// $FlowFixMe decorators
@DragSource(({dndType}) => dndType, cardSource, collect1)
@DropTarget(({dndType}) => dndType, cardTarget, collect2)
@injectSheet(styles)
export class DraggableCardComponent extends React.Component<PropsTypes, StateTypes> {
    static defaultProps = {
        classes: {}
    };

    /*
        const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { doSomething: this.doSomething }));
     */

    render() {
        const { children, connectDragSource, connectDropTarget, isDragging, isOver } = this.props;

        return connectDropTarget(connectDragSource(
            <div>
                {React.Children.map(children, child => React.cloneElement(child, {
                    isDragging, isOver
                }))}
            </div>
        ));
    }
}

// exports