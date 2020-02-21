'use strict';

// @flow

// external imports
import type {Node} from 'react';
import type {FieldProps} from 'redux-form';

import React, {useState, useEffect, useCallback, useContext} from 'react';
import {createUseStyles, useTheme} from 'react-jss';

import {Map as ImmitableMap} from 'immutable';
import classNames from 'classnames';

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
    equals,
    or,
    clamp,
    length,
    head,
    last,
    prepend,
    map,
    reduce,
    juxt,
    sortBy,
    pair,
    toPairs,
    keys,
    subtract,
    multiply,
    divide
} from 'ramda';

import {generateRandomIdNumber} from '@webfuturistics/design_components/lib/helpers/general/dom_helpers';

// local imports
import type {ThemeType} from './../../types/theme_types';
import type {RenderFunctionNoArgsType} from './../../types/common_types';
import type {StateTypes as ThemContextType} from './../../theming/providers';
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';

import FormSliderHandleComponent from './form_slider_handle_component';
import GlobalOverlayComponent from './../window/global_overlay_component'

import {MainThemeContext} from './../../theming/providers';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type HandlesDataType = ImmitableMap | {
    [string]: number
};

export type FormSliderInputTypes = {
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
     * Flag that dictates whether component should be readable only (handles will be fixed in place)
     */

    readOnly?: boolean,

    /**
     * Flag that dictates whether component should be disabled (handles will be fixed in place and whole component will be grayed)
     */

    disabled?: boolean,

    /**
     * Class name which will be added to the component container (main outer container)
     */

    componentContainerClassName?: string,

    /**
     * Styles for component container (main outer container) of the slider input component
     */

    componentContainerStyles?: CSSStylesType,

    /**
     * Alias of 'componentContainerStyles'
     */

    style?: CSSStylesType,

    /**
     * Styles for slider track
     */

    trackStyle?: CSSStylesType,

    /**
     * Styles for slider track which displays how far the handle have been dragged by the user
     */

    trackProgressStyle?: CSSStylesType,

    /**
     * Styles for handle container (main outer container) of the slider input component
     */

    knobStyle?: CSSStylesType,

    /**
     * Styles for handle container (main outer container) of the slider input component which are applied when user puts mouse cursor over this container
     */

    knobHoverStyle?: CSSStylesType,

    /**
     * Styles for handle container (main outer container) of the slider input component which are applied when user drags the slider handle
     */

    activeKnobStyle?: CSSStylesType,

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

type PropsTypes = FieldProps & FormSliderInputTypes & {
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

        '& > $trackProgressContainer': {
            position: 'absolute',

            flexBasis: 'auto',
            flexShrink: 0,
            flexGrow: 0,

            width: '0px',
            height: '1px',

            backgroundColor: theme.inputStyles.activeColor,
        },

        '&.variant2': {
            '& > $trackProgressContainer': {
                height: '3px',
            },
        },

        '&.enabled.variant1': {
            '& > $trackContainer': {
                backgroundColor: theme.inputStyles.inactiveColor,
            },

            '& > $trackProgressContainer': {
                backgroundColor: theme.inputStyles.activeColor,
            },
        },

        '&.enabled.variant2': {
            '& > $trackContainer': {
                backgroundColor: theme.inputStyles.alternateInputColor,
            },

            '& > $trackProgressContainer': {
                backgroundColor: theme.inputStyles.alternateInputColor,
            },
        },

        '&.disabled': {
            '& > $trackContainer': {
                border: 'none',
                borderRadius: '0',
                borderBottomWidth: `1px`,
                borderBottomStyle: 'dotted',
                borderBottomColor: theme.inputStyles.disabledColor,

                backgroundColor: 'transparent',
            },
        },

        '&.disabled.variant1': {
            '& > $trackProgressContainer': {
                backgroundColor: theme.inputStyles.disabledColor,
            },
        },

        '&.disabled.variant2': {
            '& > $trackProgressContainer': {
                height: '3px',
                backgroundColor: theme.inputStyles.disabledColor,
            },
        }
    },

    trackContainer: {},
    trackProgressContainer: {},
    handleDummyContainer: {},
}));

