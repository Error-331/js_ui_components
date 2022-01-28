'use strict';

// external imports
import { MutableRefObject, useRef } from 'react';

// local imports

// type declarations

// hooks implementation
function useConstructor(callBack = () => {}): void {
    const hasBeenCalled: MutableRefObject<boolean> = useRef<boolean>(false);

    if (hasBeenCalled.current) {
        return
    }

    callBack();
    hasBeenCalled.current = true;
}

// exports
export {
    useConstructor,
}
