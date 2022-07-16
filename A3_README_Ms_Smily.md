# Assignment 3

- Name: Smily
- Banner ID: B00871427
- Group 15

## Team Members:

- Hrishita Mavani
- Nishit Mistry
- Sangramsinh More
- Smily MS
- Smriti Mishra
- Trushita Maurya

## Project Repository, Deployment URL, Individual Branch

- Deployment URL: https://travel-bae.herokuapp.com/
- Feature URL: https://travel-bae.herokuapp.com/destinations

- Gitlab URL: https://git.cs.dal.ca/maurya/csci-5709-project
- Gitlab URL (individual branch): https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/smily

## Feature: Destination Information System

### Tasks:

1. Display Destinations : A user can view the list of all the destinations.
2. Filter Destinations : A user can use the filter from the list of destinations based on country.
3. Search Destination : A user can search by city name from the list of destinations.
4. Pagination : The resultset of destinations is paginated (5 destinations in 1 page).


### Front-end development framework: 

- [ReactJS](https://reactjs.org/) - ReactJS Library Used
- [MaterialUI](https://mui.com/) - Material UI Library Used for Styling

Front-end files:

- client/src/pages/Destinations.js: This is the main page that displays the list of destinations. The page is bound to APIs with which the user can search for a particualr destination, filter the destinations based on country, and use pagination to view more destinations.
- client/src/pages/Destination.js: This page contains the information of the selected destination along with the blogs (if any) for the selected destination.
- client/src/components/DestinationCard/index.js: This component file contains the elemnts of the destination card component which lists down the destinations.
- client/src/components/Filter/index.js: This component file contains the elements and logic to call the filter API which displays the results based on country selected.
- client/src/components/NoDataFound/index.js: This is a common component for the application that is displayed when the search/filter results are empty.
- client/src/components/Search/index.js: This component file contains the elements and logic for displaying detinations based on search text.

Node.js backend for API development

Backend files:
- server/data/destinationDB/index.js: This file is used for destination service mongoose REST calls.
- server/middleware/destinationService/index.js: This file is used as a middleware for mongoose and nodeJS.
- server/models/destinationModel/index.js: This file is used for defining mongoose schema model
- server/routers/destinationRouter/index.js: This file is used for routing the frontend calls to backend

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
- [ReactJS](https://reactjs.org/) - ReactJS Library Used
- [MaterialUI](https://mui.com/) - Material UI Library Used for Styling
- [Node.js](https://nodejs.org/en/download/)
