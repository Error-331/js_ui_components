'use strict';

// @flow

// external imports
import type {ElementType} from 'react';

import * as React from 'react';
import {isElement} from 'react-dom/test-utils';

import {T, isNil, always, defaultTo, ifElse, cond, equals, pick} from 'ramda';

// local imports
import {MainThemeContext} from './../../theming/providers/main_theme_provider';
import ChipVariant1Component from './chip_variants/chip_variant1_component';

// type definitions
export type ClickCallbackType = (event: SyntheticEvent<HTMLDivElement>) => void;
export type StyleType = {[string]: mixed};

export type BaseComponentProps = {
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
     * Data associated with current component
     */

    data?: any,

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
};

type PropsTypes = BaseComponentProps & {
    /**
     * Custom made representation of current component
     */

    customComponent?: ElementType | React.Node,

    /**
     * Number that indicates which color variant will be used to represent the text input
     */

    colorVariant?: number,
};

type StateTypes = {
    isMouseOver: boolean
};

// styles definition

/**
 * Chip component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
class ChipClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'ChipComponent';

    static defaultProps = {
        colorVariant: 1,
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
    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getVariant(): number {
        return defaultTo(ChipClass.defaultProps.colorVariant)(this.props.colorVariant);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    render(): React.Node {
        const {customComponent} = this.props;

        const componentVariantProps: BaseComponentProps = pick(
          [
              'variant', 'textType',
              'clickable', 'rightIconClickable',
              'label', 'labelPosition', 'data', 'disabled',
              'onClick', 'onRightIconClick',
              'className', 'containerClassName',
              'rightIconClassName', 'containerStyle', 'style',
              'hoverStyle', 'labelStyle', 'rightIconStyle'
          ],
          this.props
        );

        if (!isNil(customComponent)) {
            return ifElse(
              isElement,
              (elm) => {
                  return React.cloneElement(
                    elm,
                    {
                        ...elm.props,
                        ...componentVariantProps,
                    }
                  );
              },
              (elm) => {
                  return React.createElement(elm, {...componentVariantProps});
              }
            )(customComponent);
        }

        return cond([
            [equals(1), always(<ChipVariant1Component {...componentVariantProps}/>)],
            [equals(2), always(<ChipVariant1Component {...componentVariantProps}/>)],
            [T, always(null)]
        ])(this._getVariant());
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
