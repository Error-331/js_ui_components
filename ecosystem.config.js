'use strict';

// @flow

// external imports

// local imports

// exports
module.exports = {
    apps : [
        {
            name: 'test',
            script: 'npm',
            args: 'run start-frontend-style-guide-server',
            env: {
                serverPort: 7050,
            },
        }
    ],
};
