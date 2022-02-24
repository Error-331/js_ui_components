'use strict';

// external imports
const path = require('path');
const express = require('express');

// local imports

// exports
module.exports = {
    webpackConfig: Object.assign({}, require('./../webpack_configs/webpack.styleguidist.config.js'), {}),

    require: [
        "core-js/modules/es.promise",
        "core-js/modules/es.array.iterator",
    ],

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
                },
                {
                    rel: 'stylesheet',
                    href: '/assets/css/Draft.css'
                }
            ]
        }
    },

    styleguideComponents: {
        Wrapper:  path.join(__dirname, './modules/containers/component_wrapper_container'),
        StyleGuideRenderer: path.join(__dirname, './provider_wrapper'),
   //     SectionsRenderer: path.join(__dirname, './modules/containers/section_wrapper_container'),
    },

    configureServer(app) {
        app.use('/assets',  express.static('./public/assets'));
        app.use('/test_data',  express.static('./public/test_data'));
    },

    serverPort: parseInt(process.env.serverPort) || 6060,

    pagePerSection: true,
    sections: [
        {
            name: 'UI Components',
            content: path.join(__dirname, './docs/ui_components_section.md'),
            sections: [
                {
                    name: 'Blog',
                    content: path.join(__dirname, './docs/blog/index.md'),
                    sections: [
                        {
                            name: 'Text',
                            content: path.join(__dirname, './docs/blog/text/index.md'),
                            components: path.join(__dirname, './../src/components/blog/text/**/[A-Za-z_]*_component.tsx'),
                        },
                    ],

                    sectionDepth: 1,
                },
            ],

            sectionDepth: 15,
        },

       /* {
            name: 'Demo',
            content: path.join(__dirname, './docs/demo/index.md'),
        },*/

        {}
    ],
};
