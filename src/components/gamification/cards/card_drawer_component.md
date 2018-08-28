Test...

```jsx

const {isNil} = require('ramda');

const {RegularCardComponent} = require('./../../layout/structure/regular_card_component');
const {RegularCardHeaderComponent} = require('./../../layout/structure/regular_card_header_component');

function JobCard(props) {
    const {firm, title, location, remote, salaryMin, salaryMax, currency} = props
    let salary = '';
    
    const styles = {
        boxSizing: 'border-box',
        display: 'grid',
    
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
    };
    
    if (isNil(salaryMin) && isNil(salaryMax)) {
        salary = '';
    } else {
        salary = `${currency}${salaryMin}${salaryMax ? `-${salaryMax}` : ''}`
    }

    return <RegularCardComponent>
           {firm}
           {title}
           {location}, {remote ? 'remote' : ''}
           {salary}
    </RegularCardComponent>;
}

const cardDrawerHeader = <RegularCardHeaderComponent>Java</RegularCardHeaderComponent>

const javaCard1 = <JobCard firm='WeAreBrainless' title='Hybris Engineer' location='Kiev' remote={true} salaryMin={2000} salaryMax={3000} currency='$'/>

const javaCard2 = <RegularCardComponent>
Solve.Care
Software Architect (Java)
Киев
Договорная
</RegularCardComponent>;

const javaCard3 = <RegularCardComponent>
Newage Solutions Ukraine
Senior Java Developer (TG)
Киев
2000
</RegularCardComponent>;

const cardsData = [
    {id: 0, card: javaCard1},
    {id: 1, card: javaCard2},
    {id: 2, card: javaCard3},
];


<RegularCardComponent header={cardDrawerHeader}>
    <CardDrawerComponent data={cardsData}/>
</RegularCardComponent>


```