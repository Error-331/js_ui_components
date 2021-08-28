Simple login dialog box (variant 1) with alert box:

```jsx

const {LoginDialogBox1Component} = require('./index');

<LoginDialogBox1Component
  alertText='Test alert...'
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

Login dialog box (variant 1) with enabled dropdown component:

```jsx

const {LoginDialogBox1Component} = require('./');

<LoginDialogBox1Component
    loginInputName='login.email'
    passwordInputName='login.password'
    
    showDropDownInput={true}
    dropDownInputName='login.role'
    dropDownInputLabel='Role'
    dropDownInputPlaceholder='user role...'
    
    dropDownInputOptions={{
        'Manager': 'manager',
        'Developer': 'developer',
    }}
/>

```
