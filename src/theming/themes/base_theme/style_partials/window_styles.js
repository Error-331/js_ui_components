'use strict';

// @flow

// external imports

// local imports
import type {BaseStylesType} from './../../../../types/theming/base_style_types';
import type {WindowStylesType} from './../../../../types/theming/window_style_types';

// exports
export const windowStylesFunc = ({baseStyles}: {baseStyles: BaseStylesType}): WindowStylesType => {
    return Object.freeze({
        overlayOpacity: 0.5,
        overlayColor: baseStyles.mainQuaternaryColor,
    });
};
