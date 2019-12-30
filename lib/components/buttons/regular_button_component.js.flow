'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {defaultTo, or, isEmpty, isNil, equals, unless, always, max} from 'ramda';
import {isNotNil} from '@webfuturistics/design_components/lib/helpers/general/utility_helpers';

// local imports
import type {ThemeType} from './../../types/theme_types';
import type {StateTypes as ThemeProps} from './../../theming/providers/main_theme_provider';

import {SMALL_SIZE} from './../../theming/constants/general_constants';

import {FontIcon} from './../layout/icons/font_icon';
import {InlineTextBlock} from './../layout/text/inline_text_block';
import {MainThemeContext} from './../../theming/providers/main_theme_provider';

// type definitions
export type ButtonSizeType = 'tiny' | 'small' | 'medium' | 'large' | 'extraLarge';
export type ClickCallbackType = (event: SyntheticEvent<HTMLButtonElement>) => void;
export type StyleType = {[string]: mixed};

export type PropsTypes = ThemeProps & {
    /**
     * Button size
     */

    size?: ButtonSizeType,

    /**
     * Flag that describes how the button shape will look like
     */

    shape: 'rectangular' | 'round',

    /**
     * Flag that describes how the button will look like
     */

    variant: 'text' | 'outlined' | 'contained',

    /**
     * Flag that describes how text of the button will look like
     */

    textType: 'primary' | 'secondary' | 'default',

    /**
     * Button label
     */

    label?: string,

    /**
     * Value that indicates where label should be placed on left side of the button or on the right
     */

    labelPosition?: 'left' | 'right',

    /**
     * Flag that indicates whether button is disabled or not
     */

    disabled?: boolean,

    /**
     * Callback function which will be called once user clicks on a button
     */

    onClick?: ClickCallbackType,

    /**
     * Alias of 'containerClassName'
     */

    className?: string,

    /**
     * Class name which will be added to outer container of the component
     */

    containerClassName?: string,

    /**
     * Styles which will be added to outer container of the component
     */

    containerStyles?: StyleType,

    /**
     * Alias of 'containerStyles'
     */

    style?: StyleType,

    /**
     * Styles which will be added to button caption
     */

    captionStyle?: StyleType,

    /**
     * Icon class name
     */

    iconClassName?: string,

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
const verticalPadding: number = 11; // px
const horizontalPadding: number = 16; // px

const doubleVerticalPadding: number = verticalPadding * 2; // px
const doubleHorizontalPadding: number = horizontalPadding * 2; // px

const roundButtonSpacing: number = max(doubleHorizontalPadding, doubleVerticalPadding);

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

        borderRadius: '2px',

        padding: `${verticalPadding}px ${horizontalPadding}px`,

        '-webkit-tap-highlight-color': 'transparent',
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

        cursor: 'pointer',

        '&.rectangular': {
            '&.tiny': {
                minWidth: theme.buttonStyles.tinyRegularButtonMinimumWidth,
            },

            '&.small': {
                minWidth: theme.buttonStyles.smallRegularButtonMinimumWidth,
            },

            '&.medium': {
                minWidth: theme.buttonStyles.mediumRegularButtonMinimumWidth,
            },

            '&.large': {
                minWidth: theme.buttonStyles.largeRegularButtonMinimumWidth,
            },

            '&.extraLarge': {
                minWidth: theme.buttonStyles.extraLargeRegularButtonMinimumWidth,
            },
        },

        '&.round': {
            borderRadius: '50%',

            '&.tiny': {
                minWidth: `${theme.layoutStyles.tinyIconSize + roundButtonSpacing}px`,
                minHeight: `${theme.layoutStyles.tinyIconSize + roundButtonSpacing}px`,
            },

            '&.small': {
                minWidth: `${theme.layoutStyles.smallIconSize + roundButtonSpacing}px`,
                minHeight: `${theme.layoutStyles.smallIconSize + roundButtonSpacing}px`,
            },

            '&.medium': {
                minWidth: `${theme.layoutStyles.mediumIconSize + roundButtonSpacing}px`,
                minHeight: `${theme.layoutStyles.mediumIconSize + roundButtonSpacing}px`,
            },

            '&.large': {
                minWidth: `${theme.layoutStyles.largeIconSize + roundButtonSpacing}px`,
                minHeight: `${theme.layoutStyles.largeIconSize + roundButtonSpacing}px`,
            },

            '&.extraLarge': {
                minWidth: `${theme.layoutStyles.extraLargeIconSize + roundButtonSpacing}px`,
                minHeight: `${theme.layoutStyles.extraLargeIconSize + roundButtonSpacing}px`,
            },
        },

        '&.text': {
            border: 'none',

            '&:hover': {
                backgroundColor: theme.colorUtilities.shadeColorFast(theme.buttonStyles.bgColor, 0.8),
            },

            '& > $iconContainer': {
                '&.default': {
                    color: theme.buttonStyles.fontColorDefaultNoBG,
                }
            },

            '& > $captionContainer': {
                fontFamily: theme.buttonStyles.fontStackBold,

                '&.default': {
                    color: theme.buttonStyles.fontColorDefaultNoBG,
                }
            },
        },

        '&.outlined': {
            border: `${theme.buttonStyles.borderSize}px solid ${theme.buttonStyles.borderColor}`,
            padding: `${verticalPadding - theme.buttonStyles.borderSize}px ${horizontalPadding - theme.buttonStyles.borderSize}px`,

            '&:hover': {
                backgroundColor: theme.colorUtilities.shadeColorFast(theme.buttonStyles.bgColor, 0.8),
            },

            '& > $iconContainer': {
                '&.default': {
                    color: theme.buttonStyles.fontColorDefaultNoBG,
                }
            },

            '& > $captionContainer': {
                fontFamily: theme.buttonStyles.fontStackRegular,

                '&.default': {
                    color: theme.buttonStyles.fontColorDefaultNoBG,
                }
            },
        },

        '&.contained': {
            border: 'none',

            boxShadow: theme.materialDepthLevels.materialDepth1BoxShadow,
            backgroundColor: theme.buttonStyles.bgColor,

            '&:hover': {
                backgroundColor: theme.colorUtilities.shadeColorFast(theme.buttonStyles.bgColor, -0.2),
            },

            '& > $iconContainer': {
                '&.default': {
                    color: theme.buttonStyles.fontColorDefaultWithBG,
                }
            },

            '& > $captionContainer': {
                fontFamily: theme.buttonStyles.fontStackRegular,

                '&.default': {
                    color: theme.buttonStyles.fontColorDefaultWithBG,
                }
            },
        },

        '&.text.disabled': {
            '&:hover': {
                backgroundColor: theme.baseStyles.transparentBGColor,
            },

            '& > $iconContainer': {
                '&.default': {
                    color: theme.buttonStyles.fontColorSecondary,
                }
            },

            '& > $captionContainer': {
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

            '& > $iconContainer': {
                '&.default': {
                    color: theme.buttonStyles.fontColorSecondary,
                }
            },

            '& > $captionContainer': {
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

            '& > $iconContainer': {
                '&.default': {
                    color: theme.buttonStyles.fontColorSecondary,
                }
            },

            '& > $captionContainer': {
                '&.default': {
                    color: theme.buttonStyles.fontColorSecondary,
                }
            },
        },

        '& > $iconContainer': {
            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            color: theme.buttonStyles.fontColorDefault,

            '&.left': {
                marginLeft: '10px',
            },

            '&.right': {
                marginRight: '10px',
            },

            '&.primary': {
                color: theme.buttonStyles.fontColorPrimary,
            },

            '&.secondary': {
                color: theme.buttonStyles.fontColorSecondary,
            }
        },

        '& > $captionContainer': {
            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,


            textTransform: 'uppercase',
            textAlign: 'center',

            letterSpacing: '.5px',

            '&.primary': {
                color: theme.buttonStyles.fontColorPrimary,
            },

            '&.secondary': {
                color: theme.buttonStyles.fontColorSecondary,
            },
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

// $FlowFixMe decorators
@injectSheet(styles, {injectTheme: true})
class RegularButtonClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'RegularButtonClass';

    static defaultProps = {
        variant: 'contained',
        shape: 'rectangular',
        textType: 'default',

        label: '',

        captionStyle: {},
        onClick: () => {},
    };

    // endregion

    // region constructor
    constructor(props: PropsTypes) {
        super(props);

        const self: any = this;

        self._onClick = self._onClick.bind(this);
    }

    // endregion

    // region business logic
    _getLabelFontSize(): number {
        const {theme} = this.props;

        switch(this._getSize()) {
            case 'tiny':
                return theme.buttonStyles.tinyCaptionFontSize;
            case 'small':
                return theme.buttonStyles.smallCaptionFontSize;
            case 'medium':
                return theme.buttonStyles.mediumCaptionFontSize;
            case 'large':
                return theme.buttonStyles.largeCaptionFontSize;
            case 'extraLarge':
                return theme.buttonStyles.extraLargeCaptionFontSize;
            default:
                return theme.buttonStyles.smallCaptionFontSize;
        }
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getIconClassName(): ?string {
        const {iconClassName, classes} = this.props;
        const textType: string = this._getTextType();

        if (isNil(iconClassName)) {
            return null;
        }

        return classNames(
            classes.iconContainer,
            iconClassName,
            {
                'left': equals('left', this._getLabelPosition()),
                'right': equals('right', this._getLabelPosition()),
            },
            textType
        );
    }

    _getComponentContainerClass(): string {
        const {classes: {componentContainer}, containerClassName, className} = this.props;
        const buttonShape: string = this._getShape();
        const buttonVariant: string = this._getVariant();
        const size: string = this._getSize();

        return classNames(
            componentContainer,
            buttonShape,
            size,
            buttonVariant,
            {'disabled': this._getDisabled()},
            containerClassName,
            className);
    }

    _getCaptionContainerClass(): string {
        const {classes: {captionContainer}} = this.props;
        const textType: string = this._getTextType();

        return classNames(captionContainer, textType);
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getDisabled(): boolean {
        return defaultTo(false)(this.props.disabled);
    }

    _getVariant(): string {
        return defaultTo(RegularButtonClass.defaultProps.variant)
        (this.props.variant).toLowerCase();
    }

    _getShape(): string {
        return defaultTo(RegularButtonClass.defaultProps.shape)
        (this.props.shape).toLowerCase();
    }

    _getTextType(): string {
        return defaultTo(RegularButtonClass.defaultProps.textType)
        (this.props.textType).toLowerCase();
    }

    _getLabelPosition(): string {
        let {labelPosition} = this.props;
        labelPosition = typeof labelPosition === 'string' ? labelPosition.toLowerCase() : labelPosition;

        if (this._isLabelEmpty()) {
            return '';
        }

        return unless(isNotNil, always('left'))(labelPosition);
    }

    _getLabel(): string {
        return defaultTo('')(this.props.label);
    }

    _getCaptionStyle(): StyleType {
        return defaultTo(RegularButtonClass.defaultProps.captionStyle)
        (this.props.captionStyle);
    }

    _getContainerStyles(): StyleType {
        const containerStyles: StyleType = defaultTo({})(this.props.containerStyles);
        const style: StyleType = defaultTo({})(this.props.style);

        return Object.assign({}, containerStyles, style);
    }

    _getSize(): ButtonSizeType {
        return defaultTo(SMALL_SIZE)(this.props.size);
    }

    _isLabelEmpty(): boolean {
        return isEmpty(this._getLabel());
    }

    // endregion

    // region handlers
    _onClick(event: SyntheticEvent<HTMLButtonElement>): void {
        const {onClick} = this.props;

        // TODO: stupid flow.js - cannot use isNil here
        if (onClick === null || onClick === undefined) {
            return;
        }

        onClick(event);
    }

    // endregion

    // region render methods
    _renderCaptionContainer(): React.Node {
        return <InlineTextBlock
            fontSize={this._getLabelFontSize()}

            className={this._getCaptionContainerClass()}
            style={this._getCaptionStyle()}
        >
            {this._getLabel()}
        </InlineTextBlock>;
    }

    _renderIconContainer(): React.Node {
        return unless(isNil, className => <FontIcon size={this._getSize()} className={className}/>)(this._getIconClassName());
    }

    _renderComponentContainer(): React.Node {
        const onClickHandler: ClickCallbackType = this._onClick;
        const labelPosition: string = this._getLabelPosition();
        const isDisabled: boolean = this._getDisabled();

        return <div
            onClick={isDisabled ? null : onClickHandler}
            className={this._getComponentContainerClass()}
            style={this._getContainerStyles()}
        >
            {equals('right', labelPosition) ? this._renderIconContainer() : null}
            {this._renderCaptionContainer()}
            {or(equals('left', labelPosition), this._isLabelEmpty()) ? this._renderIconContainer() : null}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

function RegularButtonComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <RegularButtonClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

RegularButtonComponent.displayName = 'RegularButtonComponent';

// exports
export {RegularButtonClass, RegularButtonComponent};
export default RegularButtonComponent;
