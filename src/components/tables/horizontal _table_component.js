'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

// local imports
import {SimpleFlexGridContainer as Container} from './../grid/simple_flex_grid/simple_flex_grid_container';
import {SimpleFlexGridRow as Row} from './../grid/simple_flex_grid/simple_flex_grid_row';
import {SimpleFlexGridColumn as Column} from './../grid/simple_flex_grid/simple_flex_grid_column';

// type definitions
type PropsTypes = {

};

type StateTypes = {};

// styles definition
const styles = theme => ({

});

// component implementation
export class HorizontalTableComponentClass extends React.Component<PropsTypes, StateTypes> {
    render(): React.Node {
        return (
            <Container stretch={true}>
                <Row xAlign='start' yAlign='stretch'>
                    <Column full={true} style={{border: '1px solid black', padding: '5px'}}>
                        fghfg
                    </Column>

                    <Column full={true} style={{border: '1px solid black', padding: '5px'}}>
                        fgh
                    </Column>
                </Row>
            </Container>
        );
    }
}

// exports
export const HorizontalTableComponent = injectSheet(styles)(HorizontalTableComponentClass);