'use strict';

// @flow

// external imports
import type {Node, Element} from 'react';
import type {FieldProps} from 'redux-form';

import React, {useState} from 'react';
import {createUseStyles, useTheme} from 'react-jss';

import {isNil, isEmpty, defaultTo, equals, pathOr} from 'ramda';

// local imports
import type {ThemeType} from '../../../../src/types/theme_types';
import type {RenderFunctionNoArgsType, InputEventHandlerType} from '../../../../src/types/common_types';
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from '../../../../src/types/redux_form_types';
import type {ButtonsType} from '../../window/modal_dialog_box_component';

import ModalDialogBoxComponent from '../../window/modal_dialog_box_component';
import FormTextInputComponent from '../form_text_input_component';

// type definitions
export type SaveClickCallbackType = (link: string, event?: SyntheticEvent<HTMLElement>) => void;
export type CancelClickCallbackType = (event?: SyntheticEvent<HTMLElement>) => void;

type PropsTypes =  {
    /**
     * Flag that indicates whether current dialog box should be shown.
     */

    show?: boolean,

    /**
     * Name of link text input dialog box.
     */

    name?: string,

    /**
     * URL that should be edited by user.
     * If empty - current component will behave as if new link is being created.
     */

    url?: string,

    /**
     * Callback function which will be called when user click on `save` button of current dialog box.
     */

    onClickSave?: SaveClickCallbackType,

    /**
     * Callback function which will be called when user click on `cancel` button of current dialog box.
     */

    onClickCancel?: CancelClickCallbackType => void,

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

type StateTypes = {};

// styles definition
const useStyles = createUseStyles(theme => ({
    componentContainer: {},
}));

/**
 * URL edit dialog box styled according to material-UI guidelines.
 * Component should be used as part of ['ReduxFormRichTextInputComponent' Field component](#/UI%20Components/Redux%20form/ReduxFormRichTextInputComponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function LinkEditDialogBoxComponent(props: PropsTypes) {
    // region private variables declaration
    const shouldShow: boolean = defaultTo(false)(props.show);
    const inputName: string = defaultTo('')(props.name);

    const url: string | null = defaultTo(null)(props.url);
    const dialogBoxTitle: string = isNil(url) || isEmpty(url) ?
        'Enter link' :
        'Edit link';

    const onClickSave: SaveClickCallbackType = defaultTo(() => {})(props.onClickSave);
    const onClickCancel: CancelClickCallbackType = defaultTo(() => {})(props.onClickCancel);

    const dialogBoxButtons: ButtonsType = [
        {label: 'save', onClick: (event) => onClickSave(textInputValue, event)},
        {variant: 'outlined', label: 'cancel', onClick: onClickCancel},
    ];

    // endregion

    // region style hooks declaration
    const theme: ThemeType = useTheme();
    const classes: {[string]: string} = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    // endregion

    // region state hooks declaration
    const [textInputValue, setTextInputValue] = useState(url);

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
    // endregion

    // region event handler helpers
    const onComponentContainerFocus: InputEventHandlerType = (event: SyntheticEvent<HTMLInputElement>): void => {
        setComponentActive(true);
    };

    const onComponentContainerBlur: InputEventHandlerType = (event: SyntheticEvent<HTMLInputElement>): void => {
        if (componentTouched === false) {
            setComponentTouched(true);
        }

        setComponentActive(false);
    };

    const onTextInputChange: InputEventHandlerType = (event: SyntheticEvent<HTMLInputElement>): void => {
        event.preventDefault();

        const value: any = pathOr(textInputValue, ['target', 'value'], event);
        setTextInputValue(value);
    };

    // endregion

    // region render helpers
    const renderTextInput: RenderFunctionNoArgsType = (): Node => {
        const name: string | null = inputName;
        const initial: string | null = url;
        const value: string | null = textInputValue;

        const pristine: boolean = equals(value, initial);
        const dirty: boolean = !pristine;

        const textInputMetaProps: ReduxFormFieldComponentMetaDataPropsTypes = {
            initial,

            pristine,
            dirty,
            active: componentActive,
            touched: componentTouched,

            error: null,
            warning: null,
        };

        const textInputProps: ReduxFormFieldComponentInputDataPropsTypes = {
            checked: false,

            name: `rich_text_link_edit_${name}`,
            value: textInputValue,

            onChange: onTextInputChange,
            onBlur: () => {},
            onDrop: () => {},
            onDragStart: () => {},
            onFocus: () => {},
        };

        return <FormTextInputComponent
            type='text'

            readOnly={false}
            disabled={false}

            label={null}
            placeholder='http://...'
            iconClassNames='fas fa-link'

            meta={textInputMetaProps}
            input={textInputProps}
        />
    };

    const renderTextInputContainer: RenderFunctionNoArgsType = (): Node => {
        return <div
            onBlur={onComponentContainerBlur}
            onFocus={onComponentContainerFocus}
        >
            {renderTextInput()}
        </div>;
    };

    const renderDialogBox: RenderFunctionNoArgsType = (): Node => {
        return <ModalDialogBoxComponent
            closable={true}
            closeOnOverlayClick={false}

            show={shouldShow}
            loading={false}

            title={dialogBoxTitle}
            buttons={dialogBoxButtons}

            onClose={onClickCancel}

            bodyOuterStyles={{width: '500px'}}
        >
            {renderTextInputContainer()}
        </ModalDialogBoxComponent>
    };

    // endregion

    // init
    return renderDialogBox();
}

// exports
export default LinkEditDialogBoxComponent;
