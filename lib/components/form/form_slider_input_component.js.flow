'use strict';

// @flow

// external imports
import type {ElementType, Node} from 'react';
import type {FieldProps} from 'redux-form';

import React, {useState, useEffect, useCallback, useContext} from 'react';
import {createUseStyles, useTheme} from 'react-jss';

import {
    __,
    T,
    always,
    identity,
    isNil,
    isEmpty,
    ifElse,
    cond,
    any,
    defaultTo,
    nth,
    prop,
    mergeRight,
    apply,
    pipe,
    gt,
    lt,
    clamp,
    prepend,
    reduce,
    sortBy,
    toPairs,
    keys,
    subtract,
    multiply,
    divide
} from 'ramda';

import {generateRandomIdNumber} from '@webfuturistics/design_components/lib/helpers/general/dom_helpers';

// local imports
import type {ThemeType} from './../../types/theme_types';
import type {StateTypes as ThemContextType} from './../../theming/providers';
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';

import FormSliderHandleComponent from './form_slider_handle_component';
import GlobalOverlayComponent from './../window/global_overlay_component'

import {MainThemeContext} from './../../theming/providers';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type HandlesDataType = {
    [string]: number
};

export type FormTextInputTypes = {
    /**
     * The minimum allowed value of the slider.
     */

    min?: number,

    /**
     * The maximum allowed value of the slider.
     */

    max?: number,

    /**
     * Granularity of the slider.
     */

    step?: number,

    /**
     * Number that indicates which visual variant will be used to represent the slider input
     */

    variant?: number,

    /**
     * Custom representation of slider handle
     */

    customHandleComponent?: ElementType | Node,

    /**
     * Flag that dictates whether component should be readable only (text can be readable but not editable)
     */

    readOnly?: ?boolean,

    /**
     * Flag that dictates whether component should be disabled (text can not be readable or editable)
     */

    disabled?: ?boolean,

    /**
     * Class name which will be added to the component container (main outer container)
     */

    componentContainerClassName?: string,

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

        '& > $trackContainer': {
            position: 'relative',

            flexBasis: 'auto',
            flexShrink: 1,
            flexGrow: 1,

            height: '1px',
            backgroundColor: theme.inputStyles.inactiveColor,
        },
    },

    trackContainer: {},
    handleDummyContainer: {},
}));

const dummyHandleStyles: CSSStylesType = {
    position: 'relative',
    width: '0px',
};

