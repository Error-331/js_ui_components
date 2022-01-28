'use strict';

// external imports
import { MutableRefObject, useRef, useEffect } from 'react';
import { isNil } from 'ramda';

// local imports
import { DOMElementEventSource, DOMEventHandlerType } from './../../types/common_types';

// type declarations

// hooks implementation
function useEventListener(eventName: string, handler: DOMEventHandlerType, $element: DOMElementEventSource = window) {
    const savedHandler: MutableRefObject<DOMEventHandlerType> = useRef();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(
        () => {
            const isNotSupported: boolean = isNil($element) || isNil($element.addEventListener);
            if (isNotSupported) {
                return;
            }

            const eventListener = (event: Event) => savedHandler.current(event);
            $element.addEventListener(eventName, eventListener);

            return () => {
                $element.removeEventListener(eventName, eventListener);
            };
        },
        [eventName, $element],
    );
}

// exports
export {
    useEventListener,
}
