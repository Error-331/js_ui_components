'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import {isNil, isEmpty, defaultTo, always, equals, or, unless} from 'ramda';
import classNames from 'classnames';

import {isNotNil} from '@webfuturistics/design_components/lib/helpers/general/utility_helpers';

// local imports
import type {ThemeType} from './../../types/theme_types';

import {MainThemeContext} from './../../theming/providers/main_theme_provider';
import {InlineTextBlock} from './../layout/text/inline_text_block';
import {FontIcon} from './../layout/icons/font_icon';

// type definitions
export type ClickCallbackType = (event: SyntheticEvent<HTMLDivElement>) => void;
export type StyleType = {[string]: mixed};

type PropsTypes = {
    /**
     * Flag that describes how the chip will look like
     */

    variant: 'outlined' | 'contained' | 'basic',

    /**
     * Flag that describes how text of the chip will look like
     */

    textType: 'primary' | 'secondary' | 'default',

    /**
     * Flag that describes whether chip should be clickable
     */

    clickable?: boolean,

    /**
     * Flag that describes whether right icon of the chip component should be clickable
     */

    rightIconClickable?: boolean,

    /**
     * Chip label
     */

    label?: string,

    /**
     * Value that indicates where label should be placed on left side of the chip or on the right
     */

    labelPosition?: 'left' | 'right',

    /**
     * Flag that indicates whether chip is disabled or not
     */

    disabled?: boolean,

    /**
     * Callback function which will be called once user clicks on a chip
     */

    onClick?: ClickCallbackType,

    /**
     * Callback function which will be called once user clicks on right icon
     */

    onRightIconClick?: ClickCallbackType,

    /**
     * Alias of 'containerClassName'
     */

    className?: string,

    /**
     * Class name which will be added to outer container of the component
     */

    containerClassName?: string,

    /**
     * Icon class name which will be rendered on right side of chip component
     */

    rightIconClassName?: string,

    /**
     * Styles which will be added to outer container of the component
     */

    containerStyle?: StyleType,

    /**
     * Alias of 'containerStyle'
     */

    style?: StyleType,

    /**
     * Styles which will be added to outer container of the component when user mouse hovers over it
     */

    hoverStyle?: StyleType,

    /**
     * Styles which will be added to chip label
     */

    labelStyle?: StyleType,

    /**
     * Styles which will be added to chip right icon
     */

    rightIconStyle?: StyleType,

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

type StateTypes = {
    isMouseOver: boolean
};

// styles definition
const verticalPadding: number = 6; // px
const horizontalPadding: number = 8; // px

const labelSize: number = 12; // px
const iconSize: number = labelSize + 2; // px

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

        borderRadius: '16px',

        padding: `${verticalPadding}px ${horizontalPadding}px`,

        '-webkit-tap-highlight-color': 'transparent',
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

        '&.basic': {
            border: 'none',

            boxShadow: theme.materialDepthLevels.materialDepth1BoxShadow,
            backgroundColor: theme.baseStyles.subSecondaryColor,

            '&.clickable': {
                cursor: 'pointer',

                '&:hover': {
                    backgroundColor: theme.colorUtilities.shadeColorFast(theme.baseStyles.subSecondaryColor, -0.2),
                },
            },

            '& > $labelContainer': {
                fontFamily: theme.buttonStyles.fontStackRegular,

                '&.default': {
                    color: theme.buttonStyles.fontColorDefaultWithBG,
                }
            },

            '& > $iconContainer': {
                '&.default': {
                    color: theme.buttonStyles.fontColorDefaultWithBG,
                },
            },
        },

        '&.outlined': {
            border: `${theme.buttonStyles.borderSize}px solid ${theme.buttonStyles.borderColor}`,
            padding: `${verticalPadding - theme.buttonStyles.borderSize}px ${horizontalPadding - theme.buttonStyles.borderSize}px`,

            '&.clickable': {
                cursor: 'pointer',

                '&:hover': {
                    backgroundColor: theme.colorUtilities.shadeColorFast(theme.buttonStyles.bgColor, 0.8),
                },
            },

            '& > $labelContainer': {
                fontFamily: theme.buttonStyles.fontStackRegular,

                '&.default': {
                    color: theme.buttonStyles.fontColorDefaultNoBG,
                }
            },

            '& > $iconContainer': {
                '&.default': {
                    color: theme.buttonStyles.fontColorDefaultNoBG,
                }
            },
        },

        '&.contained': {
            border: 'none',

            boxShadow: theme.materialDepthLevels.materialDepth1BoxShadow,
            backgroundColor: theme.buttonStyles.bgColor,

            '&.clickable': {
                cursor: 'pointer',

                '&:hover': {
                    backgroundColor: theme.colorUtilities.shadeColorFast(theme.buttonStyles.bgColor, -0.2),
                },
            },

            '& > $labelContainer': {
                fontFamily: theme.buttonStyles.fontStackRegular,

                '&.default': {
                    color: theme.buttonStyles.fontColorDefaultWithBG,
                }
            },

            '& > $iconContainer': {
                '&.default': {
                    color: theme.buttonStyles.fontColorDefaultWithBG,
                }
            },
        },

        '&.basic.disabled': {
            backgroundColor: theme.buttonStyles.disabledBgColor,

            '&:hover': {
                backgroundColor: theme.buttonStyles.disabledBgColor,
            },

            '& > $labelContainer': {
                '&.default': {
                    color: theme.buttonStyles.fontColorSecondary,
                }
            },
        },

        '&.outlined.disabled': {
            borderColor: theme.buttonStyles.disabledBgColor,

            '&:hover': {
                backgroundColor: theme.baseStyles.transparentBGColor,
            },

            '& > $labelContainer': {
                '&.default': {
                    color: theme.buttonStyles.fontColorSecondary,
                }
            },
        },

        '&.contained.disabled': {
            backgroundColor: theme.buttonStyles.disabledBgColor,

            '&:hover': {
                backgroundColor: theme.buttonStyles.disabledBgColor,
            },


            '& > $labelContainer': {
                '&.default': {
                    color: theme.buttonStyles.fontColorSecondary,
                }
            },
        },

        '& > $iconContainer': {
            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            fontSize: `${iconSize}px`,

            color: theme.buttonStyles.fontColorDefault,

            '&.clickable': {
                cursor: 'pointer',
            },

            '&.left': {
                marginRight: '5px',
            },

            '&.right': {
                marginLeft: '5px',

            },

            '&.primary': {
                color: theme.buttonStyles.fontColorPrimary,
            },

            '&.secondary': {
                color: theme.buttonStyles.fontColorSecondary,
            },
        },

        '& > $labelContainer': {
            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            textAlign: 'center',

            letterSpacing: '.5px',
        }
    },

    labelContainer: {},
    iconContainer: {},
});

