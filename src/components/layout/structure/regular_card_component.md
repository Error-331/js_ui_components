Card with HTML body and without title:

```jsx

<RegularCardComponent>
    <h3>
        Test header 1
    </h3>

    <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
        nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
        consectetur elit. Donec id nisl vitae ex scelerisque suscipit.
    </div>
</RegularCardComponent>

```

Card with HTML body and with title:

```jsx

const {RegularCardHeaderComponent} = require('./regular_card_header_component');

<RegularCardComponent header={<RegularCardHeaderComponent>Test panel 1</RegularCardHeaderComponent>}>
    <h3>
        Test header 1
    </h3>

    <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
        nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
        consectetur elit. Donec id nisl vitae ex scelerisque suscipit.
    </div>
</RegularCardComponent>

```

Card with text body and with title:

```jsx

<RegularCardComponent header={<RegularCardHeaderComponent>Test panel 2</RegularCardHeaderComponent>}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
    nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
    consectetur elit. Donec id nisl vitae ex scelerisque suscipit.
</RegularCardComponent>

```

Card with custom height level 3:

```jsx

<RegularCardComponent heightLevel={3}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
    nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
    consectetur elit. Donec id nisl vitae ex scelerisque suscipit.
</RegularCardComponent>

```

Card with custom height level 5:

```jsx

<RegularCardComponent heightLevel={5}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
    nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
    consectetur elit. Donec id nisl vitae ex scelerisque suscipit.
</RegularCardComponent>

```

Card component that will pop when user control hover over it:

```jsx

<RegularCardComponent popOnHover={true}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
    nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
    consectetur elit. Donec id nisl vitae ex scelerisque suscipit.
</RegularCardComponent>

```

Card component that will pop when user control hover over it and has custom height level 3:

```jsx

<RegularCardComponent popOnHover={true} heightLevel={3}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
    nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
    consectetur elit. Donec id nisl vitae ex scelerisque suscipit.
</RegularCardComponent>

```

Card with text body, title and that will pop when user control hover over it:

```jsx

<RegularCardComponent popOnHover={true} header={<RegularCardHeaderComponent>Test panel 2</RegularCardHeaderComponent>}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
    nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
    consectetur elit. Donec id nisl vitae ex scelerisque suscipit.
</RegularCardComponent>

```

Card with text body, title and that will pop to specific height when user control hover over it:

```jsx

<RegularCardComponent popOnHover={true} maxPopLevel={3} header={<RegularCardHeaderComponent>Test panel 2</RegularCardHeaderComponent>}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
    nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
    consectetur elit. Donec id nisl vitae ex scelerisque suscipit.
</RegularCardComponent>

```