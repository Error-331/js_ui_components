Example horizontal table with enabled header:

```jsx

const {HorizontalTableComponent} = require('./');

const columnNames = ['Column 1', 'Test Column 2', 'Col 3', 'Long Test Column 4', 'Some additional Column 5', 'Test_column_6', 'Test_column_long_7', 'Some_add_col_8'];

const tableData = [
    ['Test data 1', 'Data2', 'Long test data 3', 'Some additional test data 4', 'Some_additional_test_data_5', 'Dat6', 'Dat_7', 'Some add test data 8'],
    ['Some add test data 1', 'Dat_2', 'Dat3', 'Some_additional_test_data_4', 'Some additional test data 5', 'Long test data 6', 'Data7', 'Test data 8'],
    ['Data1', 'Dat2', 'Some additional test data 3', 'Test data 4', 'Some_additional_test_data_5', 'Some add test data 6', 'Data7', 'Long test data 8'],
    ['Data7', 'Test data 4', 'Dat2', 'Data1', 'Long test data 8', 'Some additional test data 3', 'Some add test data 6', 'Some_additional_test_data_5'],
    ['Some_additional_test_data_1', 'Data2', 'Some additional test data 3', 'Long test data 4', 'Dat5', 'Test data 6', 'Data7', 'Some add test data 8']
];

<HorizontalTableComponent showTableHeader={true} columnNames={columnNames} data={tableData}/>

```

Example horizontal table index column and preset number of visible columns:

```jsx

const {HorizontalTableComponent} = require('./');

const columnNames = ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5', 'Col 6', 'Col 7', 'Col 8'];

const tableData = [
    [1, 'Data11', 'Data12', 'Data13', 'Data14', 'Data15', 'Data16', 'Data17', 'Data18'],
    [2, 'Data21', 'Data22', 'Data23', 'Data24', 'Data25', 'Data26', 'Data27', 'Data28'],
    [3, 'Data31', 'Data32', 'Data33', 'Data34', 'Data35', 'Data36', 'Data37', 'Data38'],
    [4, 'Data41', 'Data42', 'Data43', 'Data44', 'Data45', 'Data46', 'Data47', 'Data48'],
    [5, 'Data51', 'Data52', 'Data53', 'Data54', 'Data55', 'Data56', 'Data57', 'Data58']
];

<HorizontalTableComponent showTableHeader={true} columnNames={columnNames} data={tableData} visibleColumnCount={2} idColumnIndex={0}/>

```

Example horizontal table with disabled header and preset number of visible columns:

```jsx

const {HorizontalTableComponent} = require('./');

const columnNames = ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5', 'Col 6', 'Col 7', 'Col 8'];

const tableData = [
    [1, 'Data11', 'Data12', 'Data13', 'Data14', 'Data15', 'Data16', 'Data17', 'Data18'],
    [2, 'Data21', 'Data22', 'Data23', 'Data24', 'Data25', 'Data26', 'Data27', 'Data28'],
    [3, 'Data31', 'Data32', 'Data33', 'Data34', 'Data35', 'Data36', 'Data37', 'Data38'],
    [4, 'Data41', 'Data42', 'Data43', 'Data44', 'Data45', 'Data46', 'Data47', 'Data48'],
    [5, 'Data51', 'Data52', 'Data53', 'Data54', 'Data55', 'Data56', 'Data57', 'Data58']
];

<HorizontalTableComponent showTableHeader={false} columnNames={columnNames} data={tableData} visibleColumnCount={3} idColumnIndex={0}/>

```
