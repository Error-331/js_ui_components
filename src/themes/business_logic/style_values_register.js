'use strict';

// external imports
import {isNil, equals, max, inc, append, reject, reduce} from 'ramda';

// local imports

// constants
const MINIMUM_Z_INDEX = 100;

// exports
export default Object.seal({
    lastUsedZIndexes: [MINIMUM_Z_INDEX - 1],

    releaseZIndex(oldZIndex) {
        if (isNil(oldZIndex)) {
            return;
        }

        this.lastUsedZIndexes = reject(equals(oldZIndex), this.lastUsedZIndexes)
    },

    get zIndex() {
        const newZIndex = inc(reduce(max, MINIMUM_Z_INDEX - 1, this.lastUsedZIndexes));
        this.lastUsedZIndexes = append(newZIndex, this.lastUsedZIndexes);

        return newZIndex;
    }
});