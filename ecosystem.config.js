'use strict';

// @flow

// external imports

// local imports

// exports
module.exports = {
    apps : [
        {
            name: 'JS UI components',
            script: 'npm',
            args: 'run start-frontend-style-guide-server',
            env: {
                serverPort: 9027,
            },
        }
    ],
};
