'use strict';

// @flow

// external imports
import {isNil, equals, max, inc, append, reject, reduce} from 'ramda';

// local imports
import type {ZIndexType, StyleValuesRegisterType} from './../../types/theming/style_values_register_types';

// constants
const MINIMUM_Z_INDEX: number = 100;

// exports
const styleValuesRegister: StyleValuesRegisterType = Object.seal({
    lastUsedZIndexes: [MINIMUM_Z_INDEX - 1],

    releaseZIndex(oldZIndex?: ZIndexType): void {
        if (isNil(oldZIndex)) {
            return;
        }

        this.lastUsedZIndexes = reject(equals(oldZIndex), this.lastUsedZIndexes);
    },

    get zIndex(): ZIndexType {
        const newZIndex: ZIndexType = inc(reduce(max, MINIMUM_Z_INDEX - 1, this.lastUsedZIndexes));
        this.lastUsedZIndexes = append(newZIndex, this.lastUsedZIndexes);

        return newZIndex;
    }
});

export default styleValuesRegister;