/**
 * Slider input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformsliderinputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
// TODO: capture 'mouseup' event not on overlay but on document
function FormSliderInputComponent(props: PropsTypes) {
    // region private variables declaration
    const sliderMin: number = defaultTo(0, props.min);
    const sliderMax: number = defaultTo(100, props.max);
    const sliderStep: number = defaultTo(1, props.step);

    let {value, onChange} = defaultTo({}, props.input);
    let {initial} = defaultTo({}, props.meta);

    initial = !isNil(initial) && !isNil(initial.toObject) ? initial.toObject() : initial;

    value = defaultTo(null)(value);
    value = isEmpty(value) ? null : value;
    value = !isNil(value) && !isNil(value.toObject) ? value.toObject() : value;

    // endregion

    // region style hooks declaration
    const theme = useTheme();
    const classes = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    const themeContext: ThemContextType = useContext(MainThemeContext);

    // endregion

    // region state hooks declaration
    const [initialHandleId, setInitialHandleId] = useState(null);
    const [grabbedHandleId, setGrabbedHandleId] = useState(null);

    const [componentContainerLeft, setComponentContainerLeft] = useState(null);
    const [componentContainerRight, setComponentContainerRight] = useState(null);

    // endregion

    // region effect hooks declaration
    useEffect(() => setInitialHandleId(`handle_${generateRandomIdNumber()}`), []);

    // endregion

    // region state variables declaration
    const sliderWidth: number | null = ifElse(any(isNil), always(null), apply(subtract))([componentContainerRight, componentContainerLeft]);
    const unitsCount: number = divide(subtract(sliderMax, sliderMin), sliderStep);
    const unitWidth: number | null = ifElse(any(isNil), always(null), apply(divide))([sliderWidth, unitsCount]);

    // endregion

    // region callback hooks declaration
    const componentContainerRef: any = useCallback($node => {
        if (!isNil($node)) {
            const {left, right} = $node.getBoundingClientRect();

            setComponentContainerLeft(left);
            setComponentContainerRight(right);
        }
    }, [themeContext.windowDimensions.innerWidth]);

    // endregion

    // region business logic
    const clampHandleXPos = clamp(0, sliderWidth);

    const findNearestGrabbedHandleId = (clientX: number): string | null => {
        return ifElse(
            isNil,
            always(null),
            pipe(
                toPairs,
                sortBy(
                    pipe(
                        prop(1),
                        subtract(clientX),
                        Math.abs
                    )
                ),
                nth(0),
                prop(0)
            )
        )(getHandlesData())
    };

    const normalizeClientX = cond([
        [(clientX: number | null) => any(isNil, [clientX, componentContainerLeft, componentContainerRight]), always(0)],
        [(clientX: number | null) => lt(clientX, componentContainerLeft), always(componentContainerLeft)],
        [(clientX: number | null) => gt(clientX, componentContainerRight), always(componentContainerRight)],
        [T, identity],
    ]);

    const calcUnitsByClientX = pipe(
        normalizeClientX,
        prepend(__, [componentContainerLeft]),
        ifElse(any(isNil), always(0), apply(subtract)),
        prepend(__, [unitWidth]),
        ifElse(
            any(isNil),
            always(0),
            pipe(apply(divide), Math.round)
        ),
    );

    const calcHandleXPosByUnits = pipe(
        multiply(sliderWidth),
        divide(__, unitsCount),
        Math.round,
        clampHandleXPos
    );

    const getHandlesData = ():  HandlesDataType | null => {
        if (isNil(initialHandleId)) {
            return null;
        }

        const initialHandlesData: HandlesDataType = defaultTo({[initialHandleId]: 0})(initial);
        const handlesData: HandlesDataType = defaultTo(initialHandlesData)(value);

        return handlesData;
    };

    // endregion

    // region event handler helpers
    const containerMouseDownHandler = (event: SyntheticMouseEvent<HTMLDivElement>): void => {
        const currentUnits: number = calcUnitsByClientX(event.clientX);
        const nearestGrabbedHandleId: string | null = findNearestGrabbedHandleId(currentUnits);

        if (!isNil(nearestGrabbedHandleId)) {
            setGrabbedHandleId(nearestGrabbedHandleId);
            onChange(mergeRight(getHandlesData(), {[nearestGrabbedHandleId]: currentUnits}));
        }
    };

    const overlayMouseLeaveHandler = (): void => setGrabbedHandleId(null);
    const overlayMouseUpHandler = (): void => setGrabbedHandleId(null);
    const overlayMouseMoveHandler = (event: SyntheticMouseEvent<HTMLDivElement>): void => {
        if (!isNil(grabbedHandleId)) {
            const currentUnits: number = calcUnitsByClientX(event.clientX);
            onChange(mergeRight(getHandlesData(), {[grabbedHandleId]: currentUnits}))
        }
    };

    // endregion

    // region render helpers
    const renderOverlay = (): Node => {
      return (
          <GlobalOverlayComponent
              show={!isNil(grabbedHandleId)}
              opacity={0}

              onMouseUp={overlayMouseUpHandler}
              onMouseMove={overlayMouseMoveHandler}
              onMouseLeave={overlayMouseLeaveHandler}
          />
      );
    };

    const renderDummyHandleContainer = (): Node => <FormSliderHandleComponent style={dummyHandleStyles}/>;

    const renderHandleContainers = (): Node => {
        const handlesData: HandlesDataType | null = getHandlesData();

        if (isNil(handlesData)) {
            return null;
        }

        return reduce((nodes: Node[], id: string) => {
            const xPos: number = calcHandleXPosByUnits(handlesData[id]);
            const active: boolean = !isNil(grabbedHandleId) && grabbedHandleId === id;

            nodes.push(<FormSliderHandleComponent
                variant={props.variant}

                key={id}
                value={xPos}
                active={ active}

                readOnly={props.readOnly}
                disabled={props.disabled}
            />);

            return nodes;
        }, [], keys(handlesData))
    };

    const renderTrackContainer = (): Node => {
        const {trackContainer} = classes;

        return <div className={trackContainer}>
        </div>;
    };

    const renderComponentContainer = (): Node => {
      const {componentContainer} = classes;

      return (
          <div
              ref={componentContainerRef}
              className={componentContainer}

              onMouseDown={containerMouseDownHandler}
          >
              {renderTrackContainer()}
              {renderHandleContainers()}
              {renderDummyHandleContainer()}

              {renderOverlay()}
          </div>
      );
    };

    // endregion

    // init render
    return renderComponentContainer();
}

// exports
export default FormSliderInputComponent;
