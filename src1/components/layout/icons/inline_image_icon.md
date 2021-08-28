Image icon examples (ascending):

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
    <InlineImageIcon size='tiny' src='/assets/images/cats/toy_kitten1.jpg'/>
    <InlineImageIcon size='small' src='/assets/images/cats/toy_kitten2.jpg'/>
    <InlineImageIcon size='medium' src='/assets/images/cats/toy_kitten3.jpg'/>
    <InlineImageIcon size='large' src='/assets/images/cats/toy_kitten4.jpg'/>
    <InlineImageIcon size='extraLarge' src='/assets/images/cats/toy_kitten5.jpg'/>
</div>

```

Image icon examples (descending):

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
    <InlineImageIcon size='extraLarge' src='/assets/images/cats/toy_kitten1.jpg'/>
    <InlineImageIcon size='large' src='/assets/images/cats/toy_kitten2.jpg'/>
    <InlineImageIcon size='medium' src='/assets/images/cats/toy_kitten3.jpg'/>
    <InlineImageIcon size='small' src='/assets/images/cats/toy_kitten4.jpg'/>
    <InlineImageIcon size='tiny' src='/assets/images/cats/toy_kitten5.jpg'/>
</div>

```