'use strict';

// @flow

// external imports
import type {NestedArray} from 'ramda';

import * as React from 'react';
import injectSheet from 'react-jss';

import classNames from 'classnames';
import {is, isNil, isEmpty, defaultTo, flatten, addIndex, map} from 'ramda';

// local imports
import type {PropsTypes as RegularButtonPropsType} from './../buttons/regular_button_component';

import {MainThemeContext} from './../../theming/providers/main_theme_provider';

import {ModalComponent} from './modal_component';
import {OverlayComponent} from './overlay_component';
import {RotatingFontIconPreloader} from './../preloaders/rotating_font_icon_preloader';

import {RegularCardHeaderComponent} from './../layout/structure/regular_card_header_component';
import {DialogBoxActionsContainer} from './../layout/alignment/dialog_box/dialog_box_actions_container';
import {RegularButtonComponent} from './../buttons/regular_button_component';

// type definitions
export type ClickCallbackType = (event: SyntheticEvent<HTMLElement>) => void;
export type ButtonsType = Array<RegularButtonPropsType> | NestedArray<RegularButtonPropsType>;

type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * Flag that indicates whether to show or not to show modal dialog box component
     */

    show?: boolean,

    /**
     * Flag that indicates whether modal dialog box is busy
     */

    loading?: boolean,

    /**
     * Flag that indicates whether modal dialog box can be closed (via 'close' icon)
     */

    closable?: boolean,

    /**
     * Dialog box title
     */

    title?: string,

    /**
     * Icon that will be displayed on the right side of the dialog box header
     */

    titleIconClassName?: string,

    /**
     * Buttons specifications
     */

    buttons?: ButtonsType | null,

    /**
     * Callback function which will be called once user clicks on 'close' icon
     */

    onClose?: ClickCallbackType,

    /**
     * Styles for body outer container of modal dialog component
     */

    bodyOuterStyles?: CSSStylesType,

    /**
     * Modal dialog box content
     */

    children?: React.ChildrenArray<any>,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
}

type StateTypes = {};

// styles definition
const styles = theme => ({
    clickableIcon: {
        cursor: 'pointer',
    },

    nonClickableIcon: {
        cursor: 'auto',
    },

    actionsContainer: {
        marginTop: `${theme.layoutStyles.sectionVerticalSpacing}px`,
    },

    loadingOverlayContainer: {
        position: 'absolute'
    }
});

/**
 * Common modal dialog box component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
class ModalDialogBoxClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'ModalDialogBoxClass';

    static defaultProps = {
        show: false,
        loading: false,
        closable: true,
        title: '',
        titleIconClassName: '',

        buttons: null,

        onClose: () => {},
    };

    // endregion

    // region private props
    // endregion

    // region constructor
    // endregion

    // region business logic
    _prepareButtons<T>(buttons: ButtonsType): T {
        const preparedButtons: T = (buttons:  any);
        return preparedButtons;
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getActionsContainerClassName(): string {
        return this.props.classes.actionsContainer;
    }

    _getLoadingOverlayContainerClassName(): CSSStylesType {
        return this.props.classes.loadingOverlayContainer;
    }

    _getBodyOuterStyle(): CSSStylesType {
        return defaultTo({})(this.props.bodyOuterStyles);
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _shouldShow(): boolean {
        return defaultTo(ModalDialogBoxClass.defaultProps.show)(this.props.show)
    }

    _isClosable(): boolean {
        return defaultTo(ModalDialogBoxClass.defaultProps.closable)(this.props.closable)
    }

    _isLoading(): boolean {
        return defaultTo(ModalDialogBoxClass.defaultProps.loading)(this.props.loading);
    }

    _getCloseHandler(): ClickCallbackType {
        return defaultTo(ModalDialogBoxClass.defaultProps.onClose)(this.props.onClose);
    }

    _getHeaderIconClassName(): string {
        if (this._isClosable()) {
            return classNames(
                this.props.titleIconClassName,
                'fas fa-times',
                this.props.classes.clickableIcon
            );
        } else {
            return classNames(this.props.titleIconClassName, this.props.classes.nonClickableIcon);
        }
    }

    _getTitle(): string {
        return defaultTo(ModalDialogBoxClass.defaultProps.title)(this.props.title);
    }

    _getButtons(): ButtonsType | null {
        return defaultTo(ModalDialogBoxClass.defaultProps.buttons)(this.props.buttons);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderHeader(): React.Node {
        return <RegularCardHeaderComponent
            iconClassNames={this._getHeaderIconClassName()}
            onIconClick={this._isClosable() ? this._getCloseHandler() : undefined}
        >
            {this._getTitle()}
        </RegularCardHeaderComponent>
    }

    _renderFooterButtons(buttonOptions: Array<RegularButtonPropsType>): React.ChildrenArray<React.Element<any>> {
        return addIndex(map)((buttonOptions: RegularButtonPropsType, index: number) => {
            return <RegularButtonComponent {...buttonOptions} key={`button_${index}`}/>
        }, buttonOptions)
    }

    _renderFooter(): React.Node {
        const buttons: ButtonsType | null = this._getButtons();

        if (isNil(buttons) || !is(Array, buttons) || isEmpty(buttons)) {
            return null;
        }

        let mainGroupCount: number = 0;
        let preparedButtons: Array<RegularButtonPropsType>;

        if (is(Array, buttons[0])) {
            mainGroupCount = buttons[0].length;
            preparedButtons = flatten(this._prepareButtons(buttons));
        } else {
            preparedButtons = this._prepareButtons(buttons);
        }

        return <DialogBoxActionsContainer
            containerClassName={this._getActionsContainerClassName()}
            mainGroupCount={mainGroupCount}
        >
            {this._renderFooterButtons(preparedButtons)}
        </DialogBoxActionsContainer>;
    }

    _renderLoadingOverlay(): React.Node {
        return <OverlayComponent
            containerClassName={this._getLoadingOverlayContainerClassName()}
            show={this._isLoading()}
        >
            <RotatingFontIconPreloader/>
        </OverlayComponent>;
    }

    render(): React.Node {
        return <ModalComponent
            show={this._shouldShow()}

            header={this._renderHeader()}
            footer={this._renderFooter()}

            onOverlayClick={this._isClosable() ? this._getCloseHandler() : undefined}

            bodyOuterStyles={this._getBodyOuterStyle()}
        >
            {this._renderLoadingOverlay()}
            {this.props.children}
        </ModalComponent>;
    }

    // endregion
}

function ModalDialogBoxComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <ModalDialogBoxClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

ModalDialogBoxComponent.displayName = 'ModalDialogBoxComponent';
// exports

export {ModalDialogBoxClass, ModalDialogBoxComponent};
export default ModalDialogBoxComponent