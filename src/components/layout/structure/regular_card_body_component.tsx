'use strict';

// external imports
import React, {MouseEvent} from 'react';
import injectSheet, {createUseStyles, useTheme} from 'react-jss';
import classNames from 'classnames';

import { defaultTo } from 'ramda';

// local imports
import { MainThemeContext } from './../../../theming/providers/main_theme_provider';
import {ThemeType} from "../../../types/theme_types";
import {Classes} from "jss";

// type definitions
type ClickCallbackType = (event: MouseEvent<HTMLDivElement>) => void;

type PropsTypes = {
    /**
     * Component container class name
     */

    className?: string,

    /**
     * Component container styles
     */

    style?: React.CSSProperties,

    /**
     * Content for card body
     */

    children?: React.ReactElement | null,

    /**
     * Callback function which will be called once user clicks on a card body
     */

    onClick?: ClickCallbackType,
};

// styles definition
const useStyles = createUseStyles((theme: ThemeType) => {
    return {
        componentContainer: {
            boxSizing: 'border-box',
            display: 'flex',
            position: 'relative',

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            padding: `${theme.layoutStyles.topSpacing}px 
                      ${theme.layoutStyles.rightSpacing}px 
                      ${theme.layoutStyles.bottomSpacing}px 
                      ${theme.layoutStyles.leftSpacing}px
            `,

            borderRadius: theme.layoutStyles.headerBorderRadius,

            fontFamily: theme.layoutStyles.bodyFontStack,
            fontSize: theme.layoutStyles.bodyFontSize,

            color: theme.layoutStyles.bodyFontColor,
        },
    };
});

/**
 * Regular card body component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function RegularCardBody(props: PropsTypes): React.ReactElement | null {
    // region private variables declaration
    // endregion

    // region style hooks declaration
    const theme: ThemeType = useTheme();
    const classes: Classes = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    // endregion

    // region state hooks declaration
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
    // endregion

    // region render helpers
    // endregion

    // init
}




class RegularCardBodyClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'RegularCardBodyClass';

    static defaultProps = {
        onClick: () => {},

        classes: {},
        style: {},
    };

    // endregion

    // region constructor
    // endregion

    // region business logic
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getStyle(): CSSStylesType {
        return defaultTo(RegularCardBodyClass.defaultProps.style)
        (this.props.style);
    }

    _getClassName(): string {
        return classNames(
            this.props.classes.componentContainer,
            this.props.className
        );
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getClickHandler(): ClickCallbackType {
        return defaultTo(RegularCardBodyClass.defaultProps.onClick)
        (this.props.onClick);
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderComponentContainer(): React.Node {
        const {children} = this.props;

        return <div
            className={this._getClassName()}
            style={this._getStyle()}
            onClick={this._getClickHandler()}
        >
            {children}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

function RegularCardBodyComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <RegularCardBodyClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

RegularCardBody.displayName = 'RegularCardBody';

// exports
export default RegularCardBody;
export {
    ClickCallbackType,
    PropsTypes,
}
