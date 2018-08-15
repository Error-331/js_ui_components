'use strict';

// @flow

// external imports
import {jss, SheetsRegistry} from 'react-jss';
import {contains} from 'ramda';

// local imports
import type {CSSStylesType, SheetsRegistryOptionsType, StyleSheetRegisterType} from './../../types/theming/style_sheet_register_types';

// type definitions

// constants
const DEFAULT_CUSTOM_GLOBAL_STYLESHEET_META_NAME: string = 'Custom, Dynamic, Global';

// implementation
const globalSheetsRegistryInstance: SheetsRegistry = new SheetsRegistry();

// exports
export const styleSheetRegister: StyleSheetRegisterType = Object.seal({
    styleSheetNames: [],

    prepareGlobalStyleSheet(styles: CSSStylesType): CSSStylesType {
        return {'@global': styles};
    },

    createStyleSheet(styles: CSSStylesType, options: SheetsRegistryOptionsType): SheetsRegistry {
        return jss.createStyleSheet(styles, options);
    },

    addGlobalStyles(styles: CSSStylesType, name: string): void {
        const preparedStyleSheetName: string = `${name}, ${DEFAULT_CUSTOM_GLOBAL_STYLESHEET_META_NAME}`;

        if (contains(preparedStyleSheetName, this.styleSheetNames)) {
            return;
        }

        const preparedGlobalStyleSheet: CSSStylesType = this.prepareGlobalStyleSheet(styles);
        const globalStyleSheet: SheetsRegistry = this.createStyleSheet(preparedGlobalStyleSheet, {
            meta: preparedStyleSheetName
        });

        globalSheetsRegistryInstance.add(globalStyleSheet);
        globalStyleSheet.attach();

        this.styleSheetNames.push(preparedStyleSheetName);
    }
});