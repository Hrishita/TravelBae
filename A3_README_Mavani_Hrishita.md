<!--- This README.md file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use --->

# Assignment 3 | Individual Submission

## Project Group

Group Number - 15

## Project - Travel Bae

TravelBae is an online travel website that helps customers plan better trips to their favourite destinations. The application keeps track of the best destinations, hotels, and modes of transportation. Other features on the website include activities to do, itinerary management, bucket lists, and much more.

## Author of the assignment

- _Name_: Hrishita Mavani
- _Date Created_: 15 July 2022
- _Last Modification Date_: 15 July 2022
- _Student ID_: B00901658
- _Course_: CSCI 5709 - Advanced Topics in Web Development
- _Git Course Repository_: https://git.cs.dal.ca/maurya/csci-5709-project
- \_Git Project Branch - Hrishita Mavani: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/hrishita-mavani
- _Heroku deployment URL for application_: https://travel-bae.herokuapp.com/

## Professor

---

[Shehzeen Huda](sh655624@dal.ca)

## Teaching Assistant

---

[Gurleen Saluja](gr997570@dal.ca)

## Author of the assignment

---

- [Hrishita Mavani](hr638732@dal.ca@dal.ca) - (Maintainer)

## Authors of the project

---

- [Hrishita Mavani](hr637632@dal.ca)

- [Nishit Mistry](nishit.mistry@dal.ca)

- [Smily](smily@dal.ca)

- [Smriti Mishra](sm689498@dal.ca)

- [Trushita Maurya](trushita.maurya@dal.ca)

- [Sangramsinh More](sangramsingh.more@dal.ca)

### Individual Branches for each Team Member -

- _Git Project Individual Branch - Hrishita Mavani_: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/hrishita-mavani
- _Git Project Individual Branch - Nishit Mistry_: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/nishit-mistry
- _Git Project Individual Branch - Trushita Maurya_: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/trushita-maurya
- _Git Project Individual Branch - Sangramsinh More_: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/sangramsinh-more
- _Git Project Individual Branch - Smriti Mishra_: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/smriti-mishra
- _Git Project Individual Branch - Smily_: https://git.cs.dal.ca/maurya/csci-5709-project/-/tree/smily

---

## Feature: Blog Management

As a part of this feature user can create blogs for different travel destinations, read blogs and add comment to the blog. They can also delete blogs written by them.

### Tasks

- Write Blog - User can write blog - add title, content, image and destination tag.
- View Blog - User can view list of blogs and read a specific blog.
- Delete Blog - User can delete thier own blog.
- Comment - User can add comment to blogs.

### Task URL

