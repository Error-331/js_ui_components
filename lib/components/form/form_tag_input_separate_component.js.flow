'use strict';

// @flow

// external imports
import type {Node, Element, ElementType} from 'react';
import type {FieldProps} from 'redux-form';

import React, {useState} from 'react';
import {createUseStyles, useTheme} from 'react-jss';

import {is, isNil, equals, defaultTo, propEq, pathOr, findIndex, remove, clone, replace, map} from 'ramda';
import {List as ImmutableList, Map as ImmitableMap} from 'immutable';

// local imports
import type {ThemeType} from './../../types/theme_types';
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';
import type {BaseComponentProps as ChipComponentProps} from './../buttons/chip_component';
import type {ChipCollectionDataType} from './../collections/chip_collection_component';

import type {RenderFunctionNoArgsType, InputEventHandlerType} from './../../types/common_types';

import FormTextInputComponent from './../form/form_text_input_component';
import ChipCollectionComponent from './../collections/chip_collection_component';

// local imports

// type definitions
type PropsTypes = FieldProps & {
    /**
     * Custom made representation of text input component used inside current component
     */

    customTextInputComponent?: ElementType | React.Node,

    /**
     * Custom made representation of chip component used inside current component
     */

    customChipComponent?: ElementType | React.Node,

    /**
     * Number that indicates which visual variant will be used to represent the tag input component
     */

    variant?: number,

    /**
     * Flag that dictates whether component should be readable only
     */

    readOnly?: ?boolean,

    /**
     * Flag that dictates whether component should be disabled
     */

    disabled?: ?boolean,

    /**
     * Custom made representation of text input component
     */

    customTextInputComponent?: ElementType | React.Node,

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

    input?: ?ReduxFormFieldComponentInputDataPropsTypes,

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

// styles definition
const useStyles = createUseStyles(theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'flex',

        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,

        flexDirection: 'column',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'flex-start',

        '& > $textInputContainer': {
            boxSizing: 'border-box',

            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 0,
        },

        '& > $tagsCollectionContainer': {
            boxSizing: 'border-box',

            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 0,

            marginTop: `${theme.layoutStyles.sectionVerticalSpacing}px`,
        },
    },

    textInputContainer: {},
    tagsCollectionContainer: {},
}));

