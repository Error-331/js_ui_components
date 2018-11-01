Typewriter visual effect demonstration (5 loops, 3 text entries):

```jsx

const {TypewriterVisualEffect} = require('./typewriter_visual_effect');

<TypewriterVisualEffect text={[
    'Looking for a Job?', 
    'Looking for a vacancy?',
    'Looking for employment?'
]} loopCount={5} />

```

Typewriter visual effect demonstration (infinite number loops, 4 text entries, header level 3, custom animation delay):

```jsx

const {TypewriterVisualEffect} = require('./typewriter_visual_effect');

<TypewriterVisualEffect text={[
    'Hamburger', 
    'Banana',
    'Pen',
    'Tomatoe'
]} loopCount={Infinity} level={3} animationDelay={500} />

```