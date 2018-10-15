Example usage of card drawer without limitation on number of rows:

```jsx

const {RegularCardHeaderComponent, RegularCardComponent} = require('./../../layout/structure');
const {CardDrawerComponent} = require('./card_drawer_component');
const {VacancyCard1} = require('./../../premade');

const cardDrawerHeader = <RegularCardHeaderComponent>Java</RegularCardHeaderComponent>

const javaCard1 = <VacancyCard1 logoSrc="/assets/images/logos/logo1.svg" date="2018-02-27T10:00:45" company='WeAreBrainless' title='Hybris Engineer' location='Kiev' remote={true} salaryMin={2000} salaryMax={3000} currency='$'/>;
const javaCard2 = <VacancyCard1 logoSrc="/assets/images/logos/logo2.svg" date="2017-05-02T12:00:23" company='Solve.DontCare' title='Software Architect (Java)' location='Kiev'/>;
const javaCard3 = <VacancyCard1 logoSrc="/assets/images/logos/logo3.svg" date="2017-02-12T14:45:12" company='Oldage Solutions Ukraine' title='Senior Java Developer (TG)' location='Kiev' salaryMin={2000} currency='$'/>;
const javaCard4 = <VacancyCard1 logoSrc="/assets/images/logos/logo4.svg" date="2018-05-03T10:33:13" company='Indiceus' title='Senior Java Developer (project for Amazon)' location='Kiev' salaryMin={3000} currency='$'/>;
const javaCard5 = <VacancyCard1 logoSrc="/assets/images/logos/logo5.svg" date="2017-10-03T22:42:10" company='Zaeblab' title='Middle Java Developer (UA)' location='Kiev' remote={true} salaryMin={1500} salaryMax={2500} currency='$'/>;
const javaCard6 = <VacancyCard1 logoSrc="/assets/images/logos/logo6.svg" date="2018-01-21T16:14:05" company='WeDontPlay!' title='Senior Backend Developer (Java)' location='Kiev' currency='$'/>;
const javaCard7 = <VacancyCard1 logoSrc="/assets/images/logos/logo7.svg" date="2018-03-12T11:23:17" company='DataFart' title='Java Engineer, Online Supermarket Services' location='Kiev, Odessa, Bolhrad' remote={true} currency='$'/>; 
const javaCard8 = <VacancyCard1 logoSrc="/assets/images/logos/logo8.svg" date="2018-07-21T17:43:25" company='AgileTube' title='Lead Java/Scala Developer' location='Kiev, Nikolaev' salaryMin={4000} currency='$'/>;
const javaCard9 = <VacancyCard1 logoSrc="/assets/images/logos/logo9.svg" date="2017-02-14T08:00:01" company='Beta Software' title='Java Developer' location='Kiev, Odessa' salaryMax={2500} currency='$'/>;
const javaCard10 = <VacancyCard1 logoSrc="/assets/images/logos/logo10.svg" date="2017-03-21T09:12:42" company='Buintellias' title='Middle/Senior Java Developer, PN Backend Services, HERE' location='Kiev, Kharkiv' salaryMax={3500} currency='$'/>;
const javaCard11 = <VacancyCard1 date="2018-01-12T10:00:00" company='Logoless' title='Junior Java Developrer' remote={true} salaryMax={1500} currency='hr'/>;
const javaCard12 = <VacancyCard1 logoSrc="/assets/images/logos/logo11.svg" date="2016-03-21T11:00:25" company='OutroLab Systems' title='Java Developer (junior)' location='Nikolaev' salaryMin={300} salaryMax={500} currency='$'/>;
const javaCard13 = <VacancyCard1 logoSrc="/assets/images/logos/logo12.svg" date="2017-10-03T15:34:28" company='PieceTeka' title='Middle Java Developer' location='Nikolaev' salaryMin={800} currency='$'/>;
const javaCard14 = <VacancyCard1 logoSrc="/assets/images/logos/logo13.svg" date="2017-12-16T22:00:00" company='Amdlias' title='Middle/Senior Java Developer' location='Odessa' remote={true} salaryMin={2500} salaryMax={3500} currency='$'/>;
const javaCard15 = <VacancyCard1 logoSrc="/assets/images/logos/logo14.svg" date="2017-10-12T21:20:34" company='Unlucky Labs' title='Junior+/Middle Java Developer' location='Kharkiv' remote={false} currency='$'/>;
const javaCard16 = <VacancyCard1 logoSrc="/assets/images/logos/logo15.svg" date="2018-01-13T23:00:00" company='EBAM' title='Senior Java Developer / Tech Lead (Kharkiv)' location='Kiev, Kharkiv' remote={true} currency='$'/>;
const javaCard17 = <VacancyCard1 logoSrc="/assets/images/logos/logo16.svg" date="2017-11-22T00:00:00" company='DAXX' title='Java Developer' location='Kiev, Kharkiv' currency='$'/>;

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
    {id: 11, card: javaCard11},
    {id: 12, card: javaCard12},
    {id: 13, card: javaCard13},
    {id: 14, card: javaCard14},
    {id: 15, card: javaCard15},
    {id: 16, card: javaCard16},
    {id: 17, card: javaCard17},
];


<RegularCardComponent header={cardDrawerHeader}>
    <CardDrawerComponent data={cardsData}/>
</RegularCardComponent>

```

