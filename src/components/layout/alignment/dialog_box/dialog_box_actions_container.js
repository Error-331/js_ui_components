'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {defaultTo, length, reverse, slice} from 'ramda';

// local imports
import {MainThemeContext} from '../../../../../src/theming/providers/main_theme_provider';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * Direction in which components will be arranged, default is right to left (rtl)
     */

    direction?: 'ltr' | 'rtl',

    /**
     * Indicates how many elements (buttons) will be in the main group (remaining elements goes to subgroup)
     */

    mainGroupCount?: number,

    /**
     * Dialog box actions (buttons)
     */

    children?: React.ChildrenArray<void | null | string | number | React.Element<any>>,

    /**
     * Additional style object which will be applied to container
     */

    containerStyle?: CSSStylesType,

    /**
     * Additional class name which will be applied to container
     */

    containerClassName?: string,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

type StateTypes = {};

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'flex',

        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,

        flexDirection: 'row',
        flexWrap: 'nowrap',

        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'flex-start',

        '& > $buttonsContainer': {
            boxSizing: 'border-box',

            flexBasis: '50%',
            flexGrow: 0,
            flexShrink: 0,

            gridArea: 'buttons',
            display: 'grid',

            gridTemplateColumns: `repeat(auto-fill, minmax(max-content, ${theme.buttonStyles.regularButtonMinimumWidth}px))`,
            gridAutoRows: 'max-content',
            gridColumnGap: `${theme.layoutStyles.sectionHorizontalSpacing}px`,

            '&.fullWidth': {
                flexBasis: '100%',
            },

            '& > *': {
                direction: LEFT_TO_RIGHT_DIRECTION
            },
        },

    },

    buttonsContainer: {},
});

// constants definition
export const RIGHT_TO_LEFT_DIRECTION: string = 'rtl';
export const LEFT_TO_RIGHT_DIRECTION: string = 'ltr';

/**
 * Dialog box actions container.
 * Helps to layout buttons (actions) on the bottom of the regular dialog box.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
class DialogBoxActionsContainerClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'DialogBoxActionsContainerClass';

    static defaultProps = {
        direction: RIGHT_TO_LEFT_DIRECTION,
        mainGroupCount: 0,
        containerClassName: '',
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
    _getComponentContainerStyle(): CSSStylesType {
        return defaultTo({})(this.props.containerStyle);
    }

    _getComponentContainerClassName(): string {
        return classNames(this.props.classes.componentContainer, this.props.containerClassName);
    }

    _getRightContainerClassName(): string {
        return this.props.classes.buttonsContainer;
    }

    _getLeftContainerClassName(): string {
        return classNames(this.props.classes.buttonsContainer, {
            'fullWidth': this._getMainGroupCount() === 0
        });
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getMainGroupCount(): number {
        return defaultTo(DialogBoxActionsContainerClass.defaultProps.mainGroupCount)(this.props.mainGroupCount);
    }

    _getDirection(): string {
        return  defaultTo(DialogBoxActionsContainerClass.defaultProps.direction)(this.props.direction);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderRightGroup(children: Array<React.Node>, style: CSSStylesType): React.Node {
        if (this._getMainGroupCount() === 0) {
            return null;
        }

        return <div className={this._getRightContainerClassName()} style={style}>
            {children}
        </div>;
    }

    _renderLeftGroup(children: Array<React.Node>, style: CSSStylesType): React.Node {
        return <div className={this._getLeftContainerClassName()} style={style}>
            {children}
        </div>;
    }

    _renderComponentContainer(): React.Node {
        const children: Array<React.Node> = React.Children.toArray(this.props.children);
        const childrenCount: number = length(children);

        const mainGroupCount: number = this._getMainGroupCount();

        const leftChildrenCount: number = mainGroupCount > 0 ? mainGroupCount : childrenCount;

        const leftChildrenStartIndex: number = 0;
        const leftChildrenEndIndex: number = leftChildrenCount;

        const rightChildrenStartIndex: number = leftChildrenCount;
        const rightChildrenEndIndex: number = childrenCount;

        let leftChildren: Array<React.Node> = slice(leftChildrenStartIndex, leftChildrenEndIndex, children);
        let rightChildren: Array<React.Node> = slice(rightChildrenStartIndex, rightChildrenEndIndex, children);

        const direction: string = this._getDirection();

        leftChildren = direction !== RIGHT_TO_LEFT_DIRECTION ? reverse(leftChildren) : leftChildren;
        rightChildren = direction !== RIGHT_TO_LEFT_DIRECTION ? reverse(rightChildren) : rightChildren;

        const groupContainerStyle: CSSStylesType = Object.assign({direction}, this._getComponentContainerStyle());
        const leftGroupDirection: string = direction !== RIGHT_TO_LEFT_DIRECTION ? 'ltr' : 'rtl' ;
        const rightGroupDirection: string = direction !== RIGHT_TO_LEFT_DIRECTION ? 'rtl' : 'ltr' ;

        return <div className={this._getComponentContainerClassName()} style={groupContainerStyle}>
            {this._renderLeftGroup(leftChildren, {direction: leftGroupDirection})}
            {this._renderRightGroup(rightChildren, {direction: rightGroupDirection})}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

function DialogBoxActionsContainer(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <DialogBoxActionsContainerClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

DialogBoxActionsContainer.displayName = 'DialogBoxActionsContainer';

// exports
export {DialogBoxActionsContainerClass, DialogBoxActionsContainer};
export default  DialogBoxActionsContainer;
