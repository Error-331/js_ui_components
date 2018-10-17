Simple login dialog box (variant 1):

```jsx

const {LoginDialogBox1Component} = require('./');

<LoginDialogBox1Component
    loginInputName='login.email'
    passwordInputName='login.password'
/>

```

Login dialog box (variant 1) with 'register' and 'forgot password' buttons enabled:

```jsx

const {LoginDialogBox1Component} = require('./');

<LoginDialogBox1Component
    loginInputName='login.email'
    passwordInputName='login.password'
    
    showRegisterButton={true}
    showForgotPasswordButton={true}
/>

```