Example usage of card drawer with limitation on number of rows:

```jsx

const {RegularCardHeaderComponent, RegularCardComponent} = require('./../../layout/structure');
const {CardDrawerComponent} = require('./card_drawer_component');
const {VacancyCard1} = require('./../../premade');

const cardDrawerHeader = <RegularCardHeaderComponent>Java</RegularCardHeaderComponent>

const javaCard1 = <VacancyCard1 logoSrc="/assets/images/logos/logo1.svg" date="2018-02-27T10:00:45" company='WeAreBrainless' title='Hybris Engineer' location='Kiev' remote={true} salaryMin={2000} salaryMax={3000} currency='$'/>;
const javaCard2 = <VacancyCard1 logoSrc="/assets/images/logos/logo2.svg" date="2017-05-02T12:00:23" company='Solve.DontCare' title='Software Architect (Java)' location='Kiev'/>;
const javaCard3 = <VacancyCard1 logoSrc="/assets/images/logos/logo3.svg" date="2017-02-12T14:45:12" company='Oldage Solutions Ukraine' title='Senior Java Developer (TG)' location='Kiev' salaryMin={2000} currency='$'/>;
const javaCard4 = <VacancyCard1 logoSrc="/assets/images/logos/logo4.svg" date="2018-05-03T10:33:13" company='Indiceus' title='Senior Java Developer (project for Amazon)' location='Kiev' salaryMin={3000} currency='$'/>;
const javaCard5 = <VacancyCard1 logoSrc="/assets/images/logos/logo5.svg" date="2017-10-03T22:42:10" company='Zaeblab' title='Middle Java Developer (UA)' location='Kiev' remote={true} salaryMin={1500} salaryMax={2500} currency='$'/>;
const javaCard6 = <VacancyCard1 logoSrc="/assets/images/logos/logo6.svg" date="2018-01-21T16:14:05" company='WeDontPlay!' title='Senior Backend Developer (Java)' location='Kiev' currency='$'/>;
const javaCard7 = <VacancyCard1 logoSrc="/assets/images/logos/logo7.svg" date="2018-03-12T11:23:17" company='DataFart' title='Java Engineer, Online Supermarket Services' location='Kiev, Odessa, Bolhrad' remote={true} currency='$'/>; 
const javaCard8 = <VacancyCard1 logoSrc="/assets/images/logos/logo8.svg" date="2018-07-21T17:43:25" company='AgileTube' title='Lead Java/Scala Developer' location='Kiev, Nikolaev' salaryMin={4000} currency='$'/>;
const javaCard9 = <VacancyCard1 logoSrc="/assets/images/logos/logo9.svg" date="2017-02-14T08:00:01" company='Beta Software' title='Java Developer' location='Kiev, Odessa' salaryMax={2500} currency='$'/>;
const javaCard10 = <VacancyCard1 logoSrc="/assets/images/logos/logo10.svg" date="2017-03-21T09:12:42" company='Buintellias' title='Middle/Senior Java Developer, PN Backend Services, HERE' location='Kiev, Kharkiv' salaryMax={3500} currency='$'/>;
const javaCard11 = <VacancyCard1 date="2018-01-12T10:00:00" company='Logoless' title='Junior Java Developrer' remote={true} salaryMax={1500} currency='hr'/>;
const javaCard12 = <VacancyCard1 logoSrc="/assets/images/logos/logo11.svg" date="2016-03-21T11:00:25" company='OutroLab Systems' title='Java Developer (junior)' location='Nikolaev' salaryMin={300} salaryMax={500} currency='$'/>;
const javaCard13 = <VacancyCard1 logoSrc="/assets/images/logos/logo12.svg" date="2017-10-03T15:34:28" company='PieceTeka' title='Middle Java Developer' location='Nikolaev' salaryMin={800} currency='$'/>;
const javaCard14 = <VacancyCard1 logoSrc="/assets/images/logos/logo13.svg" date="2017-12-16T22:00:00" company='Amdlias' title='Middle/Senior Java Developer' location='Odessa' remote={true} salaryMin={2500} salaryMax={3500} currency='$'/>;
const javaCard15 = <VacancyCard1 logoSrc="/assets/images/logos/logo14.svg" date="2017-10-12T21:20:34" company='Unlucky Labs' title='Junior+/Middle Java Developer' location='Kharkiv' remote={false} currency='$'/>;
const javaCard16 = <VacancyCard1 logoSrc="/assets/images/logos/logo15.svg" date="2018-01-13T23:00:00" company='EBAM' title='Senior Java Developer / Tech Lead (Kharkiv)' location='Kiev, Kharkiv' remote={true} currency='$'/>;
const javaCard17 = <VacancyCard1 logoSrc="/assets/images/logos/logo16.svg" date="2017-11-22T00:00:00" company='DAXX' title='Java Developer' location='Kiev, Kharkiv' currency='$'/>;

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
    {id: 11, card: javaCard11},
    {id: 12, card: javaCard12},
    {id: 13, card: javaCard13},
    {id: 14, card: javaCard14},
    {id: 15, card: javaCard15},
    {id: 16, card: javaCard16},
    {id: 17, card: javaCard17},
];

<RegularCardComponent header={cardDrawerHeader}>
    <CardDrawerComponent data={cardsData} rowCount={2}/>
</RegularCardComponent>

```

