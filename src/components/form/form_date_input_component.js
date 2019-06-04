'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import type {FieldProps} from 'redux-form';
import moment from 'moment';

import {is, isNil, defaultTo, clone, mergeDeepRight} from 'ramda';
import {generateRandomIdNumber} from '@webfuturistics/design_components/lib/helpers/general/dom_helpers';

// local imports
import type {FormTextInputTypes} from './form_text_input_component';
import type {ThemeType} from './../../types/theme_types';
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';

import {MainThemeContext} from './../../theming/providers/main_theme_provider';

import {FormTextInputComponent} from './form_text_input_component';
import {SimpleCalendarComponent} from './../date/simple_calender_component';
import {GlobalOverlayComponent} from './../window/global_overlay_component';

// type definitions
type OptionValueType = string | number;

type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = FieldProps & {
    /**
     * Number that indicates which visual variant will be used to represent the date input
     */

    variant?: number,

    /**
     * Formatting that will be used when displaying date
     */

    dateFormat?: string,

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
     * Class name which will be added to the component container (main outer container)
     */

    componentContainerClassName?: string,

    /**
     * Styles for component container (main outer container) of the form date input component
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

        '& > $textInputContainer': {
            position: 'relative',

            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 0,
        },
    },

    textInputContainer: {},
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
class FormDateInputClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormDateInputClass';

    static defaultProps = {
        dateFormat: ' YYYY-MM-DD',

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
    _getComponentOuterContainerClassName(): string {
        return classNames(
            this.props.classes.componentOuterContainer,
            this.props.componentContainerClassName
        );
    }

    _getTextInputContainerClassName(): string {
        return this.props.classes.textInputContainer;
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
    _isReadOnly(): boolean {
        const {readOnly} = this.props;
        return defaultTo(FormDateInputClass.defaultProps.readOnly)(readOnly);
    }

    _isDisabled(): boolean {
        const {disabled} = this.props;
        return defaultTo(FormDateInputClass.defaultProps.disabled)(disabled);
    }

    _getDate(): moment {
        const {value}: ReduxFormFieldComponentInputDataPropsTypes = this._getInputData();
        const parsedDate: moment = moment(value);

        return parsedDate.isValid() ? parsedDate : moment();
    }

    _getDateFormat(): string {
        const {dateFormat} = this.props;
        return defaultTo(FormDateInputClass.defaultProps.dateFormat)(dateFormat);
    }

    _getInputData(): ReduxFormFieldComponentInputDataPropsTypes {
        const {input}: {input: ReduxFormFieldComponentInputDataPropsTypes} = this.props;
        return isNil(input) ? clone(FormDateInputClass.defaultProps.input) : input;
    }

    _getFormTextInputComponentProps(): FormTextInputTypes {
        const input = this._getInputData();
        const {variant, readOnly, disabled, placeholder, label, meta} = this.props;

        const currentName: string = defaultTo(this._id)(input.name);
        const currentValue: OptionValueType = defaultTo('')(input.value);

        const dateFormat: string = this._getDateFormat();

        const newInput: ReduxFormFieldComponentInputDataPropsTypes = mergeDeepRight(input, {
            name: `${currentName}_subTextField`,
            value: is(Object, currentValue) ? moment(currentValue).format(dateFormat) : '',

            onFocus: () => {},
            onBlur: () => {},
        });

        return {
            variant,
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

    _getComponentContainerStyles(): CSSStylesType {
        const componentContainerStyles: CSSStylesType = defaultTo({})(this.props.componentContainerStyles);
        const style: CSSStylesType = defaultTo({})(this.props.style);

        return Object.assign({}, componentContainerStyles, style);
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
        if (this._isReadOnly() || this._isDisabled()) {
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
        return <div className={this._getTextInputContainerClassName()} onClick={this._onDateInputClick}>
            {this._renderTextInputComponent()}
        </div>;
    }

    _renderDateSelector(): React.Node {
        return <GlobalOverlayComponent show={this.state.dateSelectorShown} onOverlayClick={this._onOverlayClick}>
            <SimpleCalendarComponent date={this._getDate()} onDateSelect={this._onDateSelect}/>
        </GlobalOverlayComponent>;
    }

    _renderOuterContainer(): React.Node {
        return (
            <div
                className={this._getComponentOuterContainerClassName()}
                style={this._getComponentContainerStyles()}
            >
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

function FormDateInputComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <FormDateInputClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

FormDateInputComponent.displayName = 'FormDateInputComponent';

// exports
export {FormDateInputClass, FormDateInputComponent};
export default FormDateInputComponent;