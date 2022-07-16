# Assignment 3 | Individual Submission 

## Project Group

Group Number - 15

## Prerequisites for heroku application

- Install and enable this [CORS extension](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en) to run the project on Heroku.

## Author of the assignment

- Name: Smily Ms
- Date Created: July 15, 2022
- Last Modification Date: July 15, 2022
- Banner ID: B00871427
- Course: CSCI 5709 - Advanced Topics in Web Development
- Git Project Repository - https://git.cs.dal.ca/maurya/csci-5709-project
- Git Project Branch - Smily: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/smily
- Heroku deployment URL for application: https://travel-bae.herokuapp.com/
- Heroku deployment URL for application: https://travel-bae.herokuapp.com/destinations

## Professor

[Shehzeen Huda](sh655624@dal.ca)

## Teaching Assistant

[Gurleen Saluja](gr997570@dal.ca)

## Author of the assignment

- [Smily Ms](smily@dal.ca) - (Maintainer)

## Authors of the project

- [Smily Ms](smily@dal.ca)

- [Hrishita Mavani](hr637632@dal.ca)

- [Nishit Mistry](nishit.mistry@dal.ca)

- [Smriti Mishra](sm689498@dal.ca)

- [Trushita Maurya](trushita.maurya@dal.ca)

- [Sangramsinh More](sangramsingh.more@dal.ca)

### Individual Branches for each Team Member -

- Git Project Individual Branch - Smily Ms: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/smily
- Git Project Individual Branch - Hrishita Mavani: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/hrishita-mavani
- Git Project Individual Branch - Nishit Mistry: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/nishit-mistry
- Git Project Individual Branch - Trushita Maurya: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/trushita-maurya
- Git Project Individual Branch - Sangramsinh More: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/sangramsinh-more
- Git Project Individual Branch - Smriti Mishra: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/smriti-mishra

## Feature: Destination Information System

### Tasks:

1. Display Destinations : A user can view the list of all the destinations.
2. Filter Destinations : A user can use the filter from the list of destinations based on country.
3. Search Destination : A user can search by city name from the list of destinations.
4. Pagination : The resultset of destinations is paginated (5 destinations in 1 page).


### Front-end development framework: 

- [ReactJS](https://reactjs.org/) - ReactJS Library Used
- [MaterialUI](https://mui.com/) - Material UI Library Used for Styling

#### Front-end files:

- client/src/pages/Destinations.js: This is the main page that displays the list of destinations. The page is bound to APIs with which the user can search for a particualr destination, filter the destinations based on country, and use pagination to view more destinations.
- client/src/pages/Destination.js: This page contains the information of the selected destination along with the blogs (if any) for the selected destination.
- client/src/components/DestinationCard/index.js: This component file contains the elemnts of the destination card component which lists down the destinations.
- client/src/components/Filter/index.js: This component file contains the elements and logic to call the filter API which displays the results based on country selected.
- client/src/components/NoDataFound/index.js: This is a common component for the application that is displayed when the search/filter results are empty.
- client/src/components/Search/index.js: This component file contains the elements and logic for displaying detinations based on search text.


#### Backend files:
- server/data/destinationDB/index.js: This file is used for destination service mongoose REST calls.
- server/middleware/destinationService/index.js: This file is used as a middleware for mongoose and nodeJS.
- server/models/destinationModel/index.js: This file is used for defining mongoose schema model
- server/routers/destinationRouter/index.js: This file is used for routing the frontend calls to backend

### Sources used

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

### Prerequisites for local

To have a local copy of this lab running on your local machine, you will first need to install the following software / libraries / plug-ins

- [Node.js](https://nodejs.org/en/download/) - Framework used to provide npm as package manager for installing packages.

### Installing Steps

```
1. Install Node.js
2. Verify installation by running node -v and npm -v on the terminal.
3. Install the heroku package using "npm install heroku".
```

### Available Scripts

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

### Built With

- [Node.js](https://nodejs.org/en/download/)
- [Heroku](https://id.heroku.com/login) - Platform for deploying web applications
- [ReactJS](https://reactjs.org/) - ReactJS Library Used
- [MaterialUI](https://mui.com/) - Material UI Library Used for Styling
- [Node.js](https://nodejs.org/en/download/)
