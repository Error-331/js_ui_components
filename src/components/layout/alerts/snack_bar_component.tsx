'use strict';

// external imports
import React, { useState, useContext } from 'react';
import { Classes } from 'jss';
import { createUseStyles, useTheme } from 'react-jss';

import { isNil, defaultTo, map } from 'ramda';

// local imports
import { RenderFunctionNoArgsType } from './../../../types/common_types';

import { StateTypes as ThemeProps } from './../../../theming/providers/main_theme_provider';
import { ThemeType } from './../../../types/theme_types';

import RegularAlertComponent from './regular_alert_component';
import { MainThemeContext } from './../../../theming/providers/main_theme_provider';

// type definitions
type SnackBarItemType = {
    id: string | number,
    caption: string,
    iconClassName?: string,
    type?: 'error' | 'regular'
};

type PropsTypes = ThemeProps & {
    /**
     * Snack bar content items
     *
     */

    items?: Array<SnackBarItemType>,
}

type StateTypes = {
    /**
     * CSS z-index property value for current snack bar
     *
     * @ignore
     */

    zIndex: number
};

// styles definition
const useStyles = createUseStyles((theme: ThemeType) => {
    return {
        componentContainer: {
            boxSizing: 'border-box',
            display: 'flex',
            position: 'fixed',

            top: '0px',
            left: '0px',

            width: '100%',
            height: 'auto',

            flexDirection: 'column',
            flexWrap: 'wrap',

            justifyContent: 'flex-start',
            alignItems: 'center',
            alignContent: 'center',

            padding: `${theme.layoutStyles.topSpacing}px 
                  ${theme.layoutStyles.rightSpacing}px 
                  ${theme.layoutStyles.bottomSpacing}px 
                  ${theme.layoutStyles.leftSpacing}px
        `,

            transitionProperty: 'height',
            transitionDuration: '0.2s',
            transitionTimingFunction: 'ease-out',

            '& > $itemContainer': {
                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 1,

                width: '50%',

                marginTop: `${theme.layoutStyles.sectionVerticalSpacing}px`
            },

            '& > $itemContainer:first-child': {
                marginTop: '0px'
            }
        },

        itemContainer: {},
    };
});

/**
 * Snack bar component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function SnackBar(props: PropsTypes): React.ReactElement | null {
    // region private variables declaration
    const items: Array<SnackBarItemType> | null = defaultTo(null)(props.items);

    // endregion

    // region style hooks declaration
    const theme: ThemeType = useTheme();
    const classes: Classes = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    const mainThemeContext = useContext(MainThemeContext);

    // endregion

    // region state hooks declaration
    const [zIndexRaw, setZIndex] = useState(theme.styleValuesRegister.zIndex);
    const zIndex: number = defaultTo(0)(zIndexRaw);

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
    if (!theme.styleValuesRegister.isTop(zIndex)) {
        theme.styleValuesRegister.releaseZIndex(zIndex);

        setZIndex(theme.styleValuesRegister.zIndex);
    }

    // endregion

    // region event handler helpers
    // endregion

    // region render helpers
    const renderAlerts: RenderFunctionNoArgsType = (): React.ReactElement | null => {
        if (isNil(items)) {
            return null;
        }

        const { itemContainer } = classes;

        return map(item => <RegularAlertComponent
            accent={item.type === 'error'}
            containerClassName={itemContainer}
            iconClassName={item.iconClassName}
            key={item.id}
        >{item.caption}</RegularAlertComponent>, items);
    }

    const renderComponentContainer: RenderFunctionNoArgsType = (): React.ReactElement | null => {
        if (isNil(items)) {
            return null;
        } else {
            const { componentContainer } = classes;
            const componentContainerStyle: React.CSSProperties = {
                zIndex,
            };

            return (
                <div
                    className={componentContainer}
                    style={componentContainerStyle}
                >
                    {renderAlerts()}
                </div>
            );
        }
    }

    // endregion

    // init
    return renderComponentContainer();
}

SnackBar.displayName = 'SnackBar';


// exports
export default SnackBar;
export {
    SnackBarItemType,
    StateTypes,
    PropsTypes,
};
