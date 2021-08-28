tt

```jsx

const testData = [
    {label: '.NET', data: '.NET', clickable: true},
    {label: 'Android', data: 'Android', clickable: true},
    {label: 'C / C++ / Embedded', data: 'C / C++ / Embedded', clickable: true},
    {label: 'Data Sciance', data: 'Data Sciance', clickable: true},
    {label: 'DBA', data: 'DBA', clickable: true},
    {label: 'DevOps / Sysadmin', data: 'DevOps / Sysadmin', clickable: true},
    {label: 'Fronte-end / JS', data: 'Fronte-end / JS', clickable: true},
    {label: 'Gamedev / Unity/ AS3', data: 'Gamedev / Unity/ AS3', clickable: true},
    {label: 'Golang', data: 'Golang', clickable: true},
    {label: 'iOS', data: 'iOS', clickable: true},
    {label: 'Java', data: 'Java', clickable: true},
    {label: 'Lead', data: 'Lead', clickable: true},
    {label: 'Node.js', data: 'Node.js', clickable: true},
    {label: 'PHP', data: 'PHP', clickable: true},
    {label: 'Product Manager', data: 'Product Manager', clickable: true},
    {label: 'Product Manager (PM)', data: 'Product Manager (PM)', clickable: true},
    {label: 'Python', data: 'Python', clickable: true},
    {label: 'Rubu / Rails', data: 'Rubu / Rails', clickable: true},
    {label: 'QA Automation', data: 'QA Automation', clickable: true},
    {label: 'QA Manual', data: 'QA Manual', clickable: true},
    {label: 'Scala', data: 'Scala', clickable: true},
    {label: 'UX / Design', data: 'UX / Design', clickable: true},
    {label: 'Бизнес-аналитика (BA)', data: 'Бизнес-аналитика (BA)', clickable: true},
    {label: 'Маркетинг', data: 'Маркетинг', clickable: true},
    {label: 'Поддержка', data: 'Поддержка', clickable: true},
    {label: 'Продажи', data: 'Продажи', clickable: true},
    {label: 'Рекрутеры и HR', data: 'Рекрутеры и HR', clickable: true},
    {label: '(Другие)', data: '(Другие)', clickable: true},
];

<ChipCollectionComponent data={testData}/>

```


tt

```jsx

const containerStyle = {
    borderRadius: '2px',
    
    boxShadow: 'none',
    backgroundColor: '#F5F8FB',
};

const hoverStyle = {
    backgroundColor: '#dddfe2',
};

const labelStyle = {
    fontSize: '12px',
    
    color: '#5D94C6',
};

const customStyles = {
    containerStyle,
    hoverStyle,
    labelStyle
};

const testData = [
    {label: '.NET', clickable: true, ...customStyles},
    {label: 'Android', clickable: true, ...customStyles},
    {label: 'C / C++ / Embedded', clickable: true, ...customStyles},
    {label: 'Data Sciance', clickable: true, ...customStyles},
    {label: 'DBA', clickable: true, ...customStyles},
    {label: 'DevOps / Sysadmin', clickable: true, ...customStyles},
    {label: 'Fronte-end / JS', clickable: true, ...customStyles},
    {label: 'Gamedev / Unity/ AS3', clickable: true, ...customStyles},
    {label: 'Golang', clickable: true, ...customStyles},
    {label: 'iOS', clickable: true, ...customStyles},
    {label: 'Java', clickable: true, ...customStyles},
    {label: 'Lead', clickable: true, ...customStyles},
    {label: 'Node.js', clickable: true, ...customStyles},
    {label: 'PHP', clickable: true, ...customStyles},
    {label: 'Product Manager', clickable: true, ...customStyles},
    {label: 'Product Manager (PM)', clickable: true, ...customStyles},
    {label: 'Python', clickable: true, ...customStyles},
    {label: 'Rubu / Rails', clickable: true, ...customStyles},
    {label: 'QA Automation', clickable: true, ...customStyles},
    {label: 'QA Manual', clickable: true, ...customStyles},
    {label: 'Scala', clickable: true, ...customStyles},
    {label: 'UX / Design', clickable: true, ...customStyles},
    {label: 'Бизнес-аналитика (BA)', clickable: true, ...customStyles},
    {label: 'Маркетинг', clickable: true, ...customStyles},
    {label: 'Поддержка', clickable: true, ...customStyles},
    {label: 'Продажи', clickable: true, ...customStyles},
    {label: 'Рекрутеры и HR', clickable: true, ...customStyles},
];

<ChipCollectionComponent data={testData}/>

```

tt

```jsx

const containerStyle = {
    marginRight: '10px',
    borderRadius: '4px',
    
    boxShadow: 'none',
    backgroundColor: '#2DAD6A',
};

const hoverStyle = {
    backgroundColor: '#248a55',
};

const labelStyle = {
    fontSize: '12px',
    
    color: '#ffffff',
};

const rightIconStyle = {
    fontSize: '10px',
};

const customStyles = {
    containerStyle,
    hoverStyle,
    labelStyle,
    rightIconStyle
};

const testData = [
    {label: '.NET', clickable: true, ...customStyles},
    {label: 'Android', clickable: true, ...customStyles},
    {label: 'C / C++ / Embedded', clickable: true, ...customStyles},
    {label: 'Data Sciance', clickable: true, ...customStyles},
    {label: 'DBA', clickable: true, ...customStyles},
    {label: 'DevOps / Sysadmin', clickable: true, ...customStyles},
    {label: 'Fronte-end / JS', clickable: true, ...customStyles},
    {label: 'Gamedev / Unity/ AS3', clickable: true, ...customStyles},
    {label: 'Golang', clickable: true, ...customStyles},
    {label: 'iOS', clickable: true, ...customStyles},
    {label: 'Java', clickable: true, ...customStyles},
    {label: 'Lead', clickable: true, ...customStyles},
    {label: 'Node.js', clickable: true, ...customStyles},
    {label: 'PHP', clickable: true, ...customStyles},
    {label: 'Product Manager', clickable: true, ...customStyles},
    {label: 'Product Manager (PM)', clickable: true, ...customStyles},
    {label: 'Python', clickable: true, ...customStyles},
    {label: 'Rubu / Rails', clickable: true, ...customStyles},
    {label: 'QA Automation', clickable: true, ...customStyles},
    {label: 'QA Manual', clickable: true, ...customStyles},
    {label: 'Scala', clickable: true, ...customStyles},
    {label: 'UX / Design', clickable: true, ...customStyles},
    {label: 'Бизнес-аналитика (BA)', clickable: true, ...customStyles},
    {label: 'Маркетинг', clickable: true, ...customStyles},
    {label: 'Поддержка', clickable: true, ...customStyles},
    {label: 'Продажи', clickable: true, ...customStyles},
    {label: 'Рекрутеры и HR', clickable: true, ...customStyles},
    {label: '(Другие)', clickable: true, ...customStyles},
];

<ChipCollectionComponent data={testData}/>

```