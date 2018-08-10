Test: 

```jsx

const moment = require('moment');

const currentDate = new Date();
const currentOffset = moment().utcOffset();

const columnNames = [
    'Full name', 
    'Active', 
    
    'Date of purchase', 
    'Date of purchase (UTC Offset)',
    
    'Creation date',
    'Creation date (UTC Offset)',
    
    'Modified date',
    'modifiedDateUTCOffset',
    
    'deletionDate',
    'deletionDateUTCOffset'
    ];
    
const columnWidths = ['10%', '10%', '10%', '10%', '10%', '10%', '10%'];

const tableData = [
    ['hapitestdomain1.com', true, currentDate, currentOffset, currentDate, currentOffset, currentDate, currentOffset, null, null],
    ['hapitestdomain2.com.ua', false, currentDate.setMonth(currentDate.getMonth() - 1), currentOffset, currentDate, currentOffset, currentDate, currentOffset, null, null],
    ['hapitestdomain3.ru', true, currentDate.setMonth(currentDate.getMonth() - 2), currentOffset, currentDate, currentOffset, currentDate, currentOffset, null, null],
    ['hapitestdomain4.su', false, currentDate.setMonth(currentDate.getMonth() - 3), currentOffset, currentDate, currentOffset, currentDate, currentOffset, null, null],
];

<ControlledTableComponent showTableHeader={true} showTableFooter={true} columnNames={columnNames} columnWidths={columnWidths} data={tableData}/>
```