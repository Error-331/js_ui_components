'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {always, complement, gt, lt, isEmpty, ifElse, unless} from 'ramda';

// local imports
import type {ThemeType} from './../../../types/theme_types';

// type definitions
type CardChildrenType = React.ChildrenArray<void | null | string | number | React.Element<any>>;
type StyleType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * Card header
     */

    header?: ?CardChildrenType,

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
     * Class names for card container outer div
     */

    containerClassNames?: string,

    /**
     * Styles for card container outer div
     */

    containerStyles?: StyleType,

    /**
     * Class names for card body container div
     */

    bodyClassNames?: string,

    /**
     * Styles for card container body div
     */

    bodyStyles?: {
        [string]: mixed
    },

    /**
     * Content for card body
     */

    children?: ?CardChildrenType,

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

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            padding: '8px 8px 10px 10px',
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
        containerClassNames: ''
    };

    // endregion

    // region constructor
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
    _getOuterContainerStyles(): StyleType {
        return Object.assign({}, this.props.containerStyles);
    }

    _getOuterContainerClasses(): string {
        const heightClassName: string = `height${this._getCardHeightLevel()}`;
        const poppableClassName: string = `poppable${this._getCardPopHeightLevel()}`;

        const containerClassNames = classNames(
            this.props.classes.componentContainer,
            {
                [heightClassName]: true,
                [poppableClassName]: this._getPopOnHover()
            },
            this.props.containerClassNames
        );

        return containerClassNames;
    }

    _getBodyClasses(): string {
        return classNames(
            this.props.classes.componentBody,
            this.props.bodyClassNames
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
        return <div
            className={this._getBodyClasses()}
            style={this.props.bodyStyles}
        >
            {this.props.children}
        </div>;
    }

    _renderOuterContainer(): React.Node {
        return (
            <div
                className={this._getOuterContainerClasses()}
                style={this._getOuterContainerStyles()}
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