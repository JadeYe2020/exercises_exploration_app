# Workouts Exploration App

[screenshots of the 2 pages]

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How I worked on this project
My goal was to build a web application that everyone can benefit from, using some awesome APIs.
- I built this app based on JavaScript Mastery's gym app design: [Screenshot of designs]
- I refactored the stateful logic and API data-fetching process to minimize the number of requests, slowing down the consumption of monthly free quota of API calls while speeding up the application.[Link to example code on GitHub]

## How to navigate this project
- The application fetches data from the ExerciseDB API and the Youtube Search And Download API: Examples for the request [link to code on
GitHub]
- Somewhat complex stateful logic: [Link to example code on GitHub]
- Responsive CSS using Material UI's system props: [Link to example code on GitHub]

## Why I built the project this way
- Material UI is an open-source React component library that implements Google's Material Design. It's a collection of prebuilt components that are ready for use in production right out of the box. It saved me some time on adjusting the styles and layouts.
- My plan is to become a full-stack developer eventually. But for the beginning I focus on the frontend. That's why I decided to use existing APIs rather than create a custom server. I have basic backend knowledge as well.

## If I had more time I would change this
- Implement the section on the Exercise Detail page to show similar exercises so that users don't need to go back to Home page for searching more related exercises.
- Add end-to-end tests with Cypress.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
