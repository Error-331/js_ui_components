'use strict';

// external imports
import { MutableRefObject, useRef } from 'react';

// local imports

// type declarations
type UseConstructorCallbackType = () => any;
type UseConstructorType = (callback: UseConstructorCallbackType) => void

// hooks implementation
const useConstructor: UseConstructorType = (callBack = () => {}): void => {
    const hasBeenCalled: MutableRefObject<boolean> = useRef<boolean>(false);

    if (hasBeenCalled.current) {
        return
    }

    callBack();
    hasBeenCalled.current = true;
}

// exports
export {
    UseConstructorCallbackType,
    UseConstructorType,
    useConstructor,
}
