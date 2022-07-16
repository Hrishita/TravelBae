# Assignment 3

Name: Smriti Mishra
Banner ID: B00904799
Group 15
Project Name: Travel Bae
\*Introduction:The online travel site TravelBae assists users in making better travel arrangements to their preferred locations. The application maintains track of the top locations, accommodations, and transit options. The website also offers activities, itinerary management, bucket lists, andmany other features.

## Team Members:

- Smriti Mishra
- Hrishita Mavani
- Smily MS
- Nishit Mistry
- Trushita Maurya
- Sangramsinh More

## Project Repository, Individual Branch and Deployement URL

- _Date Created_: 13 Jul 2022
- _Last Modification Date_: 15 Jul 2022
- _Git Repository URL_: https://git.cs.dal.ca/maurya/csci-5709-project
- _Heroku deployment URL for application_: https://travel-bae.herokuapp.com/
- \*Feature Deployment URL: https://travel-bae.herokuapp.com/userdashboard

### Prerequisites

To have a local copy of this lab running on your local machine, you will first need to install the following software / libraries / plug-ins

- [Node.js](https://nodejs.org/en/download/) - Framework used to provide npm as package manager for installing packages.

### Installing Steps

```
1. Install Node.js
2. Verify installation by running node -v and npm -v on the terminal.
3. Install the heroku package using "npm install heroku".
```

## Available Scripts

In the project directory,

- in /client

### `npm install`

Install all the node dependencies for the client side

- in /server

### `npm install`

Install all the node dependencies for the server side

- in /client

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000] to view it in your browser.

- in /server

### `npm start`

Runs the app in the development mode.
Runs at [http://localhost:8000] in console

The page will reload when you make changes.

## Built With

- [Node.js](https://nodejs.org/en/download/)
- [Heroku] - Platform for deploying web applications

## Feature: User Dashboard

### Tasks:

```
1. Plan Completed Trip Statistics : A user can get the complete insight about the completed trips. User can delete the trip and for getting the 	details about any specific trip they can get by clicking on it.
2. Blog Statistics : A user can get the complete insight about the blogs written . User can get the details about any specific blog by clicking it.User can also write a bolg and delete a blog.
3. Flag Collection : For making the Travel Bae unique, this page is will represent all the collection of flags collected by the user
4. Planned Trips :A user can get the complete insight about the upcoming trips. User can delete the trip as well as if completed then mark it as 					completed trip. For getting the details about any specific trip they can get by clicking on it.
```

### Frontend development (React)

#### Front-end files:

```
- client\src\pages\UserDashboardPlan.jsx: This Page is responsible for the api calls with backend and also for the displaying, fetching, updating the trip details.
- client\src\pages\UserDashboardFlag.jsx: This file is responsible for showing all the flags collected information
- client\src\pages\UserDashboardBlog.jsx: This file is responsible for showing all the blogs written by the user
- client\src\components\SideBar\SideBarMenu.js: This component is the sidebar component of the user dashboard
- client\src\assets\flags: All the assests for my featues is stored at this location
- client\src\containers\CardCont\mockData.js: Dummy testing data was used from this location for the userdashboard feature development.
```

### API development (Node.js)

#### Backend files:

```
- server/data/planTripDB/index.js: This file is used for User Dashboard service mongoose REST calls.
- server/middleware/planTripService/index.js: This file is used as a middleware for mongoose and nodeJS.
- server/models/planTripModel/index.js: This file is used for defining mongoose schema
- server/routers/planTripRouter/index.js: This file is used for routing the frontend calls to backend
```

## Sources used

- Cors
  https://www.npmjs.com/package/cors
- DotEnv
  https://www.npmjs.com/package/dotenv
- Express
  https://www.npmjs.com/package/express
- Nodemon
  https://www.npmjs.com/search?q=nodemon
- Mongoose
  https://www.npmjs.com/package/mongoose
- Mongoose-unique-validator
  https://www.npmjs.com/package/mongoose-unique-validator
- MongoDB
  https://www.npmjs.com/package/mongodb
