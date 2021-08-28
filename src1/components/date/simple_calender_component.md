Editable simple calendar component: 

```jsx

const {Component} = require('react');
const moment = require('moment');

const {SimpleCalendarComponent} = require('./simple_calender_component');

class DemoSimpleCalendarComponent1 extends Component {    
    _onDateSelected(newDate) {
        this.setState({
            date: moment(newDate)
        });
    }

    render() {
        return <SimpleCalendarComponent 
            date={this.state.date} 
            onDateSelect={this._onDateSelected}
        />
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

None-editable simple calendar component: 

```jsx

const {Component} = require('react');
const moment = require('moment');

const {SimpleCalendarComponent} = require('./simple_calender_component');

<SimpleCalendarComponent selectable={false} /> 


```

Editable and compact simple calendar component without highlighting of selected date: 

```jsx

const {Component} = require('react');
const moment = require('moment');

const {SimpleCalendarComponent} = require('./simple_calender_component');

class DemoSimpleCalendarComponent2 extends Component {    
    _onDateSelected(newDate) {
        this.setState({
            date: moment(newDate)
        });
    }

    render() {
        return <SimpleCalendarComponent 
            compact={true}
            heightLightDate={false}
            date={this.state.date} 
            onDateSelect={this._onDateSelected}
        />
    }
    
    constructor(props) {
        super(props);
        
        this._onDateSelected = this._onDateSelected.bind(this);
        
        this.state = {
            date: moment()
        }
    }
}

<DemoSimpleCalendarComponent2/>


```