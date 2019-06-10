'use strict';

// external imports
import React, {Component} from 'react';
import injectSheet from 'react-jss';

import {__, T, isNil, isEmpty, equals, unless, and, complement, cond, always, addIndex, indexOf, contains, append, remove, map, curry} from 'ramda';
import {isNotNil} from '@webfuturistics/design_components/lib/helpers/general/utility_helpers';

// local imports
import {RegularCardComponent} from './../layout/structure/regular_card_component';
import {CollapsibleComponent} from './../utility/collapsible_component';

import {MainThemeContext} from './../../theming/providers/main_theme_provider';

// styles definition
const styles = theme => ({
    componentContainer: {},

    navigationContainer: {
        '& ul': {
            boxSizing: 'border-box',
            display: 'flex',

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            flexDirection: 'column',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            margin: '0px',
            padding: '0px',

            listStyleImage: 'none',
            listStyleType: 'none',
            listStylePosition: 'inside',

            '& li': {
                boxSizing: 'border-box',

                display: 'flex',

                flexDirection: 'row',
                flexWrap: 'nowrap',

                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                alignContent: 'flex-start',

                flexBasis: 'auto',
                flexGrow: 0,
                flexShrink: 1,

                margin: '0px',
                padding: '0px',

                '& > i': {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',

                    minWidth: '25px',

                    flexBasis: '25px',
                    flexGrow: 0,
                    flexShrink: 1,

                    textAlign: 'center'
                },

                '& > div': {
                    display: 'flex',

                    width: 'calc(100% - 25px)',

                    flexDirection: 'column',
                    flexWrap: 'nowrap',

                    flexBasis: 'auto',
                    flexGrow: 0,
                    flexShrink: 1,

                    justifyContent: 'flex-start',
                    alignItems: 'stretch',
                    alignContent: 'flex-start',

                    '& > span,a': {
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace:'nowrap',

                        flexBasis: 'auto',
                        flexGrow: 0,
                        flexShrink: 1,

                        cursor: 'pointer',

                        textDecoration: 'none',
                        color: 'black'
                    },

                    '& > ul': {
                        flexBasis: 'auto',
                        flexGrow: 0,
                        flexShrink: 1,
                    }
                }
            }
        }
    }
});

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
class VerticalNavigationMenuClass extends Component {
    // region static props
    static displayName = 'VerticalNavigationMenuClass';

    static defaultProps = {
        title: '',
        data: []
    };

    _onClickListItem(event, listItemIndex) {
        const selectedListElements = this.state.selectedListElements;
        const selectedListElementIndex = indexOf(listItemIndex, selectedListElements);

        const newSelectedListElements = cond([
            [equals(-1), () => append(listItemIndex, selectedListElements)],
            [complement(equals)(-1), () => remove(selectedListElementIndex, 1, selectedListElements)]
        ])(selectedListElementIndex);

        this.setState({selectedListElements: newSelectedListElements});
    }

    _shouldBindOnClickHandler(elementData) {
        return this._dataElementHasChildren(elementData) && !this._dataElementContainsReactNode(elementData);
    }

    _dataElementContainsReactNode(menuElementData) {
        return isNotNil(menuElementData.element);
    }

    _dataElementHasChildren(elementData) {
        const {children} = elementData;
        return and(isNotNil(children), !isEmpty(children));
    }

    _extractIconClassNames(elementData) {
        return cond([
            [({iconClassNames}) => isNotNil(iconClassNames), ({iconClassNames}) => iconClassNames],
            [this._dataElementHasChildren, always('fas fa-chevron-right')],
            [T, always(null)]
        ])(elementData);
    }

    _createIconElement(elementData) {
        const iconClassNames = this._extractIconClassNames(elementData);
        return unless(isNil, classNames => <i className={classNames}/>)(iconClassNames);
    }

    _createCaptionElement(menuElementData, listElementIndex) {
        return cond([
            [({name}) => isNotNil(name), ({name}) => <span onClick={this. _shouldBindOnClickHandler(menuElementData) ? curry(this._onClickListItem)(__, listElementIndex) : null}>{name}</span>],
            [this._dataElementContainsReactNode, ({element}) => element],
            [T, always(null)]
        ])(menuElementData);
    }

    _renderElementsList(data, deepLevelStr = '') {
        const indexedMap = addIndex(map);
        const preparedList = indexedMap((menuElementData, menuElementIndex) => {
            const listElementIndex = `${deepLevelStr}${menuElementIndex}`;

            const menuElementHasChildren = this._dataElementHasChildren(menuElementData);
            const isChildrenListShown = contains(listElementIndex, this.state.selectedListElements);
            const childElementsList = menuElementHasChildren ? this._renderElementsList(menuElementData.children, listElementIndex) : null;

            const $icon = this._createIconElement(menuElementData);
            const $caption = this._createCaptionElement(menuElementData, listElementIndex);
            const $collapsibleChildElementsList = menuElementHasChildren &&
                <CollapsibleComponent useVisibility={true} removeContentOnClose={false} open={isChildrenListShown}>
                    {childElementsList}
                </CollapsibleComponent>;

            return <li key={`menu_elm_${menuElementIndex}`}>
                {$icon}

                <div>
                    {$caption}
                    {$collapsibleChildElementsList}
                </div>
            </li>;
        }, data);

        return <ul>{preparedList}</ul>;
    }

    render() {
        const {componentContainer, navigationContainer} = this.props.classes;
        const {title, data} = this.props;

        return (
            <RegularCardComponent title={title} containerClassName={componentContainer}>
                <nav className={navigationContainer}>
                    {this._renderElementsList(data)}
                </nav>
            </RegularCardComponent>
        );
    }

    constructor(props) {
        super(props);
        const self = this;

        this.state = {
            selectedListElements: []
        };

        self._onClickListItem = self._onClickListItem.bind(this);
    }
}

function VerticalNavigationMenuComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <VerticalNavigationMenuClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

VerticalNavigationMenuComponent.displayName = 'VerticalNavigationMenuComponent';

// exports
export {VerticalNavigationMenuClass, VerticalNavigationMenuComponent};
export default VerticalNavigationMenuComponent;