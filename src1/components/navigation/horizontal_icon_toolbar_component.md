Example of horizontal icon toolbar usage:

```jsx

const testData = [
    [
        [
            {title: 'Bold', iconClassName: 'fas fa-bold'},
            {title: 'Italic', iconClassName: 'fas fa-italic'},
            {title: 'Underline', iconClassName: 'fas fa-underline'},
        ],
        
        [
            {title: 'Align left', iconClassName: 'fas fa-align-left'},
            {title: 'Align center', iconClassName: 'fas fa-align-center'},
            {title: 'Align right', iconClassName: 'fas fa-align-right'},
            {title: 'Justify', iconClassName: 'fas fa-align-justify'},
        ],
        
        [
            {title: 'Header level 1', iconClassName: 'fas fa-h1'},
            {title: 'Header level 2', iconClassName: 'fas fa-h2'},
            {title: 'Header level 3', iconClassName: 'fas fa-h3'},
            {title: 'Header level 4', iconClassName: 'fas fa-h4'},
        ]
    ],
];

<HorizontalIconToolbarComponent data={testData}/>

```
