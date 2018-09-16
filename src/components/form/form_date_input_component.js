'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import type {FieldProps} from 'redux-form';
import moment from 'moment';

import {is, isNil, defaultTo, clone, mergeDeepRight} from 'ramda';
import {isNotNil, generateRandomIdNumber} from '@webfuturistics/design_components';

// local imports
import type {FormTextInputTypes} from './form_text_input_component';
import type {ThemeType} from './../../types/theme_types';
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';

import {MainThemeContext} from './../../theming';
import {FormTextInputComponent} from './form_text_input_component';
import {SimpleCalendarComponent} from './../date/simple_calender_component';
import {GlobalOverlayComponent} from './../window/global_overlay_component';

// type definitions
type OptionValueType = string | number;

type PropsTypes = FieldProps & {

    /**
     * Flag that indicates whether month selector should be shown
     */

    showMonthSelector?: boolean,

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
     * Flag that indicates whether date selector should be shown
     */

    dateSelectorShown: boolean,
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
 * Date input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxdateinputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
export class FormDateInputClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormDateInputClass';

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

        classes: {}
    };

    _id: string;

    // endregion

    // region constructor
    constructor(props: PropsTypes): void {
        super(props);
        const self: any = this;

        self._onDateInputClick = self._onDateInputClick.bind(this);
        self._onOverlayClick = self._onOverlayClick.bind(this);
        self._onDateSelect = self._onDateSelect.bind(this);

        this.state = {
            dateSelectorShown: false
        };

        this._id = this._createInputId();
    }

    // endregion

    // region lifecycle methods
    _closeDateSelector(): void {
        this.setState({
            dateSelectorShown: false,
        });
    }

    // endregion

    // region style accessors
    _getInputClasses(): string {
        return this.props.classes.inputControl;
    }

    _getComponentOuterContainerClasses(): string {
        return this.props.classes.componentOuterContainer;
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

        return `date_input_${name}_${randomIdNumber}`;
    }

    // endregion

    // region prop accessors
    _getDate(): moment {
        const {value}: ReduxFormFieldComponentInputDataPropsTypes = this._getInputData();
        const parsedDate: moment = moment(value);

        return parsedDate.isValid() ? parsedDate : moment();
    }

    _getInputData(): ReduxFormFieldComponentInputDataPropsTypes {
        const {input}: {input: ReduxFormFieldComponentInputDataPropsTypes} = this.props;
        return isNil(input) ? clone(FormDateInputClass.defaultProps.input) : input;
    }

    _getFormTextInputComponentProps(): FormTextInputTypes {
        const input = this._getInputData();
        const {readOnly, disabled, placeholder, label, meta} = this.props;

        const currentName: string = defaultTo(this._id)(input.name);
        const currentValue: OptionValueType = defaultTo('')(input.value);

        const newInput: ReduxFormFieldComponentInputDataPropsTypes = mergeDeepRight(input, {
            name: `${currentName}_subTextField`,
            value: is(Object, currentValue) ? moment(currentValue).format() : '',

            onFocus: () => {},
            onBlur: () => {},
        });

        return {
            type: 'text',
            readOnly,
            disabled,
            placeholder,
            label,
            iconClassNames: 'fas fa-calendar',
            meta,
            input: newInput
        };
    }

    // endregion

    // region handlers
    _onDateSelect(date: moment): void {
        this._closeDateSelector();
        const {onChange}: ReduxFormFieldComponentInputDataPropsTypes = this._getInputData();

        onChange(date);
    }

    _onOverlayClick(): void {
        this._closeDateSelector();
    }

    _onDateInputClick(): void {
        let {readOnly, disabled} = this.props;

        readOnly = defaultTo(false)(readOnly);
        disabled = defaultTo(false)(disabled);

        if (readOnly || disabled) {
            return;
        }

        this.setState({
            dateSelectorShown: true,
        });
    }

    // endregion

    // region render methods
    _renderTextInputComponent(): React.Node {
        return <FormTextInputComponent {...this._getFormTextInputComponentProps()} />;
    }

    _renderTextInputContainer(): React.Node {
        return <div className={this.props.classes.textInputContainer} onClick={this._onDateInputClick}>
            {this._renderTextInputComponent()}
        </div>;
    }

    _renderDateSelector(): React.Node {
        const {onChange}: ReduxFormFieldComponentInputDataPropsTypes = this._getInputData();


        return <GlobalOverlayComponent show={this.state.dateSelectorShown} opacity={0.5} onOverlayClick={this._onOverlayClick}>
            <SimpleCalendarComponent date={this._getDate()} onDateSelect={this._onDateSelect}/>
        </GlobalOverlayComponent>;
    }

    _renderOuterContainer(): React.Node {
        return (
            <div className={this._getComponentOuterContainerClasses()}>
                {this._renderTextInputContainer()}
                {this._renderDateSelector()}
            </div>
        );
    }

    render(): React.Node {
        return this._renderOuterContainer();
    }

    // endregion
}

// exports
export function FormDateInputComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <FormDateInputClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}


FormDateInputComponent.displayName = 'FormDateInputComponent';