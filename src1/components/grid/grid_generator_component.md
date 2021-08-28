Example of generated grid without custom styling:

```jsx

const {Fragment} = require('react');

const {GridGeneratorComponent} = require('./grid_generator_component');
const {InlineHeader, ScrollableAreaComponent} = require('./index');
const {RegularButtonComponent} = require('./index');

const tempText = <Fragment>
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
    {
      elm: InlineHeader,
      props: {level: 6, style: {whiteSpace: 'nowrap', justifySelf: 'end', alignSelf: 'center'}},
      children: 'Control 1:'
    },
    {elm: ScrollableAreaComponent, props: {rowsCount: '4'}, children: tempText},
  ],

  [
    {
      elm: InlineHeader,
      props: {level: 6, style: {whiteSpace: 'nowrap', justifySelf: 'end', alignSelf: 'center'}},
      children: 'Control 2:'
    },
    {elm: ScrollableAreaComponent, props: {rowsCount: '5'}, children: tempText},
  ],

  [
    {
      elm: InlineHeader,
      props: {level: 6, style: {whiteSpace: 'nowrap', justifySelf: 'end', alignSelf: 'center'}},
      children: 'Control 3:'
    },
    {elm: ScrollableAreaComponent, children: tempText},
  ]
];

<GridGeneratorComponent leftmostColSize='min-content' items={testItems1}/>

```

Example of generated grid with custom styling:

```jsx

const {Fragment} = require('react');

const {GridGeneratorComponent} = require('./grid_generator_component');
const {InlineHeader, ScrollableAreaComponent} = require('../layout/');
const {RegularButtonComponent} = require('../buttons/');

const tempText = <Fragment>
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
    {
      elm: InlineHeader,
      hspan: 3,
      props: {level: 4, style: {whiteSpace: 'nowrap', justifySelf: 'start', alignSelf: 'start'}},
      children: 'Test header...'
    },
    {elm: null, hspan: 2},
  ],

  [
    {
      elm: InlineHeader,
      props: {level: 6, style: {whiteSpace: 'nowrap', justifySelf: 'end', alignSelf: 'center'}},
      children: 'Control 1:'
    },
    {elm: ScrollableAreaComponent, hspan: 4, props: {rowsCount: '4'}, children: tempText},
  ],

  [
    {
      elm: InlineHeader,
      props: {level: 6, style: {whiteSpace: 'nowrap', justifySelf: 'end', alignSelf: 'center'}},
      children: 'Control 2:'
    },
    {elm: ScrollableAreaComponent, hspan: 4, props: {rowsCount: '5'}, children: tempText},
  ],

  [
    {
      elm: InlineHeader,
      props: {level: 6, style: {whiteSpace: 'nowrap', justifySelf: 'end', alignSelf: 'center'}},
      children: 'Control 3:'
    },
    {elm: ScrollableAreaComponent, hspan: 4, children: tempText},
  ],

  [
    {elm: null, hspan: 3},
    {elm: RegularButtonComponent, props: {label: 'ok'}},
    {elm: RegularButtonComponent, props: {label: 'cancel', variant: 'outlined'}}
  ],
];

<GridGeneratorComponent style={{gridTemplateColumns: 'min-content 1fr 1fr 110px 110px'}} items={testItems1}/>

```

Example of generated grid which contains elements which spans vertically (example 1):

```jsx

const {GridGeneratorComponent} = require('./grid_generator_component');
const {InlineHeader} = require('../layout/');

const testItems1 = [
  [
    {
      elm: 'div',
      hspan: 2,
      vspan: 3,
      props: {style: {height: '100%', backgroundColor: 'green'}},
      children: 'green span'
    },
    {elm: InlineHeader, hspan: 3, props: {level: 6}, children: 'Test col 1'},
    {
      elm: 'div',
      hspan: 2,
      vspan: 3,
      props: {style: {height: '100%', backgroundColor: 'green'}},
      children: 'green span'
    },
  ],
  [
    {
      elm: 'div',
      hspan: 3,
      vspan: 2,
      props: {style: {height: '100%', backgroundColor: 'yellow'}},
      children: 'yellow span'
    },
  ],
];

<GridGeneratorComponent style={{gridTemplateRows: 'repeat(3, 50px)'}} items={testItems1}/>

```

Example of generated grid which contains elements which spans vertically (example 2):

```jsx

const {GridGeneratorComponent} = require('./grid_generator_component');
const {InlineHeader} = require('../layout/');

const testItems1 = [
  [
    {
      elm: 'div',
      hspan: 2,
      vspan: 4,
      props: {style: {height: '100%', backgroundColor: 'green'}},
      children: 'green span'
    },
    {elm: 'div', hspan: 3, props: {style: {height: '100%', backgroundColor: 'yellow'}}, children: 'yellow span'},

  ],

  [
    {elm: 'div', hspan: 3, props: {style: {height: '100%', backgroundColor: 'yellow'}}, children: 'yellow span'},
  ],

  [
    {elm: 'div', hspan: 3, props: {style: {height: '100%', backgroundColor: 'yellow '}}, children: 'yellow span'},
  ],

  [
    {elm: 'div', hspan: 3, props: {style: {height: '100%', backgroundColor: 'yellow'}}, children: 'yellow span'},
  ],
];

<GridGeneratorComponent items={testItems1}/>

```

Example of generated grid which contains elements which spans vertically (example 3):

```jsx

const {GridGeneratorComponent} = require('./grid_generator_component');
const {InlineHeader} = require('../layout/');

const testItems1 = [
  [
    {
      elm: 'div',
      hspan: 2,
      vspan: 4,
      props: {style: {height: '100%', backgroundColor: 'green'}},
      children: 'green span'
    },
    {
      elm: 'div',
      hspan: 2,
      vspan: 2,
      props: {style: {height: '100%', backgroundColor: 'yellow'}},
      children: 'yellow span'
    },
    {elm: 'div', hspan: 2, vspan: 3, props: {style: {height: '100%', backgroundColor: 'cyan'}}, children: 'cyan span'},

  ],

  [],

  [
    {elm: 'div', hspan: 2, vspan: 2, props: {style: {height: '100%', backgroundColor: 'pink'}}, children: 'pink span'},
  ],

  [
    {elm: 'div', hspan: 2, props: {style: {height: '100%', backgroundColor: 'blue'}}, children: 'blue span'},
  ],

];

<GridGeneratorComponent style={{gridTemplateRows: 'repeat(4, 50px)'}} items={testItems1}/>

```

Example of generated grid which contains created elements:

```jsx

const {GridGeneratorComponent} = require('./grid_generator_component');
const {InlineHeader} = require('../layout/');

const testItems1 = [
  [
    {elm: <div>Header...</div>, hspan: 2, props: {style: {backgroundColor: 'orange'}}},
    {elm: <div>Column...</div>, vspan: 2, props: {style: {alignSelf: 'stretch', backgroundColor: 'pink'}}},
  ],

  [
    {
      elm: <div style={{overflow: 'scroll', alignSelf: 'stretch', backgroundColor: 'yellow'}}>
        Test...<br/>
        Test...<br/>
        Test...<br/>
        Test...<br/>
        Test...<br/>
        Test...<br/>
        Test...<br/>
        Test...<br/>
        Test...<br/>
        Test...<br/>
        Test...<br/>
        Test...<br/>
        Test...<br/>
        Test...<br/>
        Test...<br/>
      </div>,
      hspan: 2,
    },
  ]
];

<div style={{height: '200px'}}>
  <GridGeneratorComponent style={{height: '100%', gridTemplateRows: 'max-content 1fr'}} items={testItems1}/>
</div>

```
