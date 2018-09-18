'use strict';

// external imports
const path = require('path');
const express = require('express');

// local imports

// exports
module.exports = {
    webpackConfig: require('./../webpack_configs/webpack.styleguidist.config.js'),
    template: {
        head: {
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1.0'
                },
            ],

            links: [
                {
                    rel: 'stylesheet',
                    href: '/assets/fonts/fontawesome_pro/web-fonts-with-css/css/all.css'
                }
            ]
        }
    },

    styleguideComponents: {
        Wrapper:  path.join(__dirname, './modules/containers/component_wrapper_container'),
        StyleGuideRenderer: path.join(__dirname, './provider_wrapper')
    },

    configureServer(app) {
        app.use('/assets',  express.static('./public/assets'));
    },

    serverPort: parseInt(process.env.serverPort) || 6060,

    sections: [
        {
            name: 'UI Components',
            content: path.join(__dirname, './docs/ui_components_section.md'),
            sections: [


                {
                    name: 'Layout',
                    content: path.join(__dirname, './docs/layout/index.md'),
                    sections: [
                        {
                            name: 'Alignment',
                            content: path.join(__dirname, './docs/layout/alignment/index.md'),
                            components: path.join(__dirname, './../src/components/layout/alignment/**/elements_[A-Za-z_]*.js'),
                        },

                        {
                            name: 'Structure',
                            content: path.join(__dirname, './docs/layout/structure/index.md'),
                            components: path.join(__dirname, './../src/components/layout/structure/**/[A-Za-z_]*_component.js'),
                        },

                        {
                            name: 'Text',
                            content: path.join(__dirname, './docs/layout/text/index.md'),
                            components: path.join(__dirname, './../src/components/layout/text/**/[A-Za-z_]*_[A-Za-z_]*.js'),
                        },
                    ]
                },



                {
                    name: 'Navigation',
                    content: path.join(__dirname, './docs/navigation/index.md'),
                    components: path.join(__dirname, './../src/components/navigation/**/[A-Za-z_]*_component.js'),
                },
                
            ]
        },

        {}
    ]
};