Example usage of card drawer with limitation to one row of cards:

```jsx

const {RegularCardHeaderComponent, RegularCardComponent} = require('./../../layout/structure');
const {CardDrawerComponent} = require('./card_drawer_component');
const {VacancyCard1} = require('./../../premade');

const cardDrawerHeader = <RegularCardHeaderComponent>Java</RegularCardHeaderComponent>

const javaCard1 = <VacancyCard1 logoSrc="/assets/images/logos/logo1.svg" date="2018-02-27T10:00:45" company='WeAreBrainless' title='Hybris Engineer' location='Kiev' remote={true} salaryMin={2000} salaryMax={3000} currency='$'/>;
const javaCard2 = <VacancyCard1 logoSrc="/assets/images/logos/logo2.svg" date="2017-05-02T12:00:23" company='Solve.DontCare' title='Software Architect (Java)' location='Kiev'/>;
const javaCard3 = <VacancyCard1 logoSrc="/assets/images/logos/logo3.svg" date="2017-02-12T14:45:12" company='Oldage Solutions Ukraine' title='Senior Java Developer (TG)' location='Kiev' salaryMin={2000} currency='$'/>;
const javaCard4 = <VacancyCard1 logoSrc="/assets/images/logos/logo4.svg" date="2018-05-03T10:33:13" company='Indiceus' title='Senior Java Developer (project for Amazon)' location='Kiev' salaryMin={3000} currency='$'/>;
const javaCard5 = <VacancyCard1 logoSrc="/assets/images/logos/logo5.svg" date="2017-10-03T22:42:10" company='Zaeblab' title='Middle Java Developer (UA)' location='Kiev' remote={true} salaryMin={1500} salaryMax={2500} currency='$'/>;
const javaCard6 = <VacancyCard1 logoSrc="/assets/images/logos/logo6.svg" date="2018-01-21T16:14:05" company='WeDontPlay!' title='Senior Backend Developer (Java)' location='Kiev' currency='$'/>;
const javaCard7 = <VacancyCard1 logoSrc="/assets/images/logos/logo7.svg" date="2018-03-12T11:23:17" company='DataFart' title='Java Engineer, Online Supermarket Services' location='Kiev, Odessa, Bolhrad' remote={true} currency='$'/>; 
const javaCard8 = <VacancyCard1 logoSrc="/assets/images/logos/logo8.svg" date="2018-07-21T17:43:25" company='AgileTube' title='Lead Java/Scala Developer' location='Kiev, Nikolaev' salaryMin={4000} currency='$'/>;
const javaCard9 = <VacancyCard1 logoSrc="/assets/images/logos/logo9.svg" date="2017-02-14T08:00:01" company='Beta Software' title='Java Developer' location='Kiev, Odessa' salaryMax={2500} currency='$'/>;
const javaCard10 = <VacancyCard1 logoSrc="/assets/images/logos/logo10.svg" date="2017-03-21T09:12:42" company='Buintellias' title='Middle/Senior Java Developer, PN Backend Services, HERE' location='Kiev, Kharkiv' salaryMax={3500} currency='$'/>;
const javaCard11 = <VacancyCard1 date="2018-01-12T10:00:00" company='Logoless' title='Junior Java Developrer' remote={true} salaryMax={1500} currency='hr'/>;
const javaCard12 = <VacancyCard1 logoSrc="/assets/images/logos/logo11.svg" date="2016-03-21T11:00:25" company='OutroLab Systems' title='Java Developer (junior)' location='Nikolaev' salaryMin={300} salaryMax={500} currency='$'/>;
const javaCard13 = <VacancyCard1 logoSrc="/assets/images/logos/logo12.svg" date="2017-10-03T15:34:28" company='PieceTeka' title='Middle Java Developer' location='Nikolaev' salaryMin={800} currency='$'/>;
const javaCard14 = <VacancyCard1 logoSrc="/assets/images/logos/logo13.svg" date="2017-12-16T22:00:00" company='Amdlias' title='Middle/Senior Java Developer' location='Odessa' remote={true} salaryMin={2500} salaryMax={3500} currency='$'/>;
const javaCard15 = <VacancyCard1 logoSrc="/assets/images/logos/logo14.svg" date="2017-10-12T21:20:34" company='Unlucky Labs' title='Junior+/Middle Java Developer' location='Kharkiv' remote={false} currency='$'/>;
const javaCard16 = <VacancyCard1 logoSrc="/assets/images/logos/logo15.svg" date="2018-01-13T23:00:00" company='EBAM' title='Senior Java Developer / Tech Lead (Kharkiv)' location='Kiev, Kharkiv' remote={true} currency='$'/>;
const javaCard17 = <VacancyCard1 logoSrc="/assets/images/logos/logo16.svg" date="2017-11-22T00:00:00" company='DAXX' title='Java Developer' location='Kiev, Kharkiv' currency='$'/>;

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
    {id: 11, card: javaCard11},
    {id: 12, card: javaCard12},
    {id: 13, card: javaCard13},
    {id: 14, card: javaCard14},
    {id: 15, card: javaCard15},
    {id: 16, card: javaCard16},
    {id: 17, card: javaCard17},
];


<RegularCardComponent header={cardDrawerHeader}>
    <CardDrawerComponent data={cardsData} rowCount={1}/>
</RegularCardComponent>

```