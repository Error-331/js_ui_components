Example controlled table with rows selectors and rows controls shown (example 1): 

```jsx

const moment = require('moment');
const {ControlledTableComponent} = require('./controlled_table_component');

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
    
const tableData = [
    [1, 'hapitestdomain1.com', true, currentDate, currentOffset, currentDate, currentOffset, currentDate, currentOffset, null, null],
    [2, 'hapitestdomain2.com.ua', false, moment(currentDate).month(currentDate.month() - 1), currentOffset, currentDate, currentOffset, currentDate, currentOffset, null, null],
    [3, 'hapitestdomain3.ru', true, moment(currentDate).month(currentDate.month() - 2), currentOffset, currentDate, currentOffset, currentDate, currentOffset, null, null],
    [4, 'hapitestdomain4.su', false, moment(currentDate).month(currentDate.month() - 3), currentOffset, currentDate, currentOffset, currentDate, currentOffset, null, null],
];

const rowControls = [
    {iconClassName: 'fas fa-eye'},
    {iconClassName: 'fas fa-edit'},
    {iconClassName: 'fas fa-trash-alt'}
];

<ControlledTableComponent 
    idColumnIndex={0} 
    rowControls={rowControls} 
    selectableRows={true} 
    showTableHeader={true} 
    showTableFooter={true} 
    columnNames={columnNames} 
    data={tableData}
/>

```

Example controlled table with rows selectors and rows controls shown (example 2): 

```jsx

const moment = require('moment');
const {ControlledTableComponent} = require('./controlled_table_component');

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

const rowControls = [
    {iconClassName: 'fas fa-eye'},
    {iconClassName: 'fas fa-edit'},
    {iconClassName: 'fas fa-trash-alt'}
];
   
const tableData = [
    [1, 'Jennifer Dunstan', 'test1@email.com', true, currentDate, currentOffset, null, null, null, null],
    [2, 'Baxter Sheelagh', 'test2@email.ca', true, currentDate, currentOffset, currentDate, currentOffset, null, null],
    [3, 'Sammi Taegan', 'test3@email.com', false,  currentDate, currentOffset, null, null,  currentDate, currentOffset],
    [4, 'Isaiah Meriel', 'test4@email.com', true, currentDate, currentOffset, null, null, null, null],
    [5, 'Larrie Melicent', 'test5@email.ca', false, currentDate, currentOffset, currentDate, currentOffset, currentDate, currentOffset],
];

<ControlledTableComponent 
    idColumnIndex={0} 
    rowControls={rowControls} 
    selectableRows={true} 
    showTableHeader={true} 
    showTableFooter={true} 
    columnNames={columnNames} 
    data={tableData}
/>

```

Example controlled table with rows selectors and rows controls shown (example 3): 

```jsx

const moment = require('moment');

const {ControlledTableComponent} = require('./controlled_table_component');
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
    
const paddingText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas ante ante, nec pretium magna tempor id.
 Nullam euismod tristique mauris in aliquam. Ut nec facilisis nulla, quis suscipit libero. Curabitur fermentum, sapien quis dignissim vulputate, 
 turpis ex fringilla tellus, at consectetur tellus justo sit amet enim.`;
 
const rowControls = [
    {iconClassName: 'fas fa-eye'},
    {iconClassName: 'fas fa-edit'},
    {iconClassName: 'fas fa-trash-alt'}
]; 
 
const tableData = [
    [1, 'landing', {type:SPECIFIC_COLUMN_TYPE_LONG_TEXT, data: `landing type...${paddingText}`}, true, currentDate, currentOffset, currentDate, currentOffset],
    [2, 'shop', {type:SPECIFIC_COLUMN_TYPE_LONG_TEXT, data: `shop type...${paddingText}`}, false, currentDate, currentOffset, null, null],
    [3, 'social', {type:SPECIFIC_COLUMN_TYPE_LONG_TEXT, data: `social type...${paddingText}`}, false, currentDate, currentOffset, null, null],
    [4, 'video', {type:SPECIFIC_COLUMN_TYPE_LONG_TEXT, data: `video type......${paddingText}`}, true, currentDate, currentOffset, currentDate, currentOffset],
];

<ControlledTableComponent 
    idColumnIndex={0} 
    rowControls={rowControls} 
    selectableRows={true} 
    showTableHeader={true} 
    showTableFooter={true} 
    columnNames={columnNames} 
    data={tableData}
/>

```