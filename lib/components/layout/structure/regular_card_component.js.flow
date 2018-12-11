'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {always, complement, gt, lt, is, isNil, isEmpty, ifElse, unless} from 'ramda';

// local imports
import type {ThemeType} from './../../../types/theme_types';

// type definitions
type StyleType = {
    [string]: mixed
};

export type MouseOverCallbackType = (event: SyntheticMouseEvent<HTMLDivElement>) => void;
export type MouseLeaveCallbackType = (event: SyntheticMouseEvent<HTMLDivElement>) => void;

type PropsTypes = {
    /**
     * Card header
     */

    header?: React.Node,

    /**
     * Number that indicates how high above other elements the card component is placed
     */

    heightLevel?: number,

    /**
     * Flag that indicates whether card component should pop when user control hovers over it
     */

    popOnHover?: boolean,

    /**
     * Number that indicates how high above other elements the card component will pop
     */

    maxPopLevel?: number,

    /**
     * Class name for card container outer div
     */

    containerClassName?: string,

    /**
     * Styles for card container outer div
     */

    containerStyle?: StyleType,

    /**
     * Class name for card body container div
     */

    bodyClassName?: string,

    /**
     * Styles for card container body div
     */

    bodyStyle?: {
        [string]: mixed
    },

    /**
     * Content for card body
     */

    children?: React.Node,

    /**
     * Callback function which will be called once user hovers over components container (header and body)
     */

    onMouseOverContainer?: MouseOverCallbackType,

    /**
     * Callback function which will be called once user mouse pointer leaves components container (header and body)
     */

    onMouseLeaveContainer?: MouseLeaveCallbackType,

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

        flexDirection: 'column',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',

        borderRadius: theme.layoutStyles.headerBorderRadius,
        backgroundColor: theme.layoutStyles.bodyBGColor,

        transition: 'box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',

        '&.height1': {
            boxShadow: theme.materialDepthLevels.materialDepth1BoxShadow,
        },

        '&.height2': {
            boxShadow: theme.materialDepthLevels.materialDepth2BoxShadow,
        },

        '&.height3': {
            boxShadow: theme.materialDepthLevels.materialDepth3BoxShadow,
        },

        '&.height4': {
            boxShadow: theme.materialDepthLevels.materialDepth4BoxShadow,
        },

        '&.height5': {
            boxShadow: theme.materialDepthLevels.materialDepth5BoxShadow,
        },

        '&.poppable2:hover': {
            boxShadow: theme.materialDepthLevels.materialDepth2BoxShadow,
        },

        '&.poppable3:hover': {
            boxShadow: theme.materialDepthLevels.materialDepth3BoxShadow,
        },

        '&.poppable4:hover': {
            boxShadow: theme.materialDepthLevels.materialDepth4BoxShadow,
        },

        '&.poppable5:hover': {
            boxShadow: theme.materialDepthLevels.materialDepth5BoxShadow,
        },

        '& > $componentHeader': {
            boxSizing: 'border-box',

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,
        },

        '& > $componentBody': {
            boxSizing: 'border-box',
            display: 'flex',
            position: 'relative',

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            padding: `${theme.layoutStyles.topSpacing}px 
                      ${theme.layoutStyles.rightSpacing}px 
                      ${theme.layoutStyles.bottomSpacing}px 
                      ${theme.layoutStyles.leftSpacing}px
            `,

            borderRadius: theme.layoutStyles.headerBorderRadius,

            fontFamily: theme.layoutStyles.bodyFontStack,
            fontSize: theme.layoutStyles.bodyFontSize,

            color: theme.layoutStyles.bodyFontColor,
        }
    },

    componentHeader: {},
    componentBody: {}
});

/**
 * Regular card component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
export class RegularCardComponent extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'RegularCardComponent';

    static defaultProps = {
        containerClassName: '',

        theme: {},
        classes: {}
    };

    // endregion

    // region constructor
    constructor(props: PropsTypes) {
        super(props);

        const self: any = this;

        self._onMouseOverContainer = self._onMouseOverContainer.bind(this);
        self._onMouseLeaveContainer = self._onMouseLeaveContainer.bind(this);
    }

    // endregion

    // region business logic
    _getHeightLevel(heightLevel: number): number {
        heightLevel = unless(gt(5), always(5))(heightLevel);
        heightLevel = unless(lt(1), always(1))(heightLevel);

        return heightLevel;
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getOuterContainerStyle(): StyleType {
        return Object.assign({}, this.props.containerStyle);
    }

    _getOuterContainerClasses(): string {
        const heightClassName: string = `height${this._getCardHeightLevel()}`;
        const poppableClassName: string = `poppable${this._getCardPopHeightLevel()}`;

        const containerClassName = classNames(
            this.props.classes.componentContainer,
            {
                [heightClassName]: true,
                [poppableClassName]: this._getPopOnHover()
            },
            this.props.containerClassName
        );

        return containerClassName;
    }

    _getBodyClasses(): string {
        return classNames(
            this.props.classes.componentBody,
            this.props.bodyClassName
        );
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getCardPopHeightLevel(): number {
        let {maxPopLevel = 5} = this.props;
        return this._getHeightLevel(maxPopLevel);
    }

    _getCardHeightLevel(): number {
        let {heightLevel = 1} = this.props;
        return this._getHeightLevel(heightLevel);
    }

    _getPopOnHover(): boolean {
        const {popOnHover = false} = this.props;
        return popOnHover;
    }

    // endregion

    // region handlers
    _onMouseLeaveContainer(event: SyntheticEvent<HTMLDivElement>): void {
        const {onMouseLeaveContainer}: {onMouseLeaveContainer?: MouseLeaveCallbackType} = this.props;

        if (isNil(onMouseLeaveContainer) && !is(Function, onMouseLeaveContainer)) {
            return;
        }

        onMouseLeaveContainer(event);
    }

    _onMouseOverContainer(event: SyntheticEvent<HTMLDivElement>): void {
        const {onMouseOverContainer}: {onMouseOverContainer?: MouseOverCallbackType} = this.props;

        if (isNil(onMouseOverContainer) && !is(Function, onMouseOverContainer)) {
            return;
        }

        onMouseOverContainer(event);
    }

    // endregion

    // region render methods
    _renderHeader(): ?React.Node {
        return ifElse(
            complement(isEmpty),
            header =>
                <div className={this.props.classes.componentHeader}>
                    {header}
                </div>,
            always(null)
        )(this.props.header);
    }

    _renderBody(): React.Node {
        const {children} = this.props;

        if (isNil(children)) {
            return null;
        }

        return <div
            className={this._getBodyClasses()}
            style={this.props.bodyStyle}
        >
            {children}
        </div>;
    }

    _renderOuterContainer(): React.Node {
        return (
            <div
                className={this._getOuterContainerClasses()}
                style={this._getOuterContainerStyle()}

                onMouseOver={this._onMouseOverContainer}
                onMouseLeave={this._onMouseLeaveContainer}
            >
                {this._renderHeader()}
                {this._renderBody()}
            </div>
        );
    }

    render(): React.Node {
        return this._renderOuterContainer();
    }

    // endregion
}

// exports
