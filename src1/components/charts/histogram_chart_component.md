Test

```jsx

const {Component} = require('react');
const {isNil} = require('ramda');

const {csv} = require('d3-fetch');
const {timeParse} = require('d3-time-format');

const HistogramChartComponent = require('./histogram_chart_component').default;

class TestHistogramChartComponent1 extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    loadRawData() {
        const dateFormat = timeParse("%m/%d/%Y");

        csv(this.props.url, (dataRow) => {
            if (!dataRow['base salary']) {
                return null;
            }
            
            return {
                employer: dataRow.employer,
                submit_date: dateFormat(dataRow['submit date']),
                start_date: dateFormat(dataRow['start date']),
                case_status: dataRow['case status'],
                job_title: dataRow['job title'],
                base_salary: Number(dataRow['base salary']),
                salary_to: dataRow['salary to'] ? Number(dataRow['salary to']) : null,
                city: dataRow.city,
                state: dataRow.state
            };
        }).then((data) => {
            this.setState({
                rawData: data
            });
        })
    }

    componentWillMount() {
        this.loadRawData();
    }

    // region render methods
    render() {
        if (isNil(this.state.rawData)) {
            return (
                <h2>Loading data about 81,000 H1B visas in the software industry\
                </h2>
            );
        } {
            var params = {
                bins: 20,
                width: 500,
                height: 500,
                axisMargin: 83,
                topMargin: 10,
                bottomMargin: 5,
                value: function (d) { return d.base_salary; }
            };

            const fullWidth = 700;

            return (
                <div className="row">
                    <div className="col-md-12">
                        <svg width="700" height="500">
                            <HistogramChartComponent {...params} data={this.state.rawData} x={500} y={10}/>
                        </svg>
                    </div>
                </div>
            );
        }
    }

    // endregion
}

<TestHistogramChartComponent1 url="/test_data/h1bs-2012-2016.csv"/>

```