/**
 * Tag input component (with separate tag display section) styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#/UI%20Components/Redux%20form/ReduxFormTagInputSeparateComponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function FormTagInputSeparateComponent(props: PropsTypes) {
    // region private variables declaration
    const variant: number = defaultTo(1, props.variant);

    const readOnly: boolean = defaultTo(false, props.readOnly);
    const disabled: boolean = defaultTo(false, props.disabled);

    const customTextInputComponent: ElementType | React.Node | null = defaultTo(null, props.customTextInputComponent);

    const metaProps: ReduxFormFieldComponentMetaDataPropsTypes = defaultTo({}, props.meta);
    const inputProps: ReduxFormFieldComponentInputDataPropsTypes = defaultTo({}, props.input);

    // endregion

    // region style hooks declaration
    const theme: ThemeType = useTheme();
    const classes: {[string]: string} = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    // endregion

    // region state hooks declaration
    const [textInputValue, setTextInputValue] = useState('');

    const [componentActive, setComponentActive] = useState(false);
    const [componentTouched, setComponentTouched] = useState(false);

    // endregion

    // region effect hooks declaration
    // endregion

    // region state variables declaration
    // endregion

    // region ref hooks declaration
    // endregion

    // region callback hooks declaration
    // endregion

    // region custom hooks declaration
    // endregion

    // region business logic
    const findTagIndexByData: (currentTagData: string) => number =
        (currentTagData: string): number => {
            const value: Array<ChipCollectionDataType> | ImmutableList = pathOr([], ['value'], inputProps);

            if (ImmutableList.isList(value)) {
                return value.findIndex((listValue: ImmitableMap) => {
                    const data: string | undefined = listValue.get('data');
                    return !isNil(data) && data === currentTagData;
                });
            } else {
                return findIndex(propEq('data', currentTagData))(value);
            }
        };

    const addTagFromTextInput: () => boolean = (): boolean => {
        if (isNil(textInputValue) || textInputValue === '') {
            return false;
        }

        const onChange: (event: SyntheticEvent<HTMLInputElement>) => void = pathOr(() => {}, ['onChange'], inputProps);
        let value: Array<ChipCollectionDataType> | ImmutableList = pathOr([], ['value'], inputProps);

        value = is(Object, value) ? value : [];
        value = ImmutableList.isList(value) ? value : clone(value);

        const newValue: ChipCollectionDataType = {
            data: textInputValue,
            clickable: false,
            // TODO: better sanitization
            label: replace(',', '', textInputValue),
            labelPosition: 'left',
            rightIconClassName: 'fas fa-times-circle'
        };

        const valueNotExist: boolean = findTagIndexByData(textInputValue) === -1;

        if (ImmutableList.isList(value)) {
            if (valueNotExist) {
                onChange(value.push(ImmitableMap(newValue)));
                return true;
            }
        } else {
            if (valueNotExist) {
                value.push(newValue);

                onChange(value);
                return true;
            }
        }

        return false;
    };

    // endregion

    // region event handler helpers
    const onClickTagCloseButton: (event: SyntheticEvent<HTMLInputElement>, currentTagData: string) => void =
        (event: SyntheticEvent<HTMLInputElement>, currentTagData: string) => {
            const onChange: (event: SyntheticEvent<HTMLInputElement>) => void = pathOr(() => {}, ['onChange'], inputProps);
            const value: Array<ChipCollectionDataType> | ImmutableList = pathOr([], ['value'], inputProps);

            const tagIndex: number = findTagIndexByData(currentTagData);

            if (ImmutableList.isList(value)) {
                onChange(value.delete(tagIndex));
            } else {
                onChange(remove(tagIndex, 1, value));
            }
        };

    const onComponentContainerFocus: InputEventHandlerType = (event: SyntheticEvent<HTMLInputElement>): void => {
        setComponentActive(true);
    };

    const onComponentContainerBlur: InputEventHandlerType = (event: SyntheticEvent<HTMLInputElement>): void => {
        if (componentTouched === false) {
            setComponentTouched(true);
        }

        setComponentActive(false);
    };

    const onKeyPressTextInput = (event: SyntheticEvent<HTMLInputElement>): void => {
        if (
            (event.key === 'Enter' || event.keyCode === 13) ||
            (event.key === ',' || event.keyCode === 188)
        ) {
            event.preventDefault();

            if (addTagFromTextInput()) {
                setTextInputValue('');
            }
        }
    };

    const onTextInputChange: InputEventHandlerType = (event: SyntheticEvent<HTMLInputElement>): void => {
        event.preventDefault();

        const value: any = pathOr(textInputValue, ['target', 'value'], event);
        setTextInputValue(value);
    };

    // endregion

    // region render helpers
    const renderTagsCollection: RenderFunctionNoArgsType = () => {
        let value: ChipCollectionDataType | ImmutableList = pathOr([], ['value'], inputProps);

        if (ImmutableList.isList(value)) {
            value = map((tagData:  ImmitableMap) => tagData.toObject(), value.toArray());
        }

        value = map((tagData: ChipComponentProps) => {
            tagData.clickable = false;
            tagData.rightIconClickable = true;

            tagData.rightIconClassName = 'fas fa-times-circle';
            tagData.onRightIconClick = onClickTagCloseButton;
            return tagData;
        }, value);

        return <ChipCollectionComponent
            customChipComponent={props.customChipComponent}
            data={value}
        />;
    };

    const renderTagsCollectionContainer: RenderFunctionNoArgsType = () => {
        const {tagsCollectionContainer} = classes;

        return <div className={tagsCollectionContainer}>
            {renderTagsCollection()}
        </div>;
    };

    const renderTextInput: RenderFunctionNoArgsType = () => {
        const initial: any =  pathOr(false, ['initial'], metaProps);
        const name: any =  pathOr(false, ['name'], inputProps);
        const value: any =  pathOr(false, ['value'], inputProps);

        let pristine: boolean = false;

        if (ImmutableList.isList(value)) {
            pristine = value.equals(initial);
        } else {
            pristine = equals(value, initial);
        }

        const dirty: boolean = !pristine;
        const textInputMetaProps: ReduxFormFieldComponentMetaDataPropsTypes = {
            initial: null,

            pristine,
            dirty,
            active: componentActive,
            touched: componentTouched,

            error: null,
            warning: null,
        };

        const textInputProps: ReduxFormFieldComponentInputDataPropsTypes = {
            checked: false,

            name: `tags_${name}`,
            value: textInputValue,

            onChange: onTextInputChange,
            onBlur: () => {},
            onDrop: () => {},
            onDragStart: () => {},
            onFocus: () => {},
        };

        return <FormTextInputComponent
            customComponent={props.customTextInputComponent}
            variant={variant}
            type='text'

            readOnly={readOnly}
            disabled={disabled}

            label={null}
            placeholder={null}
            iconClassNames={null}

            meta={textInputMetaProps}
            input={textInputProps}

            onKeyPress={onKeyPressTextInput}

            customComponent={customTextInputComponent}
        />;
    };

    const renderTextInputContainer: RenderFunctionNoArgsType = () => {
        const {textInputContainer} = classes;

        return <div className={textInputContainer}>
            {renderTextInput()}
        </div>;
    };

    const renderComponentContainer: RenderFunctionNoArgsType = () => {
        const {componentContainer} = classes;

        const onDrop: InputEventHandlerType  = pathOr(() => {}, ['onDrop'], inputProps);
        const onDragStart: InputEventHandlerType  =  pathOr(() => {}, ['onDragStart'], inputProps);

        return <div
            onBlur={onComponentContainerBlur}
            onFocus={onComponentContainerFocus}

            onDrop={onDrop}
            onDragStart={onDragStart}

            className={componentContainer}
        >
            {renderTextInputContainer()}
            {renderTagsCollectionContainer()}
        </div>;
    };

    // endregion

    return renderComponentContainer();
}

// exports
export default FormTagInputSeparateComponent;
