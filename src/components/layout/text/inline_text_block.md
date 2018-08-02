Example inline text block without custom styles:

```jsx

const {InlineTextBlock} = require('./inline_text_block');

<InlineTextBlock>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
    nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
    onsectetur elit. Donec id nisl vitae ex scelerisque suscipit.
</InlineTextBlock>

```

Example inline text block with custom styles:

```jsx

const {InlineTextBlock} = require('./inline_text_block');

<InlineTextBlock style={{color: 'green', fontWeight: 'bold', letterSpacing: '5px'}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
    nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
    onsectetur elit. Donec id nisl vitae ex scelerisque suscipit.
</InlineTextBlock>

```