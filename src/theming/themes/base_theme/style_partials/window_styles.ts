'use strict';

// external imports

// local imports
import { BaseStylesType } from './../../../../types/theming/base_style_types';
import { WindowStylesType } from './../../../../types/theming/window_style_types';

// implementation
const windowStylesFunc = ({baseStyles}: {baseStyles: BaseStylesType}): WindowStylesType => {
    return Object.freeze({
        overlayOpacity: 0.5,
        overlayColor: baseStyles.mainQuaternaryColor,
    });
};

// exports
export default windowStylesFunc;
