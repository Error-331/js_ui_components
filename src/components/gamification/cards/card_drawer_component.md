Test...

```jsx

const moment = require('moment');
const {isNil} = require('ramda');
const injectSheet = require('react-jss').default;

const {RegularCardComponent} = require('./../../layout/structure/regular_card_component');
const {RegularCardHeaderComponent} = require('./../../layout/structure/regular_card_header_component');

const {InlineHeader, InlineTextBlock} = require('./../../layout/text');

const jobCardStyles = theme => ({
    componentContainer: {
        height: '100%',
        
        '& > $regularCardContainer': {
                boxSizing: 'border-box',
                display: 'grid',
                
            
                
                gridTemplateAreas: `
                    "company-logo company-name publish-date"
                    "title        title        title"
                    "salary       salary       location"
                `,
                
                '& > $companyLogoContainer': {gridArea: 'company-logo'},
                '& > $companyNameContainer': {gridArea: 'company-name'},
                '& > $publishDateContainer': {gridArea: 'publish-date', textAlign: 'right'},
                '& > $titleContainer': {gridArea: 'title'},
                '& > $salaryContainer': {gridArea: 'salary'},
                '& > $locationContainer': {gridArea: 'location', textAlign: 'right'},
        }
    },
    
    regularCardContainer: {},
    
    companyLogoContainer: {},
    companyNameContainer: {},
    publishDateContainer: {},
    
    titleContainer: {},
    salaryContainer: {},
    locationContainer: {}
});

function JobCardFunction(props) {
    const {date, company, title, location, remote, salaryMin, salaryMax, currency, classes} = props;
    
    const parsedDate = moment(date);
    const formatedDate = parsedDate.format('LL');

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
    
    return <RegularCardComponent containerClassNames={classes.componentContainer} bodyClassNames={classes.regularCardContainer}>
            <div className={classes.companyLogoContainer}>img</div>
    
            <InlineTextBlock className={classes.companyNameContainer}>{company}</InlineTextBlock>
            <InlineTextBlock className={classes.publishDateContainer}>{formatedDate}</InlineTextBlock>
            
            <InlineHeader level={6} className={classes.titleContainer}>{title}</InlineHeader>
            <InlineTextBlock className={classes.salaryContainer}>{location}, {remote ? 'remote' : ''}</InlineTextBlock>
            <InlineTextBlock className={classes.locationContainer}>{salary}</InlineTextBlock>
    </RegularCardComponent>;
}

const JobCard = injectSheet(jobCardStyles)(JobCardFunction);

const cardDrawerHeader = <RegularCardHeaderComponent>Java</RegularCardHeaderComponent>

const javaCard1 = <JobCard date="2018-02-27T10:00:45" company='WeAreBrainless' title='Hybris Engineer' location='Kiev' remote={true} salaryMin={2000} salaryMax={3000} currency='$'/>;
const javaCard2 = <JobCard date="2017-05-02T12:00:23" company='Solve.DontCare' title='Software Architect (Java)' location='Kiev'/>;
const javaCard3 = <JobCard date="2017-02-12T14:45:12" company='Oldage Solutions Ukraine' title='Senior Java Developer (TG)' location='Kiev' salaryMin={2000} currency='$'/>;
const javaCard4 = <JobCard date="2018-05-03T10:33:13" company='Indiceus' title='Senior Java Developer (project for Amazon)' location='Kiev' salaryMin={3000} currency='$'/>;
const javaCard5 = <JobCard date="2017-10-03T22:42:10" company='Zaeblab' title='Middle Java Developer (UA)' location='Kiev' remote={true} salaryMin={1500} salaryMax={2500} currency='$'/>;
const javaCard6 = <JobCard date="2018-01-21T16:14:05" company='WeDontPlay!' title='Senior Backend Developer (Java)' location='Kiev' currency='$'/>;
const javaCard7 = <JobCard date="2018-03-12T11:23:17" company='DataFart' title='Java Engineer, Online Supermarket Services' location='Kiev' remote={true} currency='$'/>; //
const javaCard8 = <JobCard date="2018-07-21T17:43:25" company='AgileTube' title='Lead Java/Scala Developer' location='Kiev' salaryMin={4000} currency='$'/>; //
const javaCard9 = <JobCard date="2017-02-14T08:00:01" company='Beta Software' title='Java Developer' location='Kiev' salaryMax={2500} currency='$'/>; //
const javaCard10 = <JobCard date="2017-03-21T09:12:42" company='Buintellias' title='Middle/Senior Java Developer, PN Backend Services, HERE' location='Kiev' salaryMax={3500} currency='$'/>; //

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