Example usage of overlay component:

```jsx

const {OverlayComponent} = require('./overlay_component');
const {RotatingFontIconPreloader} = require('./../preloaders');

<div style={{height: '200px'}}>
    <OverlayComponent show={true}>
        <RotatingFontIconPreloader size='large'/>
    </OverlayComponent>
</div>
 
```

Example usage of overlay component inside card component:

```jsx

const {OverlayComponent} = require('./overlay_component');
const {RegularCardComponent, RegularCardHeaderComponent} = require('./../layout');
const {RotatingFontIconPreloader} = require('./../preloaders');

const headerComponent = <RegularCardHeaderComponent iconClassNames="fas fa-asterisk">Test card</RegularCardHeaderComponent>;

<RegularCardComponent
    header={headerComponent}
    bodyStyle={{height: '200px'}}
>

    <OverlayComponent containerStyle={{position: 'absolute'}} show={true}>
        <RotatingFontIconPreloader/>
    </OverlayComponent>
    
</RegularCardComponent>
```