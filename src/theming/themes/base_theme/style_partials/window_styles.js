'use strict';

// @flow

// external imports

// local imports
import type {BaseStylesType} from './../../../../types/theming/base_style_types';
import type {WindowStylesType} from './../../../../types/theming/window_style_types';

// exports
export default ({baseStyles}: {baseStyles: BaseStylesType}): WindowStylesType => {
    return Object.freeze({
        overlayColor: baseStyles.mainQuaternaryColor,
    });
};
