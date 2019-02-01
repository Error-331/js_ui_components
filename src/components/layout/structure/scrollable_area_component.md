Scrollable area without any styling:

```jsx

const {ScrollableAreaComponent} = require('./scrollable_area_component');

<ScrollableAreaComponent>

    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    
    <p>
        Iron tache prostate cancer et sodales cum omar sharif frightfully nice, des lynam French café patron iron tache omar sharif et sodales cum 
        groucho-a-like prostate cancer fox hunting frightfully nice. Success cigars tricky sneezes Refined gentlemen hairy kid at school smashing good fun.
    </p>

    <p>
        Basil fawlty toothbrush luxurious horseshoe charming villain karl marx kaiser bill, tom selleck charming villain horseshoe des lynam old man in pub basil 
        fawlty el snort Daniel plainview luxurious karl marx facial accessory face broom kaiser bill toothbrush?
    </p>
    
    <p>
        Challenge you to a duel mexican’t hairy kid at school joseph stalin dick dastardly charming villain, joseph stalin challenge you to a duel 
        omar sharif dick dastardly old man in pub groucho-a-like great dictator mexican’t charming villain elit hairy kid at school en time-warped cabbie tony stark?
    </p>

</ScrollableAreaComponent>

```

Scrollable area with custom styling (scrollbars shown):

```jsx

const {ScrollableAreaComponent} = require('./scrollable_area_component');

const scrollableAreaStyle = {
    height: '100px',
    width: '500px',
};

<ScrollableAreaComponent style={scrollableAreaStyle}>

    <p style={{whiteSpace: 'nowrap'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    
    <p style={{whiteSpace: 'nowrap'}}>
        Iron tache prostate cancer et sodales cum omar sharif frightfully nice, des lynam French café patron iron tache omar sharif et sodales cum 
        groucho-a-like prostate cancer fox hunting frightfully nice. Success cigars tricky sneezes Refined gentlemen hairy kid at school smashing good fun.
    </p>

    <p style={{whiteSpace: 'nowrap'}}>
        Basil fawlty toothbrush luxurious horseshoe charming villain karl marx kaiser bill, tom selleck charming villain horseshoe des lynam old man in pub basil 
        fawlty el snort Daniel plainview luxurious karl marx facial accessory face broom kaiser bill toothbrush?
    </p>
    
    <p style={{whiteSpace: 'nowrap'}}>
        Challenge you to a duel mexican’t hairy kid at school joseph stalin dick dastardly charming villain, joseph stalin challenge you to a duel 
        omar sharif dick dastardly old man in pub groucho-a-like great dictator mexican’t charming villain elit hairy kid at school en time-warped cabbie tony stark?
    </p>

</ScrollableAreaComponent>

```







Scrollable area with fixed rows count:

```jsx

const {ScrollableAreaComponent} = require('./scrollable_area_component');

<ScrollableAreaComponent rowsCount={3}>

    <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </span>
    
    <span>
        Iron tache prostate cancer et sodales cum omar sharif frightfully nice, des lynam French café patron iron tache omar sharif et sodales cum 
        groucho-a-like prostate cancer fox hunting frightfully nice. Success cigars tricky sneezes Refined gentlemen hairy kid at school smashing good fun.
    </span>

    <span>
        Basil fawlty toothbrush luxurious horseshoe charming villain karl marx kaiser bill, tom selleck charming villain horseshoe des lynam old man in pub basil 
        fawlty el snort Daniel plainview luxurious karl marx facial accessory face broom kaiser bill toothbrush?
    </span>
    
    <br/>
    <br/>
    
    <span>
        Challenge you to a duel mexican’t hairy kid at school joseph stalin dick dastardly charming villain, joseph stalin challenge you to a duel 
        omar sharif dick dastardly old man in pub groucho-a-like great dictator mexican’t charming villain elit hairy kid at school en time-warped cabbie tony stark?
    </span>

</ScrollableAreaComponent>

```