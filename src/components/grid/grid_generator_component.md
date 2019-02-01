Example of generated grid without custom styling:

```jsx

const {Fragment} = require('react');

const {GridGeneratorComponent} = require('./grid_generator_component');
const {InlineHeader, ScrollableAreaComponent} = require('./../layout/');
const {RegularButtonComponent} = require('./../buttons/');

const tempText =  <Fragment>
                    <span>
                        Lorem ipsum dolor amet raclette VHS heirloom, helvetica chillwave williamsburg pickled gentrify 
                        hot chicken viral vegan lo-fi tote bag actually selvage. Marfa seitan kogi cardigan thundercats. 
                        Plaid artisan XOXO shoreditch gentrify meggings +1 whatever activated charcoal man bun heirloom twee 
                        lomo microdosing. Flexitarian microdosing chicharrones YOLO beard woke. VHS microdosing retro, viral 
                        ramps health goth salvia hot chicken slow-carb mumblecore normcore thundercats tofu glossier. Kale 
                        chips palo santo umami next level gluten-free, hell of XOXO selfies pour-over 3 wolf moon skateboard 
                        cloud bread offal hella.</span>
                  
                        <br/>
                        <br/>

                    <span>Farm-to-table activated charcoal pabst, mumblecore wolf irony listicle venmo quinoa helvetica keffiyeh 
                        church-key 8-bit heirloom asymmetrical. Iceland beard coloring book health goth cornhole, vegan lyft poke 
                        fingerstache glossier flannel. Health goth meditation jean shorts, messenger bag pug VHS humblebrag. 
                        Bespoke selfies bicycle rights glossier paleo.
                    </span>
                   </Fragment>;

const testItems1 = [
    [
        {elm: InlineHeader, props: {level: 6, style: {whiteSpace: 'nowrap', justifySelf: 'end', alignSelf: 'center'}}, children: 'Control 1:'}, 
        {elm: ScrollableAreaComponent, props: {rowsCount: '4'}, children: tempText}, 
    ],
    
    [
        {elm: InlineHeader, props: {level: 6, style: {whiteSpace: 'nowrap',justifySelf: 'end', alignSelf: 'center'}}, children: 'Control 2:'}, 
        {elm: ScrollableAreaComponent, props: {rowsCount: '5'}, children: tempText}, 
    ],    
    
    [
        {elm: InlineHeader, props: {level: 6, style: {whiteSpace: 'nowrap', justifySelf: 'end', alignSelf: 'center'}}, children: 'Control 3:'}, 
        {elm: ScrollableAreaComponent, children: tempText}, 
    ]  
];

<GridGeneratorComponent leftmostColSize='min-content' items={testItems1}/>

```

Example of generated grid with custom styling:

```jsx

const {Fragment} = require('react');

const {GridGeneratorComponent} = require('./grid_generator_component');
const {InlineHeader, ScrollableAreaComponent} = require('./../layout/');
const {RegularButtonComponent} = require('./../buttons/');

const tempText =  <Fragment>
                    <span>
                        Lorem ipsum dolor amet raclette VHS heirloom, helvetica chillwave williamsburg pickled gentrify 
                        hot chicken viral vegan lo-fi tote bag actually selvage. Marfa seitan kogi cardigan thundercats. 
                        Plaid artisan XOXO shoreditch gentrify meggings +1 whatever activated charcoal man bun heirloom twee 
                        lomo microdosing. Flexitarian microdosing chicharrones YOLO beard woke. VHS microdosing retro, viral 
                        ramps health goth salvia hot chicken slow-carb mumblecore normcore thundercats tofu glossier. Kale 
                        chips palo santo umami next level gluten-free, hell of XOXO selfies pour-over 3 wolf moon skateboard 
                        cloud bread offal hella.</span>
                  
                        <br/>
                        <br/>

                    <span>Farm-to-table activated charcoal pabst, mumblecore wolf irony listicle venmo quinoa helvetica keffiyeh 
                        church-key 8-bit heirloom asymmetrical. Iceland beard coloring book health goth cornhole, vegan lyft poke 
                        fingerstache glossier flannel. Health goth meditation jean shorts, messenger bag pug VHS humblebrag. 
                        Bespoke selfies bicycle rights glossier paleo.
                    </span>
                   </Fragment>;

const testItems1 = [
    [
        {elm: InlineHeader, span: 3, props: {level: 4, style: {whiteSpace: 'nowrap', justifySelf: 'start', alignSelf: 'start'}}, children: 'Test header...'}, 
        {elm: null, span: 2},
    ],    

    [
        {elm: InlineHeader, props: {level: 6, style: {whiteSpace: 'nowrap', justifySelf: 'end', alignSelf: 'center'}}, children: 'Control 1:'}, 
        {elm: ScrollableAreaComponent, span: 4, props: {rowsCount: '4'}, children: tempText}, 
    ],
    
    [
        {elm: InlineHeader, props: {level: 6, style: {whiteSpace: 'nowrap',justifySelf: 'end', alignSelf: 'center'}}, children: 'Control 2:'}, 
        {elm: ScrollableAreaComponent, span: 4, props: {rowsCount: '5'}, children: tempText}, 
    ],    
    
    [
        {elm: InlineHeader, props: {level: 6, style: {whiteSpace: 'nowrap', justifySelf: 'end', alignSelf: 'center'}}, children: 'Control 3:'}, 
        {elm: ScrollableAreaComponent, span: 4, children: tempText}, 
    ],
    
    [
        {elm: null, span: 3},
        {elm: RegularButtonComponent, props: {label: 'ok'}},
        {elm: RegularButtonComponent, props: {label: 'cancel', variant: 'outlined'}}
    ],        
];

<GridGeneratorComponent style={{gridTemplateColumns: 'min-content 1fr 1fr 110px 110px'}} items={testItems1}/>

```