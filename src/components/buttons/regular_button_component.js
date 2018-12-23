'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {defaultTo, is, isNil, equals, unless, always} from 'ramda';
import {isNotNil} from '@webfuturistics/design_components/lib/helpers/general/utility_helpers';

// local imports
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
     * Class name which will be added to outer container of the component
     */

    containerClassName?: ?string,

    /**
     * Styles which will be added to outer container of the component
     */

    containerStyles?: StyleType,

    /**
     * Icon class name
     */

    iconClassName?: string,

    /**
     * Callback function which will be called once user clicks on a button
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
const verticalPadding: number = 11; // px
const horizontalPadding: number = 16; // px

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

            '&.tiny': {
                fontSize: theme.buttonStyles.tinyCaptionFontSize,
            },

            '&.small': {
                fontSize: theme.buttonStyles.smallCaptionFontSize,
            },

            '&.medium': {
                fontSize: theme.buttonStyles.mediumCaptionFontSize,
            },

            '&.large': {
                fontSize: theme.buttonStyles.largeCaptionFontSize,
            },

            '&.extraLarge': {
                fontSize: theme.buttonStyles.extraLargeCaptionFontSize,
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
@injectSheet(styles)
export class RegularButtonClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'RegularButtonClass';

    static defaultProps = {
        label: '',

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
        const {classes: {componentContainer}, containerClassName} = this.props;
        const buttonVariant: string = this._getVariant();
        const size: string = this._getSize();

        return classNames(componentContainer, size, buttonVariant, containerClassName);
    }

    _getCaptionContainerClass(): string {
        const {classes: {captionContainer}} = this.props;
        const textType: string = this._getTextType();

        return classNames(captionContainer, this._getSize(), textType);
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
        const {variant = 'contained'} = this.props;
        return variant.toLowerCase();
    }

    _getTextType(): string {
        const {textType = 'default'} = this.props;
        return textType.toLowerCase();
    }

    _getLabelPosition(): string {
        let {labelPosition} = this.props;
        labelPosition = is(String, labelPosition) ? labelPosition.toLowerCase() : labelPosition;

        return unless(isNotNil, always('left'))(labelPosition);
    }

    _getLabel(): string {
        return defaultTo('')(this.props.label);
    }

    _getContainerStyles(): StyleType {
        return defaultTo({})(this.props.containerStyles);
    }

    _getSize(): ButtonSizeType {
        return defaultTo(SMALL_SIZE)(this.props.size);
    }

    // endregion

    // region handlers
    _onClick(event: SyntheticEvent<HTMLButtonElement>): void {
        const {onClick}: {onClick?: ?ClickCallbackType} = this.props;

        if (isNil(onClick) && !is(Function, onClick)) {
            return;
        }

        onClick(event);
    }

    // endregion

    // region render methods
    _renderCaptionContainer(): React.Node {
        return <InlineTextBlock className={this._getCaptionContainerClass()}>
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
            {equals('left', labelPosition) ? this._renderIconContainer() : null}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

// exports
export function RegularButtonComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <RegularButtonClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

RegularButtonComponent.displayName = 'RegularButtonComponent';
