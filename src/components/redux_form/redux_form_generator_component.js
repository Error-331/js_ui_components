'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import {isNil, defaultTo, bind, addIndex, flatten, repeat, map} from 'ramda';

// local imports
import type {NestedArray} from 'ramda';
import type {PropsTypes as ReduxFormTextInput} from './redux_form_text_input_component';

import {MainThemeContext} from './../../theming/providers/main_theme_provider';

import {ReduxFormTextInputComponent} from './redux_form_text_input_component';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type OptionsType = ReduxFormTextInput;

type ItemType = {
    type: 'text',
    span: number,
    name: string,

    options: OptionsType
};

type ItemsType = NestedArray<ItemType>;

type PropsTypes = {
    items?: ItemsType,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any,
}

type StateTypes = {};

// constants definition
const ITEM_NAME_POSTFIX: string = '_item';

// styles definition
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'grid',

        gridColumnGap: `${theme.layoutStyles.sectionVerticalSpacing}px`,
        gridRowGap: `${theme.layoutStyles.sectionHorizontalSpacing}px`,

        gridTemplateRows: 'repeat(auto-fit, max-content)',
    }
});

// component implementation
@injectSheet(styles)
export class ReduxFormGeneratorClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'ReduxFormGeneratorClass';

    static defaultProps = {
        items: null,
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
    _getComponentContainerClassName(): string {
        return this.props.classes.componentContainer;
    }

    _getComponentContainerStyle(): CSSStylesType {
        const items: ItemsType | null =  this._getItems();

        if (isNil(items)) {
            return {};
        }


        map(() => {
            console.log();
        }, map((item) => {
            return repeat(item.name, item.span).join(' ');
        }, items));

        return {};
    }

    _getItemStyle(name: string): CSSStylesType {
        return {
            boxSizing: 'border-box',
            gridArea: `${name}${ITEM_NAME_POSTFIX}`,
        };
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getItems(): ItemsType | null {
        return defaultTo(ReduxFormGeneratorClass.defaultProps.items)(this.props.items);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderTextInputItem(name: string, options: ReduxFormTextInput, index: number): React.Node {
        const {componentContainerStyles} = options;

        let composedComponentContainerStyles: CSSStylesType = defaultTo({})(componentContainerStyles);
        composedComponentContainerStyles = Object.assign({}, composedComponentContainerStyles, this._getItemStyle(name));

        return <ReduxFormTextInputComponent
            {...options}
            name={name}
            componentContainerStyles={composedComponentContainerStyles}
            key={`item_${index}`}
        />;
    }

    _renderItem(item: ItemType, index: number): React.Node {
        const {name, type, options} = item;

        switch(type) {
            case 'text':
                return this._renderTextInputItem(name, options, index);
            default:
                return null;
        }
    }

    _renderItems(): React.Node {
        const items: ItemsType | null =  this._getItems();

        if (isNil(items)) {
            return null;
        }

        return addIndex(map)(bind(this._renderItem, this), flatten(items));
    }

    _renderComponentContainer(): React.Node {
        return <div
            className={this._getComponentContainerClassName()}
            style={this._getComponentContainerStyle()}
        >
            {this._renderItems()}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

// exports
export function ReduxFormGeneratorComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <ReduxFormGeneratorClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

ReduxFormGeneratorComponent.displayName = 'ReduxFormGeneratorComponent';