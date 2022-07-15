# Assignment 3 - Itinerary Management

- _Name_: Nishit Mistry (B00911296)
- _Date Created_: 13 July 2022
- _Last Modification Date_: 15 July 2022
- _Git Course Repository_: https://git.cs.dal.ca/nmistry/csci5709
- _Git Project Branch - Nishit Mistry_: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/nishit-mistry
- _Heroku deployment URL for application_: https://travel-bae.herokuapp.com/
- _Pages Developed for Assignment_:
  - https://travel-bae.herokuapp.com/itinerary
  - https://travel-bae.herokuapp.com/cityItinerary (Must select or search a city from the first page)
  - https://travel-bae.herokuapp.com/dayItinerary (Must click on an itinerary from the cityItinerary Page)

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

## Images Used

Used images from http://search.creativecommons.org/.

## Feature Developed and Tasks Completed

Itinerary Management -

- Weather Integration.
- Search Itinerary.
- Itinerary Recommendation.
- Filter Itinerary.

## Files and Folders Created for Completing the Feature

**Folders created -**

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
- Data consists of the logic required to filter, fetch, query, search the MongoDB database.

For Integration, pushed small updates to my Git branch and raised a Merge Request (MR) to the develop branch.
If there were any conflicts, resolved those conflicts locally and pushed the updates to the branch again.

## Boilerplate Code

- Used "npx create-react-app" command to generate boilerplate code for ReactJS.

# Sources Used

[1] "Use Moment.js to convert Unix epoch time to human readable time," _Stack Overflow_ [Online]. Available: https://stackoverflow.com/questions/40752287/use-moment-js-to-convert-unix-epoch-time-to-human-readable-time. [Accessed: July 10, 2022].

Code Used -

```
moment.unix(yourUnixEpochTime).format('dddd, MMMM Do, YYYY h:mm:ss A')
```

Code Modified -

Line number: 60

File: client\src\pages\Itinerary\DayItineraryPage.js

```
formattedDate: moment.unix(item.dt).format("MMM DD YYYY")
```

- The code was implemented by [manonthemat](https://stackoverflow.com/users/2942471/manonthemat).
- [manonthemat](https://stackoverflow.com/users/2942471/manonthemat)'s Code was used because it helped to convert the unix epoch time to human readable time.
- [manonthemat](https://stackoverflow.com/users/2942471/manonthemat)'s Code was modified by [Nishit Mistry](nishit.mistry@dal.ca).

[2] "Get a Unique List of Objects in an Array of Object in JavaScript," _Yagisanatode.com_ [Online]. Available: https://yagisanatode.com/2021/07/03/get-a-unique-list-of-objects-in-an-array-of-object-in-javascript/. [Accessed: July 10, 2022].

Code Used -

```
let uniqueObjArray = [
    ...new Map(myObjArray.map((item) => [item["name"], item])).values(),
];
```

Code Modified -

Line number: 64

File: client\src\pages\Itinerary\DayItineraryPage.js

```
let uniqueDates = [
    ...new Map(
      dates && dates.map((item) => [item["formattedDate"], item])
    ).values(),
  ];
```

- The code was implemented by [Yagisanatode](https://yagisanatode.com/).
- [Yagisanatode](https://yagisanatode.com/)'s Code was used because it helped to find unique values from an array of object.
- [Yagisanatode](https://yagisanatode.com/)'s Code was modified by [Nishit Mistry](nishit.mistry@dal.ca).

[3] "MongoDB: Is it possible to make a case-insensitive query?," _Stack Overflow_ [Online]. Available: https://stackoverflow.com/questions/1863399/mongodb-is-it-possible-to-make-a-case-insensitive-query. [Accessed: July 11, 2022].

Code Used -

```
mycolumn.column = {$regex: new RegExp(column), $options: "i"};
```

Code Modified -

Line number: 19

File: server\data\itineraryDB\index.js

```
itinerary_city: { $regex: req.body.itinerary_city, $options: "i" }
```

- The code was implemented by [Ankur Soni](https://stackoverflow.com/users/3296607/ankur-soni).
- [Ankur Soni](https://stackoverflow.com/users/3296607/ankur-soni)'s Code was used because it helped to ignore the sentence case while searching from MongoDB.
- [Ankur Soni](https://stackoverflow.com/users/3296607/ankur-soni)'s Code was modified by [Nishit Mistry](nishit.mistry@dal.ca).

[4] "Mongoose query with array parameter," _Stack Overflow_ [Online]. Available: https://stackoverflow.com/questions/26985908/mongoose-query-with-array-parameter. [Accessed: July 11, 2022].

Code Used -

```
var query = PUser.find({'userID': {$in:array}});
```

Code Modified -

Line number: 29

File: server\data\specificItineraryDB\index.js

```
{
      $and: [
        { tags: { $in: req.body.tags } },
        {
          itinerary_place: { $regex: req.body.itinerary_place, $options: "i" },
        },
      ],
    },
```

- The code was implemented by [BatScream](https://stackoverflow.com/users/1617024/batscream).
- [BatScream](https://stackoverflow.com/users/1617024/batscream)'s Code was used because it helped to query the MongoDB with an array parameter.
- [BatScream](https://stackoverflow.com/users/1617024/batscream)'s Code was modified by [Nishit Mistry](nishit.mistry@dal.ca).

[5] "Material UI position Box element to bottom of parent," _Stack Overflow_ [Online]. Available: https://stackoverflow.com/questions/67404398/material-ui-position-box-element-to-bottom-of-parent. [Accessed: July 12, 2022].

Code Used -

```
<Box my={1} display="flex" justifyContent="center">
</Box>
```

- The code was implemented by [SePeF](https://stackoverflow.com/users/9299798/sepef).
- [SePeF](https://stackoverflow.com/users/9299798/sepef)'s Code was used because it helped to position the box in the center using flex.
- [SePeF](https://stackoverflow.com/users/9299798/sepef)'s Code was modified by [Nishit Mistry](nishit.mistry@dal.ca).

[6] "Does Material UI have an Image component?," _Stack Overflow_ [Online]. Available: https://stackoverflow.com/questions/61263669/does-material-ui-have-an-image-component. [Accessed: July 13, 2022].

Author - [Peter Gerdes](https://stackoverflow.com/users/351049/peter-gerdes)

Code Used -

```
<Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
```

- The code was implemented by [Peter Gerdes](https://stackoverflow.com/users/351049/peter-gerdes).
- [Peter Gerdes](https://stackoverflow.com/users/351049/peter-gerdes)'s Code was used because it helped in attaching images to the website using Box from Material UI.
- [Peter Gerdes](https://stackoverflow.com/users/351049/peter-gerdes)'s Code was modified by [Nishit Mistry](nishit.mistry@dal.ca).

[7] "The W3C Markup Validation Service," _Validator.w3.org_ [Online]. Available: https://validator.w3.org/. [Accessed: July 15, 2022].

- Used the W3C Validator website to check the validation for the React App deployed on Heroku.

[8] "Cloud Application Platform | Heroku," _Heroku.com_ [Online]. Available: https://www.heroku.com/. [Accessed: July 15, 2022].

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
