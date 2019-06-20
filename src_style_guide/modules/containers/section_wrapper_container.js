'use strict';

// external imports
import React from 'react';
import {isNil} from 'ramda';

import DefaultSectionsRenderer from 'react-styleguidist/lib/client/rsg-components/Sections/SectionsRenderer';
import Styled from 'react-styleguidist/lib/client/rsg-components/Styled';

import {generateRandomIdNumber} from '@webfuturistics/design_components/lib/helpers/general/dom_helpers';

// local imports
import FormCheckboxInputComponent from './../../../src/components/form/form_checkbox_input_component';

// styles definition
const styles = ({ fontFamily, space }) => ({
    checkboxContainer: {
        marginBottom: '10px',
    }

});

class SectionsRendererClass extends React.Component {
    // region static props
    id: ?string = null;
    // endregion

    // region private props
    // endregion

    // region constructor
    constructor(props) {
        super(props);

        this.state = {
            showSectionContents: false,
        };

        this._onClickCheckbox = this._onClickCheckbox.bind(this);
        this._id = this._createInputId();
        console.log(this._id);
    }

    // endregion

    // region business logic
    _createInputId(): string {
        const randomIdNumber: number = generateRandomIdNumber();

        if (isNil(name)) {
            throw new Error('Name cannot be null, cannot create input ID');
        }

        return `style_guide_section_${randomIdNumber}`;
    }

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
    _onClickCheckbox() {
        this.setState({
            showSectionContents: !this.state.showSectionContents
        })
    }

    // endregion

    // region render methods
    _renderCheckboxContainer() {
        if (this.props.children.length < 0) {
            return null;
        }

        return <div className={this.props.classes.checkboxContainer}>
            <FormCheckboxInputComponent
                id={this._id}
                labelPosition='right'
                label='Show contents'
                input={
                    {
                        name: this._id,
                        value: true,
                        onChange: this._onClickCheckbox
                    }
                }/>
        </div>;
    }

    render() {
        console.log(this._id);
        return (
            <div>
                {this._renderCheckboxContainer()}

                {this.props.children.length > 0 && (
                    <DefaultSectionsRenderer>
                        {this.state.showSectionContents ? this.props.children : null}
                    </DefaultSectionsRenderer>
                )}
            </div>
        );
    }

    // endregion
}

export default Styled(styles)(SectionsRendererClass);