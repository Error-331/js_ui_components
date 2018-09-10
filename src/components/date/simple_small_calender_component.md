Test: 

```jsx

const {Component} = require('react');
const moment = require('moment');

const {SimpleSmallCalendarComponent} = require('./simple_small_calender_component');

class DemoSimpleCalendarComponent1 extends Component {    
    _onDateSelected(newDate) {
        this.setState({
            date: moment(newDate)
        });
    }

    render() {
        return <SimpleSmallCalendarComponent date={this.state.date} onDateSelect={this._onDateSelected}/>
    }
    
    constructor(props) {
        super(props);
        
        this._onDateSelected = this._onDateSelected.bind(this);
        
        this.state = {
            date: moment()
        }
    }
}

<DemoSimpleCalendarComponent1/>

```