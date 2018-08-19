Test: 

```jsx

const moment = require('moment');

const currentDate = moment();
const currentOffset = currentDate.utcOffset();

const columnNames = [
    'Full name', 
    'Active', 
    
    'Date of purchase', 
    'Date of purchase (UTC offset)',
    
    'Creation date',
    'Creation date (UTC offset)',
    
    'Modified date',
    'Modified date (UTC offset)',
    
    'Deletion date',
    'Deletion date (UTC offset)'
];
    
const columnWidths = ['10%', '10%', '10%', '10%', '10%', '10%', '10%'];

const tableData = [
    ['hapitestdomain1.com', true, currentDate, currentOffset, currentDate, currentOffset, currentDate, currentOffset, null, null],
    ['hapitestdomain2.com.ua', false, moment(currentDate).month(currentDate.month() - 1), currentOffset, currentDate, currentOffset, currentDate, currentOffset, null, null],
    ['hapitestdomain3.ru', true, moment(currentDate).month(currentDate.month() - 2), currentOffset, currentDate, currentOffset, currentDate, currentOffset, null, null],
    ['hapitestdomain4.su', false, moment(currentDate).month(currentDate.month() - 3), currentOffset, currentDate, currentOffset, currentDate, currentOffset, null, null],
];

<ControlledTableComponent showTableHeader={true} showTableFooter={true} columnNames={columnNames} columnWidths={columnWidths} data={tableData}/>
```

Test: 

```jsx

const moment = require('moment');

const currentDate = moment();
const currentOffset = currentDate.utcOffset();

const columnNames = [
    'Name',
    'Email',
    'Active',
    
    'Creation date',
    'Creation date (UTC offset)',
        
    'Modified date',
    'Modified date (UTC offset)',
        
    'Deletion date',
    'Deletion date (UTC offset)'
];
    
const columnWidths = ['10%', '10%', '10%', '10%', '10%', '10%', '10%'];

const tableData = [
    ['Jennifer Dunstan', 'test1@email.com', true, currentDate, currentOffset, null, null, null, null],
    ['Baxter Sheelagh', 'test2@email.ca', true, currentDate, currentOffset, currentDate, currentOffset, null, null],
    ['Sammi Taegan', 'test3@email.com', false,  currentDate, currentOffset, null, null,  currentDate, currentOffset],
    ['Isaiah Meriel', 'test4@email.com', true, currentDate, currentOffset, null, null, null, null],
    ['Larrie Melicent', 'test5@email.ca', false, currentDate, currentOffset, currentDate, currentOffset, currentDate, currentOffset],
];

<ControlledTableComponent showTableHeader={true} showTableFooter={true} columnNames={columnNames} columnWidths={columnWidths} data={tableData}/>
```

Test: 

```jsx

const moment = require('moment');
const {SPECIFIC_COLUMN_TYPE_LONG_TEXT} = require('./regular_table_component');

const currentDate = moment();
const currentOffset = currentDate.utcOffset();

const columnNames = [
    'Name',
    'Description',
    'Active',
    
    'Creation date',
    'Creation date (UTC offset)',
        
    'Modified date',
    'Modified date (UTC offset)'    
];
    
const columnWidths = ['10%', '10%', '10%', '10%', '10%', '10%', '10%'];

const paddingText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas ante ante, nec pretium magna tempor id.
 Nullam euismod tristique mauris in aliquam. Ut nec facilisis nulla, quis suscipit libero. Curabitur fermentum, sapien quis dignissim vulputate, 
 turpis ex fringilla tellus, at consectetur tellus justo sit amet enim.`;
 
const tableData = [
    ['landing', {type:SPECIFIC_COLUMN_TYPE_LONG_TEXT, data: `landing type...${paddingText}`}, true, currentDate, currentOffset, currentDate, currentOffset],
    ['shop', {type:SPECIFIC_COLUMN_TYPE_LONG_TEXT, data: `shop type...${paddingText}`}, false, currentDate, currentOffset, null, null],
    ['social', {type:SPECIFIC_COLUMN_TYPE_LONG_TEXT, data: `social type...${paddingText}`}, false, currentDate, currentOffset, null, null],
    ['video', {type:SPECIFIC_COLUMN_TYPE_LONG_TEXT, data: `video type......${paddingText}`}, true, currentDate, currentOffset, currentDate, currentOffset],
];

<ControlledTableComponent showTableHeader={true} showTableFooter={true} columnNames={columnNames} columnWidths={columnWidths} data={tableData}/>
```