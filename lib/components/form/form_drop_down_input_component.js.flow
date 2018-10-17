'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import type {FieldProps} from 'redux-form';
import {isNil, equals, clone, defaultTo, mergeDeepRight, toPairs, addIndex, map, find} from 'ramda';
import {isNotNil, generateRandomIdNumber} from '@webfuturistics/design_components';

// local imports
import type {FormTextInputTypes} from './form_text_input_component';
import type {ThemeType} from './../../types/theme_types';
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';

import {FormTextInputComponent} from './form_text_input_component';
import {GlobalOverlayComponent} from './../window/global_overlay_component';
import {RegularCardComponent} from './../layout/structure/regular_card_component';

// type definitions
type OptionValueType = string | number;
type OptionType = { [string]: OptionValueType }

type CSSStylesType = {
    [string]: mixed
};


type PropsTypes = FieldProps & {

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
     * Styles for component container (main outer container) of the form drop down input component
     */

    componentContainerStyles?: CSSStylesType,

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
export class FormDropDownInputComponentClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormDropDownInputComponent';

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

        classes: {},

        componentContainerStyles: {},
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
            optionsShown: false
        };

        this._id = this._createInputId();
    }

    // endregion

    // region lifecycle methods
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
    _getOptionContainerClasses(optionValue: OptionValueType): string {
        return classNames(
            this.props.classes.optionContainer,
            {'selected': this._isOptionValueSelected(optionValue)}
        );
    }

    _getInputClasses(): string {
        return this.props.classes.inputControl;
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
    _createInputId(): string {
        const {name}: {name: string} = this._getInputData();
        const randomIdNumber: number = generateRandomIdNumber();

        if (isNil(name)) {
            throw new Error('Name cannot be null, cannot create input ID');
        }

        return `drop_down_input_${name}_${randomIdNumber}`;
    }

    // endregion

    // region prop accessors
    _getInputData(): ReduxFormFieldComponentInputDataPropsTypes {
        const {input}: {input: ReduxFormFieldComponentInputDataPropsTypes} = this.props;
        return isNil(input) ? clone(FormDropDownInputComponentClass.defaultProps.input) : input;
    }

    _getFormTextInputComponentProps(): FormTextInputTypes {
        const input = this._getInputData();
        const {readOnly, disabled, placeholder, label, meta} = this.props;

        const currentName: string = defaultTo(this._id)(input.name);
        const currentValue: OptionValueType = defaultTo('')(this._getSelectedLabel());

        const newInput: ReduxFormFieldComponentInputDataPropsTypes = mergeDeepRight(input, {
            name: `${currentName}_subTextField`,
            value: currentValue,

            onFocus: () => {},
            onBlur: () => {},
        });

        return {
            type: 'text',
            readOnly,
            disabled,
            placeholder,
            label,
            iconClassNames: 'fas fa-angle-down',
            meta,
            input: newInput
        };
    }

    _getSelectedValueLabel(): ?OptionType {
        const {value} = this._getInputData();
        const {options} = this.props;

        if (isNil(value)) {
            return;
        }

        const labelValue: ?[string, OptionValueType] = find(labelValue => value === labelValue[1])(toPairs(options));

        if (isNotNil(labelValue)) {
            return {
                [labelValue[0]]: labelValue[1]
            };
        }
    }

    _getSelectedLabel(): ?string {
        const selectedValueLabel: ?OptionType = this._getSelectedValueLabel();
        return isNotNil(selectedValueLabel) ? toPairs(selectedValueLabel)[0][0] : selectedValueLabel;
    }

    _isOptionValueSelected(optionValue: OptionValueType): boolean {
        const selectedOption: ?OptionType = this._getSelectedValueLabel();

        if (isNil(selectedOption)) {
            return false;
        }

        return equals(optionValue, toPairs(selectedOption)[0][1]);
    }

    _getComponentContainerStyles(): CSSStylesType {
        return defaultTo(FormDropDownInputComponentClass.defaultProps.componentContainerStyles)(this.props.componentContainerStyles);
    }

    // endregion

    // region handlers
    _onOptionClick(event: SyntheticMouseEvent<any>, optionValue: OptionValueType): void {
        this._closeOptionsContainer();
        const {onChange}: ReduxFormFieldComponentInputDataPropsTypes = this._getInputData();

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
                this._getOptionContainerClasses(currentOptionValue),
                this._isOptionValueSelected(currentOptionValue) ? undefined : (event) => this._onOptionClick(event, currentOptionValue)
            );

        }, toPairs(this.props.options));
    }

    _renderOptionsContainer(): React.Node {
        const containerStyles: {[string]: mixed} = {zIndex: this.state.optionsContainerZIndex};
        const bodyStyles: {[string]: mixed}  = {padding: '0px'};

        return this.state.optionsShown ? <RegularCardComponent
            containerClassNames={this.props.classes.optionsContainer}
            containerStyles={containerStyles}
            bodyStyles={bodyStyles}
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

// exports
export const FormDropDownInputComponent = injectSheet(styles)(FormDropDownInputComponentClass);