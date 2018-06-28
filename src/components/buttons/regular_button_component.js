'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {is, isNil, equals, unless, always} from 'ramda';
import {isNotNil} from '@webfuturistics/design_components';

import InlineTextBlock from './../layout/text/inline_text_block';

// local imports

// type definitions
type ClickCallbackType = (event: SyntheticEvent<HTMLButtonElement>) => void;

type PropsTypes = {
    /**
     * Button label
     */

    label?: string,

    /**
     * Value that indicates where label should be placed on left side of the button or on the right
     */

    labelPosition?: 'left' | 'right',

    /**
     * Class name which will be added to outer container of the component
     */

    containerClassName?: ?string,

    /**
     * Icon class name
     */

    iconClassName?: string,

    /**
     * Callback function which will be called once user clicks on it
     */

    onClick?: ?ClickCallbackType,

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
        display: 'flex',

        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,

        flexDirection: 'row',
        flexWrap: 'nowrap',

        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'flex-start',

        border: 'none',
        borderRadius: '2px',

        padding: '11px 16px 11px 16px',

        '-webkit-tap-highlight-color': 'transparent',
        boxShadow: theme.materialDepthLevels.materialDepth1BoxShadow,
        backgroundColor: theme.buttonStyles.bgColor,

        cursor: 'pointer',

        '&:hover': {
            backgroundColor: theme.colorUtilities.shadeColorFast(theme.buttonStyles.bgColor, -0.2),
        },

        '& > $iconContainer': {
            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            fontSize: theme.buttonStyles.iconFontSize,
            color: theme.buttonStyles.fontColor,

            '&.left': {
                marginLeft: '10px',
            },

            '&.right': {
                marginRight: '10px',
            }
        },

        '& > $captionContainer': {
            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            fontFamily: theme.buttonStyles.fontStack,
            fontSize: theme.buttonStyles.captionFontSize,

            textTransform: 'uppercase',
            textAlign: 'center',

            letterSpacing: '.5px',
            color: theme.buttonStyles.fontColor
        }
    },

    iconContainer: {},
    captionContainer: {},
});

/**
 * Regular button component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
class RegularButtonComponent extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'RegularButtonComponent';

    static defaultProps = {
        label: '',
        type: 'button',
        className: '',

        onClick: () => {},
    };

    // endregion

    // region constructor
    constructor(props) {
        super(props);

        const self: any = this;

        self._onClick = self._onClick.bind(this);
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getIconClassName(): ?string {
        const {iconClassName, classes} = this.props;

        if (isNil(iconClassName)) {
            return null;
        }

        return classNames(
            classes.iconContainer,
            iconClassName,
            {
                'left': equals('left', this._getLabelPosition()),
                'right': equals('right', this._getLabelPosition()),
            }
        );
    }

    _getComponentContainerClass(): string {
        const {classes: {componentContainer}, containerClassName}: {classes: any, containerClassName?: ?string} = this.props;
        return classNames(componentContainer, containerClassName);
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getLabelPosition(): string {
        let {labelPosition} = this.props;
        labelPosition = is(String, labelPosition) ? labelPosition.toLowerCase() : labelPosition;

        return unless(isNotNil, always('left'))(labelPosition);
    }

    _getLabel(): string {
        const {label = ''} = this.props;
        return label;
    }

    // endregion

    // region handlers
    _onClick(event): void {
        const {onClick}: {onClick?: ?ClickCallbackType} = this.props;

        if (isNil(onClick) && is(Function, onClick)) {
            return;
        }

        onClick(event);
    }

    // endregion

    // region render methods
    _renderCaptionContainer(): React.Node {
        return <InlineTextBlock className={this.props.classes.captionContainer}>
            {this._getLabel()}
        </InlineTextBlock>;
    }

    _renderIconContainer(): React.Node {
        return unless(isNil, className => <i className={className}/>)(this._getIconClassName());
    }

    _renderComponentContainer(): React.Node {
        const onClickHandler: ClickCallbackType = this._onClick;
        const labelPosition: string = this._getLabelPosition();

        return <div
            onClick={onClickHandler}
            className={this._getComponentContainerClass()}
        >
            {equals('right', labelPosition) ? this._renderIconContainer() : null}
            {this._renderCaptionContainer()}
            {equals('left', labelPosition) ? this._renderIconContainer() : null}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

// exports
export default injectSheet(styles)(RegularButtonComponent);