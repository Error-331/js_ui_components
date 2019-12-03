'use strict';

// @flow

// external imports

import * as React from 'react';
import injectSheet from 'react-jss';

// local imports
import {MainThemeContext} from './../../theming/providers/main_theme_provider';

// type definitions
type PropsTypes = {

    data?: Array<string>,

    editable?: boolean,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

type StateTypes = {};

// styles definition
const styles = theme => ({

});

/**
 * Chip collection component styled according to material-UI guidelines.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
// $FlowFixMe decorators
@injectSheet(styles)
class ChipCollectionClass extends React.Component<PropsTypes, StateTypes> {
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
}

function ChipCollectionComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <ChipCollectionClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

ChipCollectionComponent.displayName = 'ChipCollectionComponent';

// exports
export {ChipCollectionClass, ChipCollectionComponent};
export default ChipCollectionComponent;
