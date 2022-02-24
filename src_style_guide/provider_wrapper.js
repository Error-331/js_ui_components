'use strict';

// direct copy of react-styleguidist/lib/rsg-components/StyleGuide/StyleGuideRenderer

// external imports
import React from 'react';
import DefaultStyleGuideRenderer from 'react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuideRenderer';

// local imports
import MainContainer from './modules/containers/main_container';
import CoreLayoutWrapperComponent from './modules/components/core_layout_wrapper_component';
//import ComponentFormContainer from './modules/containers/component_form_container';


// implementation
function ProviderWrapper(props) {
    return (
        <MainContainer>
            {/* <ComponentFormContainer>
               <SimpleFlexGridContainer>
                                    <SimpleFlexGridRow className={classes.themeSelectorContainerRow}>
                                        <SimpleFlexGridColumn size={100} className={classes.themeSelectorContainerColumn}>
                                            <ReduxFormDropDownInputComponent label='Theme selector' name='reduxFormDropDownInputComponents.themeSelectorValue' options={{
                                                'Base theme': 'base',
                                                'Deep orange teal': 'deepOrangeTeal',
                                                'Purple indigo': 'purpleIndigo',
                                                'Blue grey red': 'blueGreyRed',
                                                'Green amber': 'greenAmber',
                                                'Brown lime': 'brownLime',
                                                'Cyan green': 'cyanGreen',
                                            }}/>
                                        </SimpleFlexGridColumn>
                                    </SimpleFlexGridRow>
                                </SimpleFlexGridContainer>
            </ComponentFormContainer>*/}

            <CoreLayoutWrapperComponent>
                <DefaultStyleGuideRenderer {...props}>
                    {props.children}
                </DefaultStyleGuideRenderer>
            </CoreLayoutWrapperComponent>
        </MainContainer>
    );
}

// exports
export default ProviderWrapper;
