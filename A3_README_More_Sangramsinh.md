# Assignment 3

Name: Sangramsinh More
Banner ID: B00903585
Group 15

## Team Members:

- Sangramsinh More
- Hrishita Mavani
- Smily MS
- Trushita Maurya
- Nishit Mistry
- Smriti Mishra

Deployment URL: https://travel-bae.herokuapp.com/

Feature Deployment URL: https://travel-bae.herokuapp.com/accommodation

Branch Name: sangramsinh-more

Feature: Accommodation

Tasks:

1. Search Accommoadtions : A user can search for a specific accommodations using keywords
2. Filter Accommoadtion : A user can filter the accommodations by rating
3. Sort Accommodation : A user can sort accommodation based on price
4. Pagination : The Resultset of accommodation is paginated.

- Gitlab URL: https://git.cs.dal.ca/maurya/csci-5709-project

React for frontend development

Front-end files:
- client/src/pages/AccommodationListPage.js: This Page is responsible for the api calls with backend and also for the sorting, filtering, pagination and searching tasks.
- client/src/components/AccommodationSearch/index.js: This file is responsible for seaching accommodations by keywords for city name and for checkin checkout dates
- client/src/components/AccommodationSortDropdown/index.js: This file is responsible for soring accommodation by price
- client/src/components/HorizontalCard/index.js: This component is responsible for displaying the accommoadtion and activity information in a card form, this component is reused for rendering individual accommodations and activities.
- client/src/containers/UsePagination/index.js: This component is responsible for pagination of the accommodation cards

Node.js backend for API development

Backend files:
- server/data/accommodationDB/index.js: This file is used for Accommoadation service mongoose REST calls.
- server/middleware/accommodationService/index.js: This file is used as a middleware for mongoose and nodeJS.
- server/models/accommodationModel/index.js: This file is used for defining mongoose schema
- server/routers/accommodationRouter/index.js: This file is used for routing the frontend calls to backend

## Sources used

- Cors
  https://www.npmjs.com/package/cors
- DotEnv
  https://www.npmjs.com/package/dotenv
- Express
  https://www.npmjs.com/package/express
- MongoDB
  https://www.npmjs.com/package/mongodb
- Mongoose
  https://www.npmjs.com/package/mongoose
- Mongoose-unique-validator
  https://www.npmjs.com/package/mongoose-unique-validator
- Nodemon
  https://www.npmjs.com/search?q=nodemon

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
