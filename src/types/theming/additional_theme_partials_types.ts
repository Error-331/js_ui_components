'use strict';

// external imports

// local imports
import { ButtonStyleType } from './button_style_types';
import { TableStyleType } from './table_style_types';
import { WindowStylesType } from './window_style_types';
import { DateStylesType } from './date_style_types';
import { NavigationStylesType } from './navigation_style_types';
import { ScrollBarStylesType } from './scroll_bar_style_types';

import { LayoutStylesType } from './layout_style_types';
import { InputStylesType } from './input_style_types';

// type declaration
type AdditionalThemePartialsType = {
    layoutStyles: LayoutStylesType,
    inputStyles: InputStylesType,
    buttonStyles: ButtonStyleType,
    tableStyles: TableStyleType,
    windowStyles: WindowStylesType,
    dateStyles: DateStylesType,
    navigationStyles: NavigationStylesType,
    scrollBarStyles: ScrollBarStylesType,
};

// exports
export { AdditionalThemePartialsType };