const dummyHandleStyles: CSSStylesType = {
    position: 'relative',
    width: '0px',
};

/**
 * Slider input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#/UI%20Components/Redux%20form/ReduxFormSliderInputComponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
// TODO: capture 'mouseup' event not on overlay but on document
function FormSliderInputComponent(props: PropsTypes) {
    // region private variables declaration
    const readOnly: boolean = defaultTo(false, props.readOnly);
    const disabled: boolean = defaultTo(false, props.disabled);

    const isNoneInteractive: boolean = or(readOnly, disabled);

    const sliderMin: number = defaultTo(0, props.min);
    const sliderMax: number = defaultTo(100, props.max);
    const sliderStep: number = defaultTo(1, props.step);

    const sliderVariant: number = defaultTo(1, props.variant);

    const componentContainerStyles: CSSStylesType = defaultTo({}, props.componentContainerStyles);
    const style: CSSStylesType = defaultTo({}, props.style);

    const trackStyle: CSSStylesType = defaultTo({}, props.trackStyle);
    const trackProgressStyle: CSSStylesType = defaultTo({}, props.trackProgressStyle);

    const knobStyle: CSSStylesType = defaultTo({}, props.knobStyle);
    const knobHoverStyle: CSSStylesType = defaultTo({}, props.knobHoverStyle);
    const activeKnobStyle: CSSStylesType = defaultTo({}, props.activeKnobStyle);

    let {value, onChange} = defaultTo({}, props.input);
    let {initial} = defaultTo({}, props.meta);

    value = defaultTo(null)(value);
    value = isEmpty(value) ? null : value;

    // endregion

    // region style hooks declaration
    const theme: ThemeType = useTheme();
    const classes: {[string]: string} = useStyles({...props, theme});

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

    // region ref hooks declaration
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
    const clampHandleXPos: (posX: number) => number = clamp(0, sliderWidth);

    const updateHandleData: (handleId: string, units: number) => HandlesDataType | null =
        (handleId: string, units: number): HandlesDataType | null => {
            const handlesData: HandlesDataType | null = getHandlesData();

            if (isNil(handlesData)) {
                return handlesData;
            }

            if (ImmitableMap.isMap(handlesData)) {
                return handlesData.set(handleId, units);
            } else {
                return mergeRight(handlesData, {[handleId]: units});
            }
        };

    const findNearestGrabbedHandleId: (clientX: number) => string | null = (clientX: number): string | null => {
        return ifElse(
            isNil,
            always(null),
            pipe(
                (data: {[any]: any} | ImmitableMap) => ImmitableMap.isMap(data) ? data.toObject() : data,
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

    const normalizeClientX: (clientX: number | null) => number = cond([
        [(clientX: number | null) => any(isNil, [clientX, componentContainerLeft, componentContainerRight]), always(0)],
        [(clientX: number | null) => lt(clientX, componentContainerLeft), always(componentContainerLeft)],
        [(clientX: number | null) => gt(clientX, componentContainerRight), always(componentContainerRight)],
        [T, identity],
    ]);

    const calcUnitsByClientX: (clientX: number | null) => number = pipe(
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

    const calcHandleXPosByUnits: (units: number) => number  = pipe(
        multiply(sliderWidth),
        divide(__, unitsCount),
        Math.round,
        clampHandleXPos
    );

    const getHandlesData: () => HandlesDataType | null = (): HandlesDataType | null => {
        if (isNil(initialHandleId)) {
            return null;
        }

        const initialHandlesData: HandlesDataType = defaultTo({[initialHandleId]: 0})(initial);
        const handlesData: HandlesDataType = defaultTo(initialHandlesData)(value);

        return handlesData;
    };

    // endregion

    // region event handler helpers
    const containerMouseDownHandler: (event: SyntheticMouseEvent<HTMLDivElement>) => void =
        (event: SyntheticMouseEvent<HTMLDivElement>): void => {
            if (isNoneInteractive) {
                return;
            }

            const currentUnits: number = calcUnitsByClientX(event.clientX);
            const nearestGrabbedHandleId: string | null = findNearestGrabbedHandleId(currentUnits);

            if (!isNil(nearestGrabbedHandleId)) {
                setGrabbedHandleId(nearestGrabbedHandleId);
                onChange(updateHandleData(nearestGrabbedHandleId, currentUnits));
            }
        };

    const overlayMouseLeaveHandler: () => void = (): void => setGrabbedHandleId(null);
    const overlayMouseUpHandler: () => void = (): void => setGrabbedHandleId(null);
    const overlayMouseMoveHandler: (event: SyntheticMouseEvent<HTMLDivElement>) => void =
        (event: SyntheticMouseEvent<HTMLDivElement>): void => {
            if (!isNil(grabbedHandleId)) {
                const currentUnits: number = calcUnitsByClientX(event.clientX);
                onChange(updateHandleData(grabbedHandleId, currentUnits));
            }
        };

    // endregion

    // region render helpers
    const renderOverlay: RenderFunctionNoArgsType = (): Node => {
        if (isNoneInteractive) {
            return null;
        }

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

    const renderDummyHandleContainer: RenderFunctionNoArgsType = (): Node => <FormSliderHandleComponent style={dummyHandleStyles}/>;

    const renderHandleContainers: () => Node = (): Node => {
        let handlesData: HandlesDataType | null = getHandlesData();

        if (isNil(handlesData)) {
            return null;
        }

        if (ImmitableMap.isMap(handlesData)) {
            handlesData = handlesData.toObject();
        }

        return reduce((nodes: Node[], id: string) => {
            const xPos: number = calcHandleXPosByUnits(handlesData[id]);
            const active: boolean = !isNil(grabbedHandleId) && grabbedHandleId === id;

            nodes.push(<FormSliderHandleComponent
                variant={props.variant}

                key={id}
                value={xPos}
                active={active}

                readOnly={readOnly}
                disabled={disabled}

                knobStyle={knobStyle}
                knobHoverStyle={knobHoverStyle}
                activeKnobStyle={activeKnobStyle}
            />);

            return nodes;
        }, [], keys(handlesData))
    };

    const renderProgressTrackContainer: RenderFunctionNoArgsType = (): Node => {
        let handlesData: HandlesDataType | null = getHandlesData();

        if (isNil(handlesData)) {
            return null;
        }

        if (ImmitableMap.isMap(handlesData)) {
            handlesData = handlesData.toObject();
        }

        const [left, right] = pipe(
            pipe(
                toPairs,
                sortBy(
                    prop(1)
                ),
            ),

            cond([
                [pipe(length, equals(__, 0)), always([0, 0])],
                [pipe(length, equals(__, 1)), pipe(nth(0), nth(1), pair(0))],
                [pipe(length, gt(__, 1)), pipe(juxt([head, last]), map(nth(1)))],
                [T, always([0, 0])]
            ]),

            map(calcHandleXPosByUnits),
        )(handlesData);

        const style: CSSStylesType = mergeRight({
            left: `${left}px`,

            width: `${right - left}px`,
        }, trackProgressStyle);

        const {trackProgressContainer} = classes;

        return <div className={trackProgressContainer} style={style}>
        </div>;
    };

    const renderTrackContainer: RenderFunctionNoArgsType = (): Node => {
        const {trackContainer} = classes;
        const style: CSSStylesType = mergeRight({}, trackStyle);

        return <div className={trackContainer} style={style}>
        </div>;
    };

    const renderComponentContainer: RenderFunctionNoArgsType = (): Node => {
        const {componentContainer} = classes;
        const className: string = classNames(
            componentContainer,

            {
                enabled: !disabled,
                disabled,
                variant1: equals(sliderVariant, 1),
                variant2: equals(sliderVariant, 2),
            },
            props.componentContainerClassName
        );

        const containerStyle: CSSStylesType = pipe(
            mergeRight(__, componentContainerStyles),
            mergeRight(__, style),
        )({});

        return (
            <div
                ref={componentContainerRef}
                className={className}

                style={containerStyle}

                onMouseDown={containerMouseDownHandler}
            >
                {renderTrackContainer()}
                {renderProgressTrackContainer()}
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
