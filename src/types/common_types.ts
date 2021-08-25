'use strict';

// external imports
import type { Node } from 'react';

// local imports

// type declaration
type RenderFunctionNoArgsType = () => Node;
type InputEventHandlerType = (event: SyntheticEvent<HTMLInputElement>) => void;

// exports
export {
    RenderFunctionNoArgsType,
    InputEventHandlerType
}
