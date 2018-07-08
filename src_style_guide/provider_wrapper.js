'use strict';

// direct copy of react-styleguidist/lib/rsg-components/StyleGuide/StyleGuideRenderer

// external imports
import React, {Component} from 'react';

import Logo from 'react-styleguidist/lib/rsg-components/Logo';
import Markdown from 'react-styleguidist/lib/rsg-components/Markdown';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';
import cx from 'classnames';
import Ribbon from 'react-styleguidist/lib/rsg-components/Ribbon';

// local imports
import MainContainer from './modules/containers/main_container';
import CoreLayoutWrapperComponent from './modules/components/core_layout_wrapper_component';
import ComponentFormContainer from './modules/containers/component_form_container';

import SimpleFlexGridContainer from './../src/components/grid/simple_flex_grid/simple_flex_grid_container';
import SimpleFlexGridRow from './../src/components/grid/simple_flex_grid/simple_flex_grid_row';
import SimpleFlexGridColumn from './../src/components/grid/simple_flex_grid/simple_flex_grid_column';

import FormDropDownInputComponent from './../src/components/redux_form/redux_form_drop_down_input_component';

//
const styles = ({color, fontFamily, fontSize, sidebarWidth, mq, space, maxWidth}) => ({
    root: {
        backgroundColor: color.baseBackground,
    },
    hasSidebar: {
        paddingLeft: sidebarWidth,
        [mq.small]: {
            paddingLeft: 0,
        },
    },
    content: {
        maxWidth,
        padding: [[space[2], space[4]]],
        margin: [[0, 'auto']],
        [mq.small]: {
            padding: space[2],
        },
        display: 'block',
    },
    sidebar: {
        backgroundColor: color.sidebarBackground,
        border: [[color.border, 'solid']],
        borderWidth: [[0, 1, 0, 0]],
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: sidebarWidth,
        overflow: 'auto',
        '-webkit-overflow-scrolling': 'touch',
        [mq.small]: {
            position: 'static',
            width: 'auto',
            borderWidth: [[1, 0, 0, 0]],
            paddingBottom: space[0],
        },
    },
    logo: {
        padding: space[2],
        borderBottom: [[1, color.border, 'solid']],
    },
    footer: {
        display: 'block',
        color: color.light,
        fontFamily: fontFamily.base,
        fontSize: fontSize.small,
    },
    themeSelectorContainerRow: {
        width: '100%'
    },
    themeSelectorContainerColumn: {
        flexGrow: 0,

        paddingTop: '16px',

        paddingLeft: '16px',
        paddingRight: '16px',
    }
});

// wrapper implementation
class ComponentsWrapper extends Component {
    render() {
        const {classes, title, homepageUrl, children, toc, hasSidebar } = this.props;
        return (
            <MainContainer>
                <div className={cx(classes.root, hasSidebar && classes.hasSidebar)}>
                    <main className={classes.content}>
                        <CoreLayoutWrapperComponent>
                            {children}
                        </CoreLayoutWrapperComponent>

                        <footer className={classes.footer}>
                            <Markdown text={`Generated with [React Styleguidist](${homepageUrl})`} />
                        </footer>
                    </main>
                    {hasSidebar && (
                        <div className={classes.sidebar}>
                            <div className={classes.logo}>
                                <Logo>{title}</Logo>
                            </div>

                            <ComponentFormContainer>
                                <SimpleFlexGridContainer>
                                    <SimpleFlexGridRow className={classes.themeSelectorContainerRow}>
                                        <SimpleFlexGridColumn size={100} className={classes.themeSelectorContainerColumn}>
                                            <FormDropDownInputComponent label='Theme selector' name='reduxFormDropDownInputComponents.themeSelectorValue' options={{
                                                'Base theme': 'base',
                                                'Deep orange teal': 'deepOrangeTeal',
                                                'Purple indigo': 'purpleIndigo',
                                                'Blue grey red': 'blueGreyRed',
                                                'Green amber': 'greenAmber',
                                                'Brown lime': 'brownLime'
                                            }}/>
                                        </SimpleFlexGridColumn>
                                    </SimpleFlexGridRow>
                                </SimpleFlexGridContainer>
                            </ComponentFormContainer>
                            {toc}
                        </div>
                    )}
                    <Ribbon />
                </div>
            </MainContainer>
        );
    }
}

// exports
export default Styled(styles)(ComponentsWrapper);