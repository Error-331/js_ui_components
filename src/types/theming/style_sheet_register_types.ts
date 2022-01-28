'use strict';

// external imports
import { Styles as JSSStyles, StyleSheet, StyleSheetFactoryOptions } from 'jss';

// local imports

// type declaration
// TODO: remove
type CSSStylesType = {
    [key: string]: any,
};

type SheetsRegistryOptionsType = {
    [key: string]: any
}

type PrepareGlobalStyleSheetType = (styles: JSSStyles) => JSSStyles;
type CreateStyleSheetType = (styles: JSSStyles, options: StyleSheetFactoryOptions) =>  StyleSheet;
type AddGlobalStylesType = (styles: JSSStyles, name: string) => void;

type StyleSheetRegisterType = {
    styleSheetNames: Array<StyleSheet>,

    prepareGlobalStyleSheet: PrepareGlobalStyleSheetType,
    createStyleSheet: CreateStyleSheetType,
    addGlobalStyles: AddGlobalStylesType,
}

// exports
export {
    CSSStylesType,
    SheetsRegistryOptionsType,

    PrepareGlobalStyleSheetType,
    CreateStyleSheetType,
    AddGlobalStylesType,

    StyleSheetRegisterType,
}
