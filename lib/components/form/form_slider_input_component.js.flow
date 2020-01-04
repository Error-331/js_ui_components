'use strict';

// @flow

// external imports
import type {ElementType} from 'react';
import type {FieldProps} from 'redux-form';

import React, {useState, useCallback, useContext} from 'react';
import {createUseStyles, useTheme} from 'react-jss';

import {isNil} from 'ramda';


// local imports
import type {ThemeType} from './../../types/theme_types';
import type {StateTypes as ThemContextType} from './../../theming/providers';
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';

import GlobalOverlayComponent from './../window/global_overlay_component'


import {generateRandomIdNumber} from "@webfuturistics/design_components/lib/helpers/general/dom_helpers";


import {MainThemeContext} from './../../theming/providers';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

export type FormTextInputTypes = {
    /**
     * Number that indicates which visual variant will be used to represent the text input
     */

    variant?: number,

    /**
     * Custom made representation of current component
     */

    customComponent?: ElementType | React.Node,

    /**
     * Input type (text or password)
     */

    type?: InputTypes,

    /**
     * Flag that dictates whether component should be readable only (text can be readable but not editable)
     */

    readOnly?: ?boolean,

    /**
     * Flag that dictates whether component should be disabled (text can not be readable or editable)
     */

    disabled?: ?boolean,

    /**
     * Flag that dictates whether errors should be shown only after user interacts with input or always (e.g. even if initial value is set)
     */

    errorsIfTouched?: boolean,

    /**
     * Flag that dictates whether warnings should be shown only after user interacts with input or always (e.g. even if initial value is set)
     */

    warningsIfTouched?: boolean,

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
     * Class names which will be added to the icon container of the current component
     */

    iconClassNames?: ?string,

    /**
     * Styles for component container (main outer container) of the form text input component
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

    input?: ?ReduxFormFieldComponentInputDataPropsTypes,
};

type PropsTypes = FieldProps & FormTextInputTypes & {
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
    componentContainer: {
        boxSizing: 'border-box',

        position: 'relative',
        display: 'flex',

        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 0,

        flexDirection: 'row',
        flexWrap: 'nowrap',

        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'flex-start',

        backgroundColor: 'yellow',

        '& > $trackContainer': {
            position: 'relative',

            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 1,

            height: '1px',
            backgroundColor: theme.inputStyles.inactiveColor,
        },

        '& > $handleContainer': {
            position: 'absolute',

            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 0,

            width: '12px',
            height: '12px',

            borderRadius: '50%',

            cursor: 'pointer',
            backgroundColor: theme.inputStyles.inactiveColor,
        },

        '& > $handleDummyContainer': {
            position: 'relative',

            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 0,

            width: '0px',
            height: '12px',

            borderRadius: '50%',

            cursor: 'pointer',
            backgroundColor: theme.inputStyles.inactiveColor,
        },
    },

    trackContainer: {},

    handleContainer: {},
    handleDummyContainer: {}
}));

/**
 * Slider input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformsliderinputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function FormSliderInputComponent(props: PropsTypes) {
    // region style hooks declaration
    const theme = useTheme();
    const classes = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    const themeContext: ThemContextType = useContext(MainThemeContext);

    // endregion

    // region state hooks declaration
    const [componentContainerLeft, setComponentContainerLeft] = useState(null);
    const [componentContainerRight, setComponentContainerRight] = useState(null);

    const [handleGrabbed, setHandleGrabbed] = useState(false);
    const [clientX, setClientX] = useState(null);

    // endregion

    // region callback hooks declaration
    const componentContainerRef: any = useCallback($node => {
        if (!isNil($node)) {
            const {left, right} = $node.getBoundingClientRect();

            setComponentContainerLeft(left);
            setComponentContainerRight(right);
        }
    }, []);

    // endregion

    // region event handler helpers
    const containerMouseDownHandler = (): void => setHandleGrabbed(true);

    const overlayMouseLeaveHandler = (): void => setHandleGrabbed(false);
    const overlayMouseUpHandler = (): void => setHandleGrabbed(false);
    const overlayMouseMoveHandler = (event: SyntheticEvent<HTMLDivElement>): void => {
        if (handleGrabbed) {
            setClientX(event.clientX);
        }
    };

    // endregion

    // region render helpers
    const renderOverlay = (): React.Node => {
      return (
          <GlobalOverlayComponent
              show={handleGrabbed}
              opacity={0}

              onMouseUp={overlayMouseUpHandler}
              onMouseMove={overlayMouseMoveHandler}
              onMouseLeave={overlayMouseLeaveHandler}
          />
      );
    };

    const renderHandleDummyContainer = (): React.Node => {
      const {handleDummyContainer} = classes;

      return (
        <div className={handleDummyContainer}>
        </div>
      );
    };

    const renderHandleContainer = (): React.Node => {
        const {handleContainer} = classes;

        let c = 0;

        if (!isNil(clientX) && !isNil(componentContainerLeft)) {
            c = clientX - componentContainerLeft;
        }

        const style = {
            left: `${c}px`,
        };

        return <div
            className={handleContainer}
            style={style}
        >
        </div>;
    };

    const renderTrackContainer = (): React.Node => {
        const {trackContainer} = classes;

        return <div className={trackContainer}>
        </div>;
    };

    const renderComponentContainer = (): React.Node => {
      const {componentContainer} = classes;

      return (
          <div
              ref={componentContainerRef}
              className={componentContainer}

              onMouseDown={containerMouseDownHandler}
         //     onMouseLeave={containerMouseOutHandler}
          >
              {renderTrackContainer()}
              {renderHandleContainer()}
              {renderHandleDummyContainer()}
              {renderOverlay()}
          </div>
      );
    };

    // endregion

    return renderComponentContainer();
}

// exports
export default FormSliderInputComponent;