/**
 * Chip component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
// $FlowFixMe decorators
@injectSheet(styles)
class ChipClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'ChipComponent';

    static defaultProps = {
        variant: 'contained',
        textType: 'default',
        clickable: false,
        rightIconClickable: false,
        disabled: false,

        label: '',
        labelPosition: 'left',

        rightIconClassName: undefined,

        style: {},
        containerStyle: {},
        hoverStyle: {},
        labelStyle: {},
        rightIconStyle: {},

        onClick: () => {},
        onRightIconClick: () => {},
    };

    static defaultState = {
        isMouseOver: false,
    };

    // endregion

    // region private props
    // endregion

    // region constructor
    constructor(props: PropsTypes) {
        super(props);

        this.state = {
            isMouseOver: ChipClass.defaultState.isMouseOver,
        };

        const self: any = this;

        self._clickRightIconHandler = self._clickRightIconHandler.bind(this);
        self._mouseOverContainerHandler = self._mouseOverContainerHandler.bind(this);
        self._mouseLeaveContainerHandler = self._mouseLeaveContainerHandler.bind(this);
    }

    // endregion

    // region business logic
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getRightIconDisabledStyle(): StyleType {
        if (this._isDisabled() === false) {
            return {};
        }

        const {theme} = this.props;

        return {
            color: theme.buttonStyles.fontColorSecondary,
        };
    }

    _getRightIconStyle(): StyleType {
        let iconStyle: StyleType = defaultTo(ChipClass.defaultProps.rightIconStyle)
        (this.props.rightIconStyle);

        return {
            ...this._getRightIconDisabledStyle(),
            ...iconStyle,
        }
    }

    _getLabelStyle(): StyleType {
        return defaultTo(ChipClass.defaultProps.labelStyle)
        (this.props.labelStyle);
    }

    _getContainerStyle(): StyleType {
        const containerStyles: StyleType = defaultTo(ChipClass.defaultProps.containerStyle)
        (this.props.containerStyle);

        const style: StyleType = defaultTo(ChipClass.defaultProps.style)
        (this.props.style);

        const hoverStyles: StyleType = this._isMouseOver() ? this._getContainerHoverStyle() : {};
        return Object.assign({}, containerStyles, style, hoverStyles);
    }

    _getContainerHoverStyle(): StyleType {
        return defaultTo(ChipClass.defaultProps.hoverStyle)
        (this.props.hoverStyle);
    }

    _getRightIconClassName(): string | null {
        const rightIconClassName: string = defaultTo(ChipClass.defaultProps.rightIconClassName)
        (this.props.rightIconClassName);

        if (isNil(rightIconClassName)) {
            return null;
        }

        const {classes} = this.props;
        const {iconContainer} = classes;
        const textType: string = this._getTextType();

        const isDisabled: boolean = this._isDisabled();

        return classNames(
            iconContainer,
            rightIconClassName,
            {
                'clickable': !isDisabled && this._isRightIconClickable(),
                'right': equals('left', this._getLabelPosition()),
                'left': equals('right', this._getLabelPosition()),
            },
            textType
        );
    }

    _getLabelContainerClass(): string {
        const {classes: {labelContainer}} = this.props;
        const textType: string = this._getTextType();

        return classNames(labelContainer, textType);
    }

    _getComponentContainerClass(): string {
        const {classes: {componentContainer}, containerClassName, className} = this.props;
        const buttonVariant: string = this._getVariant();

        return classNames(
            componentContainer,
            buttonVariant,
            {
                'clickable': !this._isDisabled() && this._isClickable(),
                'disabled': this._isDisabled()
            },
            containerClassName,
            className
        );
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    _isMouseOver(): boolean {
        return defaultTo(ChipClass.defaultState.isMouseOver)
        (this.state.isMouseOver);
    }

    // endregion

    // region prop accessors
    _getClickHandler(): ClickCallbackType {
        return defaultTo(ChipClass.defaultProps.onClick)
        (this.props.onClick);
    }

    _getClickRightIconHandler(): ClickCallbackType {
        return defaultTo(ChipClass.defaultProps.onRightIconClick)
        (this.props.onRightIconClick);
    }

    _isDisabled(): boolean {
        return defaultTo(ChipClass.defaultProps.disabled)
        (this.props.disabled);
    }

    _getVariant(): string {
        return defaultTo(ChipClass.defaultProps.variant)
        (this.props.variant).toLowerCase();
    }

    _getTextType(): string {
        return defaultTo(ChipClass.defaultProps.textType)
        (this.props.textType).toLowerCase();
    }

    _isClickable(): boolean {
        return defaultTo(ChipClass.defaultProps.clickable)
        (this.props.clickable);
    }

    _isRightIconClickable(): boolean {
        return defaultTo(ChipClass.defaultProps.rightIconClickable)
        (this.props.rightIconClickable);
    }

    _getLabelPosition(): string | null {
        let {labelPosition} = this.props;

        if (isNil(labelPosition)) {
            return null;
        }

        return unless(isNotNil, always(ChipClass.defaultProps.labelPosition))
        (labelPosition);
    }

    _getLabel(): string {
        return defaultTo(ChipClass.defaultProps.label)
        (this.props.label);
    }

    _isLabelEmpty(): boolean {
        return isEmpty(this._getLabel());
    }

    // endregion

    // region handlers
    _clickRightIconHandler(event: SyntheticEvent<HTMLDivElement>): void {
        event.stopPropagation();

        this._getClickRightIconHandler()(event);
    }

    _mouseOverContainerHandler(): void {
        this.setState({
            isMouseOver: true,
        });
    }

    _mouseLeaveContainerHandler(): void {
        this.setState({
            isMouseOver: false,
        });
    }

    // endregion

    // region render methods
    _renderRightIconContainer(): React.Node {
        const rightIconClassName: string | null = this._getRightIconClassName();

        if (!isNil(rightIconClassName)) {
            const isDisabled: boolean = this._isDisabled();
            const isClickable: boolean = this._isRightIconClickable();

            return <FontIcon
                onClick={isDisabled && isClickable ? null : this._clickRightIconHandler}
                className={rightIconClassName}
                style={this._getRightIconStyle()}
                size='custom'
            />;
        } else {
            return null;
        }
    }

    _renderLabelContainer(): React.Node {
        return <InlineTextBlock
            className={this._getLabelContainerClass()}
            style={this._getLabelStyle()}

            fontSize={labelSize}
        >
            {this._getLabel()}
        </InlineTextBlock>;
    }

    _renderComponentContainer(): React.Node {
        const labelPosition: string | null = this._getLabelPosition();
        const isDisabled: boolean = this._isDisabled();
        const isClickable: boolean = this._isClickable();

        return <div
            className={this._getComponentContainerClass()}
            style={this._getContainerStyle()}

            onClick={isDisabled && isClickable ? null : this._getClickHandler()}
            onMouseOver={this._mouseOverContainerHandler}
            onMouseLeave={this._mouseLeaveContainerHandler}
        >
            {equals('right', labelPosition) ? this._renderRightIconContainer() : null}
            {this._renderLabelContainer()}
            {or(equals('left', labelPosition), this._isLabelEmpty()) ? this._renderRightIconContainer() : null}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

function ChipComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <ChipClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

ChipComponent.displayName = 'ChipComponent';

// exports
export {ChipClass, ChipComponent};
export default ChipComponent;
