'use strict';

// external imports
import { ReactNode, SyntheticEvent } from 'react';

// local imports

// type declaration
type DOMElementEventSource = HTMLElement | Window | Document;

type RenderFunctionNoArgsType = () => React.ReactElement | null;
type DOMEventHandlerType = (event: Event) => void;
type EventHandlerType = (event: SyntheticEvent<HTMLElement>) => void;
type InputEventHandlerType = (event: SyntheticEvent<HTMLInputElement>) => void;

// exports
export {
    DOMEventHandlerType,
    DOMElementEventSource,
    RenderFunctionNoArgsType,
    EventHandlerType,
    InputEventHandlerType
}
