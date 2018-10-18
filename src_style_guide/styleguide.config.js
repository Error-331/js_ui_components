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
                    name: 'Grid',
                    content: path.join(__dirname, './docs/grid/index.md'),
                    sections: [
                        {
                            name: 'Simple flex grid',
                            content: path.join(__dirname, './docs/grid/simple_flex_grid/index.md'),
                            components: path.join(__dirname, './../src/components/grid/simple_flex_grid/**/simple_[A-Za-z_]*.js'),
                        },
                    ]
                },

                {
                    name: 'Layout',
                    content: path.join(__dirname, './docs/layout/index.md'),
                    sections: [
                        {
                            name: 'Alignment',
                            content: path.join(__dirname, './docs/layout/alignment/index.md'),

                            sections: [
                                {
                                    name: 'Elements',
                                    content: path.join(__dirname, './docs/layout/alignment/elements/index.md'),
                                    components: path.join(__dirname, './../src/components/layout/alignment/**/elements_[A-Za-z_]*.js'),
                                },

                                {
                                    name: 'Dialog box',
                                    content: path.join(__dirname, './docs/layout/alignment/dialog_box/index.md'),
                                    components: path.join(__dirname, './../src/components/layout/alignment/**/dialog_box_[A-Za-z_]*.js'),
                                }
                            ],
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
                    name: 'Form',
                    content: path.join(__dirname, './docs/form/index.md'),
                    components: path.join(__dirname, './../src/components/form/**/[A-Za-z_]*_component.js'),
                },

                {
                    name: 'Redux form',
                    content: path.join(__dirname, './docs/redux_form/index.md'),
                    components: path.join(__dirname, './../src/components/redux_form/**/[A-Za-z_]*_component.js'),
                },

                {
                    name: 'Buttons',
                    content: path.join(__dirname, './docs/buttons/index.md'),
                    components: path.join(__dirname, './../src/components/buttons/**/[A-Za-z_]*_component.js'),
                },

                {
                    name: 'Tables',
                    content: path.join(__dirname, './docs/tables/index.md'),
                    components: path.join(__dirname, './../src/components/tables/**/[A-Za-z_]*_component.js'),
                },

                {
                    name: 'Navigation',
                    content: path.join(__dirname, './docs/navigation/index.md'),
                    components: path.join(__dirname, './../src/components/navigation/**/[A-Za-z_]*_component.js'),
                },

                {
                    name: 'Date',
                    content: path.join(__dirname, './docs/date/index.md'),
                    components: path.join(__dirname, './../src/components/date/**/[A-Za-z_]*_component.js'),
                },

                {
                    name: 'Utility',
                    content: path.join(__dirname, './docs/utility/index.md'),
                    components: path.join(__dirname, './../src/components/utility/**/[A-Za-z_]*_component.js'),
                },

                {
                    name: 'Window',
                    content: path.join(__dirname, './docs/window/index.md'),
                    components: path.join(__dirname, './../src/components/window/**/[A-Za-z_]*_component.js'),
                },

                {
                    name: 'Gamification',
                    content: path.join(__dirname, './docs/gamification/index.md'),
                    sections: [
                        {
                            name: 'Cards',
                            content: path.join(__dirname, './docs/gamification/cards/index.md'),
                            components: path.join(__dirname, './../src/components/gamification/cards/**/[A-Za-z_]*_component.js'),
                        },
                    ]
                },

                {
                    name: 'Pre-made',
                    sections: [
                        {
                            name: 'Dialog boxes',
                            components: path.join(__dirname, './../src/components/premade/dialog_boxes/**/[A-Za-z_]*_dialog_box[0-1]*.js'),
                        },
                    ]
                },

                {
                    name: 'Demo',
                    content: path.join(__dirname, './docs/demo/index.md'),
                }
            ]
        },

        {}
    ]
};