'use strict';

// @flow

// external imports
import {SheetsRegistry} from 'react-jss';

// local imports

// implementation

// exports
export type CSSStylesType = {
    [string]: mixed
};

export type SheetsRegistryOptionsType = {
    [string]: mixed
}

export type PrepareGlobalStyleSheetType = (styles: CSSStylesType) => CSSStylesType;
export type CreateStyleSheetType = (styles: CSSStylesType, options: SheetsRegistryOptionsType) => SheetsRegistry;
export type AddGlobalStylesType = (styles: CSSStylesType, name: string) => void;

export type StyleSheetRegisterType = {
    styleSheetNames: Array<string>,

    prepareGlobalStyleSheet: PrepareGlobalStyleSheetType,
    createStyleSheet: CreateStyleSheetType,
    addGlobalStyles: AddGlobalStylesType,
}