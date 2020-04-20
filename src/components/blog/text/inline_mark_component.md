Example usage of mark component:

```jsx

<InlineMark>MARK</InlineMark>

```

Example usage of mark component with accent on it:

```jsx

<InlineMark accent={true}>MARK</InlineMark>

```

Example usage of marks in conjunction with inline text block:

```jsx

const InlineTextBlock = require('./../../layout/text/inline_text_block').default;

<div>
    <InlineMark>Video</InlineMark>

    <InlineMark>Photo</InlineMark>
    
    <InlineTextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
        nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
        onsectetur elit. Donec id nisl vitae ex scelerisque suscipit.
    </InlineTextBlock>
</div>

```

Example usage of marks inside of regular text block:

```jsx

const TextBlock = require('./../../layout/text/text_block').default;

<div>    
    <TextBlock>
        <InlineMark>Video</InlineMark>
    
        <InlineMark>Photo</InlineMark>
    
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
        nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
        onsectetur elit. Donec id nisl vitae ex scelerisque suscipit.
    </TextBlock>
</div>

```

Example usage of marks (with custom font family type) in conjunction with inline text block:

```jsx

const InlineTextBlock = require('./../../layout/text/inline_text_block').default;

<div>
    <InlineMark fontFamilyType='bold'>VIDEO</InlineMark>

    <InlineMark fontFamilyType='light'>PHOTO</InlineMark>
    
    <InlineTextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
        nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
        onsectetur elit. Donec id nisl vitae ex scelerisque suscipit.
    </InlineTextBlock>
</div>

```