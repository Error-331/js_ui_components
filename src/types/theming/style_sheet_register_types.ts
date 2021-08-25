'use strict';

// external imports
import { SheetsRegistry } from 'react-jss';

// local imports

// type declaration
type CSSStylesType = {
    [key: string]: any,
};

type SheetsRegistryOptionsType = {
    [key: string]: any
}

type PrepareGlobalStyleSheetType = (styles: CSSStylesType) => CSSStylesType;
type CreateStyleSheetType = (styles: CSSStylesType, options: SheetsRegistryOptionsType) => SheetsRegistry;
type AddGlobalStylesType = (styles: CSSStylesType, name: string) => void;

type StyleSheetRegisterType = {
    styleSheetNames: Array<string>,

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
