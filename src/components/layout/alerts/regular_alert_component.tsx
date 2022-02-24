'use strict';

// external imports
import * as React from 'react';
import { Classes } from 'jss';
import { createUseStyles, useTheme } from 'react-jss';
import { defaultTo } from 'ramda';

import classNames from 'classnames';

// local imports
import { ThemeType } from './../../../types/theme_types';
import { RenderFunctionNoArgsType } from './../../../types/common_types';

import { RegularCardComponent } from './../structure/regular_card_component';
import { RegularPanelComponent } from './../structure/regular_panel_component';

import FontIcon  from './../icons/font_icon';
import InlineTextBlock from './../text/inline_text_block';

// type definitions
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

    containerStyle?: React.CSSProperties,

    /**
     * Icon class name (example 'fas fa-exclamation-circle')
     */

    iconClassName?: string,

    /**
     * Content for panel
     */

    children?: React.ReactElement | null,
}

// styles definition
const useStyles = createUseStyles((theme: ThemeType) => {
    return {
        cardComponentContainer: {
            borderRadius: `${theme.layoutStyles.commonBorderRadius}px`,
            backgroundColor: theme.layoutStyles.headerBGColor,

            '&.accent': {
                backgroundColor: theme.baseStyles.accentColorPrimary
            }
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

            paddingBottom: `${theme.layoutStyles.bottomSpacing - theme.layoutStyles.bodyExcessVerticalSpacing}px`,

            borderRadius: `${theme.layoutStyles.commonBorderRadius}px`,

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
    };
});

// component implementation
function RegularAlert(props: PropsTypes): React.ReactElement | null {
    // region private variables declaration
    let { accent, heightLevel, containerClassName, iconClassName } = props;

    accent = defaultTo(false)(accent);
    heightLevel = defaultTo(1)(heightLevel);
    iconClassName = defaultTo('fas fa-exclamation-circle')(iconClassName);

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
    const renderCardHeader: RenderFunctionNoArgsType = (): React.ReactElement | null => {
        const { children } = props;
        const { panelComponentContainer, iconContainer, textContainer } = classes;

        const regularPanelComposedClassName: string = classNames(panelComponentContainer, { accent: accent });

        return (
            <RegularPanelComponent className={regularPanelComposedClassName}>
                <FontIcon iconClassName={iconClassName} className={iconContainer} size='small' />
                <InlineTextBlock className={textContainer}>{children}</InlineTextBlock>
            </RegularPanelComponent>
        );
    }

    const renderComponentContainer: RenderFunctionNoArgsType = (): React.ReactElement | null => {
        const { containerStyle } = props;
        const { cardComponentContainer } = classes;

        const regularCardComposedClassName: string = classNames(cardComponentContainer, { accent: accent }, containerClassName);

        return (
            <RegularCardComponent
                heightLevel={heightLevel}
                header={renderCardHeader()}

                containerClassName={regularCardComposedClassName}
                containerStyle={containerStyle}
            />
        );
    };

    // endregion

    // init
    return renderComponentContainer();
}

RegularAlert.displayName = 'RegularAlert';

// exports
export default RegularAlert;
export {
    PropsTypes,
}
