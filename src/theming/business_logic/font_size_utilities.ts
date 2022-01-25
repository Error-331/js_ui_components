'use strict';

// external imports
import { ifElse, always, pipe, indexOf, toLower, length, gt } from 'ramda';

// local imports
import { FontSizesUtilitiesType } from './../../types/theming/font_sizes_utilities_types';

// implementation
const fontSizeUtilities: FontSizesUtilitiesType = Object.seal({
    parseFontSizePX(fontSizePX: string): number | null {
        return pipe(
            toLower,
            ifElse(
                (fontSizePX: string): boolean => gt(indexOf('px', fontSizePX), -1),
                pipe(
                    indexOf('px'),
                    (pxPos: number) => fontSizePX.substring(0, pxPos),
                    ifElse(
                        (fontSize: string) => gt(length(fontSize), 0),
                        (fontSize: string) => parseInt(fontSize),
                        always(null),
                    )
                ),
                always(null)
            ),
        )(fontSizePX);
    },
});

// exports
export default fontSizeUtilities;
export { fontSizeUtilities };
