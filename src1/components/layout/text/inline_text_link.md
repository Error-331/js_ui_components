Example inline text link without custom styles:

```jsx

const InlineTextBlock = require('./inline_text_block').default;

<InlineTextBlock>
    <InlineTextLink href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a'>
        a: The Anchor element
    </InlineTextLink>
</InlineTextBlock>

```

Example inline text link with custom styles:

```jsx

const InlineTextBlock = require('./inline_text_block').default;

<InlineTextBlock>
    <InlineTextLink 
        href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a' 
        style={{color: 'green', fontWeight: 'bold', letterSpacing: '5px'}}
    >
        a: The Anchor element
    </InlineTextLink>
</InlineTextBlock>

```

Example inline text link ('thin' font family type):

```jsx

const InlineTextBlock = require('./inline_text_block').default;

<InlineTextBlock>
    <InlineTextLink href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a' fontFamilyType='thin'>
        a: The Anchor element
    </InlineTextLink>
</InlineTextBlock>

```

Example inline text link ('light' font family type):

```jsx

const InlineTextBlock = require('./inline_text_block').default;

<InlineTextBlock>
    <InlineTextLink href='https://www.w3schools.com/tags/att_a_href.asp' fontFamilyType='light'>
        HTML a href Attribute
    </InlineTextLink>
</InlineTextBlock>

```

Example inline text link ('bold' font family type):

```jsx

const InlineTextBlock = require('./inline_text_block').default;

<InlineTextBlock>
    <InlineTextLink href='https://www.w3schools.com/tags/att_a_href.asp' fontFamilyType='bold'>
        HTML a href Attribute
    </InlineTextLink>
</InlineTextBlock>

```
