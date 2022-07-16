# Assignment 3 - User Management System

- _Name_: Trushita Maurya (B00913134)
- _Date Created_: 11 July 2022
- _Last Modification Date_: 15 July 2022
- _Git Project Repository_: https://git.cs.dal.ca/maurya/csci-5709-project
- _Git Project Branch - Trushita Maurya_: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/trushita-maurya
- _Heroku deployment URL for application_: https://travel-bae.herokuapp.com/
- _Pages Developed for Assignment_:
  - https://travel-bae.herokuapp.com/register
  - https://travel-bae.herokuapp.com/login
  - https://travel-bae.herokuapp.com/userdashboard (User must be logged in to see this)

## Authors

- [Trushita Maurya](trushita.maurya@dal.ca) - (Maintainer)

# Getting Started

To run this application you need to setup an environment to run it locally.

### Prerequisites

To have a local copy of this assingnment running on your local machine, you will first need to install the following software / libraries / plug-ins

```
Node js
npm package manager
```

See the following section for instructions on how to run the application

### Installing

```
npm install
```

### Start the application in local host

```
cd <project path>
npm start
```

## Built With

- [ReactJS](https://reactjs.org/) - ReactJS Library
- [MaterialUI](https://mui.com/) - Material UI Library for Styling
- [NodeJS](https://nodejs.org/en/) - NodeJS as Server Side Framework
- [ExpressJS](https://expressjs.com/) - ExpressJS for Routing Purposes
- [Heroku](https://www.heroku.com/) - Heroku for Deploying Code

# Images Used

Used images from http://search.creativecommons.org/

## Feature Developed and Tasks Completed

User Management System -

- Log-in.
- Sign-up.
- User Profile.
- Change Password.

## Files and Folders Created for Completing the Feature

**Folders created -**

- client\src\context
- client\src\containers\Registration
- client\src\containers\Login
- client\src\containers\NavBar
- client\src\containers\FormDialogAlert
- client\src\components\Registration
- client\src\components\Login
- client\src\components\NavBar
- client\src\components\FormDialogAlert
- client\src\utils
- server\routers\userRouter
- server\middleware\userService
- server\data\userDB
- server\models\userModel

**Files created -**

- client\src\pages\UserProfilePage.jsx
- client\src\context\AuthContext.js
- client\src\containers\Registration\index.js
- client\src\containers\Login\index.js
- client\src\containers\NavBar\index.js
- client\src\containers\FormDialogAlert\index.js
- client\src\components\Registration\index.js
- client\src\components\Login\index.js
- client\src\components\NavBar\index.js
- client\src\components\NavBar\style.js
- client\src\components\FormDialogAlert\index.js
- client\src\utils\validations.js
- server\routers\userRouter\index.js
- server\middleware\userService\index.js
- server\data\userDB\index.js
- server\models\userModel\index.js

**Folder Structure Explanation -**

- Follows the best practices of separating code by following the separation of code into different layers.
- All pages that contain code template comes under the pages folder.
- Business Logic is kept in the container folders.
- Resources such as images, fonts, and icons are kept under the asset folder.
- Presentation is maintained under React’s component folder.
- Includes the model view controller architecture.
- Here the business logic is handled by the middleware, and data of application and interaction with MongoDB is handled under the model’s folder.
- Routers act as a controller that does the request handling and redirects to the correct resource.

Pushed git updates to the trushita-maurya branch and raised Merge Requests to the develop branch.

## Boiler Plate Code

- Used create react app template to generate code for react js

# Sources Used

[1] "App bar React component - Material UI," _Mui.com_ [Online]. Available: https://mui.com/material-ui/react-app-bar/. [Accessed: July 11, 2022].

Code Used -

```
<AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
```

Code Modified - Line number - 131 File:- client\src\components\NavBar\index.js

```
<AppBar position="static" className={classes.root}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img src={Logo} height="50px" />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              textDecoration: "none",
            }}
            color="primary"
          >
            TRAVEL BAE
          </Typography>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img src={Logo} height="35px" />
          </Box>
```

- The code was implemented by [Material UI](https://mui.com/).
- [Material UI](https://mui.com/)'s code was used because our application is using material ui library for responsiveness and it provides snippets in official document that helps in managing the responsiveness.
- [Material UI](https://mui.com/)'s code was modified by [Trushita Maurya](trushita.maurya@dal.ca)

[2] Mugendi, P., "Form validation React function component with useState," _Stack Overflow_ [Online]. Available: <https://stackoverflow.com/questions/70214394/form-validation-react-function-component-with-usestate>. [Accessed: July 12, 2022].

Code Used -

```
    const cond1 = '/^(?=.*[a-z]).{6,20}$/';
    const cond2 = '/^(?=.*[A-Z]).{6,20}$/';
    const cond3 = '/^(?=.*[0-9]).{6,20}$/';
    const password = inputValues.password;
    ...
```

Code Modified: Line no - 25. File: client\src\utils\validations.js

```
const pwdValidation = {};
  let errorMsg = "";
  let isValid = true;
  const cond1 = "/^(?=.*[a-z]).{6,20}$/";
  const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
  const cond3 = "/^(?=.*[0-9]).{6,20}$/";
  ...

```

Line no: - 4 (Email validation). File: client\src\utils\validations.js

```
 let pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
```

- The code snippet provided in the official documentation of material ui was used for creating a responsive navigation bar and Grid component of material ui to support responsiveness.

- The above code was implemented by [Peter Mugendi](https://stackoverflow.com/users/10352985/peter-mugendi).
- [Peter Mugendi](https://stackoverflow.com/users/10352985/peter-mugendi)'s code was used because regex pattern is one of the way's I wanted to use for validation especially in email and passwords which is common for forms in websites.
- [Peter Mugendi](https://stackoverflow.com/users/10352985/peter-mugendi)'s code was modified by [Trushita Maurya](trushita.maurya@dal.ca)

[3] "bcrypt / Mongoose change user password," _Stack Overflow_ [Online]. Available: https://stackoverflow.com/questions/63963246/bcrypt-mongoose-change-user-password. [Accessed: July 12, 2022].

- The code was implemented by [Tony Drummond](https://stackoverflow.com/users/14267722/tony-drummond).
- [Tony Drummond](https://stackoverflow.com/users/14267722/tony-drummond)'s Code was used because it helped encrypt the password and also helped in change password logic.
- [Tony Drummond](https://stackoverflow.com/users/14267722/tony-drummond)'s Code was modified by [Trushita Maurya](trushita.maurya@dal.ca)

[4] "React Redux Login, Logout, Registration example with Hooks - BezKoder," _BezKoder_ [Online]. Available: https://www.bezkoder.com/react-hooks-redux-login-registration-example/. [Accessed: July 13, 2022].

- The code was implemented by [bezkoder](https://www.bezkoder.com/author/bezkoder/).
- [bezkoder](https://www.bezkoder.com/author/bezkoder/)'s Code was used because it helped to manage session and generate jwt token.
- [bezkoder](https://www.bezkoder.com/author/bezkoder/)'s Code was modified by [Trushita Maurya](trushita.maurya@dal.ca)

[5] "Email Confirmation with React," _Medium_ [Online]. Available: https://blog.bitsrc.io/email-confirmation-with-react-257e5d9de725. [Accessed: July 14, 2022].

- The code was implemented by [Jesse Heaslip](https://medium.com/@funador).
- [Jesse Heaslip](https://medium.com/@funador)'s Code was used because it helped to send email verification otp.
- [Jesse Heaslip](https://medium.com/@funador)'s Code was modified by [Trushita Maurya](trushita.maurya@dal.ca)

[6] "The W3C Markup Validation Service," _Validator.w3.org_ [Online]. Available: https://validator.w3.org/. [Accessed: July 15, 2022].

[7] "Cloud Application Platform | Heroku," _Heroku.com_ [Online]. Available: https://www.heroku.com/. [Accessed: July 15, 2022].

## Project Group

Group Number - 15

# Team member with Project Repository

- Git Project Individual Branch - Nishit Mistry: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/nishit-mistry
- Git Project Individual Branch - Trushita Maurya: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/trushita-maurya
- Git Project Individual Branch - Sangramsinh More: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/sangramsinh-more
- Git Project Individual Branch - Hrishita Mavani: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/hrishita-mavani
- Git Project Individual Branch - Smriti Mishra: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/smriti-mishra
- Git Project Individual Branch - Smily: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/smily
