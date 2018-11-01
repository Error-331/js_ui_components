'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InlineSVGIcon = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _icon_constants = require('./../../../theming/constants/icon_constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// styles definition


// type definitions
var styles = function styles(theme) {
    return {
        componentContainer: {
            '&.tiny': {
                width: theme.layoutStyles.tinyIconSize + 'px'
            },

            '&.small': {
                width: theme.layoutStyles.smallIconSize + 'px'
            },

            '&.medium': {
                width: theme.layoutStyles.mediumIconSize + 'px'
            },

            '&.large': {
                width: theme.layoutStyles.largeIconSize + 'px'
            },

            '&.extraLarge': {
                width: theme.layoutStyles.extraLargeIconSize + 'px'
            },

            '& > $svgContainer': {
                '& path': {
                    fill: 'none',

                    stroke: theme.layoutStyles.iconColor,
                    strokeWidth: '2.5',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: 10,
                    strokeDasharray: 'none',
                    strokeOpacity: 1
                }
            }
        },

        svgContainer: {}
    };
};

/**
 * SVG inline icon component.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation


// local imports
function InlineSVGIconFunction(props) {
    var containerClassName = props.containerClassName,
        classes = props.classes,
        containerStyle = props.containerStyle;

    var size = (0, _ramda.defaultTo)(_icon_constants.MEDIUM_ICON_SIZE)(props.size);

    var combinedContainerClassName = (0, _classnames2.default)(classes.componentContainer, size, containerClassName);

    var svgWidth = props.svgWidth,
        svgHeight = props.svgHeight,
        svgViewBox = props.svgViewBox,
        svgContainerClassName = props.svgContainerClassName,
        svgContainerStyle = props.svgContainerStyle,
        children = props.children;


    var combinedSvgContainerClassName = (0, _classnames2.default)(classes.svgContainer, svgContainerClassName);

    return React.createElement(
        'div',
        {
            className: combinedContainerClassName,
            style: containerStyle
        },
        React.createElement(
            'svg',
            {
                width: svgWidth,
                height: svgHeight,

                viewBox: svgViewBox,

                className: combinedSvgContainerClassName,
                style: svgContainerStyle
            },
            children
        )
    );
}

InlineSVGIconFunction.displayName = 'InlineSVGIcon';

// exports
var InlineSVGIcon = exports.InlineSVGIcon = (0, _reactJss2.default)(styles)(InlineSVGIconFunction);