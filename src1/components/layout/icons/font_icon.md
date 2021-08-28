Font icons examples:

```jsx

const style = {
    boxSizing: 'border-box',
    display: 'grid',

    gridTemplateColumns: 'repeat(5, 1fr)',
    gridAutoRows: 'max-content',

    justifyItems: 'center',
    alignItems: 'center'
};

<div style={style}>
    <FontIcon size='tiny' iconClassName='fas fa-coffee' />
    <FontIcon size='small' iconClassName='fas fa-coffee' />
    <FontIcon size='medium' iconClassName='fas fa-coffee' />
    <FontIcon size='large' iconClassName='fas fa-coffee' />
    <FontIcon size='extraLarge' iconClassName='fas fa-coffee' />
</div>

```