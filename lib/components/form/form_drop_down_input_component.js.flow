'use strict';

// @flow

// external imports
import type {ElementType} from 'react';

import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import type {FieldProps} from 'redux-form';
import {isNil, equals, and, clone, defaultTo, mergeDeepRight, toPairs, keys, addIndex, map, find} from 'ramda';
import {isNotNil} from '@webfuturistics/design_components/lib/helpers/general/utility_helpers';
import {generateRandomIdNumber} from '@webfuturistics/design_components/lib/helpers/general/dom_helpers';

// local imports
import type {FormTextInputTypes} from './form_text_input_component';
import type {ThemeType} from './../../types/theme_types';
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';

import {FormTextInputComponent} from './form_text_input_component';
import {GlobalOverlayComponent} from './../window/global_overlay_component';
import {RegularCardComponent} from './../layout/structure/regular_card_component';

import {MainThemeContext} from './../../theming/providers/main_theme_provider';


// type definitions
type OptionValueType = string | number;
type OptionType = { [string]: OptionValueType };

type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = FieldProps & {
    /**
     * Number that indicates which visual variant will be used to represent the dropdown input
     */

    variant?: number,

    /**
     * Custom made representation of text input
     */

    textInputCustomComponent?: ElementType | React.Node,

    /**
     * List of possible options
     */

    options: OptionType,

    /**
     * Flag that dictates whether component should be readable only (text can be readable but not editable)
     */

    readOnly?: ?boolean,

    /**
     * Flag that dictates whether component should be disabled (text can not be readable or editable)
     */

    disabled?: ?boolean,

    /**
     * Placeholder text used as hint for the user of how appropriate data should look like
     */

    placeholder?: ?string,

    /**
     * Input label
     */

    label?: ?string,

    /**
     * Class name which will be added to the component container (main outer container)
     */

    componentContainerClassName?: string,

    /**
     * Class name which will be added to the icon container of the current component
     */

    iconClassName?: string,

    /**
     * Styles for component container (main outer container) of the form drop down input component
     */

    componentContainerStyles?: CSSStylesType,

    /**
     * Alias of 'componentContainerStyles'
     */

    style?: CSSStylesType,

    /**
     * 'Redux-form' field-component metadata
     *
     * @ignore
     */

    meta?: ?ReduxFormFieldComponentMetaDataPropsTypes,

    /**
     * 'Redux-form' field-component data
     *
     * @ignore
     */

    input: ReduxFormFieldComponentInputDataPropsTypes,

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
    /**
     * Internal representation of selected option
     */

    selectedOption: OptionType | null,

    /**
     * Flag that indicates whether options container should be shown
     */

    optionsShown: boolean,

    /**
     * CSS z-index property value for options container
     */

    optionsContainerZIndex?: number,
};

// styles definition
const styles = theme => ({
    componentOuterContainer: {
        boxSizing: 'border-box',

        position: 'relative',
        display: 'flex',

        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 0,

        flexDirection: 'column',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',

        '& > $inputControl': {
            display: 'none',
        },

        '& > $textInputContainer': {
            position: 'relative',

            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 0,
        },

        '& > $optionsContainer': {
            boxSizing: 'border-box',
            position: 'absolute',

            top: 0,
            left: 0,

            width: '100%',

            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 0,

            '& $optionContainer': {
                padding: '8px 8px 8px 10px',
                cursor: 'pointer',
                color: theme.inputStyles.inactiveColor,
            },

            '& $optionContainer.selected': {
                backgroundColor: theme.inputStyles.selectedBGColor,
            },

            '& $optionContainer:hover': {
                color: theme.inputStyles.hoverColor,
            },

            '& $optionContainer.selected:hover': {
                cursor: 'auto',
                color: theme.inputStyles.inactiveColor,
            }
        }
    },

    inputControl: {},
    textInputContainer: {},
    optionsContainer: {},
    optionContainer: {},
});

