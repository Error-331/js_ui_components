'use strict';

// @flow

// external imports
import type {Node} from 'react';

// types definitions
export type RenderFunctionNoArgsType = () => Node;
export type InputEventHandlerType = (event: SyntheticEvent<HTMLInputElement>) => void;
