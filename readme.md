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
    
    // region business logic
    // endregion
    
    // region event handler helpers
    // endregion
    
    // region render helpers
    // endregion
    
    // init render
    
# Container boilerplate  

```jsx harmony
'use strict';

// @flow

// external imports
import * as React from 'react';
import {connect} from 'react-redux';

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
- update webpack and stylegist;
- make mechanism that always returns top`est z-Index;
- form generator - options -> props
- replace calssnames with clsx;
