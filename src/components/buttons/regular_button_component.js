'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {is, isNil, unless, always} from 'ramda';
import {isNotNil} from '@webfuturistics/design_components';

// local imports

// type definitions
type ClickCallbackType = (event: SyntheticEvent<HTMLButtonElement>) => void;
type ButtonVariantType = 'button' | 'submit' | 'reset';

type PropsTypes = {
    /**
     * Button label
     */

    label?: ?string,

    /**
     * Type of the button component, can be one of following one: 'button', 'submit', 'reset'
     */

    type?: ?ButtonVariantType,

    /**
     * Class name which will be added to underlying 'Button' component
     */

    className?: ?string,

    /**
     * Callback function which will be called once user clicks on it
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
const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        display: 'block',

        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,

        border: 'none',
        borderRadius: '2px',

        padding: '5px 12px 5px 12px',

        fontFamily: theme.buttonStyles.buttonCommonFontStack,

        '-webkit-tap-highlight-color': 'transparent',

        textTransform: 'uppercase',
        textDecoration: 'none',
        textAlign: 'center',

        letterSpacing: '.5px',
        cursor: 'pointer',

        boxShadow: theme.materialDepthLevels.materialDepth1BoxShadow,

        color: theme.baseStyles.commonPrimaryTextColor,
        backgroundColor: theme.baseStyles.commonPrimaryBGColor,

        '&:hover': {
            textDecoration: 'none',
            color: theme.baseStyles.commonHoverColor
        },
    }
});

/**
 * Regular button component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
class RegularButtonComponent extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'RegularButtonComponent';

    static defaultProps = {
        label: '',
        type: 'button',
        className: '',

        onClick: () => {},
    };

    // endregion

    // region constructor
    constructor(props) {
        super(props);

        const self: any = this;

        self._onClick = self._onClick.bind(this);
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getClassName(): string {
        const {classes: {componentContainer}, className}: {classes: any, className?: ?string} = this.props;
        return classNames(componentContainer, className);
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    // endregion

    // region handlers
    _onClick(event): void {
        const {onClick}: {onClick?: ?ClickCallbackType} = this.props;

        if (isNil(onClick) && is(Function, onClick)) {
            return;
        }

        onClick(event);
    }

    // endregion

    // region render methods
    render(): React.Node {
        let {type, label}: {type?: ?ButtonVariantType, label?: ?string} = this.props;
        type = unless(isNotNil, always('button'))(type);

        const className: string = this._getClassName();
        const onClickHandler: ClickCallbackType = this._onClick;

        return (
            <button type={type} className={className} onClick={onClickHandler}>{label}</button>
        );
    }

    // endregion
}

// exports
export default injectSheet(styles)(RegularButtonComponent);