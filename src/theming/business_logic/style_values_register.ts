'use strict';

// external imports
import { isNil, equals, gte, max, inc, append, reject, reduce } from 'ramda';

// local imports
import { ZIndexType, StyleValuesRegisterType } from './../../types/theming/style_values_register_types';

// constants definition
const MINIMUM_Z_INDEX: number = 100;

// implementation
const styleValuesRegister: StyleValuesRegisterType = Object.seal({
    lastUsedZIndexes: [MINIMUM_Z_INDEX - 1],

    isTop(oldZIndex?: ZIndexType): boolean {
        return gte(oldZIndex, this.lastUsedZIndexes);
    },

    releaseZIndex(oldZIndex?: ZIndexType): void {
        if (isNil(oldZIndex)) {
            return;
        }

        this.lastUsedZIndexes = reject(equals(oldZIndex), this.lastUsedZIndexes);
    },

    get zIndex(): ZIndexType {
        const newZIndex: ZIndexType = inc(reduce(max, MINIMUM_Z_INDEX - 1, this.lastUsedZIndexes) as number);
        this.lastUsedZIndexes = append(newZIndex, this.lastUsedZIndexes);

        return newZIndex;
    }
});

// exports
export default styleValuesRegister;
export { styleValuesRegister };
