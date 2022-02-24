# UI Components (WebFuturistics)

# Component sections (class)

    // region static props
    // endregion
    
    // region private props
    // endregion

    // region constructor
    // endregion
    
    // region business logic
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    // endregion

    // region handlers
    // endregion

    // region render methods
    // endregion
    
# Component sections (function)

    // region private variables declaration
    // endregion
    
    // region style hooks declaration
    // endregion
    
    // region context hooks declaration
    // endregion
    
    // region state hooks declaration
    // endregion
    
    // region effect hooks declaration
    // endregion
    
    // region state variables declaration
    // endregion
   
    // region ref hooks declaration
    // endregion
    
    // region callback hooks declaration
    // endregion
    
    // region custom hooks declaration
    // endregion
    
    // region business logic
    // endregion
    
    // region event handler helpers
    // endregion
    
    // region render helpers
    // endregion
    
    // init
    
# Components boilerplates

## Functional    
    
### Container component boilerplate  

```typescript jsx
'use strict';

// external imports
import * as React from 'react';
import { connect } from 'react-redux';

// local imports
import HeaderComponent from './../../components/header/header_component';

// type definitions
type PropsTypes = {};

// constants declaration

// component implementation
function HeaderContainerFunction(props: PropsTypes) {
    const {location} = props;

    return <HeaderComponent
        location={location}
    />;
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerFunction);
HeaderContainer.displayName = 'HeaderContainer';

// exports
export {
    HeaderContainerFunction,
    HeaderContainer
};

export default HeaderContainer;

```

### Presentational component boilerplate

```typescript jsx

'use strict';

// external imports
import { Node } from 'react';

import React, { useState, useEffect, useRef, useContext } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { isNil } from 'ramda';
import classNames from 'classnames';

// local imports
import { ThemeType } from './../../../types/theme_types';
import { RenderFunctionNoArgs } from './../../../types/common_types';
import { StateTypes as ThemContextType } from './../../../theming/providers';

import { MainThemeContext } from './../../../theming/providers';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = FormTextInputTypes & {
    /**
     * JSS theme object
     *
     * @ignore
     */

    theme: ThemeType,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

type StateTypes = {};

// styles definition
const useStyles = createUseStyles(theme => ({
    componentContainer: {

    },
}));

/**
 * Radio button input component (variant 1) styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function FormRadioButtonInputVariant1Component(props: PropsTypes) {
    // region private variables declaration
    // endregion

    // region style hooks declaration
    const theme: ThemeType = useTheme();
    const classes: {[string]: string} = useStyles({...props, theme});

    // endregion

    // region context hooks declaration
    const themeContext: ThemContextType = useContext(MainThemeContext);

    // endregion

    // region state hooks declaration
    // endregion

    // region effect hooks declaration
    // endregion

    // region state variables declaration
    // endregion

    // region ref hooks declaration
    // endregion

    // region callback hooks declaration
    // endregion
    
    // region custom hooks declaration
    // endregion

    // region business logic
    // endregion

    // region event handler helpers
    // endregion

    // region render helpers
    const renderComponentContainer: RenderFunctionNoArgs = (): Node => {

    };

    // endregion

    // init
    return renderComponentContainer();
}

// exports
export default FormRadioButtonInputVariant1Component;

```

https://codepen.io/TrevorWelch/pen/NwERXE
# TODO

- Types for themes system;
- Check theme subtypes (/types/theming);
- Table description cell ellipsis with JS or CSS (two lines);
- self._onClick = self._onClick.bind(this); -> bind(this._onClick, this);
- custom classNames -> className;
- if (this._isReadOnly() || this._isDisabled()) {
              return;
          } - in all form stuff;
- input ellipses;
- dropdown limit drop menu height;      
- layoutStyles.headerBorderRadius -> something;  
- const styles = theme =>  - type for theme;
- make mechanism that always returns top`est z-Index;
- form generator - options -> props;
- REMOVE LODASH DEBOUNCE!!!;
- replace examples with classes to functions;
- remove everything related to dom_types events;