- [Write Blog][https://travel-bae.herokuapp.com/write-blog](https://travel-bae.herokuapp.com/write-blog)
- [View Blog][https://travel-bae.herokuapp.com/view-blogs/:id](https://travel-bae.herokuapp.com/view-blogs)
- [Delete Blog][https://travel-bae.herokuapp.com/userdashboard-blogs](https://travel-bae.herokuapp.com/userdashboard-blogs)
- [Comment][https://travel-bae.herokuapp.com/view-blogs/:id](https://travel-bae.herokuapp.com/view-blogs/:id)
- [View Blog List][https://travel-bae.herokuapp.com/blog-list](https://travel-bae.herokuapp.com/blog-list)

# Getting Started

### Preqrequisites

- To run this assignment on your local machine, you need the following software / libraries installed.

```
NodeJS
npm - Node Package Manager
```

- Install and enable this [CORS extension](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en) to run the project on Heroku.

- git

Clone the repo, and run the following commands for installing the dependencies.

### Installing

```
npm install
```

The following command will run the application on your localhost.

## Steps to follow to run the app

1. Clone git repo using `git clone https://git.cs.dal.ca/maurya/csci-5709-project.git`

2. `cd client`

3. Install all dependencies using `npm install`

4. Start application in dev environment using `npm run start`

5. `cd ..`

6. `cd server`

7. Install all dependencies using `npm install`

8. Start application in dev environment using `npm run start`

## A step by step process to deploy the app on heroku

1. Install NPM packages. `npm install`

2. Authenticate heroku account via heroku CLI. `heroku login`

3. Create a new app on heroku. `heroku apps:create project-name`

4. Add heroku remote to the project. `heroku git:remote -a project-name`

5. Push the code on heroku. `git push heroku master`

## Built With

- [ReactJS](https://reactjs.org/) - ReactJS Library Used
- [MaterialUI](https://mui.com/) - Material UI Library Used for Styling
- [NodeJS](https://nodejs.org/en/) - NodeJS Used as Back-End (Server Side) Framework
- [ExpressJS](https://expressjs.com/) - ExpressJS is used as a middleware for NodeJS to handle requests and responses and manage server and routes.
- [Heroku](https://www.heroku.com/) - Heroku Used for Deploying Code
- [MongoDB](https://www.mongodb.com/) - MongoDB used to store data.

## Files and Folders Created for Completing the Feature

**Folder created -**

- client\src\pages\WriteBlog
- client\src\pages\ViewBlog
- client\src\pages\BlogList
- client\src\components\Modal
- server\routers\blogRouter
- server\middleware\blogService
- server\data\blogDB
- server\models\blogModel

**Files created -**

- client\src\pages\WriteBlog.js
- client\src\pages\ViewBlog.js
- client\src\pages\BlogList.js
- client\src\components\Modal\index.js
- server\routers\blogRouter\index.js
- server\data\blogDB\index.js
- server\middleware\blogService\index.js
- server\models\blogModel\index.js

**Folder Structure for the project -**

- The code is divided into `client` and `server` to seperate frontend and backend code.
- The frontend code is divided into `components` and `container` structure.
- `components` holds the front-end UI for our webite.
- `container` holds the business logic for the code.
- The package.json consists of all the libraries required to be installed.
- The back-end code is divide into `models`, `middleware`, `data`, and `routers`.
- The `models` consists of the schema for the database.
- The `data` consists of actual operations performed on database.
- The `middleware` consists of serivces created for API calls.
- The `routers` will route the API calls.

## Code Integration

---

- Each member of the group have developed thier frature and deployed thier code into their individual branch.
- After pushing the code to individual branch, each member raised Merge request to develop branch.
- The PR was reviewd by a team member and then merged with develop.
- The code was then merged to Main branch after testing.
- The code was then deployed on [Heroku](heroku.com) after integrating and tested.
- The deployed code was tested again for bugs.
- For backend we have created REST APIs.
- We have integrated REST APIs with frontend using AXIOS.

## APIs Created

- [GET](/bg/fetchAllBlogs) - To get all blogs.
  
- [GET](/bg/fetchBlogByDestination/) - To get a specific blog by destination.
    
- [DELETE](/bg/deleteBlogByID) - To delete blog.
  
- [GET](/bg/fetchBlogById) - To get blog by id.
  
- [POST](/bg/addComment) - To add comment to blog.
  
- [GET](/bg/fetchBlogComments) - To get comments of blog.
  
- [POST](/bg/createBlog) - To add blog.

## Tools and Software Used

- [NPM](https://www.npmjs.com/) - Nodejs package manager

- [Heroku](https://dashboard.heroku.com/login) - Cloud platform to deploy application

- [VSCode](https://code.visualstudio.com/) - IDE used for development

- [Gitlab](https://git.cs.dal.ca/) - Repository and version control system

- [Postman](https://www.postman.com/) - API testing software

- [Mongo DB](https://www.mongodb.com/) - Tool used to check the collections and data on the database

# Sources Used

[1] "The W3C Markup Validation Service," _Validator.w3.org_ [Online]. Available: https://validator.w3.org/. [Accessed: July 15, 2022].

- Used to check if the deployed app is W3C compliant.

[2] "Cloud Application Platform | Heroku," _Heroku.com_ [Online]. Available: https://www.heroku.com/. [Accessed: July 15, 2022].

- Used Heroku to deploy the application.

[3] "Getting Started – React", Reactjs.org, 2022. [Online]. Available: https://reactjs.org/docs/getting-started.html. [Accessed: July 15- 2022]

- Used React documentation to to learn React.

[4] "Installation - Material UI", Mui.com, 2022. [Online]. Available: https://mui.com/material-ui/getting-started/installation/. [Accessed: July 15- 2022]

- Used Material UI documentation to learn about different material UI components.

[5] "React Modal component - Material UI", Mui.com, 2022. [Online]. Available: https://mui.com/material-ui/react-modal/. [Accessed: July 15- 2022].

Code Used -

```
    <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'>
            <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
                <div className='p-4 card shadow d-flex flex-column justify-content-start align-items-start' style={{width: '50vw'}}>
                    <p>
                        {text}
                    </p>
                    <button className='btn btn-primary' onClick={handleClose}>Ok</button>
                </div>
            </div>
    </Modal>
```

Code Modified -

File - Modal.js

```
    div className='p-4 card shadow d-flex flex-column justify-content-start align-items-start' style={{width: '50vw'}}>
             <p>
                {text}
            </p>
      </div>
```

- The above code is used to implement Modals.
