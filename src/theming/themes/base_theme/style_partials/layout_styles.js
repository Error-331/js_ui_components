'use strict';

// @flow

// external imports

// local imports
import type {FontStacksType} from './../../../../types/theming/font_stack_types';
import type {BaseStylesType} from './../../../../types/theming/base_style_types';
import type {LayoutStylesType} from './../../../../types/theming/layout_style_types';

// exports
export const layoutStylesFunc = ({fontStacks, baseStyles}: {fontStacks: FontStacksType, baseStyles: BaseStylesType}): LayoutStylesType => {
    return Object.freeze({
        fontStack: fontStacks.regularFontFamilyStack,
        headerFontStack: fontStacks.regularFontFamilyStack,
        bodyFontStack: fontStacks.regularFontFamilyStack,

        inlineHeaderLevel1FontSize: baseStyles.inlineHeaderLevel1FontSize,
        inlineHeaderLevel2FontSize: baseStyles.inlineHeaderLevel2FontSize,
        inlineHeaderLevel3FontSize: baseStyles.inlineHeaderLevel3FontSize,
        inlineHeaderLevel4FontSize: baseStyles.inlineHeaderLevel4FontSize,
        inlineHeaderLevel5FontSize: baseStyles.inlineHeaderLevel5FontSize,
        inlineHeaderLevel6FontSize: baseStyles.inlineHeaderLevel6FontSize,

        headerFontSize: baseStyles.inlineHeaderLevel6FontSize,
        bodyFontSize: baseStyles.secondaryFontSize,

        headerBorderRadius: 2, // px

        horizontalSpacing: 5, // px
        verticalSpacing: 5, // px

        topSpacing: 8, // px
        bottomSpacing: 10, // px

        rightSpacing: 8, // px
        leftSpacing: 10, // px

        componentHorizontalSpacing: 25, // px
        componentVerticalSpacing: 15, // px

        headerFontColor: baseStyles.noneTransparentBGColor,
        bodyFontColor: baseStyles.subPrimaryColor,

        headerBGColor: baseStyles.primaryBGColor,
        bodyBGColor: baseStyles.noneTransparentBGColor
    });
};