# Itinerary Management

- _Name_: Nishit Mistry (B00911296)
- _Date Created_: 13 July 2022
- _Last Modification Date_: 13 July 2022
- _Git Course Repository_: https://git.cs.dal.ca/nmistry/csci5709
- _Git Project Branch - Nishit Mistry_: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/nishit-mistry
- _Heroku deployment URL for application_: https://travel-bae.herokuapp.com/

## Authors

- [Nishit Mistry](nishit.mistry@dal.ca) - (Maintainer)

# Getting Started

### Preqrequisites

To run this assignment on your local machine, you need the following software / libraries installed.

```
NodeJS
npm - Node Package Manager
```

Clone the repo, and run the following commands for installing the dependencies.

### Installing

```
npm install
```

The following command will run the application on your localhost.

### Starting the application

```
npm start
```

## Built With

- [ReactJS](https://reactjs.org/) - ReactJS Library Used
- [MaterialUI](https://mui.com/) - Material UI Library Used for Styling
- [NodeJS](https://nodejs.org/en/) - NodeJS Used as Back-End (Server Side) Framework
- [ExpressJS](https://expressjs.com/) - ExpressJS Used for Routing Purposes
- [Heroku](https://www.heroku.com/) - Heroku Used for Deploying Code

## Feature Developed and Tasks Completed

Itinerary Management -

- Weather Integration.
- Search Itinerary.
- Itinerary Recommendation.
- Filter Itinerary.

## Files and Folders Created for Completing the Feature

**Folder created -**

- client\src\pages\Itinerary
- server\routers\dayItineraryRouter
- server\routers\itineraryRouter
- server\routers\specificItineraryRouter
- server\middleware\dayItineraryService
- server\middleware\itineraryService
- server\middleware\specificItineraryService
- server\data\dayItineraryDB
- server\data\itineraryDB
- server\data\specificItineraryDB
- server\models\dayItineraryModel
- server\models\itineraryModel
- server\models\specificItineraryModel

**Files created -**

- client\src\pages\Itinerary\CityItineraryPage.js
- client\src\pages\Itinerary\DayItineraryPage.js
- client\src\pages\Itinerary\ItineraryPage.js
- client\src\pages\Itinerary\FilterMockData.js
- client\src\containers\CardCont\index.js
- client\src\containers\DescriptionList\index.js
- client\src\components\Card\index.js
- client\src\components\DescriptionList\index.js
- client\src\config\index.js
- server\routers\dayItineraryRouter\index.js
- server\routers\itineraryRouter\index.js
- server\routers\specificItineraryRouter\index.js
- server\middleware\dayItineraryService\index.js
- server\middleware\itineraryService\index.js
- server\middleware\specificItineraryService\index.js
- server\data\dayItineraryDB\index.js
- server\data\itineraryDB\index.js
- server\data\specificItineraryDB\index.js
- server\models\dayItineraryModel\index.js
- server\models\itineraryModel\index.js
- server\models\specificItineraryModel\index.js

**Folder Structure Explanation -**

- Divided the code into "client" and "server" for good code practices.
- The package.json consists of all the libraries required to be installed.
- Containers contain the business logic for the code and components contain the front-end UI for the website.
- Routers will route the API call to the different URLs.
- Models consists of the MongoDB schema, and middleware consists of the services to be created for an API call.

For Integration, pushed small updates to my Git branch and raised a Merge Request (MR) to the develop branch.
If there were any conflicts, resolved those conflicts locally and pushed the updates to the MR again.

## Boilerplate Code

- Used "npx create-react-app" command to generate boilerplate code for ReactJS.

# Sources Used

[1]

Code Used -

```

```

Code Modified -

Line number:

File:

```

```

- The code was implemented by []().
- []()'s Code was used because it helped to generate random unique IDs.
- []()'s Code was modified by [Nishit Mistry](nishit.mistry@dal.ca).

[3] "Cloud Application Platform | Heroku," _Heroku.com_ [Online]. Available: https://www.heroku.com/. [Accessed: June 24, 2022].

- Used Heroku to deploy the application.

## Project Group

Group Number - 15

### Individual Branches for each Team Member -

- _Git Project Individual Branch - Nishit Mistry_: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/nishit-mistry
- _Git Project Individual Branch - Trushita Maurya_: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/trushita-maurya
- _Git Project Individual Branch - Sangramsinh More_: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/sangramsinh-more
- _Git Project Individual Branch - Hrishita Mavani_: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/hrishita-mavani
- _Git Project Individual Branch - Smriti Mishra_: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/smriti-mishra
- _Git Project Individual Branch - Smily_: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/smily
