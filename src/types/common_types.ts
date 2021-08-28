'use strict';

// external imports
import { ReactNode } from 'react';

// local imports

// type declaration
type RenderFunctionNoArgsType = () => ReactNode;
type InputEventHandlerType = (event: SyntheticEvent<HTMLInputElement>) => void;

// exports
export {
    RenderFunctionNoArgsType,
    InputEventHandlerType
}