/**
 * Drop down input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformdropdowninputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles, {injectTheme: true})
class FormDropDownInputClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormDropDownInputClass';

    static defaultProps = {
        readOnly: false,
        disabled: false,

        placeholder: '',
        label: '',

        meta: {
            initial: '',

            active: false,
            pristine: true,
            dirty: false
        },

        input: {
            name: '',
            value: '',

            onChange: () => {},
            onFocus: () => {},
            onBlur: () => {},
            onDrop: () => {},
            onDragStart: () => {},
            onFocus: () => {},
        },

        iconClassName: 'fas fa-angle-down',

        classes: {},
    };

    static defaultState = {
        optionsShown: false,
        selectedOption: null
    };

    _id: string;

    // endregion

    // region constructor
    constructor(props: PropsTypes): void {
        super(props);
        const self: any = this;

        self._onDropDownInputClick = self._onDropDownInputClick.bind(this);
        self._onOverlayClick = self._onOverlayClick.bind(this);
        self._onOptionClick = self._onOptionClick.bind(this);

        this.state = {
            optionsShown: FormDropDownInputClass.defaultState.optionsShown,
            selectedOption: FormDropDownInputClass.defaultState.selectedOption,
        };

        this._id = this._createInputId();
    }

    // endregion

    // region lifecycle methods
    _createInputId(): string {
        const {name}: {name: string} = this._getInputData();
        const randomIdNumber: number = generateRandomIdNumber();

        if (isNil(name)) {
            throw new Error('Name cannot be null, cannot create input ID');
        }

        return `drop_down_input_${name}_${randomIdNumber}`;
    }

    _closeOptionsContainer(): void {
        this.props.theme.styleValuesRegister.releaseZIndex(this.state.optionsContainerZIndex);

        this.setState({
            optionsShown: false,
            optionsContainerZIndex: undefined,
        });
    }

    componentWillUnmount(): void {
        this.props.theme.styleValuesRegister.releaseZIndex(this.state.optionsContainerZIndex);
    }

    // endregion

    // region style accessors
    _getOptionContainerClasses(optionValue: OptionValueType, optionLabel: string): string {
        return classNames(
            this.props.classes.optionContainer,
            {'selected': this._isOptionValueSelected(optionValue, optionLabel)}
        );
    }

    _getInputClasses(): string {
        return this.props.classes.inputControl;
    }

    _getIconClassName(): string {
        return defaultTo(FormDropDownInputClass.defaultProps.iconClassName)
        (this.props.iconClassName);
    }

    _getComponentOuterContainerClasses(): string {
        return classNames(
            this.props.classes.componentOuterContainer,
            this.props.componentContainerClassName,
        );
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    _getInternalSelectedOption(): OptionType | null {
        return defaultTo(FormDropDownInputClass.defaultState.selectedOption)
        (this.state.selectedOption);
    }

    // endregion

    // region prop accessors
    _getInputData(): ReduxFormFieldComponentInputDataPropsTypes {
        const {input}: {input: ReduxFormFieldComponentInputDataPropsTypes} = this.props;
        return isNil(input) ? clone(FormDropDownInputClass.defaultProps.input) : input;
    }

    _getFormTextInputComponentProps(): FormTextInputTypes {
        const input = this._getInputData();
        const {variant, textInputCustomComponent, readOnly, disabled, placeholder, label, meta} = this.props;

        const currentName: string = defaultTo(this._id)(input.name);
        const currentValue: OptionValueType = defaultTo('')(this._getSelectedLabel());

        const newInput: ReduxFormFieldComponentInputDataPropsTypes = mergeDeepRight(input, {
            name: `${currentName}_subTextField`,
            value: currentValue,

            onFocus: () => {},
            onBlur: () => {},
        });

        return {
            variant,
            customComponent: textInputCustomComponent,
            type: 'text',
            readOnly,
            disabled,
            placeholder,
            label,
            iconClassNames: this._getIconClassName(),
            meta,
            input: newInput
        };
    }

    _getSelectedValueLabel(): ?OptionType {
        const selectedOption: OptionType | null = this._getInternalSelectedOption();
        const {options} = this.props;

        if (isNil(selectedOption)) {
            return;
        }

        const selectedOptionLabel: string = keys(selectedOption)[0];
        const selectedOptionValue: OptionValueType = selectedOption[selectedOptionLabel];

        const labelValue: ?[string, OptionValueType] = find(([optionLabel, optionValue]) => {
            return and(
                equals(selectedOptionLabel, optionLabel),
                equals(selectedOptionValue, optionValue),
            );
        })(toPairs(options));

        if (isNotNil(labelValue)) {
            return selectedOption;
        }
    }

    _getSelectedLabel(): ?string {
        const selectedValueLabel: ?OptionType = this._getSelectedValueLabel();
        return isNotNil(selectedValueLabel) ? toPairs(selectedValueLabel)[0][0] : selectedValueLabel;
    }

    _isOptionValueSelected(optionValue: OptionValueType, optionLabel: string): boolean {
        const selectedOption: ?OptionType = this._getInternalSelectedOption();

        if (isNil(selectedOption)) {
            return false;
        }

        const selectedOptionLabel: string = keys(selectedOption)[0];
        const selectedOptionValue: OptionValueType = selectedOption[selectedOptionLabel];

        return and(
            equals(selectedOptionLabel, optionLabel),
            equals(optionValue, selectedOptionValue)
        );
    }

    _getComponentContainerStyles(): CSSStylesType {
        const componentContainerStyles: CSSStylesType = defaultTo({})(this.props.componentContainerStyles);
        const style: CSSStylesType = defaultTo({})(this.props.style);

        return Object.assign({}, componentContainerStyles, style);
    }

    // endregion

    // region handlers
    _onOptionClick(event: SyntheticMouseEvent<any>, optionValue: OptionValueType, optionLabel: string): void {
        this._closeOptionsContainer();
        const {onChange}: ReduxFormFieldComponentInputDataPropsTypes = this._getInputData();

        this.setState({selectedOption: {[optionLabel]: optionValue}});
        onChange(optionValue);
    }

    _onOverlayClick(): void {
        this._closeOptionsContainer();
    }

    _onDropDownInputClick(): void {
        let {readOnly, disabled} = this.props;

        readOnly = defaultTo(false)(readOnly);
        disabled = defaultTo(false)(disabled);

        if (readOnly || disabled) {
            return;
        }

        this.setState({
            optionsShown: true,
            optionsContainerZIndex: this.props.theme.styleValuesRegister.zIndex,
        });
    }

    // endregion

    // region render methods
    _renderTextInputComponent(): React.Node {
        return <FormTextInputComponent {...this._getFormTextInputComponentProps()} />;
    }

    _renderTextInputContainer(): React.Node {
        return <div className={this.props.classes.textInputContainer} onClick={this._onDropDownInputClick}>
            {this._renderTextInputComponent()}
        </div>;
    }

    _renderInputOptions(): React.Node[] {
        // TODO: indexedMap function here, 'any' is definitely bad chose
        const indexedMap: any = addIndex(map);

        return indexedMap((option, index) => {
            return <option value={option[1]} key={`input_option_${index}`}>{option[0]}</option>;
        }, toPairs(this.props.options));
    }

    _renderInput(): React.Node {
        const {disabled} = this.props;
        const {value, name, onChange}: ReduxFormFieldComponentInputDataPropsTypes = this._getInputData();

        const disabledParam: ?string = disabled ? 'disabled' : undefined;

        return <select
            className={this._getInputClasses()}
            disabled={disabledParam}
            size={1}

            value={value}
            name={name}

            onChange={onChange}
        >
            {this._renderInputOptions()}
        </select>;
    }

    _renderGlobalOverlayComponent(): React.Node {
        return <GlobalOverlayComponent show={this.state.optionsShown} opacity={0} onOverlayClick={this._onOverlayClick}/>;
    }

    _renderOptionContainer(
        index: number,
        label: string,
        className: string,
        clickCallback?: (event: SyntheticMouseEvent<HTMLInputElement>) => void): React.Node {
        return <div onClick={clickCallback} className={className} key={`option_${index}`}>{label}</div>;
    }

    _renderOptionsContainers(): React.Node[] {
        // TODO: indexedMap function here, 'any' is definitely bad chose
        const indexedMap: any = addIndex(map);

        return indexedMap((option, index) => {
            const currentOptionLabel: string = option[0];
            const currentOptionValue: OptionValueType = option[1];

            return this._renderOptionContainer(
                index,
                currentOptionLabel,
                this._getOptionContainerClasses(currentOptionValue, currentOptionLabel),
                this._isOptionValueSelected(currentOptionValue, currentOptionLabel) ? undefined : (event) => this._onOptionClick(event, currentOptionValue, currentOptionLabel)
            );

        }, toPairs(this.props.options));
    }

    _renderOptionsContainer(): React.Node {
        const containerStyles: {[string]: mixed} = {zIndex: this.state.optionsContainerZIndex};
        const bodyStyle: {[string]: mixed}  = {padding: '0px'};

        return this.state.optionsShown ? <RegularCardComponent
            containerClassName={this.props.classes.optionsContainer}
            containerStyle={containerStyles}
            bodyStyle={bodyStyle}
        >
            {this._renderOptionsContainers()}
        </RegularCardComponent> : null;
    }

    _renderOuterContainer(): React.Node {
        return (
            <div
                className={this._getComponentOuterContainerClasses()}
                style={this._getComponentContainerStyles()}
            >
                {this._renderInput()}
                {this._renderTextInputContainer()}
                {this._renderGlobalOverlayComponent()}
                {this._renderOptionsContainer()}
            </div>
        );
    }

    render(): React.Node {
        return this._renderOuterContainer();
    }

    // endregion
}

function FormDropDownInputComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <FormDropDownInputClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

FormDropDownInputComponent.displayName = 'FormDropDownInputComponent';

// exports
export {FormDropDownInputClass, FormDropDownInputComponent};
export default FormDropDownInputComponent;
