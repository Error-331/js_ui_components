'use strict';

// external imports
import {always} from 'ramda';

// local imports
import colorPaletteFunc from './style_partials/color_palette';
import baseStylesFunc from './style_partials/base_styles';

import {extendTheme} from './../../helpers/theme_helpers';

// exports
export default extendTheme(
    always({}),
    always({}),
    colorPaletteFunc,
    always({}),
    baseStylesFunc
);
