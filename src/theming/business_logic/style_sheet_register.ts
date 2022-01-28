'use strict';

// external imports
import { StyleSheetFactoryOptions, StyleSheet } from 'jss';
import { jss, SheetsRegistry, Styles as JSSStyles } from 'react-jss';
import { includes } from 'ramda';

// local imports
import { StyleSheetRegisterType } from './../../types/theming/style_sheet_register_types';

// type definitions

// constants definition
const DEFAULT_CUSTOM_GLOBAL_STYLESHEET_META_NAME: string = 'Custom, Dynamic, Global';

// implementation
const globalSheetsRegistryInstance: SheetsRegistry = new SheetsRegistry();

const styleSheetRegister: StyleSheetRegisterType = Object.seal({
    styleSheetNames: [],

    prepareGlobalStyleSheet(styles: JSSStyles): JSSStyles {
        return { '@global': styles };
    },

    createStyleSheet(styles: JSSStyles, options: StyleSheetFactoryOptions): StyleSheet {
        return jss.createStyleSheet(styles, options);
    },

    addGlobalStyles(styles: JSSStyles, name: string): void {
        const preparedStyleSheetName: string = `${name}, ${DEFAULT_CUSTOM_GLOBAL_STYLESHEET_META_NAME}`;

        if (includes(preparedStyleSheetName, this.styleSheetNames)) {
            return;
        }

        const preparedGlobalStyleSheet: JSSStyles = this.prepareGlobalStyleSheet(styles);
        const globalStyleSheet: StyleSheet = this.createStyleSheet(preparedGlobalStyleSheet, {
            meta: preparedStyleSheetName
        });

        globalSheetsRegistryInstance.add(globalStyleSheet);
        globalStyleSheet.attach();

        this.styleSheetNames.push(preparedStyleSheetName);
    }
});

// exports
export default styleSheetRegister;
export { styleSheetRegister };
