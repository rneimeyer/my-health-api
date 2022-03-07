# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Planning and Approval | Incomplete
|Day 1| Set up backend files and structure | Incomplete
|Day 2| Set up frontend files and structure | Incomplete
|Day 2| Test and deploy backend | Incomplete
|Day 3| CSS Styling and Responsive Design | Incomplete
|Day 4| MVP & Bug Fixes & Adding Seed Data | Incomplete
|Day 4| Final Touches and deploying frontend | Incomplete
|Day 5| Present | Incomplete


## Project Description

My Health App is a fitness and wellness tracker where users can input their daily acivities and meals to work towards their goals. Users can also add friends and see their weekly stats. This is a health app for users who want to focus on awareness of their health journey.

This app will include a backend database using MongoDB and Express.js and a frontend web application using Node.js and React.

## Team Responsibilities

Overall we want to work on this project as a team- step by step. We will split up Models/Compenents when working on the frontend or backend. But we will work on the same part of the project together and not split up.

Lauren- Create a model, work on CR routes, and one component
Anju- Create a model, work on CR routes, and one component
Rebecca- Create a model, work on UD routes, and one component
Kae- Create a model, work on UD routes, and one component

## User Stories

The user of our app will check in daily- preferably at the end of their day- to submit their activities, meals, and weight for the day. At the end of the week they will check their My Health Page to see aggragated data and how they are tracking to their goals. This app is a positive part of their day and they feel accomplished submitting their good decisions. Keeping a journal of your day to day activity and meals is a great way to reinforce the positive impacts of a healthy lifestyle.

## Wireframes   

- [Mobile](https://drive.google.com/file/d/125AXcBq3xj1AYb3lJM9dB7VIFP3uNDe_/view?usp=sharing)
- [Desktop-1](https://drive.google.com/file/d/1gLPPjVDb1aQwyd-4aAwrmOsQevOOMare/view?usp=sharing)
- [Desktop-2](https://drive.google.com/file/d/1YA1TPEQ6BQTE6yx1dnFqGhxMApwEcMx_/view?usp=sharing)


## Time/Priority Matrix 

[Link](https://drive.google.com/file/d/1KQG9TzShYeTfTY-nrRmMcrmf_DIRg5dd/view?usp=sharing)


### MVP/PostMVP  

#### MVP (examples)

- 5 models for our data (User, Activity, Food, Mood, Daily Weight)
- CRUD functionality (Add User, View all Activities, Edit Daily Tracker, Delete Daily Tracker)
- Have 4 Routes and components on frontend (Home, Daily Tracker, My Health Page, About Team)
- Fetch data from our backend API
- Responsive design from mobile to desktop
- Use bootstrap for design (add progress bar)
- Fully Deployed frontend and backend

#### PostMVP 

- Add a 6th model to track friends
- Add a 5th route to see all friends
- Add page with suggested activities or meals
- Login authentication
- Adding animations

## Routing Table

Update the below routing table with the routes

| **URL**     | **HTTP Verb** | **Action** | **Description**             |
| ----------- | ------------- | -------------- | ---------------------- |
| /newUser     | POST           |    create           | add new user   |
| /daily/:type    | POST          |    create          | add activity/meal/mood/weight    |
| /user/:email | GET       |    show            | show all of this users data    |
| /daily/:day/:id | PUT         |    update            | edit daily input |
| /daily/:id | DELETE        |    delete           | delete a daily input |

## Functional Components

| Component | Description | 
| --- | :---: | 
| Home | Landing Page with Add New User Button |
| Daily Tracker | Form for user input daily | 
| My Health Page | Include weekly and daily views of data | 
| My Health Page- By Week | Progress bars displaying data | 
| My Health Page- By Day | Individual cards with edit and delete buttons | 
| About Team | Photos and team description | 
| Header | Logo and Menu | 
| Footer | Copyright tag and link to github |

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Installing and Setup for backend | H | 1hr | hr |
| Models and Schemas | H | 2hr | hr |
| CRUD Routes and testing on Postman | H | 3hr | hr |  
| Deploying backend | H | 1.5hr|  hr | 
| Creating React App | H | 1hr | hr|
| Add Routes | H | 1hrs|  hr | 
| Create Components  | H | 3hrs|  hr | 
| Fetch and test data on frontend | H | 3hr |  hr |
| Responsive Design | H | 3hr | hr |
| CSS and Bootstrap | L | 3hr |  hr |
| Deploy frontend | L | 1hr |  hr |
| Total | H | 22.5hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Friends Data Model | L | 1hr | hr |
| Freinds Route and Compoment | L | 3hr | hr |
| Suggestion Page | M | 4hr | hr |
| Login Authentication | H | 4hr | hr |
| Animations | H | 4hr | hr |
| Total | H | 16hrs| hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object