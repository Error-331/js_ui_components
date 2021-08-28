Usage example:

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
    <RotatingFontIconPreloader size='tiny'/>
    <RotatingFontIconPreloader size='small'/>
    <RotatingFontIconPreloader size='medium'/>
    <RotatingFontIconPreloader size='large'/>
    <RotatingFontIconPreloader size='extraLarge'/>
</div>

```