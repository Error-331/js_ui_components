Test...

```jsx

const {isNil} = require('ramda');

const {RegularCardComponent} = require('./../../layout/structure/regular_card_component');
const {RegularCardHeaderComponent} = require('./../../layout/structure/regular_card_header_component');

const {InlineHeader, InlineTextBlock} = require('./../../layout/text/inline_header');

function JobCard(props) {
    const {firm, title, location, remote, salaryMin, salaryMax, currency} = props
    let salary = '';
    
    const styles = {
        boxSizing: 'border-box',
        display: 'grid',
    
        gridTemplateColumns: 'repeat(auto-fit, minmax(min-content, max-content))'
    };
    
    if (isNil(salaryMin) && isNil(salaryMax)) {
        salary = 'Negotiable';
    } else {
        salary = `${currency}${salaryMin}${salaryMax ? `-${salaryMax}` : ''}`
    }

    return <RegularCardComponent>
            <div>{firm}</div>
            <span>{title}</span>
            <div>{location}, {remote ? 'remote' : ''}</div>
            <div>{salary}</div>
    </RegularCardComponent>;
}

const cardDrawerHeader = <RegularCardHeaderComponent>Java</RegularCardHeaderComponent>

const javaCard1 = <JobCard firm='WeAreBrainless' title='Hybris Engineer' location='Kiev' remote={true} salaryMin={2000} salaryMax={3000} currency='$'/>;
const javaCard2 = <JobCard firm='Solve.DontCare' title='Software Architect (Java)' location='Kiev'/>;
const javaCard3 = <JobCard firm='Oldage Solutions Ukraine' title='Senior Java Developer (TG)' location='Kiev' salaryMin={2000} currency='$'/>;
const javaCard4 = <JobCard firm='Indiceus' title='Senior Java Developer (project for Amazon)' location='Kiev' salaryMin={3000} currency='$'/>;
const javaCard5 = <JobCard firm='Zaeblab' title='Middle Java Developer (UA)' location='Kiev' remote={true} salaryMin={1500} salaryMax={2500} currency='$'/>;
const javaCard6 = <JobCard firm='WeDontPlay!' title='Senior Backend Developer (Java)' location='Kiev' currency='$'/>;
const javaCard7 = <JobCard firm='DataFart' title='Java Engineer, Online Supermarket Services' location='Kiev' remote={true} currency='$'/>; //
const javaCard8 = <JobCard firm='AgileTube' title='Lead Java/Scala Developer' location='Kiev' salaryMin={4000} currency='$'/>; //
const javaCard9 = <JobCard firm='Beta Software' title='Java Developer' location='Kiev' salaryMax={2500} currency='$'/>; //
const javaCard10 = <JobCard firm='Buintellias' title='Middle/Senior Java Developer, PN Backend Services, HERE' location='Kiev' salaryMax={3500} currency='$'/>; //

const cardsData = [
    {id: 1, card: javaCard1},
    {id: 2, card: javaCard2},
    {id: 3, card: javaCard3},
    {id: 4, card: javaCard4},
    {id: 5, card: javaCard5},
    {id: 6, card: javaCard6},
    {id: 7, card: javaCard7},
    {id: 8, card: javaCard8},
    {id: 9, card: javaCard9},
    {id: 10, card: javaCard10},
];


<RegularCardComponent header={cardDrawerHeader}>
    <CardDrawerComponent data={cardsData}/>
</RegularCardComponent>


```