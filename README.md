# LinkUp

LinkUp is a social media app that allows you to connect with people who share similar interests. It is a MERN stack application using React, Express, Node, and MongoDB.

### Getting Started

To get started, make sure you have MongoDB installed on your system. Then clone this repo and run `npm install` to install the dependencies.

To run the application, you will need to create a `.env` file in the root directory of the project and set the `MONGO_URI` variable to your MongoDB connection string.

Once you have set up your environment, you can start the application by running `npm run start-dev` and it will be running on `http://localhost:3000`.

### Features

- Users can sign up and log in to the app
- Users can create and edit profiles, including their interests
- Users can view and connect with other users based on their interests

### Tech Stack

- React
- Node.js
- React Router
- Firebase (Authentication)
- Firestore

### Screenshots

<|cursor|>


![Signup page](/screenshots/signup.png?raw=true "Signup page")
![Profile page](/screenshots/profile.png?raw=true "Profile page")
![Matches page](/screenshots/matches.png?raw=true "Matches page")


### About

LinkUp is a social media app that allows users to connect with people who share similar interests. It was created as a project for the University of Waterloo's Web Development course in the Winter 2023 semester. The app was built using the MERN stack (MongoDB, Express, React, Node.js).

### User Stories

The main user stories for this app were:

- As a user, I want to be able to sign up and create a profile so that I can connect with other users.
- As a user, I want to be able to view and edit my profile information so that I can keep my information up to date.
- As a user, I want to be able to search for and connect with other users based on their interests so that I can find people to chat with.

### Technical Requirements

The app was built using the following technologies:

- MongoDB for the database
- Express for the API
- React for the frontend
- Node.js for the server
- React Router for client-side routing
- Mongoose for interacting with MongoDB from Node.js
- Firebase for user authentication and hosting

### Challenges

One of the biggest challenges for this project was getting users to connect with each other. We had a hard time coming up with a way to match users based on their interests. In the end, we decided to use a scoring system where each user is given a score based on how many other users they have in common with. This system works well, but it can be slow when there are many users in the database.

Another challenge was dealing with loading states. When the app loads, there is a lot of data that needs to be fetched from the server, which can take a few seconds. To deal with this, we used React Suspense to show a loading indicator while the data is being fetched.

Overall, this project was a lot of fun and taught me a lot about building a full-stack web application.

### What's Next?

I would like to add more features to LinkUp in the future. Some ideas include:

- Improving the search algorithm to make it more accurate
- Adding more user information to profiles, such as a profile picture or location
- Adding the ability to send direct messages between users
- Adding more visual styling to the app
