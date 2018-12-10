'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import {defaultTo} from 'ramda';

import classNames from 'classnames';

// local imports
import {RegularCardComponent} from './../structure/regular_card_component';
import {RegularPanelComponent} from './../structure/regular_panel_component';

import {FontIcon} from './../icons/font_icon';
import {InlineTextBlock} from './../text/inline_text_block';

// type definitions
type StyleType = {
    [string]: mixed
};

type PropsTypes = {
    /**
     * Flag that indicates whether accent color should be used for displaying alert
     */

    accent?: boolean,

    /**
     * Number that indicates how high above other elements the alert is placed
     */

    heightLevel?: number,

    /**
     * Styles for alert outer container
     */

    containerClassName?: string,

    /**
     * Styles for alert outer container
     */

    containerStyle?: StyleType,

    /**
     * Icon class name (example 'fas fa-exclamation-circle')
     */

    iconClassName?: string,

    /**
     * Content for panel
     */

    children?: React.ChildrenArray<any>,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
}

// styles definition
const styles = theme => ({
    cardComponentContainer: {
        borderRadius: `${theme.layoutStyles.alertBorderRadius}px`
    },

    panelComponentContainer: {
        boxSizing: 'border-box',
        display: 'flex',

        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,

        flexDirection: 'row',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'flex-start',

        borderRadius: `${theme.layoutStyles.alertBorderRadius}px`,

        '&.accent': {
            backgroundColor: theme.baseStyles.accentColorPrimary
        }
    },

    iconContainer: {
        color: theme.layoutStyles.headerFontColor,
    },

    textContainer: {
        marginLeft: `${theme.layoutStyles.leftSpacing}px`,

        fontSize: `${theme.layoutStyles.smallIconSize}px`,
        color: theme.layoutStyles.headerFontColor,
    }
});

// component implementation
function RegularAlertFunction(props: PropsTypes) {
    let {accent, heightLevel, containerClassName, iconClassName} = props;

    accent = defaultTo(false)(accent);
    heightLevel = defaultTo(1)(heightLevel);
    iconClassName = defaultTo('fas fa-exclamation-circle')(iconClassName);

    const {containerStyle, classes, children} = props;
    const {panelComponentContainer, iconContainer, textContainer, cardComponentContainer} = classes;

    const regularPanelComposedClassName: string = classNames(panelComponentContainer, {accent: accent});

    const cardHeader: React.Node = <RegularPanelComponent className={regularPanelComposedClassName}>
        <FontIcon iconClassName={iconClassName} className={iconContainer} size='small' />
        <InlineTextBlock className={textContainer}>{children}</InlineTextBlock>
    </RegularPanelComponent>;

    const regularCardComposedClassName: string = classNames(cardComponentContainer, containerClassName);

    return <RegularCardComponent
        heightLevel={heightLevel}
        header={cardHeader}

        containerClassName={regularCardComposedClassName}
        containerStyles={containerStyle}
    />;
}

RegularAlertFunction.displayName = 'RegularAlert';

// exports
export const RegularAlertComponent = injectSheet(styles)(RegularAlertFunction);