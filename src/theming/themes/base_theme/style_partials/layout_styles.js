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

        tinyIconSize: 12, // px
        smallIconSize: 17, // px
        mediumIconSize: 34, // px
        largeIconSize: 68, // px
        extraLargeIconSize: 136, // px

        headerFontSize: baseStyles.inlineHeaderLevel6FontSize,
        bodyFontSize: baseStyles.secondaryFontSize,

        headerBorderRadius: 2, // px
        commonBorderRadius: 4, // px

        topSpacing: 8, // px (inside component)
        bottomSpacing: 10, // px (inside component)

        rightSpacing: 8, // px (inside component)
        leftSpacing: 10, // px (inside component)

        sectionHorizontalSpacing: 12, // px (between components)
        sectionVerticalSpacing: 12, // px (between components)

        formHorizontalSpacing: 22, // px (between form elements inside the component)
        formVerticalSpacing: 15, // px (between form elements inside the component)

        headerFontColor: baseStyles.noneTransparentBGColor,
        bodyFontColor: baseStyles.subPrimaryColor,

        headerBGColor: baseStyles.primaryBGColor,
        bodyBGColor: baseStyles.noneTransparentBGColor,

        iconColor: baseStyles.mainSecondaryColor,
    });
};