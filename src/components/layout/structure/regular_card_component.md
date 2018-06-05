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

const RegularCardHeaderComponent = require('./regular_card_header_component').default;

<RegularCardComponent header={<RegularCardHeaderComponent title='Test panel 1' />}>
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
<RegularCardComponent header={<RegularCardHeaderComponent title='Test panel 2' />}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin vitae nisl eget bibendum. Nunc tristique est a dolor interdum, eu faucibus
    nunc mollis. Morbi gravida libero ac aliquam rhoncus. Donec diam magna, interdum a urna a, rutrum auctor dui. Mauris id molestie dolor, eu
    consectetur elit. Donec id nisl vitae ex scelerisque suscipit.
</RegularCardComponent>
```